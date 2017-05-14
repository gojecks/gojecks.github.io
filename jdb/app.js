(function()
{

	'use strict';

jEli
.jModule('jelijs.jDB',['jEli.web.route'])
.jConfig(["jDebugProvider",jDbuggerFn])
.jController('baseCtrl',["$scope","$rootModel","$sessionStorage",baseCtrFN])
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
function baseCtrFN($scope,$rootModel,$sessionStorage)
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
			},100);
		};
	}

	//command prompt
	var logController = new logController();

	//getServiceHost
	function getServiceHost(addPath)
	{
		var loc = location,
			domain = loc.protocol+"//"+addPath+'.'+loc.hostname;

		return domain;
	}

	function connectDB(connectDetails)
	{
		var req = new jEli.$jDB(connectDetails.name,connectDetails.version)
					.open({
							serviceHost:null,
							logService : function(msg)
							{
								if(msg)
								{
									setMessage(msg);
								}
							},
							interceptor : function(options,state){
							},
							storage:'memory'
						});

			req.onSuccess(function(e)
			{
				$scope.activeDb = true;
				db = e.result;
				$scope.dbName = db.name;
				$scope.dbVersion = db.version;
				$scope.tables = db.info();
				//sessionStorage
				$sessionStorage.setItem("activeSession",JSON.stringify(connectDetails));
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
			serviceHost:'http://ws.jdb.bezynet.com',
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
						$scope.tables = db.info();
						setMessage( ret.result.message );
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
					$scope.searchResult = [];
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
			db.jQl(query, new queryHandler());
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
