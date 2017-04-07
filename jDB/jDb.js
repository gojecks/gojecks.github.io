(function()
{
	'use strict';
	var req = new jEli.$jDB('eliTest',1.1).open({
							serviceHost:'http://localhost/jEliDB/',
							logService : function(msg)
							{
								console.log(msg);
							}
						}),
	db,
	courseTbl,
	userTbl,
	errorHandler = function(o){ console.log(o) },
	successHandler = function(e){ console.log("Success:",e) };

req.onUpgrade(function(e)
{
	var db = e.result;
	db
	.createTbl('user')
	.onSuccess(function(e)
	{
		var tbl = e.result;
		tbl
		.Alter
		.add()
		.column('id',{AUTO_INCREMENT:1,type:'number'})
		.column("name",{type:"String"})
		.column("course",{type:"Number"});
	})
	.onError(errorHandler);

	//create course table
	db
	.createTbl('course')
	.onSuccess(function(e)
	{
		var tbl = e.result;
		tbl
		.Alter
		.add()
		.column('id',{AUTO_INCREMENT:1,type:'number'})
		.column("name",{type:"String"});
	})
	.onError(errorHandler);

	//insert Data into user
	db
	.transaction('user','write')
	.onSuccess(function(e)
	{
		var req = e.result;
		req
		.insert({name:'Alice',course:1})
		.insert({name:'Bob',course:1})
		.insert({name:'Caroline',course:2})
		.insert({name:'David',course:5})
		.insert({name:'Emma'})
		.execute()
		.onSuccess(successHandler)
		.onError(errorHandler);

	})
	.onError(errorHandler);

	//insert data into course
	db
	.transaction('course','write')
	.onSuccess(function(e)
	{
		var req = e.result;
		req
		.insert({name:"HTML5"})
		.insert({name:"css3"})
		.insert({name:"Java"})
		.insert({name:"javaScript"})
		.insert({name:"PHP"})
		.insert({name:"MYSQL"})
		.insert({name:"jEli"})
		.insert({name:"Angular"})
		.execute()
		.onSuccess(successHandler)
		.onError(errorHandler);

	})
	.onError(errorHandler);

});

req.onSuccess(function(e)
{
	db = e.result;
	
//QUERY
	db
	.transaction(["user as u","course as c"])
	.onSuccess(function(e)
	{
		userTbl = e.result;
	})
	.onError(errorHandler);

// SELECT user.name, course.name
// FROM `user`
// INNER JOIN `course` on user.course = course.id;
	// userTbl
	// // .select('u.name')
	// .select('u.name as userName,c.name as courseName,c.id as cID')
	// .join('inner:c')
	// .on('u.course = c.id')
	// // .where("userName like:a")
	// .execute()
	// .onError(errorHandler)
	// .onSuccess(function(e){
	// 	console.log("Success Result:",e.getResult())
	// });
});

req.onError(errorHandler);
})();