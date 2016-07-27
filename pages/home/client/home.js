Session.set("results", "0");
Template.home.helpers({
	searchdata: function(){return DestSearched.find({}, {sort:{searches:-1}});},
	// resultData: function(){
	// 	let loc = Session.get("results");
	// 	return Trips.find({destination: loc},{sort:{datecreated: -1}});
	// },
})
Template.home.events({
	"submit form": function(){
		event.preventDefault();
		const destination=$(".js-loca").val().toLowerCase();
		
		Router.go('searchresults');
		Session.set("results", destination);
		// Meteor.call("search", destination);
		if(DestSearched.find({location: destination}).count()==0){
			console.dir("New Destination added to database");
			const search_obj=
			{location: destination,
			searches: 1
			}
			DestSearched.insert(search_obj);
			
		}else{
			console.dir("Destination search incremented");
			DestSearched.update({_id:DestSearched.findOne({location:destination})._id},{$inc:{searches: 1}});
		}
		
	},
	msg:function(){return Settings.findOne({user:Meteor.userId()})},
	usersearch:function(){
		//return Session.get("prefer");
		return Trips.find();
	},
	userfavorites:function(){
		return UserFavorites.find();
	}
})
Template.home.events({
	"click .js-gogo": function(event){
		// event.preventDefault();
		const destination=$(".js-loca").val().toLowerCase();
		Session.set("results", destination);

		Meteor.call("tosearch", destination);
		Router.go('searchresults');
		
	},
	"click .js-deletefav ":function(event){
		console.log("clicked on the x"); //debug
		window.alert("You are about to delete this itinerary!");
		var blog= UserFavorites.findOne({_id: this.user});
		Meteor.call("removefav",blog);  //callback->this <--removes object created
	},
	"click .js-createit":function(event){
		Router.go('itineraries');
	},
	"click .js-creategroup":function(event){
		Router.go('groupCampPost');
	}

})
Template.showSearch.helpers({
  inputs: function () {
    return Session.get('data'); // reactively watches the Session variable, so when it changes, this result will change and our template will change
  }
});

// Now we'll set up a click handler to add inputs to our array when we   click the "add" button
Template.showSearch.events({
  'click #add': function () {
    var inputs = Session.get('data');
    var uniqid = Math.floor(Math.random() * 100000); // Give a unique ID so you can pull _this_ input when you click remove
    inputs&&inputs.push({uniqid: uniqid, datecreated: new Date(), cvalue: ""});
    Session.set('data', inputs);
  }, 
  'click .js-subtext':function(){
  	const getdata=Session.get('data');
  	console.log(getdata);
  	Meteor.call("textedits", $(".js-idd").val(), )
  }
});
// We also need handlers for when the inputs themselves are changed / removed
Template.input.events({
  'click .remove-input': function(event) { 
  	event.preventDefault();
    var uniqid = $(event.currentTarget).attr('uniqid');
    inputs = Session.get('data');
    inputs = _.filter(inputs, function(x) { return x.uniqid != uniqid; });
    Session.set('data', inputs);
  },
  'change input': function(event) { 
    var $input = $(event.currentTarget);
    var uniqid = $input.attr('uniqid');
    inputs = Session.get('data');
    index = inputs.findIndex(function(x) { return x.uniqid == uniqid; });
    inputs[index].value = $input.val();
    Session.set('data', inputs);
  }
});
Template.home.events({
"click .js-speak": function(event){
      console.log("clicked it");
      $(".js-speak").html("Listening...");
   // https://shapeshed.com/html5-speech-recognition-api/
      const recognition = new webkitSpeechRecognition();
      recognition.lang = 'en-US' 
      recognition.onresult = function(event) {
          console.dir(event);
          $(".js-speak").html("Got it!");
          Session.set("searchit",event.results[0][0].transcript);
          $(".js-loca").val(Session.get("searchit"));
         send();
          
//        execute(Session.get("transcript")); 
        };
        $(".js-loca").val("");
    recognition.start();
   //      console.log("starting the recognizer")

    
   },   
})

function send() {
  // $speechInput,
  //   $recBtn,
  //   recognition,
  //   messageRecording = "Recording...",
  //   messageCouldntHear = "I couldn't hear you, could you say that again?",
  //   messageInternalError = "Oh no, there has been an internal server error",
  //   messageSorry = "I'm sorry, I don't have the answer to that yet.";
  var text =  Session.get("searchit");
  var baseUrl= "https://api.api.ai/v1/";
  var subscriptionKey="";
  var synth=window.speechSynthesis;
  $.ajax({
    type: "POST",
    url: baseUrl + "query/",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    headers: {
      "Authorization": "Bearer " + "8c154d0fc086495daec6c8b12a5b7af8",
      "ocp-apim-subscription-key": subscriptionKey
    },
    data: JSON.stringify({ q: text, lang: "en" }),  
    success: function(data) {
      console.dir(data);

        //  setResponse(JSON.stringify(data, undefined, 2));
        //  r= JSON.parse(results);
        //  console.dir(data.result.speech);
      setResponse(data.result.speech);
      var utterThis = new SpeechSynthesisUtterance(data.result.speech);
    //  "ocp-apim-subscription-key": subscriptionKey
    },
    data: JSON.stringify({ q: text, lang: "en" }),  
    success: function(data) {
      //setResponse(JSON.stringify(data, undefined, 2));
        //  r= JSON.parse(results);
        //  console.dir(data.result.speech);
      console.dir(data)
      setResponse(data.result.speech);
      // SpeechSynthesisUtteranceInstance.lang = 'en-US';
      var utterThis = new SpeechSynthesisUtterance(data.result.speech);
      utterThis.lang='en-US';
      voices = synth.getVoices();
      utterThis.voice = voices[74]; //61-82    61,64, 66, 67,  74 is top, 80, 22 weird singing
      synth.speak(utterThis);
    },
    error: function() {
      setResponse("Internal Server Error");
    }
  });
    setResponse("Loading...");
}

function setResponse(val) {
  $("#response").text(val);
}

