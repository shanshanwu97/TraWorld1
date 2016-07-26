Template.layout.helpers({
  userName: function() {
      const liveUser = Meteor.userId();
      return Meteor.users.findOne({
          _id: liveUser
      });
  },
})
Template.layout.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
        Router.go('/');
    },
    "click .js-goto": function(event){
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

});
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
      var goPage = data.result.parameters;
      console.log(goPage);
      setResponse(data.result.speech);

      var utterThis = new SpeechSynthesisUtterance(data.result.speech);
      voices = synth.getVoices();
      utterThis.voice = voices[74]; //61-82    61,64, 66, 67,  74 is top, 80, 22 weird singing
      synth.speak(utterThis);

      if((!goPage.groupCamp)&&(!goPage.maps)&&(!goPage.pastItineraries)){
        Router.go('/');
      }
      else if((!goPage.home)&&(!goPage.maps)&&(!goPage.pastItineraries)){
        Router.go('groupCampPost');
      }
      else if((!goPage.home)&&(!goPage.groupCamp)&&(!goPage.pastItineraries)){
        Router.go('map');
      }
      else if((!goPage.home)&&(!goPage.groupCamp)&&(!goPage.maps)){
        Router.go('itineraries');
      }
      else{

      }


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
 /*
  **********************************************************
  * OPAQUE NAVBAR SCRIPT
  **********************************************************
  */

  // Toggle tranparent navbar when the user scrolls the page

  $(window).scroll(function() {
    if($(this).scrollTop() > 50)  /*height in pixels when the navbar becomes non opaque*/
    {
        $('.opaque-navbar').addClass('opaque');
    } else {
        $('.opaque-navbar').removeClass('opaque');
    }
});

// new function($) {
//   $.fn.setCursorPosition = function(pos) {
//     if (this.setSelectionRange) {
//       this.setSelectionRange(pos, pos);
//     } else if (this.createTextRange) {
//       var range = this.createTextRange();
//       range.collapse(true);
//       if(pos < 0) {
//         pos = $(this).val().length + pos;
//       }
//       range.moveEnd('character', pos);
//       range.moveStart('character', pos);
//       range.select();
//     }
//   }
// }(jQuery);
// $('input[type=search]').focus(function() {
//   $(this).setCursorPosition(4);
// });
// var menu = document.querySelector('.nav__list');
// var burger = document.querySelector('.burger');
// var doc = $(document);
// var l = $('.scrolly');
// var panel = $('.panel');
// var vh = $(window).height();

// var openMenu = function() {
//   burger.classList.toggle('burger--active');
//   menu.classList.toggle('nav__list--active');
// };

// reveal content of first panel by default
// panel.eq(0).find('.panel__content').addClass('panel__content--active');

// var scrollFx = function() {
//   var ds = doc.scrollTop();
//   var of = vh / 4;

  // if the panel is in the viewport, reveal the content, if not, hide it.
//   for (var i = 0; i < panel.length; i++) {
//     if (panel.eq(i).offset().top < ds+of) {
//      panel
//        .eq(i)
//        .find('.panel__content')
//        .addClass('panel__content--active');
//     } else {
//       panel
//         .eq(i)
//         .find('.panel__content')
//         .removeClass('panel__content--active')
//     }
//   }
// };

// var scrolly = function(e) {
//   e.preventDefault();
//   var target = this.hash;
//   var $target = $(target);

//   $('html, body').stop().animate({
//       'scrollTop': $target.offset().top
//   }, 300, 'swing', function () {
//       window.location.hash = target;
//   });
// }

// var init = function() {
//   burger.addEventListener('click', openMenu, false);
//   window.addEventListener('scroll', scrollFx, false);
//   window.addEventListener('load', scrollFx, false);
//   $('a[href^="#"]').on('click',scrolly);
// };

// doc.on('ready', init);
