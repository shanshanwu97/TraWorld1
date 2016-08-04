Template.pastitin.onCreated(function(){
	Session.set("bud", "Show All");
	this.state= new ReactiveDict();
	this.state.setDefault({
		bud:"Show All",

	});
	console.log("refining results");
	console.dir(this.state);
});
Template.pastitin.helpers({
	resultData:function(){
		var bud= Session.get("bud");
		var find="0";
		if (Session.get("bud")=="Show All"){
		find= Trips.find({},{sort:{datecreated: -1}});
	}else if(Session.get("bud")=="Over $5000"){
		find= Trips.find({expenses: {$gt:5000}},{sort:{datecreated: -1}});
	}else{
		find= Trips.find({expenses: {$lte:bud}},{sort:{datecreated: -1}});
	}
		Session.set("numRes", find.count());
		return find;
	},
	startSet: function(){
		Session.set("playDemo",false);
	},
	getIcon: function() {
               if (Session.get("playDemo")){
                    return "stop";
               }else{
                    return "play-circle";
                }
    },
 //    resultSearchData: function(){
	// 	let locat=Session.get("results");
	// 	if (locat.includes(",")){
	// 		const num=locat.indexOf(",");
	// 		locat=locat.substring(0,num);
	// 	}
	// 	let loc = ".*"+locat+".*";
	// 	console.log(loc);
	// 	var bud= Session.get("budget");
	// 	var find="0";
	// 	if (Session.get("budget")=="Show All"){
	// 	find= Trips.find({destination: {$elemMatch:{value:{$regex:loc}}}},{sort:{datecreated: -1}});
	// }else if(Session.get("budget")=="Over $5000"){
	// 	find= Trips.find({$and: [{destination: {$elemMatch:{value:{$regex:loc}}}},{expenses: {$gt:5000}}]},{sort:{datecreated: -1}});
	// }else{
	// 	find= Trips.find({$and: [{destination: {$elemMatch:{value:{$regex:loc}}}},{expenses: {$lte:bud}}]},{sort:{datecreated: -1}});
	// }
	// 	Session.set("numResults", find.count());
	// 	return find;
	// },
	checkIt: function(){
		if (Session.get("numRes")<=0){
			return true;
		}else{
			return false;
		}
	}
})
Template.pastitin.rendered=function(){
	if (TripUsers.find({userID: Meteor.userId()}).count()===0) {
                    $("#tripdemo1").modal('show');
                    TripUsers.insert({userID: Meteor.userId()});
               }
                this.autorun(function () {
             if (GoogleMaps.loaded()) {

         var autocomplete;
          var options = {types: ['(cities)'] };
              autocomplete = new google.maps.places.Autocomplete(
                  /** @type {HTMLInputElement} */(document.getElementById('autocomplete')),
                  options);
              google.maps.event.addListener(autocomplete, 'place_changed', function() {
                
              });
            
    }
		})
}
Template.pastitin.events({
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
		instance.state.set("bud", refineResult);
		Session.set("bud", refineResult);
	},
	"submit .js-searchnow":function(){
		const destination=$(".js-searchit").val().toLowerCase();
		Session.set("results", destination);

		Meteor.call("tosearch", destination);
		
            
    
	}
})
Template.searches.helpers({
	alreadyFav:function(){
		var userfavor=UserFavorites.findOne({user:Meteor.userId()});
		var userfavlist=userfavor&&userfavor.favadded;
		// console.dir(userfavlist.indexOf(tripId));
		if(userfavlist.indexOf(this.fav._id)!=-1){
			return true;
		}else{
			return false;
		}
	}
})
Template.searches.events({
	"click .js-addfav ":function(event){
		window.alert("Added to favorite!");
		var favid=this.fav._id;
		if (UserFavorites.find({user:Meteor.userId()}).count()==0){
			const fav =
		{user: Meteor.userId(),
		addedAt: new Date(),
		favadded: [favid],
		}
		Meteor.call("addFav", fav);
		}else{
			var userfav=UserFavorites.findOne({user:Meteor.userId()});

			UserFavorites.update({_id:userfav&&userfav._id},{$push:{favadded:favid}});
		}

	},
	"click .js-removefav":function(event){
		var id=this.fav._id;

			var userfav1=UserFavorites.findOne({user:Meteor.userId()});

			UserFavorites.update({_id:userfav1&&userfav1._id},{$pull:{favadded:id}});
	}
})
Template.pastitin.events({
	"click #newit":function(){
		Router.go("itineraries");
	},

	"click .tdemo-1": function() {

               demoTalk(".js-ttext-1");
          },
    "click .tdemo-2": function() {
               demoTalk(".js-ttext-2");
    },
    "click .tdemo-3": function() {
               demoTalk(".js-ttext-3");
    },
    "click .tdemo-4": function() {
               demoTalk(".js-ttext-4");
    },


})
function demoTalk(text){
	if (Session.get("playDemo")==false){
		Session.set("playDemo",true);
				var instruct=$(text).text();
               var msg = new SpeechSynthesisUtterance(instruct);
               var voices=window.speechSynthesis.getVoices();
                    msg.voice=voices[0];
               window.speechSynthesis.speak(msg);
              	msg.onend=function(event){
              		console.log("end")
              		Session.set("playDemo", false);
              	}
    }else{
           	window.speechSynthesis.cancel();
           	Session.set("playDemo", false);
           }
             
    }
