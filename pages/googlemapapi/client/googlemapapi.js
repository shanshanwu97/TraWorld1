Template.map.onCreated(function () {
  Session.set("location",{lat:42,lng:-71})
  GoogleMaps.load();
  GoogleMaps.ready('naviMap',function(map) {
    Tracker.autorun(function() {
      map.instance.setCenter(new google.maps.LatLng(Session.get("location").lat,Session.get("location").lng))
    });  
});
});  

Session.set("obj",null);
Session.set("transcript","");

Tracker.autorun(function(){
  console.log(Session.get("latLong"));
});

var accessToken = "8fd67a24e6ae40bb81af0eabd4cec15b";
var subscriptionKey = "<your agent subscription key>";
var baseUrl = "https://api.api.ai/v1/";

var synth = window.speechSynthesis; 



Template.map.onRendered(function () {


}) 

   

Template.map.helpers({ 
  naviMapOptions: function() {
    if (GoogleMaps.loaded()) { 
      return {
        center: new google.maps.LatLng(Session.get("location").lat,Session.get("location").lng),
        zoom:10
      };
    }
  },
});

Template.map.events({
  "click .js-addDay": function(event){
    console.log("hey you clicked the button");

    const location =$(".js-location").val();

    console.log(location);


    $.ajax({

      url:"https://maps.googleapis.com/maps/api/geocode/json",

        data:{

          "address":location,

          "key": "AIzaSyB7-F_RespGrP0zUzQO4AglkouFbTeKp0c",

        },

        dataType:"json"

    }).done(function( data ) {

    if ( console && console.log ) {

      Session.set( "location",data.results[0].geometry.location );


    }
    $(".js-location").val("");
    $(".js-talk").html("Try a new place!");

  })



  },


  "click .js-talk": function(event){
      console.log("clicked it");
      $(".js-talk").html("Listening...");
   // https://shapeshed.com/html5-speech-recognition-api/
      const recognition = new webkitSpeechRecognition();
      recognition.lang = 'en-US' 
      recognition.onresult = function(event) {
          console.dir(event);
          $(".js-talk").html("Got it!");
          Session.set("transcript",event.results[0][0].transcript);
          $(".js-location").val(Session.get("transcript"));
         send();
          
//        execute(Session.get("transcript")); 
        };
        $(".js-location").val("");
    recognition.start();
   //      console.log("starting the recognizer")

    
   },   
})

function send() {
  var text =  Session.get("transcript");
  $.ajax({
    type: "POST",
    url: baseUrl + "query/",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    headers: {
      "Authorization": "Bearer " + accessToken,
      "ocp-apim-subscription-key": subscriptionKey
    },
    data: JSON.stringify({ q: text, lang: "en" }),  
    success: function(data) {
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

      var utterThis = new SpeechSynthesisUtterance(data.result.speech);
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




