(function()
{

	'use strict';

jEli
.jModule('eliTest',['jEli.web.route'])
.jConfig(["jDebugProvider",jDbuggerFn])
.jController('baseCtrl',["$scope","$webState","$rootModel","$sessionStorage",baseCtrFN])
.jElement('handleScroll',['$window',handleScrollFn]);

//jDebuggerFn
function jDbuggerFn(jDebugProvider)
{
	jDebugProvider.$disableDebugMode = false;
	//$templateCache.$set('/ui/app/directive/temp.html','<solo-test></solo-test>');	
}


function handleScrollFn($window)
{
	return {
		$init : function(ele,attr,model)
		{
			$window.on('scroll',function(e){
				if(this.scrollY > 510)
				{
					ele.css('top','70px');
				}else{
					ele.removeAttr('style');
				}
			});

		jEli.dom('li a',ele)
			.bind('click',function(){
				jEli.dom('li',ele).removeClass('active');
				jEli.dom(this).parents().addClass('active');
			})
		}
	}
}

//BaseCtrl Fn
function baseCtrFN($scope,$webState,$rootModel,$sessionStorage)
{
	var db = null,
		errorHandler = function(o){ console.log(o) },
		successHandler = function(e){ console.log("Success:",e) },
		cmdLockState = false,
		cmdFinishState = false,
		lastRunQuery = '';

	$scope.db = {};
	$scope.activeDb = null;
	$scope.searchResult = [];
	$scope.newData = {};
	$scope.queryString = "";
	$scope.queryBuilder = "";
	$scope.mode = 'learn';

	function logController()
	{
		this.console = null;
		this.print = function(msg)
		{
			if(this.console)
			{
				this.console.value = this.console.value +'\n '+msg;
			}
		};

		this.clearScreen = function()
		{
			var self =this;
			setTimeout(function(){
				self.console.value = "";
			},500);
		};
	}

	//command prompt
	var logController = new logController();


	function connectDB(connectDetails)
	{
		var req = new jEli.$jDB(connectDetails.name,connectDetails.version)
					.open({
							serviceHost:'http://192.168.1.5/jEliDB/',
							logService : function(msg)
							{
								if(msg)
								{
									setMessage(msg);
								}
							}
						});

			req.onSuccess(function(e)
			{
				$scope.activeDb = true;
				db = e.result;
				$scope.dbName = db.name;
				$scope.dbVersion = db.version;
				$scope.tables = db.list_tables();
				//sessionStorage
				$sessionStorage.setItem("activeSession",JSON.stringify(connectDetails));
				$scope.$consume();

				//set helpers
			var list = [];
				list.push("-env -usage");
	          list.push("-export -[TBL_NAME] -[type] (csv , html or json) -(d or p) -[fileName] (optional)");
	          list.push("-import -[table] -[insert]");
	          list.push('-sync -[tbl_name] (optional)');
	          list.push('-cls (clearScreen)');
	          list.push("-help");
	          list.push("-select -[fields] -[table] -Clause[ -[on] -[join] -[where] -[like] ]");
	          list.push("-insert -[data] -[tbl_name]");
	          list.push("-create -[tbl_name] [columns]");
	          list.push("-delete -[tbl_name] -expression[[where] -[like:]]");
	          list.push("-update -[tbl_name] [data] -expression[ [where] [like]]");
	          list.push("-turncate -[tbl_name] -flag[[yes] : [no]]");
	          list.push("-drop -t -[tbl_name] -flag[ [yes] : [no] ]");
	          list.push("-drop -d -[db_name] -flag[ [yes] : [no] ]");
	          list.push("-Alter -table] -a -c -columnName [config]");
	          list.push("-Alter -[tbl_name] -a -p -columnName");
	          list.push("-Alter -[tbl_name] -a -f -columnName -[relative table]");
	          list.push("-Alter -[tbl_name] -d -columnName");
	          list.push("-Alter -[tbl_name] -a -m -[read : write]");
	          db.jDBHelpers.overwrite(list);
			});
	}

	//check active session
	if($sessionStorage.getItem('activeSession'))
	{
		var connection = JSON.parse($sessionStorage.getItem('activeSession') );
		connectDB(connection);
	}

	$scope.$disconnect = function()
	{
		//disconnect from DB
		$sessionStorage.removeItem('activeSession');
		$scope.activeDb = !1;
	};

	//synchronize the table
	$scope.syncTable = function(tblName)
	{
		db
		.synchronize()
		.Entity(db.name)
		.configSync({
			serviceHost:'http://localhost/jEliDB/',
			logService : function(msg)
			{
				setMessage(msg);
			}
		})
		.processEntity();
	};


	//create
	$scope.$create = function()
	{
		if($scope.db.name && $scope.db.version)
		{
			connectDB($scope.db);
		}
	};
	//DB Function binding test
	$scope.searchTable = function($table,queryString)
	{
		if(queryString)
		{
			$scope.queryBuilder = "SELECT:"+queryString+" FROM:"+$table;
			$scope.$consume(function(){
			  	$scope.runQuery();
			});
		}
	};

	function getTextAreaLine(myString)
	{
		return myString.substring(myString.lastIndexOf('\n') + 1, myString.length);
	}

	$scope.queryMessage = "";
	$scope.commandPrompt = function($ev)
	{
		if($ev.keyCode === 13)
		{
			var query = getTextAreaLine($ev.currentTarget.value);
			$ev.preventDefault();
			//run query
			$scope.runQuery(query);
			logController.console = $ev.currentTarget;
			cmdLockState = true;
			lastRunQuery = query;
		}
	};

	function setMessage(msg)
	{
		setTimeout(function(){
			logController.print(msg);
		},100);
	}

	function setCMDState()
	{
		cmdLockState = false;
		setMessage('\n');
	}

	function queryHandler()
	{
		this.onSuccess = function(ret)
		{
			switch(ret.state)
			{
				case("insert"):
				case("delete"):
				case("update"):
				case("create"):
				case("truncate"):
				case("drop"):
				case("alter"):
				case("sync"):
				case("import"):
					if( ret.result.message )
					{
						$scope.tables = db.list_tables();
						setMessage( ret.result.message );
						$scope.$consume();
					}
				break;
				case("select"):
					setMessage( ret.jDBNumRows() + " record(s) found");
					$scope.searchResult = ret.getResult();
				break;
				case("help"):
					for(var i in ret.result.message)
					{
						setMessage(ret.result.message[i]);
					}
				break;
				case('cls'):
					logController.clearScreen();
				break;
				default:
					setMessage( ret.result.message );
				break;

			}
			
			setCMDState();
		};

		this.onError = function(ret)
		{
			if(ret.message)
			{
				setMessage(ret.message);
			}

			setCMDState();			
		};
	}

	$scope.runQuery = function(query,set)
	{
		if(query && !jEli.$isEqual(lastRunQuery,query))
		{
			if(set)
			{
				setMessage(query);
			}

			setMessage('Performing Task...');
			db.jCMD(query, new queryHandler());
		}
	};

	$scope.importFile = function()
	{
		console.log('importing file');
	}

	$scope.addUserTable = function(table,type)
	{
		var formData = type[table];

		if(formData)
		{
			if(formData.course)
			{
				formData.course = Number(formData.course);
			}

			if(formData.id)
			{
				formData.id = Number(formData.id);
			}

			//insert the info using jDB Query
			$scope.$consume(function(){
			  	$scope.runQuery("-INSERT -"+JSON.stringify([formData]) +" -"+table,1);
			});
		}
	};

	$scope.truncateTable = function(tblName)
	{
		if(tblName)
		{
			$scope.$consume(function()
			{
		  		$scope.runQuery("-TRUNCATE -"+tblName+" -no",1);
		  	});
		}
	};

	$scope.setMode = function(mode)
	{
		$scope.mode = mode;
	};

	$scope.getMode = function(mode)
	{
		return $scope.mode === mode;
	};

	$scope.dropTable = function(tblName)
	{
		if(tblName)
		{
		  $scope.$consume(function(){
		  	$scope.runQuery("-DROP -table -"+tblName+" -no",1);
		  });
		}
	}

}

})();



(function(){
	
	'use strict';

	jEli
	.jModule('eliTest')
	.jConfig(["$jEliWebStateProvider" , "$jEliWebProvider",jRouteConfigFn]);

	//jRouteCOnfigFn
	function jRouteConfigFn($jEliWebStateProvider , $jEliWebProvider)
	{
		$jEliWebProvider.fallBack('/');

		$jEliWebStateProvider
		.setState('profile',
		{
			url : '/tutorials',
			template : '<div>My new Profile Page</div>'
		})
		.setState('default',
		{
			url : '/',
			templateUrl : 'main.tmpl.html'
		})
	}

})();