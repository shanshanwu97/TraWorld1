Template.map.onCreated(function () {
  Session.set("location",{lat:42,lng:-71})
  GoogleMaps.load({ v: '3', key: 'AIzaSyB7-F_RespGrP0zUzQO4AglkouFbTeKp0c', libraries: '' });
  GoogleMaps.ready('naviMap',function(map) {
    
    directionsService = new google.maps.DirectionsService();
    directionsDisplay = new google.maps.DirectionsRenderer;
    directionsDisplay.setMap(GoogleMaps.maps.naviMap.instance);
    Tracker.autorun(function() {
      map.instance.setCenter(new google.maps.LatLng(Session.get("location").lat,Session.get("location").lng))
      
    
    });  
    

});
});  

Session.set("obj",null);
Session.set("transcript","");

Tracker.autorun(function(){
  console.log(Session.get("location"));
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
  



  


  "click .js-talk": function(event){
      console.log("clicked it");
      $(".js-talk").html("Listening...");
      event.preventDefault();
   // https://shapeshed.com/html5-speech-recognition-api/
      const recognition = new webkitSpeechRecognition();
      recognition.lang = 'en-US' 
      recognition.onresult = function(event) {
          console.dir(event);
          $(".js-talk").html("Got it!");
          Session.set("transcript",event.results[0][0].transcript);
          $("#from").val(Session.get("transcript"));
 
          
//        execute(Session.get("transcript")); 
        };
        $("#from").val("");
    recognition.start();
   //      console.log("starting the recognizer")

    
   },  

 "click .js-talk2": function(event){
      console.log("clicked it");
      $(".js-talk2").html("Listening...");
      event.preventDefault();
   // https://shapeshed.com/html5-speech-recognition-api/
      const recognition = new webkitSpeechRecognition();
      recognition.lang = 'en-US' 
      recognition.onresult = function(event) {
          console.dir(event);
          $(".js-talk2").html("Got it!");
          Session.set("transcript",event.results[0][0].transcript);
          $("#to").val(Session.get("transcript"));
 
          
//        execute(Session.get("transcript")); 
        };
        $("#to").val("");
    recognition.start();
   //      console.log("starting the recognizer")

    
   },  
   "click #clickme": function(event){
    const from = $("#from").val();
    const to = $("#to").val();
    event.preventDefault();
    console.log("getting directions "+from+" "+to);
    calculateRoute(from, to);

   }
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


function calculateRoute(from, to) {
        //var directionsService = new google.maps.DirectionsService();
        var directionsRequest = {
          origin: from,
          destination: to,
          travelMode: google.maps.DirectionsTravelMode.DRIVING,
          unitSystem: google.maps.UnitSystem.METRIC
        };
        console.log("sending request");console.dir(directionsRequest);
        directionsService.route(
          directionsRequest,
          function(response, status)
          { console.dir([status,response, new Date()]);
            if (status == google.maps.DirectionsStatus.OK)
            {
              console.log("routing");
              //new google.maps.DirectionsRenderer({
               // map: GoogleMaps.maps.naviMap.instance,
                //directions: response
              //});

              directionsDisplay.setDirections(response);
            }
            else
              $("#error").append("Unable to retrieve your route<br />");
          }
        );
      }

      $(document).ready(function() {
        // If the browser supports the Geolocation API
        if (typeof navigator.geolocation == "undefined") {
          $("#error").text("Your browser doesn't support the Geolocation API");
          return;
        }

        $("#from-link, #to-link").click(function(event) {
          event.preventDefault();
          var addressId = this.id.substring(0, this.id.indexOf("-"));

          navigator.geolocation.getCurrentPosition(function(position) {
            var geocoder = new google.maps.Geocoder();
            geocoder.geocode({
              "location": new google.maps.LatLng(position.coords.latitude, position.coords.longitude)
            },
            function(results, status) {
              if (status == google.maps.GeocoderStatus.OK)
                $("#" + addressId).val(results[0].formatted_address);
              else
                $("#error").append("Unable to retrieve your address<br />");
            });
          },
          function(positionError){
            $("#error").append("Error: " + positionError.message + "<br />");
          },
          {
            enableHighAccuracy: true,
            timeout: 10 * 1000 // 10 seconds
          });
        });

        $("#calculate-route").submit(function(event) {
          event.preventDefault();
          calculateRoute($("#from").val(), $("#to").val());
        });
      });



