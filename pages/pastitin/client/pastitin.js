Template.pastitin.helpers({
	resultData:function(){
		return Trips.find();
	},
	
})
Template.pastitin.rendered=function(){
	if (TripUsers.find({userID: Meteor.userId()}).count()===0) {
                    $("#tripdemo1").modal('show');
                    TripUsers.insert({userID: Meteor.userId()});
               }
}
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
				var instruct=$(text).text();
               console.log(instruct);
               var msg = new SpeechSynthesisUtterance(instruct);
               var voices=window.speechSynthesis.getVoices();
                    msg.voice=voices[22];
               window.speechSynthesis.speak(msg);
               console.log(msg);
    }