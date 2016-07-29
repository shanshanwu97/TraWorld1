Session.set("budget", "Show All");

Template.searchresults.onCreated(function(){
	this.state= new ReactiveDict();
	this.state.setDefault({
		budget:"Show All",

	});
	console.log("refining results");
	console.dir(this.state);
});
Template.searchresults.helpers({
	refineSearch: function(){
		const instance = Template.instance();
		return instance.state.get("budget");
	},
})
// Template.addFav.rendered=function(){
// 	Session.set("thumbnail", $(".js-favtempid").val());
// };
Template.addFav.helpers({
	thumbpic:function(){
		var picid=$(".js-favtempid").val();
		return YourFileCollection.findOne({_id:this.thumbpic});
	}
})
Template.searchresults.events({
	"change .js-refine": function(event, instance){
		console.log($(".js-refine").val());
		var refineResult= instance.$(".js-refine").val();
		if (refineResult=="Under $500"){
			refineResult=500;
		}else if(refineResult=="Under $1000"){
			refineResult=1000;
		}else if(refineResult=="Under $2000"){
			refineResult=2000;
		}else if(refineResult=="Under $3000"){
			refineResult=3000;
		}else if(refineResult=="Under $4000"){
			refineResult=4000;
		}else if(refineResult=="Over $5000"){
			refineResult="Over $5000";
		}else if (refineResult=="Under $5000"){
			refineResult=5000;
		}else{
			refineResult="Show All";
		}
		instance.state.set("budget", refineResult);
		Session.set("budget", refineResult);
	},
		"click .js-addfav ":function(event){
		console.log("clicked on the +"); //debug
		console.dir(this);
		window.alert("Added to favorite!");
		var blog= Trips.findOne({_id: this.fav._id});
		console.dir(blog);
		const fav =
		{user: Meteor.userId(),
		addedAt: new Date(),
		favadded: blog
		}
		Meteor.call("addFav", fav);
		//Comments.remove(this.comment._id);  //callback->this <--removes object created
	},

})
Template.searchresults.helpers({
	// searchdata: function(){return DestSearched.find({}, {sort:{searches:-1}});},
	resultData: function(){
		let locat=Session.get("results");
		if (locat.includes(",")){
			const num=locat.indexOf(",");
			locat=locat.substring(0,num);
		}
		let loc = ".*"+locat+".*";
		console.log(loc);
		var bud= Session.get("budget");
		var find="0";
		if (Session.get("budget")=="Show All"){
		find= Trips.find({destination: {$elemMatch:{value:{$regex:loc}}}},{sort:{datecreated: -1}});
	}else if(Session.get("budget")=="Over $5000"){
		find= Trips.find({$and: [{destination: {$elemMatch:{value:{$regex:loc}}}},{expenses: {$gt:5000}}]},{sort:{datecreated: -1}});
	}else{
		find= Trips.find({$and: [{destination: {$elemMatch:{value:{$regex:loc}}}},{expenses: {$lte:bud}}]},{sort:{datecreated: -1}});
	}
		Session.set("numResults", find.count());
		return find;
	},
	checkIt: function(){
		if (Session.get("numResults")<=0){
			return true;
		}else{
			return false;
		}
	}
})