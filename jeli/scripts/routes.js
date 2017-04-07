(function(){
	
	'use strict';

	jEli
	.jModule('eliTest')
	.jConfig(['$jEliWebStateProvider' , '$jEliWebProvider',function($jEliWebStateProvider , $jEliWebProvider)
	{
		$jEliWebProvider.fallBack('/');

		$jEliWebStateProvider
		.setState('profile',
		{
			url : '/profilePage/:id/:cid',
			template : '<div>My new Profile Page</div>'
		})
		.setState('timeline',
		{
			url : '/clientPage/:timelineId',
			template : '{%nameTest%}<br/><select j-model="nameTest" j-change="listChanged()"><option j-for="(key,item) in item" j-value="key" j-selected="nameTest === key">{%item.name%}</option></select>',
			targetView : 'mainContent',
			jController : 'testController'
		})
		.setState('fakeTest',
		{
			url : '/testpage/artist/:id/myPage/:cid/nothing/:did',
			template : 'Fake Page'
		})
		.setState('home',
		{
			url : '/home',
			template : '<div>My Home Page</div>'
		})
		.setState('tableTester',
		{
			url : '/myTablePage',
			template:'<table-tester data-on-key-up="testing"><div> <button j-click="clear()" class="btn btn-default">Clear table</button><button j-click="createNewList(10)"  class="btn btn-primary">Create 10</button><button j-click="createNewList(50)"  class="btn btn-primary">Create 50</button><button j-click="createNewList(100)"  class="btn btn-primary">Create 100</button><button j-click="createNewList(200)"  class="btn btn-primary">Create 200</button> <a href="#/"  class="btn btn-link">Go home</a></div><table><thead><th>Name</th><th>No:</th><th>action</th></thead><tr j-for="item in $list"><td>{%item.name%}</td><td>{%item.no%}</td><td><button j-click="alert(item)">{%item.no%}</button></div></td></tr></table></table-tester>',
			targetView : 'mainContent'
		})
		.setState('default',
		{
			url : '/',
			views : {
				'':{
					template : '<div class="row"><div j-view="sideBar" class="col-md-2"></div><div j-view="mainContent" class="col-md-6"></div>'
				},
				'sideBar' :{
					template : '<ul class="nav nav-pills nav-stacked"><li role="presentation"><go where="messages" class="btn btn-link">Messages</go></li><li role="presentation"><go where="tableTester" class="btn btn-link">Table Tester</go></li> <li><go where="timeline:{timelineId:sideBar.timeline.id}" class="btn btn-link">Timeline</go></li></ul>',
					jController : ["$scope",function($scope)
					{
						var vm = this;
						vm.test = {'input' : 'Testing jControllerAs'};
						vm.timeline = {id: 1543};

						return vm;
					}],
					jControllerAs : 'sideBar'
				},
				'mainContent':{
					template : "<div>I am main content View  {% test.value | fakeFilter:{'{0}':test.input} | lowercase %} - Time is {% test.time | dateTime:'YYYY-MM-DD hh:m:s' %}</div>",
					jController :["$scope", function($scope)
					{
						$scope.test = {input : 'Jecks is testing this',value : "Who is testing this - {0}",time : '2015-12-10 15:25:22' };
					}]
				}
			},
			data : {
				authorities : ['ROLE_ADMIN']
			}
		})
		.setState('messages',
		{
			url :'/messages',
			template : '<h2  class="{%testClass%}"> Messages </h2><messages message="message" more-Element></messages>',
			targetView  : "mainContent",
			jController : ["$model","objectives",function($model,objectives)
			{
				$model.message = 
				[{
					From : "Test",
					message : 'Hello World'
				},{
					From : "Test 1",
					message : 'Hello World 1'
				},{
					From : "Test 2",
					message : 'Hello World 2'
				},{
					From : "Test 3",
					message : 'Hello World 3'
				},{
					From : "Test 4",
					message : 'Hello World 4'
				}];

			}],
			jResolver : 
			{
				objectives : ["anotherFactory",function(anotherFactory)
				{
					return anotherFactory;
				}]
			}
		});
	}])

})();