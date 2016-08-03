Template.pastitin.helpers({
	resultData:function(){
		return Trips.find();
	}
})
Template.pastitin.events({
	"click #newit":function(){
		Router.go("itineraries");
	},
	"click .js-addfav ":function(event){
		console.log("clicked on the +"); //debug
		console.dir(this);
		window.alert("Added to favorite!");
		var favid= $(".js-favid").val()
		var blog= Trips.findOne({_id: favid});
		console.dir(blog);
		const fav =
		{user: Meteor.userId(),
		addedAt: new Date(),
		favadded: blog
		}
		Meteor.call("addFav", fav);
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
               window.speechSynthesis.speak(msg);
               console.log(msg);
    }