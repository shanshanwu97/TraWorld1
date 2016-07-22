var require = meteorInstall({"pages":{"Itineraries":{"client":{"template.itineraries.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// pages/Itineraries/client/template.itineraries.js                                                                   //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("itineraries");                                                                                  // 2
Template["itineraries"] = new Template("Template.itineraries", (function() {                                          // 3
  var view = this;                                                                                                    // 4
  return [ HTML.HTML("\n      ", HTML.HEAD("\n        ", HTML.Raw('<link type="text/css" rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500">'), "\n        ", HTML.SCRIPT({
    src: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAScLVvC2ZiCBA_PEeXspeLOCKT0mimjTg&sensor=false&libraries=places&callback=initialize"
  }), "\n        ", HTML.SCRIPT("\n            var autocomplete;\n            function initialize() {\n               var options = {\n  types: ['(cities)']\n };\n              autocomplete = new google.maps.places.Autocomplete(\n                  /** @type {HTMLInputElement} */(document.getElementById('autocomplete')),\n                  options);\n              google.maps.event.addListener(autocomplete, 'place_changed', function() {\n              });\n            }\n        "), "\n      "), "\n      ", HTML.Raw("<body>\n        \n      </body>"), "\n    "), "\n	", HTML.DIV({
    "class": "container"                                                                                              // 8
  }, "\n	", HTML.Raw('<div class="page-header">\n		<h1>Itineraries</h1>\n	</div>'), "\n	", HTML.Raw("<h2>Share your experience!</h2>"), "\n\n	", HTML.FORM("\n	 	\n	  	", HTML.Raw('<fieldset class="form-group">\n	    	<label for="title">Title</label>\n	    	<input type="title" class="form-control js-title">\n	  	</fieldset>'), "\n	  	", HTML.FIELDSET({
    "class": "form-group"                                                                                             // 10
  }, "\n	    	", HTML.Raw('<label for="destination">Destination</label>'), "\n	    	", HTML.Raw('<input type="destination" id="autocomplete" class="form-control js-dest1">'), "\n\n	    	", Blaze.Each(function() {
    return Spacebars.call(view.lookup("inputs"));                                                                     // 12
  }, function() {                                                                                                     // 13
    return [ "\n   				 ", Spacebars.include(view.lookupTemplate("input")), "\n  			" ];                              // 14
  }), "\n            ", HTML.Raw('<button type="button" id="add-input" class="btn btn-default addButton"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span> Add Additional Destinations</button>'), "\n            ", HTML.Raw('<small class="text-muted">Add up to 5 destinations.\n	    	</small>'), "\n	  	"), "\n	  	", HTML.Raw('<fieldset class="form-group">\n	   		<label for="arrival">Arrival Date</label>\n	    	<input type="arrival" class="form-control js-arrive" placeholder="mm/dd/yyyy">\n	 	</fieldset>'), "\n	  	", HTML.Raw('<fieldset class="form-group">\n	    	<label for="depart">Departure Date</label>\n	    	<input type="departure" class="form-control js-depart" placeholder="mm/dd/yyyy">\n	  	</fieldset>'), "\n	  	", HTML.Raw('<fieldset class="form-group">\n	    	<label for="travellers">Amount of Travellers</label>\n	    	<input type="travel" class="form-control js-trv" placeholder="Enter in digits">\n	  	</fieldset>'), "\n	  	", HTML.Raw('<fieldset class="form-group">\n	    	<label for="expense">Approximate Expense</label>\n	    	$<input type="expense" class="form-control js-ex" placeholder="ex. 500 please enter valid number without $- (includes airfare, transportaion, food, lodging,etc)">\n	  	</fieldset>'), "\n	  	", HTML.Raw('<fieldset class="form-group">\n	    	<label for="description">Banner Image:</label>\n	    	<input class="form-control js-img" id="exampleTextarea" placeholder="image links only!!!!">\n	  	</fieldset>'), "\n	  	", HTML.Raw('<fieldset class="form-group">\n	  		<label for="description">Thumbnail Image:</label>\n	  		<input class="your-upload-class" type="file"><button id="deleteFileButton">delete</button>\n	  		<!-- {{uploadedAt}}</td><td>{{original.name}}</td><td><a\n href="{{url}}">link</a></td><td>{{#if \nisUploaded}}uploaded{{/if}}</td><td><button \nid="deleteFileButton">delete</button> -->\n	  	</fieldset>'), "\n	 	", HTML.FIELDSET({
    "class": "form-group"                                                                                             // 16
  }, "\n	    	", HTML.Raw('<label for="description">Description</label>'), "\n	    	", HTML.TEXTAREA({                // 17
    "class": "form-control js-descript",                                                                              // 18
    id: "exampleTextarea",                                                                                            // 19
    rows: "3"                                                                                                         // 20
  }), "\n	  	"), "\n	  	", HTML.Raw('<fieldset class="form-group">\n	  		\n	    	<!-- <label for="exampleInputFile">Insert Image/File</label>\n	    	<input type="file" class="form-control-file" id="exampleInputFile"><small class="text-muted">File size must not exceed 5MB.</small><br>\n	    	<label for="description">Add Description for the File</label>\n	    	<textarea class="form-control" id="exampleTextarea" rows="3"></textarea>\n	            <button type="button" class="btn btn-default addButton"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span> Add Additional Files<i class="fa fa-plus"></i></button> -->\n	    	\n	 	 </fieldset>'), "\n	 	 ", HTML.Raw('<small class="text-muted">Do you want to post as public or private.\n	      		<input type="radio">public\n	      		<input type="radio">private\n	    	</small>'), "\n	  ", HTML.Raw('<input type="submit" class="js-submit btn btn-info" value="Submit">'), "\n	"), "\n") ];
}));                                                                                                                  // 22
                                                                                                                      // 23
Template.__checkName("input");                                                                                        // 24
Template["input"] = new Template("Template.input", (function() {                                                      // 25
  var view = this;                                                                                                    // 26
  return [ HTML.HTML("\n      ", HTML.HEAD("\n        ", HTML.Raw('<link type="text/css" rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500">'), "\n        ", HTML.SCRIPT({
    src: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAScLVvC2ZiCBA_PEeXspeLOCKT0mimjTg&sensor=false&libraries=places&callback=initialize"
  }), "\n        ", HTML.SCRIPT("\n            var autocomplete;\n            function initialize() {\n               var options = {\n  types: ['(cities)']\n };\n              autocomplete = new google.maps.places.Autocomplete(\n                  /** @type {HTMLInputElement} */(document.getElementById('autocomplete')),\n                  options);\n              google.maps.event.addListener(autocomplete, 'place_changed', function() {\n              });\n            }\n        "), "\n      "), "\n      ", HTML.Raw("<body>\n        \n      </body>"), "\n    "), "\n  ", HTML.INPUT({
    name: "testinput",                                                                                                // 30
    id: "autocomplete",                                                                                               // 31
    "class": "test-input",                                                                                            // 32
    type: "text",                                                                                                     // 33
    uniqid: function() {                                                                                              // 34
      return Spacebars.mustache(view.lookup("uniqid"));                                                               // 35
    },                                                                                                                // 36
    value: function() {                                                                                               // 37
      return Spacebars.mustache(view.lookup("value"));                                                                // 38
    }                                                                                                                 // 39
  }), "\n  ", HTML.BUTTON({                                                                                           // 40
    "class": "remove-input",                                                                                          // 41
    uniqid: function() {                                                                                              // 42
      return Spacebars.mustache(view.lookup("uniqid"));                                                               // 43
    }                                                                                                                 // 44
  }, "Remove"), HTML.Raw("<br>") ];                                                                                   // 45
}));                                                                                                                  // 46
                                                                                                                      // 47
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"itineraries.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// pages/Itineraries/client/itineraries.js                                                                            //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Session.set("userinput", 0);                                                                                          // 1
Template.itineraries.helpers({                                                                                        // 2
  trips: function () {                                                                                                // 3
    function trips() {                                                                                                // 3
      // const dest= $(".js-dest").val();                                                                             //
      return Trips.find();                                                                                            // 5
    }                                                                                                                 // 6
                                                                                                                      //
    return trips;                                                                                                     // 3
  }()                                                                                                                 // 3
});                                                                                                                   // 2
                                                                                                                      //
Template.itineraries.events({                                                                                         // 9
  "submit form": function () {                                                                                        // 10
    function submitForm() {                                                                                           // 10
      event.preventDefault();                                                                                         // 11
      console.log("hey u clicked");                                                                                   // 12
                                                                                                                      //
      var name = $(".js-name").val();                                                                                 // 14
                                                                                                                      //
      var desti = $(".js-dest1").val().toLowerCase();                                                                 // 16
      var dest = [{                                                                                                   // 17
        uniqid: Math.floor(Math.random() * 100000),                                                                   // 18
        value: desti }];                                                                                              // 19
      var dest2 = Session.get("inputs");                                                                              // 20
      dest = dest.concat(dest2);                                                                                      // 21
                                                                                                                      //
      var arrive = $(".js-arrive").val();                                                                             // 23
      var depart = $(".js-depart").val();                                                                             // 24
      var amount = $(".js-trv").val();                                                                                // 25
      if (!isNumeric($(".js-ex").val())) {                                                                            // 26
        alert("Please enter a valid number!");                                                                        // 27
      } else if (!$(".js-title").val()) {                                                                             // 29
        alert("Please enter a valid title!");                                                                         // 30
      } else {                                                                                                        // 32
        var expenses = Number($(".js-ex").val());                                                                     // 33
        var desc = $(".js-descript").val();                                                                           // 34
        var titleOf = $(".js-title").val();                                                                           // 35
                                                                                                                      //
        var username = Meteor.users.findOne({ _id: Meteor.userId() }, { fields: { userName: 1 } });                   // 39
        var ur = username && username.userName;                                                                       // 40
        var img = $(".js-img").val();                                                                                 // 41
        var txt = [{ uniqid: 0, value: "" }];                                                                         // 42
        var imgs = Session.get("thumbpic");                                                                           // 43
        var likes = 0;                                                                                                // 44
                                                                                                                      //
        var trip = { createdBy: Meteor.userId(), username: ur, datecreated: new Date(), title: titleOf, destination: dest, arrival: arrive, amountOfTraveler: amount, expenses: expenses, image: img, thumbpic: imgs, description: desc, textedit: txt, likes: likes
        };                                                                                                            // 47
        Session.set("userinput", trip);                                                                               // 49
        Meteor.call("insertTrip", trip);                                                                              // 50
        Router.go('itdisplay');                                                                                       // 51
      }                                                                                                               // 53
    }                                                                                                                 // 54
                                                                                                                      //
    return submitForm;                                                                                                // 10
  }(),                                                                                                                // 10
  'click #deleteFileButton ': function () {                                                                           // 55
    function clickDeleteFileButton(event) {                                                                           // 55
      console.log("deleteFile button ", this);                                                                        // 56
      YourFileCollection.remove({ _id: this._id });                                                                   // 57
    }                                                                                                                 // 59
                                                                                                                      //
    return clickDeleteFileButton;                                                                                     // 55
  }(),                                                                                                                // 55
  'change .your-upload-class': function () {                                                                          // 60
    function changeYourUploadClass(event, template) {                                                                 // 60
      console.log("uploading...");                                                                                    // 61
      FS.Utility.eachFile(event, function (file) {                                                                    // 62
        console.log("each file...");                                                                                  // 63
        var yourFile = new FS.File(file);                                                                             // 64
        yourFile.creatorId = Meteor.userId(); // todo                                                                 // 65
        var img = YourFileCollection.insert(yourFile, function (err, fileObj) {                                       // 66
          console.log("callback for the insert, err: ", err);                                                         // 67
          if (!err) {                                                                                                 // 68
            console.log("inserted without error");                                                                    // 69
          } else {                                                                                                    // 70
            console.log("there was an error", err);                                                                   // 72
          }                                                                                                           // 73
        });                                                                                                           // 74
        Session.set("thumbpic", img && img._id);                                                                      // 75
      });                                                                                                             // 76
    }                                                                                                                 // 77
                                                                                                                      //
    return changeYourUploadClass;                                                                                     // 60
  }()                                                                                                                 // 60
                                                                                                                      //
});                                                                                                                   // 9
function isNumeric(n) {                                                                                               // 80
  return !isNaN(parseFloat(n)) && isFinite(n);                                                                        // 81
}                                                                                                                     // 83
                                                                                                                      //
//client only code                                                                                                    //
Template.itineraries.onCreated(function () {                                                                          // 87
  Session.set('inputs', []); // on page load, set this to have no inputs                                              // 88
});                                                                                                                   // 89
                                                                                                                      //
Template.itineraries.helpers({                                                                                        // 91
  inputs: function () {                                                                                               // 92
    function inputs() {                                                                                               // 92
      return Session.get('inputs'); // reactively watches the Session variable, so when it changes, this result will change and our template will change
    }                                                                                                                 // 94
                                                                                                                      //
    return inputs;                                                                                                    // 92
  }()                                                                                                                 // 92
});                                                                                                                   // 91
                                                                                                                      //
// Now we'll set up a click handler to add inputs to our array when we   click the "add" button                       //
Template.itineraries.events({                                                                                         // 98
  'click #add-input': function () {                                                                                   // 99
    function clickAddInput() {                                                                                        // 99
      var inputs = Session.get('inputs');                                                                             // 100
      var uniqid = Math.floor(Math.random() * 100000); // Give a unique ID so you can pull _this_ input when you click remove
      inputs.push({ uniqid: uniqid, value: "" });                                                                     // 102
      Session.set('inputs', inputs);                                                                                  // 103
    }                                                                                                                 // 104
                                                                                                                      //
    return clickAddInput;                                                                                             // 99
  }()                                                                                                                 // 99
});                                                                                                                   // 98
// We also need handlers for when the inputs themselves are changed / removed                                         //
Template.input.events({                                                                                               // 107
  'click .remove-input': function () {                                                                                // 108
    function clickRemoveInput(event) {                                                                                // 108
      event.preventDefault();                                                                                         // 109
      var uniqid = $(event.currentTarget).attr('uniqid');                                                             // 110
      inputs = Session.get('inputs');                                                                                 // 111
      inputs = _.filter(inputs, function (x) {                                                                        // 112
        return x.uniqid != uniqid;                                                                                    // 112
      });                                                                                                             // 112
      Session.set('inputs', inputs);                                                                                  // 113
    }                                                                                                                 // 114
                                                                                                                      //
    return clickRemoveInput;                                                                                          // 108
  }(),                                                                                                                // 108
  'change input': function () {                                                                                       // 115
    function changeInput(event) {                                                                                     // 115
      var $input = $(event.currentTarget);                                                                            // 116
      var uniqid = $input.attr('uniqid');                                                                             // 117
      inputs = Session.get('inputs');                                                                                 // 118
      index = inputs.findIndex(function (x) {                                                                         // 119
        return x.uniqid == uniqid;                                                                                    // 119
      });                                                                                                             // 119
      inputs[index].value = $input.val().toLowerCase();                                                               // 120
      Session.set('inputs', inputs);                                                                                  // 121
      console.log(Session.get('inputs'));                                                                             // 122
    }                                                                                                                 // 123
                                                                                                                      //
    return changeInput;                                                                                               // 115
  }()                                                                                                                 // 115
});                                                                                                                   // 107
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"subscriptions.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// pages/Itineraries/client/subscriptions.js                                                                          //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Meteor.subscribe("theDestSearched");                                                                                  // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"about":{"client":{"template.about.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// pages/about/client/template.about.js                                                                               //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("about");                                                                                        // 2
Template["about"] = new Template("Template.about", (function() {                                                      // 3
  var view = this;                                                                                                    // 4
  return [ HTML.Raw('<div class="page-header">\n		<h1>About</h1>\n		\n	</div>\n	'), HTML.DIV({                        // 5
    "class": "row"                                                                                                    // 6
  }, "\n		", HTML.Raw('<div class="col-md-9  col-md-offset-0  bg-info">\n			<img src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Chicago_from_North_Avenue_Beach_June_2015_panorama_2.jpg" width="830">\n			<h1>5-days adventure in Windy City</h1>\n			<h4><img src="images/pic.jpg" alt="..." class="img-circle" width="70">shanshanwu</h4>\n			<h2><span class="glyphicon glyphicon-map-marker" aria-hidden="true"></span>Chicago</h2>\n			\n			<div class="panel panel-default">\n  				<div class="panel-body">\n    			<h4><span class="glyphicon glyphicon-plane" aria-hidden="true"></span> Arrival: 08/10/2016</h4>\n    			<h4><span class="glyphicon glyphicon-user" aria-hidden="true"></span> Companions: 2</h4>\n  				<h4><span class="glyphicon glyphicon-usd" aria-hidden="true"></span> Approximate Expense: $1000</h4>\n  				</div>\n			</div>\n			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d380513.7161197073!2d-88.01215704510135!3d41.83339248246475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c3cd0f4cbed%3A0xafe0a6ad09c0c000!2sChicago%2C+IL!5e0!3m2!1sen!2sus!4v1466147631541" width="600" height="450" frameborder="0" style="border:0" allowfullscreen=""></iframe>\n			<h4> Description: </h4>\n			<br>\n			<h2> Day 1: </h2>\n			<p>The most tiring day of all. One hour of sleep before getting on the plane and that was it .</p>\n			<img src="https://a2.muscache.com/im/pictures/1e4da59e-3cfa-454c-b75a-8b393330ae0d.jpg?aki_policy=x_large" width="400" alt=""><p>Nice cozy, artzy, airbnb $55 per night </p><h3>SUPER convenient, about 3 miles away from Loop and downtown, about 3 stops on the subway!! </h3>\n			<h4>	Extremely convenient Subway/Train System</h4>\n			<img src="http://www.mappery.com/maps/Chicago-Train-System-Map.mediumthumb.jpg" width="400" alt="">\n			<h4>	First Stop: Shedd Aquarium</h4>\n			Didn\'t actually take any pictures in the aquarium..\n			<h4>	Walk around the City</h4>\n			<img src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/13256545_1193787857311557_3716824862484283099_n.jpg?oh=878b5e9b1fe13e98d8684da10174ba10&amp;oe=57E01126" width="400" alt="">\n			<h4>Went to Chinatown for some Hand-pulled Noodles</h4>\n			<img src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/13239123_1193788503978159_2238325641298143973_n.jpg?oh=7b268c6b9592b5a6115cfed9e39f5e26&amp;oe=57C6BA6C" width="200" alt="">\n			<br><span class="glyphicon glyphicon-map-marker" aria-hidden="true"></span>Chinatown, Chicago\n\n		</div>'), "\n		", HTML.DIV({
    "class": "col-md-3  col-md-offset-0  bg-danger"                                                                   // 8
  }, "\n			", HTML.Raw("<h1>Popular Searches</h1>"), "\n				", HTML.Raw("<!-- <ul>\n					<li>Los Angeles</li>\n					<li>Paris</li>\n					<li>Tokyo</li>\n					<li>Rome</li>\n					<li>Montreal</li>\n					<li>London</li>\n					<li>Sydney</li>\n					<li>Beijing</li>\n					<li>Madrid</li>\n					<li>Carribbean</li>\n					<li>Seoul</li>\n					<li>Honolulu</li>\n				</ul> -->"), "\n				 ", HTML.UL("\n    				", Blaze.Each(function() {
    return {                                                                                                          // 10
      _sequence: Spacebars.call(view.lookup("searchdata")),                                                           // 11
      _variable: "d"                                                                                                  // 12
    };                                                                                                                // 13
  }, function() {                                                                                                     // 14
    return [ "\n      					", HTML.LI(Blaze.View("lookup:d.location", function() {                                    // 15
      return Spacebars.mustache(Spacebars.dot(view.lookup("d"), "location"));                                         // 16
    }), ": ", Blaze.View("lookup:d.searches", function() {                                                            // 17
      return Spacebars.mustache(Spacebars.dot(view.lookup("d"), "searches"));                                         // 18
    })), "\n   					 " ];                                                                                             // 19
  }), "\n  				"), "\n		"), "\n	") ];                                                                                 // 20
}));                                                                                                                  // 21
                                                                                                                      // 22
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"about.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// pages/about/client/about.js                                                                                        //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Template.about.helpers({                                                                                              // 1
	searchdata: function () {                                                                                            // 2
		function searchdata() {                                                                                             // 2
			return DestSearched.find({}, { sort: { searches: -1 } });                                                          // 2
		}                                                                                                                   // 2
                                                                                                                      //
		return searchdata;                                                                                                  // 2
	}()                                                                                                                  // 2
});                                                                                                                   // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"googlemapapi":{"client":{"template.googlemapapi.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// pages/googlemapapi/client/template.googlemapapi.js                                                                 //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("map");                                                                                          // 2
Template["map"] = new Template("Template.map", (function() {                                                          // 3
  var view = this;                                                                                                    // 4
  return [ HTML.DIV({                                                                                                 // 5
    "class": "container"                                                                                              // 6
  }, "\n", HTML.Raw('<button class="js-talk btn buttonblue">Talk a location\'s name!</button>'), "\n", HTML.Raw("<br>"), HTML.Raw("<br>"), HTML.Raw("<br>"), "\n\n", HTML.Raw('<li>Location: <input type="text" class="js-location"></li>'), "\n", HTML.Raw('<button class="js-addDay">Submit</button>'), "\n", HTML.DIV({
    id: "map-nav",                                                                                                    // 8
    style: "height:500px"                                                                                             // 9
  }, Blaze._TemplateWith(function() {                                                                                 // 10
    return {                                                                                                          // 11
      name: Spacebars.call("naviMap"),                                                                                // 12
      options: Spacebars.call(view.lookup("naviMapOptions"))                                                          // 13
    };                                                                                                                // 14
  }, function() {                                                                                                     // 15
    return Spacebars.include(view.lookupTemplate("googleMap"));                                                       // 16
  })), "\n"), "\n​" ];                                                                                                // 17
}));                                                                                                                  // 18
                                                                                                                      // 19
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"googlemapapi.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// pages/googlemapapi/client/googlemapapi.js                                                                          //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Template.map.onCreated(function () {                                                                                  // 1
  Session.set("location", { lat: 42, lng: -71 });                                                                     // 2
  GoogleMaps.load();                                                                                                  // 3
  GoogleMaps.ready('naviMap', function (map) {                                                                        // 4
    var markerCurrent = new google.maps.Marker({                                                                      // 5
      position: new google.maps.LatLng(Session.get("location").lat, Session.get("location").lng),                     // 6
      map: map.instance                                                                                               // 7
    });                                                                                                               // 5
    Tracker.autorun(function () {                                                                                     // 9
      map.instance.setCenter(new google.maps.LatLng(Session.get("location").lat, Session.get("location").lng));       // 10
                                                                                                                      //
      markerCurrent.setPosition(new google.maps.LatLng(Session.get("location").lat, Session.get("location").lng));    // 12
    });                                                                                                               // 13
  });                                                                                                                 // 16
});                                                                                                                   // 17
                                                                                                                      //
Session.set("obj", null);                                                                                             // 19
Session.set("transcript", "");                                                                                        // 20
                                                                                                                      //
Tracker.autorun(function () {                                                                                         // 22
  console.log(Session.get("latLong"));                                                                                // 23
});                                                                                                                   // 24
                                                                                                                      //
var accessToken = "8fd67a24e6ae40bb81af0eabd4cec15b";                                                                 // 26
var subscriptionKey = "<your agent subscription key>";                                                                // 27
var baseUrl = "https://api.api.ai/v1/";                                                                               // 28
                                                                                                                      //
var synth = window.speechSynthesis;                                                                                   // 30
                                                                                                                      //
Template.map.onRendered(function () {});                                                                              // 34
                                                                                                                      //
Template.map.helpers({                                                                                                // 41
  naviMapOptions: function () {                                                                                       // 42
    function naviMapOptions() {                                                                                       // 42
      if (GoogleMaps.loaded()) {                                                                                      // 43
        return {                                                                                                      // 44
          center: new google.maps.LatLng(Session.get("location").lat, Session.get("location").lng),                   // 45
          zoom: 10                                                                                                    // 46
        };                                                                                                            // 44
      }                                                                                                               // 48
    }                                                                                                                 // 49
                                                                                                                      //
    return naviMapOptions;                                                                                            // 42
  }()                                                                                                                 // 42
                                                                                                                      //
});                                                                                                                   // 41
                                                                                                                      //
Template.map.events({                                                                                                 // 53
  "click .js-addDay": function () {                                                                                   // 54
    function clickJsAddDay(event) {                                                                                   // 54
      console.log("hey you clicked the button");                                                                      // 55
                                                                                                                      //
      var location = $(".js-location").val();                                                                         // 57
                                                                                                                      //
      console.log(location);                                                                                          // 59
                                                                                                                      //
      $.ajax({                                                                                                        // 62
                                                                                                                      //
        url: "https://maps.googleapis.com/maps/api/geocode/json",                                                     // 64
                                                                                                                      //
        data: {                                                                                                       // 66
                                                                                                                      //
          "address": location,                                                                                        // 68
                                                                                                                      //
          "key": "AIzaSyB7-F_RespGrP0zUzQO4AglkouFbTeKp0c"                                                            // 70
                                                                                                                      //
        },                                                                                                            // 66
                                                                                                                      //
        dataType: "json"                                                                                              // 74
                                                                                                                      //
      }).done(function (data) {                                                                                       // 62
                                                                                                                      //
        if (console && console.log) {                                                                                 // 78
                                                                                                                      //
          Session.set("location", data.results[0].geometry.location);                                                 // 80
        }                                                                                                             // 83
        $(".js-location").val("");                                                                                    // 84
        $(".js-talk").html("Try a new place!");                                                                       // 85
      });                                                                                                             // 88
    }                                                                                                                 // 92
                                                                                                                      //
    return clickJsAddDay;                                                                                             // 54
  }(),                                                                                                                // 54
                                                                                                                      //
  "click .js-talk": function () {                                                                                     // 95
    function clickJsTalk(event) {                                                                                     // 95
      console.log("clicked it");                                                                                      // 96
      $(".js-talk").html("Listening...");                                                                             // 97
      // https://shapeshed.com/html5-speech-recognition-api/                                                          //
      var recognition = new webkitSpeechRecognition();                                                                // 99
      recognition.lang = 'en-US';                                                                                     // 100
      recognition.onresult = function (event) {                                                                       // 101
        console.dir(event);                                                                                           // 102
        $(".js-talk").html("Got it!");                                                                                // 103
        Session.set("transcript", event.results[0][0].transcript);                                                    // 104
        $(".js-location").val(Session.get("transcript"));                                                             // 105
                                                                                                                      //
        //        execute(Session.get("transcript"));                                                                 //
      };                                                                                                              // 109
      $(".js-location").val("");                                                                                      // 110
      recognition.start();                                                                                            // 111
      //      console.log("starting the recognizer")                                                                  //
    }                                                                                                                 // 115
                                                                                                                      //
    return clickJsTalk;                                                                                               // 95
  }()                                                                                                                 // 95
});                                                                                                                   // 53
                                                                                                                      //
function send() {                                                                                                     // 118
  var text = Session.get("transcript");                                                                               // 119
  $.ajax({                                                                                                            // 120
    type: "POST",                                                                                                     // 121
    url: baseUrl + "query/",                                                                                          // 122
    contentType: "application/json; charset=utf-8",                                                                   // 123
    dataType: "json",                                                                                                 // 124
    headers: {                                                                                                        // 125
      "Authorization": "Bearer " + accessToken,                                                                       // 126
      "ocp-apim-subscription-key": subscriptionKey                                                                    // 127
    },                                                                                                                // 125
    data: JSON.stringify({ q: text, lang: "en" }),                                                                    // 129
    success: function () {                                                                                            // 130
      function success(data) {                                                                                        // 130
        //  setResponse(JSON.stringify(data, undefined, 2));                                                          //
        //  r= JSON.parse(results);                                                                                   //
        //  console.dir(data.result.speech);                                                                          //
        setResponse(data.result.speech);                                                                              // 134
        var utterThis = new SpeechSynthesisUtterance(data.result.speech);                                             // 135
        //  "ocp-apim-subscription-key": subscriptionKey                                                              //
      }                                                                                                               // 137
                                                                                                                      //
      return success;                                                                                                 // 130
    }(),                                                                                                              // 130
    data: JSON.stringify({ q: text, lang: "en" }),                                                                    // 138
    success: function () {                                                                                            // 139
      function success(data) {                                                                                        // 139
        //setResponse(JSON.stringify(data, undefined, 2));                                                            //
        //  r= JSON.parse(results);                                                                                   //
        //  console.dir(data.result.speech);                                                                          //
        console.dir(data);                                                                                            // 143
        setResponse(data.result.speech);                                                                              // 144
                                                                                                                      //
        var utterThis = new SpeechSynthesisUtterance(data.result.speech);                                             // 146
        voices = synth.getVoices();                                                                                   // 147
        utterThis.voice = voices[74]; //61-82    61,64, 66, 67,  74 is top, 80, 22 weird singing                      // 148
        synth.speak(utterThis);                                                                                       // 149
      }                                                                                                               // 150
                                                                                                                      //
      return success;                                                                                                 // 139
    }(),                                                                                                              // 139
    error: function () {                                                                                              // 151
      function error() {                                                                                              // 151
        setResponse("Internal Server Error");                                                                         // 152
      }                                                                                                               // 153
                                                                                                                      //
      return error;                                                                                                   // 151
    }()                                                                                                               // 151
  });                                                                                                                 // 120
  setResponse("Loading...");                                                                                          // 155
}                                                                                                                     // 156
                                                                                                                      //
function setResponse(val) {                                                                                           // 158
  $("#response").text(val);                                                                                           // 159
}                                                                                                                     // 160
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"groupCampPost":{"client":{"template.groupCampPost.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// pages/groupCampPost/client/template.groupCampPost.js                                                               //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("groupCampPost");                                                                                // 2
Template["groupCampPost"] = new Template("Template.groupCampPost", (function() {                                      // 3
  var view = this;                                                                                                    // 4
  return HTML.DIV({                                                                                                   // 5
    "class": "container"                                                                                              // 6
  }, HTML.Raw('\n	<div class="page-header">\n		<h1 class="text-center">\n			<img src="https://lightcastletech.files.wordpress.com/2013/04/campfire.png" width="80">\n			Group Camp\n			<small>Design Your Trip</small>\n		</h1>\n	</div>\n\n	'), Blaze.If(function() {
    return Spacebars.call(view.lookup("getUserName"));                                                                // 8
  }, function() {                                                                                                     // 9
    return [ "\n		", HTML.FORM("\n			", HTML.DIV({                                                                    // 10
      "class": "row"                                                                                                  // 11
    }, "\n				", HTML.DIV({                                                                                           // 12
      "class": "col-md-8"                                                                                             // 13
    }, "\n					", HTML.Comment(" TITLE "), "\n					", HTML.DIV({                                                      // 14
      "class": "js-titleGroup form-group"                                                                             // 15
    }, "\n						", HTML.LABEL("Title", HTML.SMALL("*")), "\n						", HTML.DIV({                                       // 16
      "class": "input-group"                                                                                          // 17
    }, "\n							", HTML.DIV({                                                                                        // 18
      "class": "input-group-addon"                                                                                    // 19
    }, HTML.SPAN({                                                                                                    // 20
      "class": "glyphicon glyphicon-tent",                                                                            // 21
      "aria-hidden": "true"                                                                                           // 22
    })), "\n							", HTML.INPUT({                                                                                    // 23
      type: "text",                                                                                                   // 24
      "class": "js-title form-control",                                                                               // 25
      placeholder: "Name of Group Camp Trip"                                                                          // 26
    }), "\n						"), "\n					"), "\n				"), "\n				", HTML.DIV({                                                      // 27
      "class": "col-md-4"                                                                                             // 28
    }, "\n					", HTML.Comment(" TAGS "), "\n					", HTML.DIV({                                                       // 29
      "class": "js-tagsGroup form-group"                                                                              // 30
    }, "\n						", HTML.LABEL("Tags"), "\n						", HTML.DIV({                                                         // 31
      "class": "input-group"                                                                                          // 32
    }, "\n							", HTML.DIV({                                                                                        // 33
      "class": "input-group-addon"                                                                                    // 34
    }, HTML.SPAN({                                                                                                    // 35
      "class": "glyphicon glyphicon-tags",                                                                            // 36
      "aria-hidden": "true"                                                                                           // 37
    })), "\n							", HTML.INPUT({                                                                                    // 38
      type: "text",                                                                                                   // 39
      "class": "js-tags form-control",                                                                                // 40
      placeholder: "tag1, tag2, tag3"                                                                                 // 41
    }), "\n						"), "\n					"), "\n				"), "\n			"), "	", HTML.BR(), "\n\n			", HTML.DIV({                           // 42
      "class": "row"                                                                                                  // 43
    }, "\n				", HTML.DIV({                                                                                           // 44
      "class": "col-md-8"                                                                                             // 45
    }, "\n					", HTML.Comment(" MESSAGE "), "\n					", HTML.DIV({                                                    // 46
      "class": "js-messageGroup form-group"                                                                           // 47
    }, "\n						", HTML.LABEL("Message"), "\n						", HTML.DIV({                                                      // 48
      "class": "input-group"                                                                                          // 49
    }, "\n							", HTML.DIV({                                                                                        // 50
      "class": "input-group-addon"                                                                                    // 51
    }, HTML.SPAN({                                                                                                    // 52
      "class": "glyphicon glyphicon-comment",                                                                         // 53
      "aria-hidden": "true"                                                                                           // 54
    })), "\n							", HTML.INPUT({                                                                                    // 55
      type: "text",                                                                                                   // 56
      "class": "js-message form-control",                                                                             // 57
      placeholder: "Promote Your Camp"                                                                                // 58
    }), "\n						"), "\n					"), "\n				"), "\n				", HTML.DIV({                                                      // 59
      "class": "col-md-4"                                                                                             // 60
    }, "\n					", HTML.Comment(" DESTINATION "), "\n					", HTML.DIV({                                                // 61
      "class": "js-destinationGroup form-group"                                                                       // 62
    }, "\n						", HTML.LABEL("Destination", HTML.SMALL("*")), "\n						", HTML.DIV({                                 // 63
      "class": "input-group"                                                                                          // 64
    }, "\n							", HTML.DIV({                                                                                        // 65
      "class": "input-group-addon"                                                                                    // 66
    }, HTML.SPAN({                                                                                                    // 67
      "class": "glyphicon glyphicon-map-marker",                                                                      // 68
      "aria-hidden": "true"                                                                                           // 69
    })), "\n							", HTML.INPUT({                                                                                    // 70
      type: "text",                                                                                                   // 71
      "class": "js-destination form-control",                                                                         // 72
      placeholder: "Where Your Camp is Going to Go"                                                                   // 73
    }), "\n						"), "\n					"), "\n				"), "\n			"), "	", HTML.BR(), "\n\n			", HTML.DIV({                           // 74
      "class": "row"                                                                                                  // 75
    }, "\n				", HTML.DIV({                                                                                           // 76
      "class": "col-md-4"                                                                                             // 77
    }, "\n					", HTML.Comment(" FROM "), "\n					", HTML.DIV({                                                       // 78
      "class": "js-fromGroup form-group"                                                                              // 79
    }, "\n					  	", HTML.LABEL("From", HTML.SMALL("*")), "\n				          ", HTML.DIV({                              // 80
      "class": "input-group"                                                                                          // 81
    }, "\n				               ", HTML.DIV({                                                                            // 82
      "class": "input-group-addon"                                                                                    // 83
    }, HTML.SPAN({                                                                                                    // 84
      "class": "glyphicon glyphicon-time",                                                                            // 85
      "aria-hidden": "true"                                                                                           // 86
    })), "\n				               ", HTML.INPUT({                                                                        // 87
      type: "text",                                                                                                   // 88
      "class": "js-from form-control",                                                                                // 89
      placeholder: "Departure Date"                                                                                   // 90
    }), "\n				          "), "\n					"), "\n				"), "\n				", HTML.DIV({                                              // 91
      "class": "col-md-4"                                                                                             // 92
    }, "\n					", HTML.Comment(" To "), "\n					", HTML.DIV({                                                         // 93
      "class": "js-toGroup form-group"                                                                                // 94
    }, "\n					  	", HTML.LABEL("To", HTML.SMALL("*")), "\n				          ", HTML.DIV({                                // 95
      "class": "input-group"                                                                                          // 96
    }, "\n				               ", HTML.DIV({                                                                            // 97
      "class": "input-group-addon"                                                                                    // 98
    }, HTML.SPAN({                                                                                                    // 99
      "class": "glyphicon glyphicon-hourglass",                                                                       // 100
      "aria-hidden": "true"                                                                                           // 101
    })), "\n				               ", HTML.INPUT({                                                                        // 102
      type: "text",                                                                                                   // 103
      "class": "js-to form-control",                                                                                  // 104
      placeholder: "Arival Date"                                                                                      // 105
    }), "\n				          "), "\n					"), "\n				"), "\n				", HTML.DIV({                                              // 106
      "class": "col-md-2"                                                                                             // 107
    }, "\n					", HTML.Comment(" COST "), "\n					", HTML.DIV({                                                       // 108
      "class": "js-costGroup form-group"                                                                              // 109
    }, "\n					  	", HTML.LABEL("Individual Cost"), "\n				          ", HTML.DIV({                                    // 110
      "class": "input-group"                                                                                          // 111
    }, "\n				               ", HTML.DIV({                                                                            // 112
      "class": "input-group-addon"                                                                                    // 113
    }, HTML.SPAN({                                                                                                    // 114
      "class": "glyphicon glyphicon-usd",                                                                             // 115
      "aria-hidden": "true"                                                                                           // 116
    })), "\n				               ", HTML.INPUT({                                                                        // 117
      type: "text",                                                                                                   // 118
      "class": "js-cost form-control"                                                                                 // 119
    }), "\n				          "), "\n					"), "\n				"), "\n				", HTML.DIV({                                              // 120
      "class": "col-md-2"                                                                                             // 121
    }, "\n					", HTML.Comment(" THRESHOLD "), "\n					", HTML.DIV({                                                  // 122
      "class": "js-thresholdGroup form-group"                                                                         // 123
    }, "\n					  	", HTML.LABEL("Minimum Group Size", HTML.SMALL("*")), "\n				          ", HTML.DIV({                // 124
      "class": "input-group"                                                                                          // 125
    }, "\n				               ", HTML.DIV({                                                                            // 126
      "class": "input-group-addon"                                                                                    // 127
    }, HTML.SPAN({                                                                                                    // 128
      "class": "glyphicon glyphicon-list-alt",                                                                        // 129
      "aria-hidden": "true"                                                                                           // 130
    })), "\n				               ", HTML.INPUT({                                                                        // 131
      type: "text",                                                                                                   // 132
      "class": "js-threshold form-control"                                                                            // 133
    }), "\n				          "), "\n					"), "\n				"), "\n			"), " ", HTML.BR(), "\n\n	          ", HTML.Comment(" DESCRIPTION "), "\n			", HTML.DIV({
      "class": "js-descriptionGroup form-group"                                                                       // 135
    }, "\n			 	", HTML.LABEL("Description"), "\n				", HTML.TEXTAREA({                                                // 136
      "class": "js-description form-control",                                                                         // 137
      rows: "2"                                                                                                       // 138
    }), "\n			"), "	", HTML.BR(), "\n\n			", HTML.DIV({                                                               // 139
      "class": "row"                                                                                                  // 140
    }, "\n				", HTML.DIV({                                                                                           // 141
      "class": "col-md-6"                                                                                             // 142
    }, "\n					", HTML.Comment(" LINK "), "\n					", HTML.DIV({                                                       // 143
      "class": "js-linkGroup form-group"                                                                              // 144
    }, "\n						", HTML.LABEL("Link ", HTML.SMALL("URL")), "\n						", HTML.DIV({                                     // 145
      "class": "input-group"                                                                                          // 146
    }, "\n				               ", HTML.DIV({                                                                            // 147
      "class": "input-group-addon"                                                                                    // 148
    }, HTML.SPAN({                                                                                                    // 149
      "class": "glyphicon glyphicon-link",                                                                            // 150
      "aria-hidden": "true"                                                                                           // 151
    })), "\n				               ", HTML.INPUT({                                                                        // 152
      type: "text",                                                                                                   // 153
      "class": "js-link form-control"                                                                                 // 154
    }), "\n				          "), "\n					"), "\n				"), "\n				", HTML.DIV({                                              // 155
      "class": "col-md-6"                                                                                             // 156
    }, "\n					", HTML.Comment(" Picture "), "\n					", HTML.DIV({                                                    // 157
      "class": "js-pictureGroup form-group"                                                                           // 158
    }, "\n						", HTML.LABEL("Picture ", HTML.SMALL("URL")), "\n						", HTML.DIV({                                  // 159
      "class": "input-group"                                                                                          // 160
    }, "\n				               ", HTML.DIV({                                                                            // 161
      "class": "input-group-addon"                                                                                    // 162
    }, HTML.SPAN({                                                                                                    // 163
      "class": "glyphicon glyphicon-picture",                                                                         // 164
      "aria-hidden": "true"                                                                                           // 165
    })), "\n				               ", HTML.INPUT({                                                                        // 166
      type: "text",                                                                                                   // 167
      "class": "js-picture form-control"                                                                              // 168
    }), "\n				          "), "\n					"), "\n				"), "\n			"), "	", HTML.BR(), HTML.BR(), "\n\n		     ", HTML.BUTTON({
      "class": "js-submit btn btn-danger form-control"                                                                // 170
    }, "Submit"), " ", HTML.BR(), "\n		"), "\n	" ];                                                                   // 171
  }, function() {                                                                                                     // 172
    return [ "\n		", HTML.DIV({                                                                                       // 173
      "class": "alert alert-info",                                                                                    // 174
      role: "alert"                                                                                                   // 175
    }, "\n			You must have a username in order to design Group Camps. Please got to the ", HTML.A({                   // 176
      href: "/userprofiles"                                                                                           // 177
    }, " User Profiles "), " page to claim one.\n		"), "\n	" ];                                                       // 178
  }), "\n");                                                                                                          // 179
}));                                                                                                                  // 180
                                                                                                                      // 181
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"groupCampPost.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// pages/groupCampPost/client/groupCampPost.js                                                                        //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Template.groupCampPost.helpers({                                                                                      // 1
	trips: function () {                                                                                                 // 2
		function trips() {                                                                                                  // 2
			return GroupCampTrips.find();                                                                                      // 3
		}                                                                                                                   // 4
                                                                                                                      //
		return trips;                                                                                                       // 2
	}(),                                                                                                                 // 2
                                                                                                                      //
	getUserName: function () {                                                                                           // 6
		function getUserName() {                                                                                            // 6
			return Meteor.user().userName;                                                                                     // 6
		}                                                                                                                   // 6
                                                                                                                      //
		return getUserName;                                                                                                 // 6
	}()                                                                                                                  // 6
});                                                                                                                   // 1
                                                                                                                      //
Template.groupCampPost.events({                                                                                       // 9
	"click .js-submit": function () {                                                                                    // 10
		function clickJsSubmit(event) {                                                                                     // 10
			event.preventDefault();                                                                                            // 11
                                                                                                                      //
			author = Meteor.user().userName;                                                                                   // 13
			timestamp = new Date();                                                                                            // 14
                                                                                                                      //
			title = $(".js-title").val();                                                                                      // 16
			message = $(".js-message").val();                                                                                  // 17
			description = $(".js-description").val();                                                                          // 18
			rawTags = $(".js-tags").val();                                                                                     // 19
			tags = [];                                                                                                         // 20
                                                                                                                      //
			destination = $(".js-destination").val();                                                                          // 22
			From = $(".js-from").val();                                                                                        // 23
			to = $(".js-to").val();                                                                                            // 24
                                                                                                                      //
			travelers = [];                                                                                                    // 26
			threshold = $(".js-threshold").val();                                                                              // 27
                                                                                                                      //
			cost = $(".js-cost").val();                                                                                        // 29
			link = $(".js-link").val();                                                                                        // 30
			picture = $(".js-picture").val();                                                                                  // 31
                                                                                                                      //
			complete = true;                                                                                                   // 34
                                                                                                                      //
			// TITLE                                                                                                           //
			if (!title) {                                                                                                      // 38
				// Required                                                                                                       //
				complete = false;                                                                                                 // 39
				$(".js-titleGroup").removeClass('has-success').addClass('has-error');                                             // 40
			} else {                                                                                                           // 41
				$(".js-titleGroup").removeClass('has-error').addClass('has-success');                                             // 43
			}                                                                                                                  // 44
                                                                                                                      //
			// MESSAGE                                                                                                         //
			if (!message) {                                                                                                    // 47
				$(".js-messageGroup").removeClass('has-success').addClass('has-warning');                                         // 48
			} else {                                                                                                           // 49
				$(".js-titleGroup").removeClass('has-warning').addClass('has-success');                                           // 51
			}                                                                                                                  // 52
                                                                                                                      //
			// DESCRIPTION                                                                                                     //
			if (!description) {                                                                                                // 55
				$(".js-descriptionGroup").removeClass('has-success').addClass('has-warning');                                     // 56
			} else {                                                                                                           // 57
				$(".js-descriptionGroup").removeClass('has-warning').addClass('has-success');                                     // 59
			}                                                                                                                  // 60
                                                                                                                      //
			// TAGS                                                                                                            //
			if (!rawTags) {                                                                                                    // 63
				$(".js-tagsGroup").removeClass('has-success').addClass('has-warning');                                            // 64
			} else {                                                                                                           // 65
				tags = $(".js-tags").val().split(",");                                                                            // 67
				for (i = 0; i < tags.length; i++) {                                                                               // 68
					tags[i] = tags[i].trim();                                                                                        // 68
				}                                                                                                                 // 68
				tags = tags.sort();                                                                                               // 69
				$(".js-tagsGroup").removeClass('has-warning').addClass('has-success');                                            // 70
			}                                                                                                                  // 71
                                                                                                                      //
			// DESTINATION                                                                                                     //
			if (!destination) {                                                                                                // 74
				// Required                                                                                                       //
				complete = false;                                                                                                 // 75
				$(".js-destinationGroup").removeClass('has-success').addClass('has-error');                                       // 76
			} else {                                                                                                           // 77
				$(".js-destinationGroup").removeClass('has-error').addClass('has-success');                                       // 79
			}                                                                                                                  // 80
                                                                                                                      //
			// FROM                                                                                                            //
			if (!From) {                                                                                                       // 83
				// Required                                                                                                       //
				complete = false;                                                                                                 // 84
				$(".js-fromGroup").removeClass('has-success').addClass('has-error');                                              // 85
			} else {                                                                                                           // 86
				$(".js-fromGroup").removeClass('has-error').addClass('has-success');                                              // 88
			}                                                                                                                  // 89
                                                                                                                      //
			// TO                                                                                                              //
			if (!to) {                                                                                                         // 92
				// Required                                                                                                       //
				complete = false;                                                                                                 // 93
				$(".js-toGroup").removeClass('has-success').addClass('has-error');                                                // 94
			} else {                                                                                                           // 95
				$(".js-toGroup").removeClass('has-error').addClass('has-success');                                                // 97
			}                                                                                                                  // 98
                                                                                                                      //
			// THRESHOLD                                                                                                       //
			if (!threshold) {                                                                                                  // 101
				// Required                                                                                                       //
				complete = false;                                                                                                 // 102
				$(".js-thresholdGroup").removeClass('has-success').addClass('has-error');                                         // 103
			} else {                                                                                                           // 104
				$(".js-thresholdGroup").removeClass('has-error').addClass('has-success');                                         // 106
			}                                                                                                                  // 107
                                                                                                                      //
			// COST                                                                                                            //
			if (!cost) {                                                                                                       // 110
				$(".js-costGroup").removeClass('has-success').addClass('has-warning');                                            // 111
			} else {                                                                                                           // 112
				$(".js-costGroup").removeClass('has-warning').addClass('has-success');                                            // 114
			}                                                                                                                  // 115
                                                                                                                      //
			// LINK                                                                                                            //
			if (!link) {                                                                                                       // 118
				$(".js-linkGroup").removeClass('has-success').addClass('has-warning');                                            // 119
			} else {                                                                                                           // 120
				$(".js-linkGroup").removeClass('has-warning').addClass('has-success');                                            // 122
			}                                                                                                                  // 123
                                                                                                                      //
			// PICTURE                                                                                                         //
			if (!picture) {                                                                                                    // 126
				$(".js-pictureGroup").removeClass('has-success').addClass('has-warning');                                         // 127
			} else {                                                                                                           // 128
				$(".js-pictureGroup").removeClass('has-warning').addClass('has-success');                                         // 130
			}                                                                                                                  // 131
                                                                                                                      //
			if (complete) {                                                                                                    // 135
				GroupCampTrips.insert({ author: author, timestamp: timestamp, title: title, message: message, description: description, tags: tags, destination: destination, from: From, to: to, travelers: travelers, threshold: threshold, cost: cost, link: link, picture: picture });
				Router.go("groupCampSearch");                                                                                     // 137
			} else {}                                                                                                          // 138
		}                                                                                                                   // 140
                                                                                                                      //
		return clickJsSubmit;                                                                                               // 10
	}()                                                                                                                  // 10
});                                                                                                                   // 9
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"groupCampSearch":{"client":{"template.groupCampSearch.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// pages/groupCampSearch/client/template.groupCampSearch.js                                                           //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("groupCampSearch");                                                                              // 2
Template["groupCampSearch"] = new Template("Template.groupCampSearch", (function() {                                  // 3
  var view = this;                                                                                                    // 4
  return HTML.DIV({                                                                                                   // 5
    "class": "container"                                                                                              // 6
  }, HTML.Raw('\n     <div class="page-header">\n          <h1 class="text-center">\n               <img src="https://lightcastletech.files.wordpress.com/2013/04/campfire.png" width="80">\n               Group Camp\n               <small>Find Your Trip</small>\n          </h1>\n     </div>\n\n     '), Blaze.If(function() {
    return Spacebars.call(view.lookup("getUserName"));                                                                // 8
  }, function() {                                                                                                     // 9
    return "\n     ";                                                                                                 // 10
  }, function() {                                                                                                     // 11
    return [ "\n          ", HTML.DIV({                                                                               // 12
      "class": "alert alert-info alert-dismissible",                                                                  // 13
      role: "alert"                                                                                                   // 14
    }, "\n               You must have a username in order to sign up for Group Camps. Please got to the ", HTML.A({  // 15
      href: "/userprofiles"                                                                                           // 16
    }, " User Profiles "), " page to claim one.\n          "), "\n     " ];                                           // 17
  }), "\n\n     ", HTML.FORM({                                                                                        // 18
    "class": "form-inline"                                                                                            // 19
  }, "\n          ", HTML.Raw('<div class="input-group">\n               <div class="input-group-addon"><span class="glyphicon glyphicon-tag" aria-hidden="true"></span></div>\n               <input type="text" class="js-searchTag form-control" size="25">\n               <span class="input-group-btn">\n                    <input class="js-searchTags btn btn-danger" type="submit" value="Search by Tag">\n               </span>\n          </div>'), "\n          ", HTML.Raw("&nbsp;"), HTML.Raw("&nbsp;"), HTML.Raw("&nbsp;"), HTML.Raw("&nbsp;"), "\n          ", HTML.Raw('<button class="js-seeAll form-control btn-default">See All</button>'), "\n          ", Blaze.If(function() {
    return Spacebars.call(view.lookup("getUserName"));                                                                // 21
  }, function() {                                                                                                     // 22
    return [ "\n               ", HTML.BUTTON({                                                                       // 23
      "class": "js-seeMine form-control btn-default btn-sm"                                                           // 24
    }, "See My Trips"), "\n               ", HTML.BUTTON({                                                            // 25
      "class": "js-seeAmGoing form-control btn-default btn-sm"                                                        // 26
    }, "See Trips I'm Going On"), "\n          " ];                                                                   // 27
  }), "\n     "), HTML.Raw("\n\n     <br>\n\n     "), Blaze.If(function() {                                           // 28
    return Spacebars.call(view.lookup("hasTrips"));                                                                   // 29
  }, function() {                                                                                                     // 30
    return [ "\n          ", Blaze.Each(function() {                                                                  // 31
      return {                                                                                                        // 32
        _sequence: Spacebars.call(view.lookup("getTrips")),                                                           // 33
        _variable: "trip"                                                                                             // 34
      };                                                                                                              // 35
    }, function() {                                                                                                   // 36
      return [ "\n                    ", Blaze._TemplateWith(function() {                                             // 37
        return {                                                                                                      // 38
          trip: Spacebars.call(view.lookup("trip"))                                                                   // 39
        };                                                                                                            // 40
      }, function() {                                                                                                 // 41
        return Spacebars.include(view.lookupTemplate("GroupCampListing"));                                            // 42
      }), "\n          " ];                                                                                           // 43
    }), "\n     " ];                                                                                                  // 44
  }, function() {                                                                                                     // 45
    return [ "\n          ", HTML.P({                                                                                 // 46
      "class": "text-center"                                                                                          // 47
    }, "\n               ", HTML.H2(HTML.SMALL("\n                    No Trips Found\n               ")), "\n          "), "\n     " ];
  }), "\n");                                                                                                          // 49
}));                                                                                                                  // 50
                                                                                                                      // 51
Template.__checkName("GroupCampListing");                                                                             // 52
Template["GroupCampListing"] = new Template("Template.GroupCampListing", (function() {                                // 53
  var view = this;                                                                                                    // 54
  return HTML.DIV({                                                                                                   // 55
    "class": function() {                                                                                             // 56
      return [ "alert ", Spacebars.mustache(view.lookup("getAlertColor")) ];                                          // 57
    },                                                                                                                // 58
    role: "alert"                                                                                                     // 59
  }, "\n          ", HTML.DIV({                                                                                       // 60
    "class": "row"                                                                                                    // 61
  }, "\n               ", HTML.DIV({                                                                                  // 62
    "class": "col-md-6"                                                                                               // 63
  }, "\n                    ", HTML.A({                                                                               // 64
    href: function() {                                                                                                // 65
      return [ "/GroupCampDetails/", Spacebars.mustache(Spacebars.dot(view.lookup("trip"), "_id")) ];                 // 66
    }                                                                                                                 // 67
  }, "\n                         ", HTML.H1(Blaze.View("lookup:trip.title", function() {                              // 68
    return Spacebars.mustache(Spacebars.dot(view.lookup("trip"), "title"));                                           // 69
  })), "\n                    "), "\n\n                    ", HTML.EM(Blaze.View("lookup:trip.message", function() {  // 70
    return Spacebars.mustache(Spacebars.dot(view.lookup("trip"), "message"));                                         // 71
  })), "\n\n                    ", HTML.H6("\n                         ", Blaze.Each(function() {                     // 72
    return {                                                                                                          // 73
      _sequence: Spacebars.call(Spacebars.dot(view.lookup("trip"), "tags")),                                          // 74
      _variable: "tag"                                                                                                // 75
    };                                                                                                                // 76
  }, function() {                                                                                                     // 77
    return [ "\n                              ", Blaze.If(function() {                                                // 78
      return Spacebars.dataMustache(view.lookup("isSearchedTag"), view.lookup("tag"));                                // 79
    }, function() {                                                                                                   // 80
      return [ "\n                                   ", HTML.SPAN({                                                   // 81
        "class": "label label-danger"                                                                                 // 82
      }, Blaze.View("lookup:tag", function() {                                                                        // 83
        return Spacebars.mustache(view.lookup("tag"));                                                                // 84
      })), "\n                              " ];                                                                      // 85
    }, function() {                                                                                                   // 86
      return [ "\n                                   ", HTML.SPAN({                                                   // 87
        "class": "label label-default"                                                                                // 88
      }, Blaze.View("lookup:tag", function() {                                                                        // 89
        return Spacebars.mustache(view.lookup("tag"));                                                                // 90
      })), "\n                              " ];                                                                      // 91
    }), "\n                         " ];                                                                              // 92
  }), "\n                    "), "\n\n               "), "\n\n               ", HTML.DIV({                            // 93
    "class": "col-md-3"                                                                                               // 94
  }, "\n                    ", HTML.IMG({                                                                             // 95
    src: function() {                                                                                                 // 96
      return Spacebars.mustache(Spacebars.dot(view.lookup("trip"), "picture"));                                       // 97
    },                                                                                                                // 98
    "class": "img-thumbnail"                                                                                          // 99
  }), "\n               "), "\n\n               ", HTML.DIV({                                                         // 100
    "class": "col-md-3"                                                                                               // 101
  }, "\n\n                    ", Blaze.If(function() {                                                                // 102
    return Spacebars.call(view.lookup("getUserName"));                                                                // 103
  }, function() {                                                                                                     // 104
    return [ "\n                         ", Blaze.If(function() {                                                     // 105
      return Spacebars.call(view.lookup("isMine"));                                                                   // 106
    }, function() {                                                                                                   // 107
      return [ "\n                              ", HTML.BUTTON({                                                      // 108
        "class": "js-cancel btn-sm btn-danger btn-block"                                                              // 109
      }, "Cancel Trip!"), "\n                         " ];                                                            // 110
    }, function() {                                                                                                   // 111
      return [ "\n                              ", Blaze.If(function() {                                              // 112
        return Spacebars.call(view.lookup("amGoing"));                                                                // 113
      }, function() {                                                                                                 // 114
        return [ "\n                                   ", HTML.BUTTON({                                               // 115
          "class": function() {                                                                                       // 116
            return [ "js-changeAmGoing amGoing-color-", Spacebars.mustache(Spacebars.dot(view.lookup("trip"), "_id")), " btn-sm btn-default btn-block" ];
          }                                                                                                           // 118
        }, "\n                                        ", HTML.SPAN({                                                  // 119
          "class": function() {                                                                                       // 120
            return [ "amGoing-text-", Spacebars.mustache(Spacebars.dot(view.lookup("trip"), "_id")) ];                // 121
          }                                                                                                           // 122
        }, "Remove Me!"), "\n                                   "), "\n                              " ];             // 123
      }, function() {                                                                                                 // 124
        return [ "\n                                   ", HTML.BUTTON({                                               // 125
          "class": function() {                                                                                       // 126
            return [ "js-changeAmGoing amGoing-color-", Spacebars.mustache(Spacebars.dot(view.lookup("trip"), "_id")), " btn-sm btn-warning btn-block" ];
          }                                                                                                           // 128
        }, "\n                                        ", HTML.SPAN({                                                  // 129
          "class": function() {                                                                                       // 130
            return [ "amGoing-text-", Spacebars.mustache(Spacebars.dot(view.lookup("trip"), "_id")) ];                // 131
          }                                                                                                           // 132
        }, "Add Me!"), "\n                                   "), "\n                              " ];                // 133
      }), "\n                         " ];                                                                            // 134
    }), "\n                    " ];                                                                                   // 135
  }), "\n\n                    ", HTML.SMALL("\n                         ", Blaze.If(function() {                     // 136
    return Spacebars.call(Spacebars.dot(view.lookup("trip"), "destination"));                                         // 137
  }, function() {                                                                                                     // 138
    return [ "\n                              In ", HTML.EM(Blaze.View("lookup:trip.destination", function() {        // 139
      return Spacebars.mustache(Spacebars.dot(view.lookup("trip"), "destination"));                                   // 140
    })), "\n                         " ];                                                                             // 141
  }), "\n\n                         ", Blaze.If(function() {                                                          // 142
    return Spacebars.call(Spacebars.dot(view.lookup("trip"), "from"));                                                // 143
  }, function() {                                                                                                     // 144
    return [ "\n                              from ", HTML.EM(Blaze.View("lookup:trip.from", function() {             // 145
      return Spacebars.mustache(Spacebars.dot(view.lookup("trip"), "from"));                                          // 146
    })), "\n                         " ];                                                                             // 147
  }), "\n\n\n                         ", Blaze.If(function() {                                                        // 148
    return Spacebars.call(Spacebars.dot(view.lookup("trip"), "to"));                                                  // 149
  }, function() {                                                                                                     // 150
    return [ "\n                              to ", HTML.EM(Blaze.View("lookup:trip.to", function() {                 // 151
      return Spacebars.mustache(Spacebars.dot(view.lookup("trip"), "to"));                                            // 152
    })), "\n                         " ];                                                                             // 153
  }), "\n\n                         ", Blaze.If(function() {                                                          // 154
    return Spacebars.call(Spacebars.dot(view.lookup("trip"), "cost"));                                                // 155
  }, function() {                                                                                                     // 156
    return [ "\n                              for ", HTML.EM("$", Blaze.View("lookup:trip.cost", function() {         // 157
      return Spacebars.mustache(Spacebars.dot(view.lookup("trip"), "cost"));                                          // 158
    })), "\n                         " ];                                                                             // 159
  }), "\n\n                         ", Blaze.If(function() {                                                          // 160
    return Spacebars.call(Spacebars.dot(view.lookup("trip"), "author"));                                              // 161
  }, function() {                                                                                                     // 162
    return [ "\n                              by\n                              ", Blaze.If(function() {              // 163
      return Spacebars.call(view.lookup("isMine"));                                                                   // 164
    }, function() {                                                                                                   // 165
      return [ "\n                                   ", HTML.SPAN({                                                   // 166
        "class": "label label-primary"                                                                                // 167
      }, "Me"), "\n                              " ];                                                                 // 168
    }, function() {                                                                                                   // 169
      return [ "\n                                   ", HTML.SPAN({                                                   // 170
        "class": "label label-info"                                                                                   // 171
      }, Blaze.View("lookup:trip.author", function() {                                                                // 172
        return Spacebars.mustache(Spacebars.dot(view.lookup("trip"), "author"));                                      // 173
      })), "\n                              " ];                                                                      // 174
    }), "\n                         " ];                                                                              // 175
  }), "\n                         .\n                         ", HTML.Raw("<br>"), HTML.Raw("<br>"), "\n\n                         ", Blaze.If(function() {
    return Spacebars.call(view.lookup("getUserName"));                                                                // 177
  }, function() {                                                                                                     // 178
    return "\n                         ";                                                                             // 179
  }, function() {                                                                                                     // 180
    return [ "\n                              ", HTML.BR(), "\n                         " ];                          // 181
  }), "\n\n                         ", Blaze.If(function() {                                                          // 182
    return Spacebars.call(view.lookup("hasEnoughTravelers"));                                                         // 183
  }, function() {                                                                                                     // 184
    return [ "\n                              ", HTML.BR(), "\n                              ", HTML.DIV({            // 185
      "class": "progress"                                                                                             // 186
    }, "\n                                   ", HTML.DIV({                                                            // 187
      "class": "progress-bar progress-bar-success progress-bar-striped",                                              // 188
      role: "progressbar",                                                                                            // 189
      style: function() {                                                                                             // 190
        return [ "width: ", Spacebars.mustache(view.lookup("getProgressBarWidth")), "%" ];                            // 191
      }                                                                                                               // 192
    }, "\n                                        This trip has enough people!\n                                   "), "\n                              "), "\n                         " ];
  }, function() {                                                                                                     // 194
    return [ "\n                              ", HTML.P({                                                             // 195
      "class": "text-right"                                                                                           // 196
    }, "\n                                   ", HTML.SMALL("\n                                        ", Blaze.If(function() {
      return Spacebars.call(Spacebars.dot(view.lookup("trip"), "threshold"));                                         // 198
    }, function() {                                                                                                   // 199
      return [ "\n                                             ", Blaze.View("lookup:getTravelerCount", function() {  // 200
        return Spacebars.mustache(view.lookup("getTravelerCount"), view.lookup("trip"));                              // 201
      }), " Going / ", Blaze.View("lookup:trip.threshold", function() {                                               // 202
        return Spacebars.mustache(Spacebars.dot(view.lookup("trip"), "threshold"));                                   // 203
      }), " Needed\n                                        " ];                                                      // 204
    }), "\n                                   "), "\n                              "), "\n\n                              ", HTML.DIV({
      "class": "progress"                                                                                             // 206
    }, "\n                                   ", HTML.DIV({                                                            // 207
      "class": "progress-bar progress-bar-warning progress-bar-striped",                                              // 208
      role: "progressbar",                                                                                            // 209
      style: function() {                                                                                             // 210
        return [ "width: ", Spacebars.mustache(view.lookup("getProgressBarWidth")), "%" ];                            // 211
      }                                                                                                               // 212
    }), "\n                              "), "\n                         " ];                                         // 213
  }), "\n\n                    "), "\n\n               "), "\n          "), "\n     ");                               // 214
}));                                                                                                                  // 215
                                                                                                                      // 216
Template.__checkName("GroupCampDetails");                                                                             // 217
Template["GroupCampDetails"] = new Template("Template.GroupCampDetails", (function() {                                // 218
  var view = this;                                                                                                    // 219
  return HTML.DIV({                                                                                                   // 220
    "class": "container"                                                                                              // 221
  }, HTML.Raw('\n     <div class="page-header">\n          <h1 class="text-center">\n               <img src="https://lightcastletech.files.wordpress.com/2013/04/campfire.png" width="80">\n               Group Camp\n               <small>Trip Details</small>\n          </h1>\n     </div>\n     '), HTML.DIV({
    "class": "page-header"                                                                                            // 223
  }, "\n          ", HTML.P({                                                                                         // 224
    "class": "text-center"                                                                                            // 225
  }, "\n               ", HTML.H1("\n                    ", Blaze.View("lookup:title", function() {                   // 226
    return Spacebars.mustache(view.lookup("title"));                                                                  // 227
  }), " ", HTML.Raw("<br>"), "\n                    ", HTML.SMALL(Blaze.View("lookup:message", function() {           // 228
    return Spacebars.mustache(view.lookup("message"));                                                                // 229
  })), "\n               "), "\n               ", HTML.H5("\n                    ", Blaze.Each(function() {           // 230
    return {                                                                                                          // 231
      _sequence: Spacebars.call(view.lookup("tags")),                                                                 // 232
      _variable: "tag"                                                                                                // 233
    };                                                                                                                // 234
  }, function() {                                                                                                     // 235
    return [ "\n                         ", HTML.SPAN({                                                               // 236
      "class": "label label-default"                                                                                  // 237
    }, Blaze.View("lookup:tag", function() {                                                                          // 238
      return Spacebars.mustache(view.lookup("tag"));                                                                  // 239
    })), "\n                    " ];                                                                                  // 240
  }), "\n               "), "\n          "), "\n     "), "\n\n     ", Blaze.If(function() {                           // 241
    return Spacebars.call(view.lookup("picture"));                                                                    // 242
  }, function() {                                                                                                     // 243
    return [ "\n          ", HTML.P({                                                                                 // 244
      "class": "text-center"                                                                                          // 245
    }, "\n               ", HTML.IMG({                                                                                // 246
      src: function() {                                                                                               // 247
        return Spacebars.mustache(view.lookup("picture"));                                                            // 248
      },                                                                                                              // 249
      width: "750"                                                                                                    // 250
    }), "\n               ", HTML.BR(), HTML.BR(), HTML.BR(), "\n          "), "\n     " ];                           // 251
  }), "\n\n     ", Blaze.If(function() {                                                                              // 252
    return Spacebars.call(view.lookup("description"));                                                                // 253
  }, function() {                                                                                                     // 254
    return [ "\n          ", HTML.BLOCKQUOTE("\n               ", Blaze.View("lookup:description", function() {       // 255
      return Spacebars.mustache(view.lookup("description"));                                                          // 256
    }), "\n          "), "\n     " ];                                                                                 // 257
  }), "\n\n     In ", HTML.EM(Blaze.View("lookup:destination", function() {                                           // 258
    return Spacebars.mustache(view.lookup("destination"));                                                            // 259
  })), "\n     from ", HTML.EM(Blaze.View("lookup:from", function() {                                                 // 260
    return Spacebars.mustache(view.lookup("from"));                                                                   // 261
  })), "\n     to ", HTML.EM(Blaze.View("lookup:to", function() {                                                     // 262
    return Spacebars.mustache(view.lookup("to"));                                                                     // 263
  })), "\n\n     by\n     ", Blaze.If(function() {                                                                    // 264
    return Spacebars.call(view.lookup("isMine"));                                                                     // 265
  }, function() {                                                                                                     // 266
    return [ "\n          ", HTML.SPAN({                                                                              // 267
      "class": "label label-primary"                                                                                  // 268
    }, "Me"), "\n     " ];                                                                                            // 269
  }, function() {                                                                                                     // 270
    return [ "\n          ", HTML.SPAN({                                                                              // 271
      "class": "label label-info"                                                                                     // 272
    }, Blaze.View("lookup:author", function() {                                                                       // 273
      return Spacebars.mustache(view.lookup("author"));                                                               // 274
    })), "\n     " ];                                                                                                 // 275
  }), "\n\n     on ", HTML.EM(Blaze.View("lookup:timestamp", function() {                                             // 276
    return Spacebars.mustache(view.lookup("timestamp"));                                                              // 277
  })), HTML.Raw(".\n\n     <br><br>\n     At least "), Blaze.View("lookup:threshold", function() {                    // 278
    return Spacebars.mustache(view.lookup("threshold"));                                                              // 279
  }), " people needed for this trip.\n\n     Travelers Signed Up (", Blaze.View("lookup:travelers.length", function() {
    return Spacebars.mustache(Spacebars.dot(view.lookup("travelers"), "length"));                                     // 281
  }), HTML.Raw(" so far):<br>\n     "), Blaze.Each(function() {                                                       // 282
    return {                                                                                                          // 283
      _sequence: Spacebars.call(view.lookup("travelers")),                                                            // 284
      _variable: "traveler"                                                                                           // 285
    };                                                                                                                // 286
  }, function() {                                                                                                     // 287
    return [ "\n          ", Blaze.If(function() {                                                                    // 288
      return Spacebars.dataMustache(view.lookup("isMe"), view.lookup("traveler"));                                    // 289
    }, function() {                                                                                                   // 290
      return [ "\n               ", HTML.SPAN({                                                                       // 291
        "class": "label label-primary"                                                                                // 292
      }, "Me"), "\n          " ];                                                                                     // 293
    }, function() {                                                                                                   // 294
      return [ "\n               ", HTML.SPAN({                                                                       // 295
        "class": "label label-info"                                                                                   // 296
      }, Blaze.View("lookup:traveler", function() {                                                                   // 297
        return Spacebars.mustache(view.lookup("traveler"));                                                           // 298
      })), "\n          " ];                                                                                          // 299
    }), "\n     " ];                                                                                                  // 300
  }), "\n\n     ", Blaze.If(function() {                                                                              // 301
    return Spacebars.call(view.lookup("link"));                                                                       // 302
  }, function() {                                                                                                     // 303
    return [ "\n          ", HTML.BR(), HTML.BR(), "\n          ", HTML.P({                                           // 304
      "class": "text-right"                                                                                           // 305
    }, "\n               ", HTML.A({                                                                                  // 306
      href: function() {                                                                                              // 307
        return Spacebars.mustache(view.lookup("link"));                                                               // 308
      }                                                                                                               // 309
    }, "Click Here"), " for more information.\n          "), "\n     " ];                                             // 310
  }), "\n");                                                                                                          // 311
}));                                                                                                                  // 312
                                                                                                                      // 313
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"groupCampSearch.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// pages/groupCampSearch/client/groupCampSearch.js                                                                    //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
// Group Camp Search                                                                                                  //
Template.groupCampSearch.helpers({                                                                                    // 2
     hasTrips: function () {                                                                                          // 3
          function hasTrips() {                                                                                       // 3
               if (Session.get("searchBy") == "tag") return GroupCampTrips.find({ tags: Session.get("searchedTag") }).count() != 0;else if (Session.get("searchBy") == "mine") return GroupCampTrips.find({ author: Meteor.user().userName }).count() != 0;else if (Session.get("searchBy") == "going") return GroupCampTrips.find({ travelers: Meteor.user().userName }).count() != 0;else return GroupCampTrips.find({}).count() != 0;
          }                                                                                                           // 12
                                                                                                                      //
          return hasTrips;                                                                                            // 3
     }(),                                                                                                             // 3
                                                                                                                      //
     getTrips: function () {                                                                                          // 14
          function getTrips() {                                                                                       // 14
               if (Session.get("searchBy") == "tag") return GroupCampTrips.find({ tags: Session.get("searchedTag") });else if (Session.get("searchBy") == "mine") return GroupCampTrips.find({ author: Meteor.user().userName });else if (Session.get("searchBy") == "going") return GroupCampTrips.find({ travelers: Meteor.user().userName });else return GroupCampTrips.find({});
          }                                                                                                           // 23
                                                                                                                      //
          return getTrips;                                                                                            // 14
     }(),                                                                                                             // 14
                                                                                                                      //
     getUserName: function () {                                                                                       // 25
          function getUserName() {                                                                                    // 25
               return Meteor.user().userName;                                                                         // 25
          }                                                                                                           // 25
                                                                                                                      //
          return getUserName;                                                                                         // 25
     }()                                                                                                              // 25
});                                                                                                                   // 2
                                                                                                                      //
Template.groupCampSearch.events({                                                                                     // 28
     "click .js-searchTags": function () {                                                                            // 29
          function clickJsSearchTags(event, instance) {                                                               // 29
               event.preventDefault();                                                                                // 30
               searchedTag = $(".js-searchTag").val().toLowerCase().trim();                                           // 31
               Session.set("searchBy", "tag");                                                                        // 32
               Session.set("searchedTag", searchedTag);                                                               // 33
          }                                                                                                           // 34
                                                                                                                      //
          return clickJsSearchTags;                                                                                   // 29
     }(),                                                                                                             // 29
                                                                                                                      //
     "click .js-seeAll": function () {                                                                                // 36
          function clickJsSeeAll(event, instance) {                                                                   // 36
               event.preventDefault();                                                                                // 37
               Session.set("searchBy", null);                                                                         // 38
               Session.set("searchedTag", null);                                                                      // 39
          }                                                                                                           // 40
                                                                                                                      //
          return clickJsSeeAll;                                                                                       // 36
     }(),                                                                                                             // 36
                                                                                                                      //
     "click .js-seeMine": function () {                                                                               // 42
          function clickJsSeeMine() {                                                                                 // 42
               event.preventDefault();                                                                                // 43
               Session.set("searchBy", "mine");                                                                       // 44
               Session.set("searchedTag", null);                                                                      // 45
          }                                                                                                           // 46
                                                                                                                      //
          return clickJsSeeMine;                                                                                      // 42
     }(),                                                                                                             // 42
                                                                                                                      //
     "click .js-seeAmGoing": function () {                                                                            // 48
          function clickJsSeeAmGoing() {                                                                              // 48
               event.preventDefault();                                                                                // 49
               Session.set("searchBy", "going");                                                                      // 50
               Session.set("searchedTag", null);                                                                      // 51
          }                                                                                                           // 52
                                                                                                                      //
          return clickJsSeeAmGoing;                                                                                   // 48
     }()                                                                                                              // 48
});                                                                                                                   // 28
                                                                                                                      //
// Group Camp Listing                                                                                                 //
                                                                                                                      //
Template.GroupCampListing.onCreated(function () {                                                                     // 58
     this.state = new ReactiveDict();                                                                                 // 59
     this.state.setDefault({ "going": false });                                                                       // 60
});                                                                                                                   // 61
                                                                                                                      //
Template.GroupCampListing.helpers({                                                                                   // 63
     amGoing: function () {                                                                                           // 64
          function amGoing() {                                                                                        // 64
               var trip = GroupCampTrips.findOne({ _id: this.trip._id });                                             // 65
               var travelers = trip && trip.travelers;                                                                // 66
               var index = travelers.indexOf(Meteor.user().userName);                                                 // 67
                                                                                                                      //
               if (index == -1) return false;else return true;                                                        // 69
          }                                                                                                           // 73
                                                                                                                      //
          return amGoing;                                                                                             // 64
     }(),                                                                                                             // 64
                                                                                                                      //
     getTravelerCount: function () {                                                                                  // 75
          function getTravelerCount() {                                                                               // 75
               var trip = GroupCampTrips.findOne({ _id: this.trip._id });                                             // 76
               var travelers = trip && trip.travelers;                                                                // 77
               return travelers.length;                                                                               // 78
          }                                                                                                           // 79
                                                                                                                      //
          return getTravelerCount;                                                                                    // 75
     }(),                                                                                                             // 75
                                                                                                                      //
     getUserName: function () {                                                                                       // 81
          function getUserName() {                                                                                    // 81
               return Meteor.user().userName;                                                                         // 81
          }                                                                                                           // 81
                                                                                                                      //
          return getUserName;                                                                                         // 81
     }(),                                                                                                             // 81
                                                                                                                      //
     isMine: function () {                                                                                            // 83
          function isMine() {                                                                                         // 83
               author = this.trip.author;                                                                             // 84
               if (author == Meteor.user().userName) return true;else return false;                                   // 85
          }                                                                                                           // 89
                                                                                                                      //
          return isMine;                                                                                              // 83
     }(),                                                                                                             // 83
                                                                                                                      //
     isSearchedTag: function () {                                                                                     // 91
          function isSearchedTag(tag) {                                                                               // 91
               return Session.get("searchedTag") == tag;                                                              // 92
          }                                                                                                           // 93
                                                                                                                      //
          return isSearchedTag;                                                                                       // 91
     }(),                                                                                                             // 91
                                                                                                                      //
     hasEnoughTravelers: function () {                                                                                // 95
          function hasEnoughTravelers() {                                                                             // 95
               var trip = GroupCampTrips.findOne({ _id: this.trip._id });                                             // 96
               var travelers = trip && trip.travelers;                                                                // 97
               if (travelers.length < trip.threshold) return false;else return true;                                  // 98
          }                                                                                                           // 102
                                                                                                                      //
          return hasEnoughTravelers;                                                                                  // 95
     }(),                                                                                                             // 95
                                                                                                                      //
     getAlertColor: function () {                                                                                     // 104
          function getAlertColor() {                                                                                  // 104
               var trip = GroupCampTrips.findOne({ _id: this.trip._id });                                             // 105
               var travelers = trip && trip.travelers;                                                                // 106
               if (travelers.length < trip.threshold) return "alert-warning";else return "alert-success";             // 107
          }                                                                                                           // 111
                                                                                                                      //
          return getAlertColor;                                                                                       // 104
     }(),                                                                                                             // 104
                                                                                                                      //
     getProgressBarWidth: function () {                                                                               // 113
          function getProgressBarWidth() {                                                                            // 113
               var trip = GroupCampTrips.findOne({ _id: this.trip._id });                                             // 114
               var travelers = trip && trip.travelers;                                                                // 115
               return 100 * travelers.length / trip.threshold;                                                        // 116
          }                                                                                                           // 117
                                                                                                                      //
          return getProgressBarWidth;                                                                                 // 113
     }()                                                                                                              // 113
});                                                                                                                   // 63
                                                                                                                      //
Template.GroupCampListing.events({                                                                                    // 120
     "click .js-changeAmGoing": function () {                                                                         // 121
          function clickJsChangeAmGoing() {                                                                           // 121
               var trip = GroupCampTrips.findOne({ _id: this.trip._id });                                             // 122
               var travelers = trip && trip.travelers;                                                                // 123
               console.log(travelers);                                                                                // 124
               var username = Meteor.user() && Meteor.user().userName;                                                // 125
               var index = travelers.indexOf(username);                                                               // 126
                                                                                                                      //
               if (index == -1) {                                                                                     // 128
                    GroupCampTrips.update({ _id: this.trip._id }, { $push: { travelers: username } });                // 129
                                                                                                                      //
                    console.log("added me");                                                                          // 131
                    console.log(GroupCampTrips.findOne({ _id: this.trip._id }).travelers.toString());                 // 132
                                                                                                                      //
                    $('.amGoing-color-' + this.trip._id).removeClass('btn-warning').addClass('btn-default');          // 134
                    $('.amGoing-text-' + this.trip._id).html('Remove Me!');                                           // 135
               } else {                                                                                               // 136
                    travelers.splice(index, 1);                                                                       // 138
                    GroupCampTrips.update({ _id: this.trip._id }, { $set: { travelers: travelers } });                // 139
                                                                                                                      //
                    console.log("removed me");                                                                        // 141
                    console.log(GroupCampTrips.findOne({ _id: this.trip._id }).travelers.toString());                 // 142
                                                                                                                      //
                    $('.amGoing-color-' + this.trip._id).removeClass('btn-default').addClass('btn-warning');          // 144
                    $('.amGoing-text-' + this.trip._id).html('Add Me!');                                              // 145
               }                                                                                                      // 146
          }                                                                                                           // 147
                                                                                                                      //
          return clickJsChangeAmGoing;                                                                                // 121
     }(),                                                                                                             // 121
                                                                                                                      //
     "click .js-cancel": function () {                                                                                // 149
          function clickJsCancel() {                                                                                  // 149
               GroupCampTrips.remove({ _id: this.trip._id });                                                         // 150
          }                                                                                                           // 151
                                                                                                                      //
          return clickJsCancel;                                                                                       // 149
     }(),                                                                                                             // 149
                                                                                                                      //
     "click .js-cancel": function () {                                                                                // 153
          function clickJsCancel() {                                                                                  // 153
               GroupCampTrips.remove({ _id: this.trip._id });                                                         // 154
          }                                                                                                           // 155
                                                                                                                      //
          return clickJsCancel;                                                                                       // 153
     }()                                                                                                              // 153
});                                                                                                                   // 120
                                                                                                                      //
// Group Camp Details                                                                                                 //
                                                                                                                      //
Template.GroupCampDetails.helpers({                                                                                   // 161
     getTags: function () {                                                                                           // 162
          function getTags() {                                                                                        // 162
               return tags.toString();                                                                                // 163
          }                                                                                                           // 164
                                                                                                                      //
          return getTags;                                                                                             // 162
     }(),                                                                                                             // 162
                                                                                                                      //
     isMine: function () {                                                                                            // 166
          function isMine() {                                                                                         // 166
               if (author == Meteor.user().userName) return true;else return false;                                   // 167
          }                                                                                                           // 171
                                                                                                                      //
          return isMine;                                                                                              // 166
     }(),                                                                                                             // 166
                                                                                                                      //
     isMe: function () {                                                                                              // 173
          function isMe(traveler) {                                                                                   // 173
               if (traveler == Meteor.user().userName) return true;else return false;                                 // 174
          }                                                                                                           // 178
                                                                                                                      //
          return isMe;                                                                                                // 173
     }()                                                                                                              // 173
});                                                                                                                   // 161
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"home":{"client":{"template.home.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// pages/home/client/template.home.js                                                                                 //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("home");                                                                                         // 2
Template["home"] = new Template("Template.home", (function() {                                                        // 3
  var view = this;                                                                                                    // 4
  return [ HTML.HTML("\n      ", HTML.HEAD("\n        ", HTML.Raw('<link type="text/css" rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500">'), "\n        ", HTML.SCRIPT({
    src: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAScLVvC2ZiCBA_PEeXspeLOCKT0mimjTg&sensor=false&libraries=places&callback=initialize"
  }), "\n        ", HTML.SCRIPT("\n            var autocomplete;\n            function initialize() {\n               var options = {\n  types: ['(cities)']\n };\n              autocomplete = new google.maps.places.Autocomplete(\n                  /** @type {HTMLInputElement} */(document.getElementById('autocomplete')),\n                  options);\n              google.maps.event.addListener(autocomplete, 'place_changed', function() {\n              });\n            }\n        "), "\n      "), "\n      ", HTML.Raw("<body>\n        \n      </body>"), "\n    "), "\n\n  ", HTML.STYLE("\n  h1{\n    font-family: 'Galada', cursive;\n    color: white;\n    font-size: 250%;\n    }"), "\n  ", HTML.BODY({
    id: "home"                                                                                                        // 8
  }, "\n    ", HTML.DIV({                                                                                             // 9
    "class": "container",                                                                                             // 10
    id: "homepage"                                                                                                    // 11
  }, "\n  ", HTML.DIV({                                                                                               // 12
    "class": "searchbar"                                                                                              // 13
  }, "\n    ", HTML.H1(Blaze.View("lookup:msg.greetingmsg", function() {                                              // 14
    return Spacebars.mustache(Spacebars.dot(view.lookup("msg"), "greetingmsg"));                                      // 15
  })), "\n    ", HTML.Raw("<h1>Get started by entering a destination:</h1>"), "\n    ", HTML.Raw("<br>"), "\n    \n          ", HTML.Raw('<form id="searchbar">\n              <input type="search" id="autocomplete" class=" js-loca">\n                <!-- <span class="input-group-btn">\n                  <input class="btn btn-default" type="submit" value="Go!">\n                </span> -->\n\n        </form>'), "\n        ", HTML.Raw('<button id="speakbut" class="js-speak"></button>'), "\n        "), "\n  "), "\n     ", HTML.Raw('<section class="for-full-back color-bg-one" id="about-sec">\n        <div class="container" id="about">\n            <div class="row text-center">\n                <div class="col-md-8 col-md-offset-2 g-pad-bottom">\n                    <h1><span class="glyphicon glyphicon-plane" aria-hidden="true"></span><br>Up for a trip...</h1>\n                </div>\n                <div class="row text-center">\n                    <div class="col-md-8 col-md-offset-2 ">\n                        <h4>\n                            <strong>Checkout the itineraries and group camps ^.^ \n                            <br>\n                            Can\'t find one you like?\n                            <br>\n                            <br>\n                             <button id="createbut" class="js-createit btn btn-info">Create your own <br> itinerary!!!</button>\n                            <button id="createbut" class="js-creategroup btn btn-info">Create your own <br> group camp!!!</button>\n                            </strong>\n                        </h4>\n                        <br>\n                        <br>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>'), "\n    ", HTML.Raw('<section class="for-full-back color-white" id="about-team">\n        <div class="container" id="poploca">\n            <div class="row text-center g-pad-bottom">\n                <div class="col-md-8 col-md-offset-2 ">\n                    <h2 id="pop">Popular Locations</h2>\n                    <h4><strong id="ideas"> Out of ideas?... <br> Checkout some of the popular global locations.</strong>                   \n                    </h4>\n                </div>\n\n            </div>\n            <div class="row text-center g-pad-bottom">\n                <div class="col-md-12 ">\n                    <div class="col-md-3 col-sm-3 col-xs-6">\n                        <div class="team-member">\n                            <img id="popular" src="http://travelblog.goaheadtours.com/wp-content/uploads/Mount-Fuji-Tokyo-Japan-Cherry-Blossoms.jpg" width="100%" alt="Tokyo Japan">\n                            <h3><strong class="tag">Tokyo, Japan </strong></h3>\n                            <input type="button" class="btn  js-gojapan" value="Read More">\n                        </div>\n                    </div>\n                    <div class="col-md-3 col-sm-3 col-xs-6">\n                        <div class="team-member">\n                            <img id="popular" src="https://www.shoretrips.com/excursion-image/paris-france/private-transfer-from-paris-hotel-to-le-havre/118791_130625115936.jpg" width="100%" height="170px" alt="Eiffel Tower">\n                            <h3><strong>Paris, France</strong></h3>\n                            <input type="button" class="btn  js-goparis" value="Read More">\n                        </div>\n                    </div>\n                    <div class="col-md-3 col-sm-3 col-xs-6">\n                        <div class="team-member">\n                            <img id="popular" src="http://collections.uiowa.edu/web-images/internationalPrograms/ofsa/3603/logistics/sydney%20opera%20hours.jpg" width="100%" alt="Tokyo Japan">\n                            <h3><strong id="aus">Sydney, Austrailia</strong></h3>\n                            \n                            <input type="button" class="btn  js-gosydney" value="Read More">\n                        </div>\n                    </div>\n                    <div class="col-md-3 col-sm-3 col-xs-6">\n                        <div class="team-member">\n                            <img id="popular" src="http://media4.popsugar-assets.com/files/2014/04/08/792/n/1922441/d238667789add97f_shutterstock_139999093.xxxlarge_2x/i/London-England.jpg" alt="">\n                            <h3><strong>London, England</strong></h3>\n                            <input type="button" class="btn  js-golondon" value="Read More">\n                        </div>\n                    </div>\n\n\n\n                    <br>\n                    <br>\n\n                </div>\n            </div>\n            \n\n        </div>\n    </section>'), "\n\n\n\n    ") ];
}));                                                                                                                  // 17
                                                                                                                      // 18
Template.__checkName("showSearch");                                                                                   // 19
Template["showSearch"] = new Template("Template.showSearch", (function() {                                            // 20
  var view = this;                                                                                                    // 21
  return HTML.DIV({                                                                                                   // 22
    "class": "container"                                                                                              // 23
  }, "\n        ", HTML.DIV({                                                                                         // 24
    "class": "jumbotron",                                                                                             // 25
    style: function() {                                                                                               // 26
      return [ "background-image: url(", Spacebars.mustache(view.lookup("image")), "); background-size: 100%; height: 100%;" ];
    }                                                                                                                 // 28
  }, HTML.Raw("<br>"), HTML.Raw("<br>"), HTML.Raw("<br>"), HTML.Raw("<br>"), HTML.Raw("<br>"), HTML.Raw("<br>"), HTML.Raw("<br>"), HTML.Raw("<br>"), HTML.Raw("<br>"), HTML.Raw("<br>"), HTML.Raw("<br>"), HTML.Raw("<br>"), HTML.Raw("<br>"), HTML.Raw("<br>"), HTML.Raw("<br>"), "\n  "), "\n      ", HTML.DIV({
    "class": "row"                                                                                                    // 30
  }, "\n    ", HTML.DIV({                                                                                             // 31
    "class": "col-md-12  col-md-offset-0  bg-info"                                                                    // 32
  }, "\n      ", HTML.H1(Blaze.View("lookup:title", function() {                                                      // 33
    return Spacebars.mustache(view.lookup("title"));                                                                  // 34
  })), "\n      ", HTML.H4(Blaze.View("lookup:username", function() {                                                 // 35
    return Spacebars.mustache(view.lookup("username"));                                                               // 36
  })), "\n      ", HTML.H3(HTML.UL("\n        ", HTML.DIV(" \n        ", Blaze.Each(function() {                      // 37
    return {                                                                                                          // 38
      _sequence: Spacebars.call(view.lookup("destination")),                                                          // 39
      _variable: "d"                                                                                                  // 40
    };                                                                                                                // 41
  }, function() {                                                                                                     // 42
    return [ "\n            ", HTML.SPAN({                                                                            // 43
      "class": "glyphicon glyphicon-map-marker",                                                                      // 44
      "aria-hidden": "true"                                                                                           // 45
    }), Blaze.View("lookup:d.value", function() {                                                                     // 46
      return Spacebars.mustache(Spacebars.dot(view.lookup("d"), "value"));                                            // 47
    }), "\n          \n        " ];                                                                                   // 48
  }), "\n      "), "\n      ")), "\n      ", HTML.DIV({                                                               // 49
    "class": "panel panel-default"                                                                                    // 50
  }, "\n          ", HTML.DIV({                                                                                       // 51
    "class": "panel-body"                                                                                             // 52
  }, "\n          ", HTML.H4(HTML.Raw('<span class="glyphicon glyphicon-plane" aria-hidden="true"></span>'), " Arrival: ", Blaze.View("lookup:arrival", function() {
    return Spacebars.mustache(view.lookup("arrival"));                                                                // 54
  })), "\n          ", HTML.H4(HTML.Raw('<span class="glyphicon glyphicon-user" aria-hidden="true"></span>'), " Companions: ", Blaze.View("lookup:amountOfTraveler", function() {
    return Spacebars.mustache(view.lookup("amountOfTraveler"));                                                       // 56
  })), "\n          ", HTML.H4(HTML.Raw('<span class="glyphicon glyphicon-usd" aria-hidden="true"></span>'), " Approximate Expense: ", Blaze.View("lookup:expenses", function() {
    return Spacebars.mustache(view.lookup("expenses"));                                                               // 58
  })), "\n          "), "\n      "), "\n      ", HTML.H4(" Description: ", Blaze.View("lookup:description", function() {
    return Spacebars.mustache(view.lookup("description"));                                                            // 60
  })), "\n      ", HTML.Raw("<br>"), "\n    "), "\n  "), "\n\n        ", Blaze.Each(function() {                      // 61
    return Spacebars.call(view.lookup("inputs"));                                                                     // 62
  }, function() {                                                                                                     // 63
    return [ "\n           ", Spacebars.include(view.lookupTemplate("input")), "\n        " ];                        // 64
  }), HTML.Raw('\n            <button type="button" id="add" class="btn btn-default addButton js-text"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span> Add Text </button>\n            <button type="button" id="add" class="btn btn-default addButton js-text"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span> Add Image Links </button>\n            '), HTML.INPUT({
    type: "password",                                                                                                 // 66
    style: "display:none",                                                                                            // 67
    "class": "js-idd",                                                                                                // 68
    value: function() {                                                                                               // 69
      return Spacebars.mustache(view.lookup("_id"));                                                                  // 70
    }                                                                                                                 // 71
  }), HTML.Raw('\n            <button class="btn btn-info js-subtext">Submit</button>\n            \n'));             // 72
}));                                                                                                                  // 73
                                                                                                                      // 74
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"home.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// pages/home/client/home.js                                                                                          //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Session.set("results", "0");                                                                                          // 1
Template.home.helpers({                                                                                               // 2
  searchdata: function () {                                                                                           // 3
    function searchdata() {                                                                                           // 3
      return DestSearched.find({}, { sort: { searches: -1 } });                                                       // 3
    }                                                                                                                 // 3
                                                                                                                      //
    return searchdata;                                                                                                // 3
  }()                                                                                                                 // 3
});                                                                                                                   // 2
// resultData: function(){                                                                                            //
// 	let loc = Session.get("results");                                                                                 //
// 	return Trips.find({destination: loc},{sort:{datecreated: -1}});                                                   //
// },                                                                                                                 //
Template.home.events({                                                                                                // 9
  "submit form": function () {                                                                                        // 10
    function submitForm() {                                                                                           // 10
      event.preventDefault();                                                                                         // 11
      var destination = $(".js-loca").val().toLowerCase();                                                            // 12
                                                                                                                      //
      Router.go('searchresults');                                                                                     // 14
      Session.set("results", destination);                                                                            // 15
      // Meteor.call("search", destination);                                                                          //
      if (DestSearched.find({ location: destination }).count() == 0) {                                                // 17
        console.dir("New Destination added to database");                                                             // 18
        var search_obj = { location: destination,                                                                     // 19
          searches: 1                                                                                                 // 21
        };                                                                                                            // 20
        DestSearched.insert(search_obj);                                                                              // 23
      } else {                                                                                                        // 25
        console.dir("Destination search incremented");                                                                // 26
        DestSearched.update({ _id: DestSearched.findOne({ location: destination })._id }, { $inc: { searches: 1 } });
      }                                                                                                               // 28
    }                                                                                                                 // 30
                                                                                                                      //
    return submitForm;                                                                                                // 10
  }(),                                                                                                                // 10
  msg: function () {                                                                                                  // 31
    function msg() {                                                                                                  // 31
      return Settings.findOne({ user: Meteor.userId() });                                                             // 31
    }                                                                                                                 // 31
                                                                                                                      //
    return msg;                                                                                                       // 31
  }(),                                                                                                                // 31
  usersearch: function () {                                                                                           // 32
    function usersearch() {                                                                                           // 32
      //return Session.get("prefer");                                                                                 //
      return Trips.find();                                                                                            // 34
    }                                                                                                                 // 35
                                                                                                                      //
    return usersearch;                                                                                                // 32
  }(),                                                                                                                // 32
  userfavorites: function () {                                                                                        // 36
    function userfavorites() {                                                                                        // 36
      return UserFavorites.find();                                                                                    // 37
    }                                                                                                                 // 38
                                                                                                                      //
    return userfavorites;                                                                                             // 36
  }()                                                                                                                 // 36
});                                                                                                                   // 9
Template.home.events({                                                                                                // 40
  "click .js-gogo": function () {                                                                                     // 41
    function clickJsGogo(event) {                                                                                     // 41
      // event.preventDefault();                                                                                      //
      var destination = $(".js-loca").val().toLowerCase();                                                            // 43
      Session.set("results", destination);                                                                            // 44
                                                                                                                      //
      Meteor.call("tosearch", destination);                                                                           // 46
      Router.go('searchresults');                                                                                     // 47
    }                                                                                                                 // 49
                                                                                                                      //
    return clickJsGogo;                                                                                               // 41
  }(),                                                                                                                // 41
  "click .js-deletefav ": function () {                                                                               // 50
    function clickJsDeletefav(event) {                                                                                // 50
      console.log("clicked on the x"); //debug                                                                        // 51
      window.alert("You are about to delete this itinerary!");                                                        // 52
      var blog = UserFavorites.findOne({ _id: this.user });                                                           // 53
      Meteor.call("removefav", blog); //callback->this <--removes object created                                      // 54
    }                                                                                                                 // 55
                                                                                                                      //
    return clickJsDeletefav;                                                                                          // 50
  }(),                                                                                                                // 50
  "click .js-createit": function () {                                                                                 // 56
    function clickJsCreateit(event) {                                                                                 // 56
      Router.go('itineraries');                                                                                       // 57
    }                                                                                                                 // 58
                                                                                                                      //
    return clickJsCreateit;                                                                                           // 56
  }(),                                                                                                                // 56
  "click .js-creategroup": function () {                                                                              // 59
    function clickJsCreategroup(event) {                                                                              // 59
      Router.go('groupCampPost');                                                                                     // 60
    }                                                                                                                 // 61
                                                                                                                      //
    return clickJsCreategroup;                                                                                        // 59
  }()                                                                                                                 // 59
                                                                                                                      //
});                                                                                                                   // 40
Template.showSearch.helpers({                                                                                         // 64
  inputs: function () {                                                                                               // 65
    function inputs() {                                                                                               // 65
      return Session.get('data'); // reactively watches the Session variable, so when it changes, this result will change and our template will change
    }                                                                                                                 // 67
                                                                                                                      //
    return inputs;                                                                                                    // 65
  }()                                                                                                                 // 65
});                                                                                                                   // 64
                                                                                                                      //
// Now we'll set up a click handler to add inputs to our array when we   click the "add" button                       //
Template.showSearch.events({                                                                                          // 71
  'click #add': function () {                                                                                         // 72
    function clickAdd() {                                                                                             // 72
      var inputs = Session.get('data');                                                                               // 73
      var uniqid = Math.floor(Math.random() * 100000); // Give a unique ID so you can pull _this_ input when you click remove
      inputs && inputs.push({ uniqid: uniqid, datecreated: new Date(), cvalue: "" });                                 // 75
      Session.set('data', inputs);                                                                                    // 76
    }                                                                                                                 // 77
                                                                                                                      //
    return clickAdd;                                                                                                  // 72
  }(),                                                                                                                // 72
  'click .js-subtext': function () {                                                                                  // 78
    function clickJsSubtext() {                                                                                       // 78
      var getdata = Session.get('data');                                                                              // 79
      console.log(getdata);                                                                                           // 80
      Meteor.call("textedits", $(".js-idd").val());                                                                   // 81
    }                                                                                                                 // 82
                                                                                                                      //
    return clickJsSubtext;                                                                                            // 78
  }()                                                                                                                 // 78
});                                                                                                                   // 71
// We also need handlers for when the inputs themselves are changed / removed                                         //
Template.input.events({                                                                                               // 85
  'click .remove-input': function () {                                                                                // 86
    function clickRemoveInput(event) {                                                                                // 86
      event.preventDefault();                                                                                         // 87
      var uniqid = $(event.currentTarget).attr('uniqid');                                                             // 88
      inputs = Session.get('data');                                                                                   // 89
      inputs = _.filter(inputs, function (x) {                                                                        // 90
        return x.uniqid != uniqid;                                                                                    // 90
      });                                                                                                             // 90
      Session.set('data', inputs);                                                                                    // 91
    }                                                                                                                 // 92
                                                                                                                      //
    return clickRemoveInput;                                                                                          // 86
  }(),                                                                                                                // 86
  'change input': function () {                                                                                       // 93
    function changeInput(event) {                                                                                     // 93
      var $input = $(event.currentTarget);                                                                            // 94
      var uniqid = $input.attr('uniqid');                                                                             // 95
      inputs = Session.get('data');                                                                                   // 96
      index = inputs.findIndex(function (x) {                                                                         // 97
        return x.uniqid == uniqid;                                                                                    // 97
      });                                                                                                             // 97
      inputs[index].value = $input.val();                                                                             // 98
      Session.set('data', inputs);                                                                                    // 99
    }                                                                                                                 // 100
                                                                                                                      //
    return changeInput;                                                                                               // 93
  }()                                                                                                                 // 93
});                                                                                                                   // 85
Template.home.events({                                                                                                // 102
  "click .js-speak": function () {                                                                                    // 103
    function clickJsSpeak(event) {                                                                                    // 103
      console.log("clicked it");                                                                                      // 104
      $(".js-speak").html("Listening...");                                                                            // 105
      // https://shapeshed.com/html5-speech-recognition-api/                                                          //
      var recognition = new webkitSpeechRecognition();                                                                // 107
      recognition.lang = 'en-US';                                                                                     // 108
      recognition.onresult = function (event) {                                                                       // 109
        console.dir(event);                                                                                           // 110
        $(".js-speak").html("Got it!");                                                                               // 111
        Session.set("searchit", event.results[0][0].transcript);                                                      // 112
        $(".js-loca").val(Session.get("searchit"));                                                                   // 113
        send();                                                                                                       // 114
                                                                                                                      //
        //        execute(Session.get("transcript"));                                                                 //
      };                                                                                                              // 117
      $(".js-loca").val("");                                                                                          // 118
      recognition.start();                                                                                            // 119
      //      console.log("starting the recognizer")                                                                  //
    }                                                                                                                 // 123
                                                                                                                      //
    return clickJsSpeak;                                                                                              // 103
  }()                                                                                                                 // 103
});                                                                                                                   // 102
                                                                                                                      //
function send() {                                                                                                     // 126
  var text = Session.get("searchit");                                                                                 // 127
  $.ajax({                                                                                                            // 128
    type: "POST",                                                                                                     // 129
    url: baseUrl + "query/",                                                                                          // 130
    contentType: "application/json; charset=utf-8",                                                                   // 131
    dataType: "json",                                                                                                 // 132
    headers: {                                                                                                        // 133
      "Authorization": "Bearer " + accessToken,                                                                       // 134
      "ocp-apim-subscription-key": subscriptionKey                                                                    // 135
    },                                                                                                                // 133
    data: JSON.stringify({ q: text, lang: "en" }),                                                                    // 137
    success: function () {                                                                                            // 138
      function success(data) {                                                                                        // 138
        //  setResponse(JSON.stringify(data, undefined, 2));                                                          //
        //  r= JSON.parse(results);                                                                                   //
        //  console.dir(data.result.speech);                                                                          //
        setResponse(data.result.speech);                                                                              // 142
        var utterThis = new SpeechSynthesisUtterance(data.result.speech);                                             // 143
        //  "ocp-apim-subscription-key": subscriptionKey                                                              //
      }                                                                                                               // 145
                                                                                                                      //
      return success;                                                                                                 // 138
    }(),                                                                                                              // 138
    data: JSON.stringify({ q: text, lang: "en" }),                                                                    // 146
    success: function () {                                                                                            // 147
      function success(data) {                                                                                        // 147
        //setResponse(JSON.stringify(data, undefined, 2));                                                            //
        //  r= JSON.parse(results);                                                                                   //
        //  console.dir(data.result.speech);                                                                          //
        console.dir(data);                                                                                            // 151
        setResponse(data.result.speech);                                                                              // 152
                                                                                                                      //
        var utterThis = new SpeechSynthesisUtterance(data.result.speech);                                             // 154
        voices = synth.getVoices();                                                                                   // 155
        utterThis.voice = voices[74]; //61-82    61,64, 66, 67,  74 is top, 80, 22 weird singing                      // 156
        synth.speak(utterThis);                                                                                       // 157
      }                                                                                                               // 158
                                                                                                                      //
      return success;                                                                                                 // 147
    }(),                                                                                                              // 147
    error: function () {                                                                                              // 159
      function error() {                                                                                              // 159
        setResponse("Internal Server Error");                                                                         // 160
      }                                                                                                               // 161
                                                                                                                      //
      return error;                                                                                                   // 159
    }()                                                                                                               // 159
  });                                                                                                                 // 128
  setResponse("Loading...");                                                                                          // 163
}                                                                                                                     // 164
                                                                                                                      //
function setResponse(val) {                                                                                           // 166
  $("#response").text(val);                                                                                           // 167
}                                                                                                                     // 168
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"subscriptions.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// pages/home/client/subscriptions.js                                                                                 //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Meteor.subscribe("theDestSearched");                                                                                  // 1
Meteor.subscribe("theSettings");                                                                                      // 2
var loca = Session.get("prefer");                                                                                     // 3
// const loc='{destination:"'+loca+'"}';                                                                              //
Meteor.subscribe("theTrips", {});                                                                                     // 5
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"lib":{"method.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// pages/home/lib/method.js                                                                                           //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Meteor.methods({                                                                                                      // 1
	"removeSearchResults": function () {                                                                                 // 2
		function removeSearchResults() {                                                                                    // 2
			DestSearched.remove({});                                                                                           // 3
			console.log("search log removed");                                                                                 // 4
		}                                                                                                                   // 5
                                                                                                                      //
		return removeSearchResults;                                                                                         // 2
	}()                                                                                                                  // 2
});                                                                                                                   // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"itDisplay":{"client":{"template.itDisplay.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// pages/itDisplay/client/template.itDisplay.js                                                                       //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("itdisplay");                                                                                    // 2
Template["itdisplay"] = new Template("Template.itdisplay", (function() {                                              // 3
  var view = this;                                                                                                    // 4
  return HTML.DIV({                                                                                                   // 5
    "class": "container"                                                                                              // 6
  }, "\n	", HTML.DIV({                                                                                                // 7
    "class": "jumbotron",                                                                                             // 8
    style: function() {                                                                                               // 9
      return [ "background-image: url(", Spacebars.mustache(Spacebars.dot(view.lookup("trips"), "image")), ");  background-size: 100% 100%;" ];
    }                                                                                                                 // 11
  }, HTML.Raw("<br>"), HTML.Raw("<br>"), HTML.Raw("<br>"), HTML.Raw("<br>"), HTML.Raw("<br>"), "\n	"), "\n	", HTML.DIV({
    "class": "row"                                                                                                    // 13
  }, "\n		", HTML.DIV({                                                                                               // 14
    "class": "col-md-12  col-md-offset-0  bg-info"                                                                    // 15
  }, "\n			", HTML.H1(Blaze.View("lookup:trips.title", function() {                                                   // 16
    return Spacebars.mustache(Spacebars.dot(view.lookup("trips"), "title"));                                          // 17
  })), "\n			", HTML.H4(HTML.A({                                                                                      // 18
    href: function() {                                                                                                // 19
      return [ "/showuser/", Spacebars.mustache(Spacebars.dot(view.lookup("trips"), "createdBy")) ];                  // 20
    }                                                                                                                 // 21
  }, Blaze.View("lookup:trips.username", function() {                                                                 // 22
    return Spacebars.mustache(Spacebars.dot(view.lookup("trips"), "username"));                                       // 23
  }))), "\n			", HTML.H3(HTML.UL("\n				", HTML.DIV(" \n				", Blaze.Each(function() {                                // 24
    return {                                                                                                          // 25
      _sequence: Spacebars.call(Spacebars.dot(view.lookup("trips"), "destination")),                                  // 26
      _variable: "d"                                                                                                  // 27
    };                                                                                                                // 28
  }, function() {                                                                                                     // 29
    return [ "\n						", HTML.SPAN({                                                                                  // 30
      "class": "glyphicon glyphicon-map-marker",                                                                      // 31
      "aria-hidden": "true"                                                                                           // 32
    }), Blaze.View("lookup:d.value", function() {                                                                     // 33
      return Spacebars.mustache(Spacebars.dot(view.lookup("d"), "value"));                                            // 34
    }), "\n					\n				" ];                                                                                            // 35
  }), "\n			"), "\n			")), "\n			", HTML.DIV({                                                                        // 36
    "class": "panel panel-default"                                                                                    // 37
  }, "\n  				", HTML.DIV({                                                                                           // 38
    "class": "panel-body"                                                                                             // 39
  }, "\n    			", HTML.H4(HTML.Raw('<span class="glyphicon glyphicon-plane" aria-hidden="true"></span>'), " Arrival: ", Blaze.View("lookup:trips.arrival", function() {
    return Spacebars.mustache(Spacebars.dot(view.lookup("trips"), "arrival"));                                        // 41
  })), "\n    			", HTML.H4(HTML.Raw('<span class="glyphicon glyphicon-user" aria-hidden="true"></span>'), " Companions: ", Blaze.View("lookup:trips.amountOfTraveler", function() {
    return Spacebars.mustache(Spacebars.dot(view.lookup("trips"), "amountOfTraveler"));                               // 43
  })), "\n  				", HTML.H4(HTML.Raw('<span class="glyphicon glyphicon-usd" aria-hidden="true"></span>'), " Approximate Expense: ", Blaze.View("lookup:trips.expenses", function() {
    return Spacebars.mustache(Spacebars.dot(view.lookup("trips"), "expenses"));                                       // 45
  })), "\n  				"), "\n			"), "\n			", HTML.H4(" Description: ", Blaze.View("lookup:trips.description", function() {  // 46
    return Spacebars.mustache(Spacebars.dot(view.lookup("trips"), "description"));                                    // 47
  })), "\n			", HTML.Raw("<br>"), "\n		"), "\n\n	"), "\n	\n");                                                        // 48
}));                                                                                                                  // 49
                                                                                                                      // 50
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"itdisplay.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// pages/itDisplay/client/itdisplay.js                                                                                //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Template.itdisplay.helpers({                                                                                          // 1
                                                                                                                      //
  trips: function () {                                                                                                // 3
    function trips() {                                                                                                // 3
      return Session.get("userinput");                                                                                // 4
    }                                                                                                                 // 5
                                                                                                                      //
    return trips;                                                                                                     // 3
  }(),                                                                                                                // 3
  getFEContext: function () {                                                                                         // 6
    function getFEContext() {                                                                                         // 6
      var self = this;                                                                                                // 7
      return {                                                                                                        // 8
        // Set html content                                                                                           //
        _value: self && self.myDoc && self.myDoc.myHTMLField,                                                         // 10
        // Preserving cursor markers                                                                                  //
        _keepMarkers: true,                                                                                           // 12
        // Override wrapper class                                                                                     //
        _className: "froala-reactive-meteorized-override",                                                            // 14
                                                                                                                      //
        // Set some FE options                                                                                        //
        toolbarInline: true,                                                                                          // 17
        initOnClick: false,                                                                                           // 18
        tabSpaces: false,                                                                                             // 19
                                                                                                                      //
        // FE save.before event handler function:                                                                     //
        "_onsave.before": function () {                                                                               // 22
          function _onsaveBefore(e, editor) {                                                                         // 22
            // Get edited HTML from Froala-Editor                                                                     //
            var newHTML = editor.html.get(true /* keep_markers */);                                                   // 24
            // Do something to update the edited value provided by the Froala-Editor plugin, if it has changed:       //
            if (!_.isEqual(newHTML, self && self.myDoc && self.myDoc.myHTMLField)) {                                  // 26
              console.log("onSave HTML is :" + newHTML);                                                              // 27
              myCollection.update({ _id: self.myDoc._id }, {                                                          // 28
                $set: { myHTMLField: newHTML }                                                                        // 29
              });                                                                                                     // 28
            }                                                                                                         // 31
            return false; // Stop Froala Editor from POSTing to the Save URL                                          // 32
          }                                                                                                           // 33
                                                                                                                      //
          return _onsaveBefore;                                                                                       // 22
        }()                                                                                                           // 22
      };                                                                                                              // 8
    }                                                                                                                 // 35
                                                                                                                      //
    return getFEContext;                                                                                              // 6
  }(),                                                                                                                // 6
  trips: function () {                                                                                                // 36
    function trips() {                                                                                                // 36
      return Session.get("userinput");                                                                                // 37
    }                                                                                                                 // 38
                                                                                                                      //
    return trips;                                                                                                     // 36
  }()                                                                                                                 // 36
                                                                                                                      //
});                                                                                                                   // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"login":{"client":{"template.login.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// pages/login/client/template.login.js                                                                               //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("login");                                                                                        // 2
Template["login"] = new Template("Template.login", (function() {                                                      // 3
  var view = this;                                                                                                    // 4
  return HTML.Raw('<div class="jumbotron">\n  <h1>Welcome back</h1>\n  <!-- <h1><small>continue your journey here</small></h1> -->\n\n  <br>\n  <h4 class="text-danger">Grab your friends and let\'s go!</h4>\n</div>\n\n<!-- login form -->\n<div class="pull-right">\n  <h1>login</h1>\n  <form>\n    <div class="col-sm-6">\n      <br>\n      <label>Email</label>\n      <input class="js-login-email form-control" type="email">\n    </div>\n\n    <div class="col-sm-6">\n      <br>\n      <label>Password</label>\n      <input class="js-login-password form-control" type="password">\n    </div>\n\n    <div class="col-sm-6">\n      <br>\n      <input class="btn btn-default" type="submit" value="Login">\n    </div>\n  </form>\n</div>');
}));                                                                                                                  // 6
                                                                                                                      // 7
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"login.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// pages/login/client/login.js                                                                                        //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Template.login.events({                                                                                               // 1
                                                                                                                      //
  "submit form": function () {                                                                                        // 3
    function submitForm() {                                                                                           // 3
      event.preventDefault();                                                                                         // 4
      var email = $(".js-login-email").val();                                                                         // 5
      var password = $(".js-login-password").val();                                                                   // 6
                                                                                                                      //
      Meteor.loginWithPassword(email, password, function (error) {                                                    // 8
        if (error) {                                                                                                  // 9
          event.preventDefault();                                                                                     // 10
          console.log(error.reason);                                                                                  // 11
          window.alert(error.reason);                                                                                 // 12
          return;                                                                                                     // 13
        } else {                                                                                                      // 14
          Router.go("/");                                                                                             // 15
        }                                                                                                             // 16
      });                                                                                                             // 17
    }                                                                                                                 // 18
                                                                                                                      //
    return submitForm;                                                                                                // 3
  }()                                                                                                                 // 3
                                                                                                                      //
});                                                                                                                   // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"searchresults":{"client":{"template.searchresults.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// pages/searchresults/client/template.searchresults.js                                                               //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("searchresults");                                                                                // 2
Template["searchresults"] = new Template("Template.searchresults", (function() {                                      // 3
  var view = this;                                                                                                    // 4
  return HTML.DIV({                                                                                                   // 5
    "class": "main-body"                                                                                              // 6
  }, "  \n        ", HTML.DIV({                                                                                       // 7
    "class": "container"                                                                                              // 8
  }, "\n            ", HTML.DIV({                                                                                     // 9
    "class": "row"                                                                                                    // 10
  }, "               \n                ", HTML.DIV({                                                                  // 11
    "class": "main-page"                                                                                              // 12
  }, "\n\n                    ", HTML.ASIDE({                                                                         // 13
    "class": "main-navigation"                                                                                        // 14
  }, "\n", HTML.Raw('<link rel="stylesheet" type="text/css" href="css/search.css">'), "\n  ", HTML.Raw("<h1>Search Results</h1>"), "\n  ", HTML.DIV({
    "class": function() {                                                                                             // 16
      return Spacebars.mustache(view.lookup("refineSearch"));                                                         // 17
    }                                                                                                                 // 18
  }, "\n    Budget:\n    ", HTML.Raw('<select class="js-refine">\n\n      <option selected="selected">Show All</option>\n      <option>Under $500</option>\n      <option>Under $1000</option>\n      <option>Under $2000</option>\n      <option>Under $3000</option>\n      <option>Under $4000</option>\n      <option>Under $5000</option>\n      <option>Over $5000</option>\n    </select>'), "\n  "), "\n  ", HTML.Raw("<br>"), "\n  ", Blaze.If(function() {
    return Spacebars.dataMustache(view.lookup("checkIt"), view.lookup("resultData"));                                 // 20
  }, function() {                                                                                                     // 21
    return [ "\n      ", HTML.H2("No itineraries have been found! ^-^ you can search something else if you like or create one if you have been there!"), "\n      " ];
  }, function() {                                                                                                     // 23
    return [ "\n", HTML.Comment("   <ul> "), "\n", HTML.DIV({                                                         // 24
      "class": "box-wrapper"                                                                                          // 25
    }, "\n  ", HTML.UL({                                                                                              // 26
      id: "results"                                                                                                   // 27
    }, "\n    ", Blaze.Each(function() {                                                                              // 28
      return {                                                                                                        // 29
        _sequence: Spacebars.call(view.lookup("resultData")),                                                         // 30
        _variable: "r"                                                                                                // 31
      };                                                                                                              // 32
    }, function() {                                                                                                   // 33
      return [ "\n     ", HTML.Comment("  <li> "), "\n        ", HTML.Comment(' <div class="panel panel-success"> '), "\n         ", Blaze._TemplateWith(function() {
        return {                                                                                                      // 35
          fav: Spacebars.call(view.lookup("r"))                                                                       // 36
        };                                                                                                            // 37
      }, function() {                                                                                                 // 38
        return Spacebars.include(view.lookupTemplate("addFav"));                                                      // 39
      }), "\n         ", HTML.Comment(" </div> "), "\n       ", HTML.Comment(" </li> "), "\n    " ];                  // 40
    }), "\n  "), "\n"), "\n  " ];                                                                                     // 41
  }), "\n"), "\n"), "\n"), "\n"), "\n");                                                                              // 42
}));                                                                                                                  // 43
                                                                                                                      // 44
Template.__checkName("addFav");                                                                                       // 45
Template["addFav"] = new Template("Template.addFav", (function() {                                                    // 46
  var view = this;                                                                                                    // 47
  return HTML.LI("\n                                ", HTML.DIV({                                                     // 48
    "class": "box london"                                                                                             // 49
  }, "\n                                    ", HTML.DIV({                                                             // 50
    "class": "box-icon"                                                                                               // 51
  }, "\n                                      ", HTML.A({                                                             // 52
    href: function() {                                                                                                // 53
      return [ "/showpic/", Spacebars.mustache(Spacebars.dot(view.lookup("fav"), "thumbpic")) ];                      // 54
    },                                                                                                                // 55
    target: "_blank"                                                                                                  // 56
  }, HTML.IMG({                                                                                                       // 57
    src: function() {                                                                                                 // 58
      return [ "/showpic/", Spacebars.mustache(Spacebars.dot(view.lookup("fav"), "thumbpic", "thumbpic")) ];          // 59
    },                                                                                                                // 60
    width: "100%",                                                                                                    // 61
    alt: ""                                                                                                           // 62
  })), "\n                                    "), "\n                                    ", HTML.DIV({                // 63
    "class": "info float-container"                                                                                   // 64
  }, "\n                                        ", HTML.DIV({                                                         // 65
    "class": " london-title"                                                                                          // 66
  }, "\n                                            ", HTML.H3({                                                      // 67
    "class": "text-uppercase"                                                                                         // 68
  }, HTML.A({                                                                                                         // 69
    href: function() {                                                                                                // 70
      return [ "/showsearch/", Spacebars.mustache(Spacebars.dot(view.lookup("fav"), "_id")) ];                        // 71
    }                                                                                                                 // 72
  }, Blaze.View("lookup:fav.title", function() {                                                                      // 73
    return Spacebars.mustache(Spacebars.dot(view.lookup("fav"), "title"));                                            // 74
  }))), "\n                                            ", HTML.H4({                                                   // 75
    "class": "text-uppercase"                                                                                         // 76
  }, HTML.A({                                                                                                         // 77
    href: function() {                                                                                                // 78
      return [ "/showuser/", Spacebars.mustache(Spacebars.dot(view.lookup("fav"), "createdBy")) ];                    // 79
    }                                                                                                                 // 80
  }, Blaze.View("lookup:fav.username", function() {                                                                   // 81
    return Spacebars.mustache(Spacebars.dot(view.lookup("fav"), "username"));                                         // 82
  }), " ")), "\n                                        "), "\n                                        ", HTML.P(Blaze.View("lookup:fav.desc", function() {
    return Spacebars.mustache(Spacebars.dot(view.lookup("fav"), "desc"));                                             // 84
  }), " "), HTML.Raw("<hr>"), "\n                                        ", HTML.DIV({                                // 85
    "class": " location-main"                                                                                         // 86
  }, " \n                                            ", HTML.DIV({                                                    // 87
    "class": "pull-left location"                                                                                     // 88
  }, "\n                                                ", HTML.Raw('<!-- <i class="fa fa-map-marker fa-2x"></i><span>LONDON</span> -->'), "\n                                              ", HTML.Raw("<!--   <ul> -->"), "\n        ", Blaze.Each(function() {
    return {                                                                                                          // 90
      _sequence: Spacebars.call(Spacebars.dot(view.lookup("fav"), "destination")),                                    // 91
      _variable: "d"                                                                                                  // 92
    };                                                                                                                // 93
  }, function() {                                                                                                     // 94
    return [ "\n            ", HTML.SPAN({                                                                            // 95
      "class": "glyphicon glyphicon-map-marker",                                                                      // 96
      "aria-hidden": "true"                                                                                           // 97
    }), Blaze.View("lookup:d.value", function() {                                                                     // 98
      return Spacebars.mustache(Spacebars.dot(view.lookup("d"), "value"));                                            // 99
    }), "\n          \n        " ];                                                                                   // 100
  }), "\n      ", HTML.Raw("<!-- </ul> -->"), "\n                                            "), "\n                                            ", HTML.Raw('<div class="pull-right user-icons">\n                                                <a href="#"><i class="fa fa-star fa-2x"></i></a>\n                                                <a href="#"><i class="fa fa-user fa-2x"></i></a>\n                                                <a href="#"><i class="fa fa-twitter fa-2x"></i></a>\n                                            </div>'), "\n                                        "), "\n                              \n ", HTML.Raw('<!--  <div class="panel-body">\n        <div>\n          <a href="/showsearch/{{fav._id}}"><h3>{{fav.title}}</h3></a>\n          <p align="right"><span class="js-addfav glyphicon glyphicon-heart-empty" aria-hidden="true"></span>Add to Favorite</p>\n        </div>\n      </div>\n      <div class="panel-footer">by <a href="/showuser/{{fav.createdBy}}">{{fav.username}} </a>on {{fav.datecreated}}\n      </div>\n    </div>\n     -->'), "\n   "), "\n "), "\n");
}));                                                                                                                  // 102
                                                                                                                      // 103
Template.__checkName("showPics");                                                                                     // 104
Template["showPics"] = new Template("Template.showPics", (function() {                                                // 105
  var view = this;                                                                                                    // 106
  return "";                                                                                                          // 107
}));                                                                                                                  // 108
                                                                                                                      // 109
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"searchresults.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// pages/searchresults/client/searchresults.js                                                                        //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Session.set("budget", "Show All");                                                                                    // 1
                                                                                                                      //
Template.searchresults.onCreated(function () {                                                                        // 3
	this.state = new ReactiveDict();                                                                                     // 4
	this.state.setDefault({                                                                                              // 5
		budget: "Show All"                                                                                                  // 6
                                                                                                                      //
	});                                                                                                                  // 5
	console.log("refining results");                                                                                     // 9
	console.dir(this.state);                                                                                             // 10
});                                                                                                                   // 11
Template.searchresults.helpers({                                                                                      // 12
	refineSearch: function () {                                                                                          // 13
		function refineSearch() {                                                                                           // 13
			var instance = Template.instance();                                                                                // 14
			return instance.state.get("budget");                                                                               // 15
		}                                                                                                                   // 16
                                                                                                                      //
		return refineSearch;                                                                                                // 13
	}()                                                                                                                  // 13
});                                                                                                                   // 12
Template.addFav.helpers({});                                                                                          // 18
Template.searchresults.events({                                                                                       // 21
	"change .js-refine": function () {                                                                                   // 22
		function changeJsRefine(event, instance) {                                                                          // 22
			console.log($(".js-refine").val());                                                                                // 23
			var refineResult = instance.$(".js-refine").val();                                                                 // 24
			if (refineResult == "Under $500") {                                                                                // 25
				refineResult = 500;                                                                                               // 26
			} else if (refineResult == "Under $1000") {                                                                        // 27
				refineResult = 1000;                                                                                              // 28
			} else if (refineResult == "Under $2000") {                                                                        // 29
				refineResult = 2000;                                                                                              // 30
			} else if (refineResult == "Under $3000") {                                                                        // 31
				refineResult = 3000;                                                                                              // 32
			} else if (refineResult == "Under $4000") {                                                                        // 33
				refineResult = 4000;                                                                                              // 34
			} else if (refineResult == "Over $5000") {                                                                         // 35
				refineResult = "Over $5000";                                                                                      // 36
			} else if (refineResult == "Under $5000") {                                                                        // 37
				refineResult = 5000;                                                                                              // 38
			} else {                                                                                                           // 39
				refineResult = "Show All";                                                                                        // 40
			}                                                                                                                  // 41
			instance.state.set("budget", refineResult);                                                                        // 42
			Session.set("budget", refineResult);                                                                               // 43
		}                                                                                                                   // 44
                                                                                                                      //
		return changeJsRefine;                                                                                              // 22
	}(),                                                                                                                 // 22
	"click .js-addfav ": function () {                                                                                   // 45
		function clickJsAddfav(event) {                                                                                     // 45
			console.log("clicked on the +"); //debug                                                                           // 46
			console.dir(this);                                                                                                 // 47
			window.alert("Added to favorite!");                                                                                // 48
			var blog = Trips.findOne({ _id: this.fav._id });                                                                   // 49
			console.dir(blog);                                                                                                 // 50
			var fav = { user: Meteor.userId(),                                                                                 // 51
				addedAt: new Date(),                                                                                              // 53
				favadded: blog                                                                                                    // 54
			};                                                                                                                 // 52
			Meteor.call("addFav", fav);                                                                                        // 56
			//Comments.remove(this.comment._id);  //callback->this <--removes object created                                   //
		}                                                                                                                   // 58
                                                                                                                      //
		return clickJsAddfav;                                                                                               // 45
	}()                                                                                                                  // 45
                                                                                                                      //
});                                                                                                                   // 21
Template.searchresults.helpers({                                                                                      // 61
	// searchdata: function(){return DestSearched.find({}, {sort:{searches:-1}});},                                      //
	resultData: function () {                                                                                            // 63
		function resultData() {                                                                                             // 63
			var loc = Session.get("results");                                                                                  // 64
			console.log(loc);                                                                                                  // 65
			var bud = Session.get("budget");                                                                                   // 66
			var find = "0";                                                                                                    // 67
			if (Session.get("budget") == "Show All") {                                                                         // 68
				find = Trips.find({ destination: { $elemMatch: { value: loc } } }, { sort: { datecreated: -1 } });                // 69
			} else if (Session.get("budget") == "Over $5000") {                                                                // 70
				find = Trips.find({ $and: [{ destination: { $elemMatch: { value: loc } } }, { expenses: { $gt: 5000 } }] }, { sort: { datecreated: -1 } });
			} else {                                                                                                           // 72
				find = Trips.find({ $and: [{ destination: { $elemMatch: { value: loc } } }, { expenses: { $lte: bud } }] }, { sort: { datecreated: -1 } });
			}                                                                                                                  // 74
			Session.set("numResults", find.count());                                                                           // 75
			return find;                                                                                                       // 76
		}                                                                                                                   // 77
                                                                                                                      //
		return resultData;                                                                                                  // 63
	}(),                                                                                                                 // 63
	checkIt: function () {                                                                                               // 78
		function checkIt() {                                                                                                // 78
			if (Session.get("numResults") <= 0) {                                                                              // 79
				return true;                                                                                                      // 80
			} else {                                                                                                           // 81
				return false;                                                                                                     // 82
			}                                                                                                                  // 83
		}                                                                                                                   // 84
                                                                                                                      //
		return checkIt;                                                                                                     // 78
	}()                                                                                                                  // 78
});                                                                                                                   // 61
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"subscriptions.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// pages/searchresults/client/subscriptions.js                                                                        //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Meteor.subscribe("theTrips", {});                                                                                     // 1
Meteor.subscribe("");                                                                                                 // 2
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"lib":{"method.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// pages/searchresults/lib/method.js                                                                                  //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
// Meteor.methods({                                                                                                   //
// 	"search": function(loc){                                                                                          //
// 		resultData = Trips.find({destination: loc},{sort:{datecreated: -1}})                                             //
// 		//let loc = Session.get("results");                                                                              //
// 		return searchData;                                                                                               //
// 	},                                                                                                                //
                                                                                                                      //
// })                                                                                                                 //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"selfdisplay":{"client":{"template.selfdisplay.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// pages/selfdisplay/client/template.selfdisplay.js                                                                   //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("selfdisplay");                                                                                  // 2
Template["selfdisplay"] = new Template("Template.selfdisplay", (function() {                                          // 3
  var view = this;                                                                                                    // 4
  return [ HTML.Raw('<div class="container">\n		<div id="locationField">\n          <input id="autocomplete" type="text">\n        </div>\n    </div>\n	 '), HTML.HTML("\n      ", HTML.HEAD("\n        ", HTML.Raw('<link type="text/css" rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500">'), "\n        ", HTML.SCRIPT({
    src: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAScLVvC2ZiCBA_PEeXspeLOCKT0mimjTg&sensor=false&libraries=places&callback=initialize"
  }), "\n        ", HTML.SCRIPT("\n            var autocomplete;\n            function initialize() {\n              autocomplete = new google.maps.places.Autocomplete(\n                  /** @type {HTMLInputElement} */(document.getElementById('autocomplete')),\n                  { types: ['geocode'] });\n              google.maps.event.addListener(autocomplete, 'place_changed', function() {\n              });\n            }\n        "), "\n      "), "\n      ", HTML.Raw("<body>\n        \n      </body>"), "\n    ") ];
}));                                                                                                                  // 8
                                                                                                                      // 9
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"selfdisplay.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// pages/selfdisplay/client/selfdisplay.js                                                                            //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"settings":{"client":{"template.settings.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// pages/settings/client/template.settings.js                                                                         //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("settings");                                                                                     // 2
Template["settings"] = new Template("Template.settings", (function() {                                                // 3
  var view = this;                                                                                                    // 4
  return HTML.DIV({                                                                                                   // 5
    "class": "container"                                                                                              // 6
  }, HTML.Raw('\n	<div class="page-header">\n		<h1>My Settings</h1>\n	</div>\n	'), Blaze.If(function() {              // 7
    return Spacebars.call(view.lookup("currentUser"));                                                                // 8
  }, function() {                                                                                                     // 9
    return [ "\n		", HTML.FORM("\n	 		", HTML.FIELDSET({                                                              // 10
      "class": "form-group"                                                                                           // 11
    }, "\n	   			", HTML.LABEL({                                                                                      // 12
      "for": "greeting"                                                                                               // 13
    }, "Greeting Message on home page"), "\n	    		", HTML.INPUT({                                                    // 14
      type: "greeting",                                                                                               // 15
      "class": "form-control js-greeting",                                                                            // 16
      placeholder: "Enter Greeting Message"                                                                           // 17
    }), "\n	    	\n	  		"), "\n	  		", HTML.FIELDSET({                                                                // 18
      "class": "form-group"                                                                                           // 19
    }, "\n	   			", HTML.LABEL({                                                                                      // 20
      "for": "prefer"                                                                                                 // 21
    }, "Preferred Location"), "\n	    		", HTML.INPUT({                                                               // 22
      type: "prefer",                                                                                                 // 23
      "class": "form-control js-prefer",                                                                              // 24
      placeholder: "Only fill this location if you want one specific location to be on your homepage"                 // 25
    }), "\n	    	\n	  		"), "\n	  ", HTML.Comment(' 	<input type="checkbox"  name="questions" unchecked> Generic Welcome Message '), "\n	  	\n	  		", HTML.BUTTON({
      "class": "js-submit btn btn-info"                                                                               // 27
    }, "Submit"), " \n		"), "\n		", HTML.FORM("\n	 		", HTML.FIELDSET({                                               // 28
      "class": "form-group"                                                                                           // 29
    }, "\n	   			", HTML.LABEL({                                                                                      // 30
      "for": "username"                                                                                               // 31
    }, "Username: "), "\n	    		", HTML.INPUT({                                                                       // 32
      type: "username",                                                                                               // 33
      "class": "form-control js-username",                                                                            // 34
      placeholder: "Can only choose once!"                                                                            // 35
    }), "\n	    		", HTML.BUTTON({                                                                                    // 36
      "class": "js-check btn btn-success"                                                                             // 37
    }, "Check Availability"), " \n	  		"), "\n	  	\n	  		", HTML.BUTTON({                                             // 38
      "class": "js-submitname btn btn-info"                                                                           // 39
    }, "Submit Username"), " Can only choose once!\n		"), "\n		Current Greeting Message for you:\n		", HTML.BR(), "\n		", Blaze.View("lookup:settings.greetingmsg", function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("settings"), "greetingmsg"));                               // 41
    }), "\n		", HTML.BR(), "\n		Preferred Location:\n		", HTML.BR(), "\n		", Blaze.View("lookup:settings.preferloc", function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("settings"), "preferloc"));                                 // 43
    }), "\n		", HTML.BR(), "\n		Your Username: \n		", HTML.BR(), "\n		", Blaze.View("lookup:users.userName", function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("users"), "userName"));                                     // 45
    }), "\n\n	" ];                                                                                                    // 46
  }, function() {                                                                                                     // 47
    return [ "\n		", HTML.H4("Please log in to change settings!!!"), "\n	" ];                                         // 48
  }), "\n	\n	");                                                                                                      // 49
}));                                                                                                                  // 50
                                                                                                                      // 51
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"settings.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// pages/settings/client/settings.js                                                                                  //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Template.settings.helpers({                                                                                           // 1
	'settings': function () {                                                                                            // 2
		function settings() {                                                                                               // 2
			return Settings.findOne();                                                                                         // 3
		}                                                                                                                   // 4
                                                                                                                      //
		return settings;                                                                                                    // 2
	}(),                                                                                                                 // 2
	'users': function () {                                                                                               // 5
		function users() {                                                                                                  // 5
			return Meteor.users.findOne({ _id: Meteor.userId() });                                                             // 6
		}                                                                                                                   // 7
                                                                                                                      //
		return users;                                                                                                       // 5
	}()                                                                                                                  // 5
                                                                                                                      //
});                                                                                                                   // 1
                                                                                                                      //
Template.settings.events({                                                                                            // 11
	"click .js-submit": function () {                                                                                    // 12
		function clickJsSubmit(event) {                                                                                     // 12
			event.preventDefault();                                                                                            // 13
			console.log("hey u clicked");                                                                                      // 14
			var msg = $(".js-greeting").val();                                                                                 // 15
			var pre = $(".js-prefer").val();                                                                                   // 16
			var setting = { user: Meteor.userId(), greetingmsg: msg, preferloc: pre };                                         // 17
			Meteor.call("submitsettings", setting);                                                                            // 19
		}                                                                                                                   // 22
                                                                                                                      //
		return clickJsSubmit;                                                                                               // 12
	}(),                                                                                                                 // 12
	"click .js-check": function () {                                                                                     // 23
		function clickJsCheck(event) {                                                                                      // 23
			event.preventDefault();                                                                                            // 24
			var urname = $(".js-username").val();                                                                              // 25
			var user = Meteor.users.findOne({ _id: Meteor.userId() });                                                         // 26
			if (user.userName && user != null) {                                                                               // 27
				alert("You already have a username, you can only change it once!");                                               // 28
			} else if (Meteor.users.find({ userName: urname }).count() == 0) {                                                 // 29
				alert("The username is available!");                                                                              // 31
			} else {                                                                                                           // 32
				alert("The username is not available! Please re-enter!");                                                         // 33
			}                                                                                                                  // 34
		}                                                                                                                   // 35
                                                                                                                      //
		return clickJsCheck;                                                                                                // 23
	}(),                                                                                                                 // 23
	"click .js-submitname": function () {                                                                                // 36
		function clickJsSubmitname(event) {                                                                                 // 36
			event.preventDefault();                                                                                            // 37
			var user = Meteor.users.findOne({ _id: Meteor.userId() });                                                         // 38
			if (user.userName && user != null) {                                                                               // 39
				alert("You already have a username, you can only change it once!");                                               // 40
			} else {                                                                                                           // 41
				var finalname = $(".js-username").val();                                                                          // 42
				Meteor.call("updateName", finalname);                                                                             // 43
			}                                                                                                                  // 44
		}                                                                                                                   // 45
                                                                                                                      //
		return clickJsSubmitname;                                                                                           // 36
	}()                                                                                                                  // 36
                                                                                                                      //
});                                                                                                                   // 11
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"subscriptions.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// pages/settings/client/subscriptions.js                                                                             //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Meteor.subscribe("theSettings");                                                                                      // 1
Meteor.subscribe("userData");                                                                                         // 2
//Meteor.subscribe("userData");                                                                                       //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"signup":{"client":{"template.signup.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// pages/signup/client/template.signup.js                                                                             //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("signup");                                                                                       // 2
Template["signup"] = new Template("Template.signup", (function() {                                                    // 3
  var view = this;                                                                                                    // 4
  return HTML.Raw('<div class="jumbotron">\n    <h1>Register <small>join the sharing spree</small></h1>\n  </div>\n\n  <form class="register">\n    <div class="col-sm-6">\n      <label for="first">First Name</label>\n      <input class="js-first form-control" type="text">\n    </div>\n\n    <div class="col-sm-6">\n      <label>Last Name</label>\n      <input class="js-last form-control" type="text">\n    </div>\n\n    <div class="col-sm-12">\n      <br>\n      <label>Email</label>\n      <input class="js-email form-control" type="email">\n    </div>\n\n    <div class="col-sm-12">\n      <br>\n      <label>Password</label>\n      <input class="js-password form-control" type="password">\n    </div>\n\n    <div class="col-sm-6 center-block">\n      <br>\n      <input class="btn btn-danger" type="submit" value="Register">\n    </div>\n  </form>');
}));                                                                                                                  // 6
                                                                                                                      // 7
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"signup.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// pages/signup/client/signup.js                                                                                      //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Template.signup.helpers({});                                                                                          // 1
                                                                                                                      //
Template.signup.events({                                                                                              // 5
  "submit .register": function () {                                                                                   // 6
    function submitRegister(event) {                                                                                  // 6
      event.preventDefault();                                                                                         // 7
                                                                                                                      //
      var f = $(".js-first").val();                                                                                   // 9
      var l = $(".js-last").val();                                                                                    // 10
      var e = $(".js-email").val();                                                                                   // 11
      var p = $(".js-password").val();                                                                                // 12
                                                                                                                      //
      Accounts.createUser({                                                                                           // 14
        profile: {                                                                                                    // 15
          first: f,                                                                                                   // 16
          last: l,                                                                                                    // 17
          color: "bg-danger"                                                                                          // 18
        },                                                                                                            // 15
        email: e,                                                                                                     // 20
        password: p                                                                                                   // 21
      }, function (error) {                                                                                           // 14
        if (error) {                                                                                                  // 23
          // if registration fails                                                                                    //
          console.log(error.reason);                                                                                  // 24
          window.alert(error.reason); // console log reason                                                           // 25
          return;                                                                                                     // 26
        } else {                                                                                                      // 27
          Router.go('/'); // else go to feed page                                                                     // 28
        }                                                                                                             // 29
      });                                                                                                             // 30
    }                                                                                                                 // 31
                                                                                                                      //
    return submitRegister;                                                                                            // 6
  }()                                                                                                                 // 6
                                                                                                                      //
});                                                                                                                   // 5
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"userfavs":{"client":{"template.userfavs.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// pages/userfavs/client/template.userfavs.js                                                                         //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("userfavs");                                                                                     // 2
Template["userfavs"] = new Template("Template.userfavs", (function() {                                                // 3
  var view = this;                                                                                                    // 4
  return HTML.DIV({                                                                                                   // 5
    "class": "container"                                                                                              // 6
  }, HTML.Raw('\n  <div class="page-header">\n    <h1>My Favorites</h1>\n  </div>\n  '), Blaze.If(function() {        // 7
    return Spacebars.call(view.lookup("anyfav"));                                                                     // 8
  }, function() {                                                                                                     // 9
    return [ "\n  You do not have any favorites yet!\n  ", HTML.BUTTON({                                              // 10
      "class": "btn btn-info js-gohome"                                                                               // 11
    }, "GO search"), "\n  " ];                                                                                        // 12
  }, function() {                                                                                                     // 13
    return [ "\n	", HTML.UL("\n    ", HTML.DIV("\n    ", Blaze.Each(function() {                                      // 14
      return {                                                                                                        // 15
        _sequence: Spacebars.call(view.lookup("userfavorites")),                                                      // 16
        _variable: "r"                                                                                                // 17
      };                                                                                                              // 18
    }, function() {                                                                                                   // 19
      return [ "\n        ", Blaze._TemplateWith(function() {                                                         // 20
        return {                                                                                                      // 21
          fav: Spacebars.call(Spacebars.dot(view.lookup("r"), "favadded")),                                           // 22
          user: Spacebars.call(Spacebars.dot(view.lookup("r"), "_id"))                                                // 23
        };                                                                                                            // 24
      }, function() {                                                                                                 // 25
        return Spacebars.include(view.lookupTemplate("removeFav"));                                                   // 26
      }), "\n             \n    " ];                                                                                  // 27
    }), "\n  "), "\n  "), "\n  " ];                                                                                   // 28
  }), "\n");                                                                                                          // 29
}));                                                                                                                  // 30
                                                                                                                      // 31
Template.__checkName("removeFav");                                                                                    // 32
Template["removeFav"] = new Template("Template.removeFav", (function() {                                              // 33
  var view = this;                                                                                                    // 34
  return HTML.LI("\n    ", HTML.DIV({                                                                                 // 35
    "class": "panel panel-success"                                                                                    // 36
  }, "\n      ", HTML.DIV({                                                                                           // 37
    "class": "panel-body"                                                                                             // 38
  }, "\n          ", HTML.A({                                                                                         // 39
    href: function() {                                                                                                // 40
      return [ "/showfavs/", Spacebars.mustache(Spacebars.dot(view.lookup("fav"), "_id")) ];                          // 41
    }                                                                                                                 // 42
  }, HTML.H3(Blaze.View("lookup:fav.title", function() {                                                              // 43
    return Spacebars.mustache(Spacebars.dot(view.lookup("fav"), "title"));                                            // 44
  }))), "\n		        ", HTML.Raw('<span class="js-deletefav glyphicon glyphicon-remove" aria-hidden="true"></span>'), " Remove from Favorite\n        "), "\n         ", HTML.DIV({
    "class": "panel-footer"                                                                                           // 46
  }, "by", HTML.A({                                                                                                   // 47
    href: function() {                                                                                                // 48
      return [ "/showuser/", Spacebars.mustache(Spacebars.dot(view.lookup("fav"), "createdBy")) ];                    // 49
    }                                                                                                                 // 50
  }, Blaze.View("lookup:fav.username", function() {                                                                   // 51
    return Spacebars.mustache(Spacebars.dot(view.lookup("fav"), "username"));                                         // 52
  })), " on ", Blaze.View("lookup:fav.datecreated", function() {                                                      // 53
    return Spacebars.mustache(Spacebars.dot(view.lookup("fav"), "datecreated"));                                      // 54
  }), "\n         "), "\n      "), "\n    ");                                                                         // 55
}));                                                                                                                  // 56
                                                                                                                      // 57
Template.__checkName("showFavs");                                                                                     // 58
Template["showFavs"] = new Template("Template.showFavs", (function() {                                                // 59
  var view = this;                                                                                                    // 60
  return HTML.DIV({                                                                                                   // 61
    "class": "container"                                                                                              // 62
  }, "\n      ", HTML.DIV({                                                                                           // 63
    "class": "row"                                                                                                    // 64
  }, "\n    ", HTML.DIV({                                                                                             // 65
    "class": "col-md-12  col-md-offset-0  bg-info"                                                                    // 66
  }, "\n      ", HTML.H1(Blaze.View("lookup:title", function() {                                                      // 67
    return Spacebars.mustache(view.lookup("title"));                                                                  // 68
  })), "\n      ", HTML.H4(Blaze.View("lookup:username", function() {                                                 // 69
    return Spacebars.mustache(view.lookup("username"));                                                               // 70
  })), "\n      ", HTML.H3(HTML.UL("\n        ", HTML.DIV(" \n        ", Blaze.Each(function() {                      // 71
    return {                                                                                                          // 72
      _sequence: Spacebars.call(view.lookup("destination")),                                                          // 73
      _variable: "d"                                                                                                  // 74
    };                                                                                                                // 75
  }, function() {                                                                                                     // 76
    return [ "\n            ", HTML.SPAN({                                                                            // 77
      "class": "glyphicon glyphicon-map-marker",                                                                      // 78
      "aria-hidden": "true"                                                                                           // 79
    }), Blaze.View("lookup:d.value", function() {                                                                     // 80
      return Spacebars.mustache(Spacebars.dot(view.lookup("d"), "value"));                                            // 81
    }), "\n          \n        " ];                                                                                   // 82
  }), "\n      "), "\n      ")), "\n      ", HTML.DIV({                                                               // 83
    "class": "panel panel-default"                                                                                    // 84
  }, "\n          ", HTML.DIV({                                                                                       // 85
    "class": "panel-body"                                                                                             // 86
  }, "\n          ", HTML.H4(HTML.Raw('<span class="glyphicon glyphicon-plane" aria-hidden="true"></span>'), " Arrival: ", Blaze.View("lookup:arrival", function() {
    return Spacebars.mustache(view.lookup("arrival"));                                                                // 88
  })), "\n          ", HTML.H4(HTML.Raw('<span class="glyphicon glyphicon-user" aria-hidden="true"></span>'), " Companions: ", Blaze.View("lookup:amountOfTraveler", function() {
    return Spacebars.mustache(view.lookup("amountOfTraveler"));                                                       // 90
  })), "\n          ", HTML.H4(HTML.Raw('<span class="glyphicon glyphicon-usd" aria-hidden="true"></span>'), " Approximate Expense: ", Blaze.View("lookup:expenses", function() {
    return Spacebars.mustache(view.lookup("expenses"));                                                               // 92
  })), "\n          "), "\n      "), "\n      ", HTML.H4(" Description: ", Blaze.View("lookup:description", function() {
    return Spacebars.mustache(view.lookup("description"));                                                            // 94
  })), "\n      ", HTML.Raw("<br>"), "\n    "), "\n  "), "\n");                                                       // 95
}));                                                                                                                  // 96
                                                                                                                      // 97
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"subscriptions.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// pages/userfavs/client/subscriptions.js                                                                             //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Meteor.subscribe("theFavs");                                                                                          // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"userfavs.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// pages/userfavs/client/userfavs.js                                                                                  //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Template.userfavs.helpers({                                                                                           // 1
	userfavorites: function () {                                                                                         // 2
		function userfavorites() {                                                                                          // 2
			return UserFavorites.find();                                                                                       // 3
		}                                                                                                                   // 4
                                                                                                                      //
		return userfavorites;                                                                                               // 2
	}(),                                                                                                                 // 2
	anyfav: function () {                                                                                                // 5
		function anyfav() {                                                                                                 // 5
			if (UserFavorites.find().count() == 0) {                                                                           // 6
				return true;                                                                                                      // 7
			}                                                                                                                  // 8
		}                                                                                                                   // 9
                                                                                                                      //
		return anyfav;                                                                                                      // 5
	}()                                                                                                                  // 5
});                                                                                                                   // 1
Template.userfavs.events({                                                                                            // 11
	"click .js-deletefav ": function () {                                                                                // 12
		function clickJsDeletefav(event) {                                                                                  // 12
			console.log("clicked on the x"); //debug                                                                           // 13
			window.alert("You are about to delete this itinerary!");                                                           // 14
			var blog = UserFavorites.findOne({ _id: this.user });                                                              // 15
			Meteor.call("removefav", blog); //callback->this <--removes object created                                         // 16
		}                                                                                                                   // 17
                                                                                                                      //
		return clickJsDeletefav;                                                                                            // 12
	}(),                                                                                                                 // 12
	"click .js-gohome": function () {                                                                                    // 18
		function clickJsGohome(event) {                                                                                     // 18
			Router.go("/");                                                                                                    // 19
		}                                                                                                                   // 20
                                                                                                                      //
		return clickJsGohome;                                                                                               // 18
	}()                                                                                                                  // 18
});                                                                                                                   // 11
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"userprofiles":{"client":{"template.userprofiles.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// pages/userprofiles/client/template.userprofiles.js                                                                 //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("userprofiles");                                                                                 // 2
Template["userprofiles"] = new Template("Template.userprofiles", (function() {                                        // 3
  var view = this;                                                                                                    // 4
  return HTML.DIV({                                                                                                   // 5
    "class": "container"                                                                                              // 6
  }, HTML.Raw('\n		<div class="page-header">\n			<h1>My Profile</h1>\n		</div>\n		'), Blaze.If(function() {           // 7
    return Spacebars.call(view.lookup("currentUser"));                                                                // 8
  }, function() {                                                                                                     // 9
    return [ "\n			", HTML.FORM("\n			 	", HTML.FIELDSET({                                                            // 10
      "class": "form-group"                                                                                           // 11
    }, "\n	   			", HTML.LABEL({                                                                                      // 12
      "for": "username"                                                                                               // 13
    }, "Username: "), "\n	    		", HTML.INPUT({                                                                       // 14
      type: "username",                                                                                               // 15
      "class": "form-control js-username",                                                                            // 16
      placeholder: "Can only choose once!"                                                                            // 17
    }), "\n	    		", HTML.BUTTON({                                                                                    // 18
      "class": "js-check btn btn-success"                                                                             // 19
    }, "Check Availability"), " \n\n	  		", HTML.BUTTON({                                                             // 20
      "class": "js-submitname btn btn-info"                                                                           // 21
    }, "Submit Username"), " Can only choose once!\n	  			"), "\n			  	", HTML.FIELDSET({                             // 22
      "class": "form-group"                                                                                           // 23
    }, "\n			   		", HTML.LABEL({                                                                                     // 24
      "for": "location"                                                                                               // 25
    }, "Current Location:"), "\n			    	", HTML.INPUT({                                                               // 26
      type: "location",                                                                                               // 27
      "class": "form-control js-locat",                                                                               // 28
      placeholder: "city, state, country",                                                                            // 29
      id: "profloc"                                                                                                   // 30
    }), "\n			 	"), "\n			 	", HTML.LABEL({                                                                           // 31
      "for": "location"                                                                                               // 32
    }, "Profile Picture:"), "\n			 	", HTML.INPUT({                                                                   // 33
      "class": "your-upload-class",                                                                                   // 34
      type: "file"                                                                                                    // 35
    }), "\n\n			  ", HTML.BUTTON({                                                                                    // 36
      "class": "js-submitinfo btn btn-info",                                                                          // 37
      id: "submitbut"                                                                                                 // 38
    }, "Submit"), " \n\n			"), "\n		" ];                                                                              // 39
  }, function() {                                                                                                     // 40
    return "\n		Please log in to create profile!\n		";                                                                // 41
  }), "\n	");                                                                                                         // 42
}));                                                                                                                  // 43
                                                                                                                      // 44
Template.__checkName("profiledisplay");                                                                               // 45
Template["profiledisplay"] = new Template("Template.profiledisplay", (function() {                                    // 46
  var view = this;                                                                                                    // 47
  return HTML.DIV({                                                                                                   // 48
    "class": "container"                                                                                              // 49
  }, HTML.Raw('\n		<div class="page-header">\n			<h1>My Profile</h1>\n		</div>\n		'), HTML.DIV({                      // 50
    "class": "row"                                                                                                    // 51
  }, "\n			", HTML.DIV({                                                                                              // 52
    "class": "col-md-3 bg-info"                                                                                       // 53
  }, "\n				", HTML.DIV({                                                                                             // 54
    "class": "imageView"                                                                                              // 55
  }, "\n      ", HTML.DIV("\n        ", HTML.A({                                                                      // 56
    href: function() {                                                                                                // 57
      return Spacebars.mustache(Spacebars.dot(view.lookup("propic"), "url"));                                         // 58
    },                                                                                                                // 59
    target: "_blank"                                                                                                  // 60
  }, HTML.IMG({                                                                                                       // 61
    src: function() {                                                                                                 // 62
      return Spacebars.mustache(Spacebars.dot(view.lookup("propic"), "url"));                                         // 63
    },                                                                                                                // 64
    width: "100%",                                                                                                    // 65
    alt: ""                                                                                                           // 66
  })), "\n      "), "\n  "), "\n		Name: ", Blaze.View("lookup:profile.name", function() {                             // 67
    return Spacebars.mustache(Spacebars.dot(view.lookup("profile"), "name"));                                         // 68
  }), HTML.Raw("<br>"), "\n		Email: ", Blaze.View("lookup:profile.email", function() {                                // 69
    return Spacebars.mustache(Spacebars.dot(view.lookup("profile"), "email"));                                        // 70
  }), " ", HTML.Raw("<br>"), "\n		Location: ", Blaze.View("lookup:profile.location", function() {                     // 71
    return Spacebars.mustache(Spacebars.dot(view.lookup("profile"), "location"));                                     // 72
  }), " ", HTML.Raw("<br>"), "\n		 ", HTML.Raw('<button class="js-submitedit btn btn-info">Submit</button>'), " \n		"), "\n 		", HTML.Raw("<br>"), "\n 	"), "\n\n	");
}));                                                                                                                  // 74
                                                                                                                      // 75
Template.__checkName("editprofile");                                                                                  // 76
Template["editprofile"] = new Template("Template.editprofile", (function() {                                          // 77
  var view = this;                                                                                                    // 78
  return "";                                                                                                          // 79
}));                                                                                                                  // 80
                                                                                                                      // 81
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"userprofiles.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// pages/userprofiles/client/userprofiles.js                                                                          //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      //
Template.profiledisplay.helpers({                                                                                     // 2
	pro: function () {                                                                                                   // 3
		function pro() {                                                                                                    // 3
			// const dest= $(".js-dest").val();                                                                                //
			return UserProfiles.findOne({ user: Meteor.userId });                                                              // 5
		}                                                                                                                   // 6
                                                                                                                      //
		return pro;                                                                                                         // 3
	}(),                                                                                                                 // 3
	propic: function () {                                                                                                // 7
		function propic() {                                                                                                 // 7
			var user = UserProfiles.findOne({ user: Meteor.userId() });                                                        // 8
			var id = user && user.propic && user.propic._id;                                                                   // 9
			return YourFileCollection.findOne({ _id: id });                                                                    // 10
		}                                                                                                                   // 12
                                                                                                                      //
		return propic;                                                                                                      // 7
	}()                                                                                                                  // 7
});                                                                                                                   // 2
Template.userprofiles.events({                                                                                        // 14
	"click .js-check": function () {                                                                                     // 15
		function clickJsCheck(event) {                                                                                      // 15
			event.preventDefault();                                                                                            // 16
			var urname = $(".js-username").val();                                                                              // 17
			var user = Meteor.users.findOne({ _id: Meteor.userId() });                                                         // 18
			if (user.userName && user != null) {                                                                               // 19
				alert("You already have a username, you can only change it once!");                                               // 20
			} else if (Meteor.users.find({ userName: urname }).count() == 0) {                                                 // 21
				alert("The username is available!");                                                                              // 23
			} else {                                                                                                           // 24
				alert("The username is not available! Please re-enter!");                                                         // 25
			}                                                                                                                  // 26
		}                                                                                                                   // 27
                                                                                                                      //
		return clickJsCheck;                                                                                                // 15
	}(),                                                                                                                 // 15
	"click .js-submitname": function () {                                                                                // 28
		function clickJsSubmitname(event) {                                                                                 // 28
			event.preventDefault();                                                                                            // 29
			var user = Meteor.users.findOne({ _id: Meteor.userId() });                                                         // 30
			if (user.userName && user != null) {                                                                               // 31
				alert("You already have a username, you can only change it once!");                                               // 32
			} else {                                                                                                           // 33
				var finalname = $(".js-username").val();                                                                          // 34
				Meteor.call("updateName", finalname);                                                                             // 35
			}                                                                                                                  // 36
		}                                                                                                                   // 37
                                                                                                                      //
		return clickJsSubmitname;                                                                                           // 28
	}()                                                                                                                  // 28
                                                                                                                      //
});                                                                                                                   // 14
Template.userprofiles.events({                                                                                        // 41
	"click .js-submitinfo": function () {                                                                                // 42
		function clickJsSubmitinfo(event) {                                                                                 // 42
			event.preventDefault();                                                                                            // 43
			console.log("hey u clicked");                                                                                      // 44
			var loc = $(".js-locat").val();                                                                                    // 45
			var imgpath = Session.get("propic");                                                                               // 46
			var prof = { user: Meteor.userId(), loc: loc, propic: imgpath };                                                   // 47
			Meteor.call("insertProf", prof);                                                                                   // 49
			Router.go('profiledisplay');                                                                                       // 50
		}                                                                                                                   // 52
                                                                                                                      //
		return clickJsSubmitinfo;                                                                                           // 42
	}(),                                                                                                                 // 42
	'change .your-upload-class': function () {                                                                           // 53
		function changeYourUploadClass(event, template) {                                                                   // 53
			console.log("uploading...");                                                                                       // 54
			FS.Utility.eachFile(event, function (file) {                                                                       // 55
				console.log("each file...");                                                                                      // 56
				var yourFile = new FS.File(file);                                                                                 // 57
				yourFile.creatorId = Meteor.userId(); // todo                                                                     // 58
				var imgfile = YourFileCollection.insert(yourFile, function (err, fileObj) {                                       // 59
					console.log("callback for the insert, err: ", err);                                                              // 60
					if (!err) {                                                                                                      // 61
						console.log("inserted without error");                                                                          // 62
					} else {                                                                                                         // 63
						console.log("there was an error", err);                                                                         // 65
					}                                                                                                                // 66
				});                                                                                                               // 68
				Session.set("propic", imgfile);                                                                                   // 69
			});                                                                                                                // 70
		}                                                                                                                   // 71
                                                                                                                      //
		return changeYourUploadClass;                                                                                       // 53
	}()                                                                                                                  // 53
});                                                                                                                   // 41
                                                                                                                      //
Template.userprofiles.helpers({                                                                                       // 74
	theFiles: function () {                                                                                              // 75
		function theFiles() {                                                                                               // 75
			return YourFileCollection.find();                                                                                  // 76
		}                                                                                                                   // 77
                                                                                                                      //
		return theFiles;                                                                                                    // 75
	}()                                                                                                                  // 75
});                                                                                                                   // 74
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"users":{"client":{"template.users.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// pages/users/client/template.users.js                                                                               //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("users");                                                                                        // 2
Template["users"] = new Template("Template.users", (function() {                                                      // 3
  var view = this;                                                                                                    // 4
  return HTML.UL("\n    ", Blaze.Each(function() {                                                                    // 5
    return {                                                                                                          // 6
      _sequence: Spacebars.call(view.lookup("users")),                                                                // 7
      _variable: "u"                                                                                                  // 8
    };                                                                                                                // 9
  }, function() {                                                                                                     // 10
    return [ "\n    ", HTML.Comment(' <li>\n		<div class="panel panel-success">\n			<div class="panel-body">\n    			<a href="/showsearch/{{r._id}}"><h3>{{r.title}}</h3></a>\n    		</div>\n    		 <div class="panel-footer">by {{r.createdBy}} on {{r.datecreated}}\n    		 </div>\n    	</div>\n    </li> '), "\n        ", Blaze._TemplateWith(function() {
      return {                                                                                                        // 12
        user: Spacebars.call(view.lookup("u"))                                                                        // 13
      };                                                                                                              // 14
    }, function() {                                                                                                   // 15
      return Spacebars.include(view.lookupTemplate("eachuser"));                                                      // 16
    }), "\n    \n    " ];                                                                                             // 17
  }), "\n  ");                                                                                                        // 18
}));                                                                                                                  // 19
                                                                                                                      // 20
Template.__checkName("eachuser");                                                                                     // 21
Template["eachuser"] = new Template("Template.eachuser", (function() {                                                // 22
  var view = this;                                                                                                    // 23
  return HTML.LI("\n    ", HTML.DIV({                                                                                 // 24
    "class": "panel panel-success"                                                                                    // 25
  }, "\n      ", HTML.DIV({                                                                                           // 26
    "class": "panel-body"                                                                                             // 27
  }, "\n          ", HTML.H3(Blaze.View("lookup:user.userName", function() {                                          // 28
    return Spacebars.mustache(Spacebars.dot(view.lookup("user"), "userName"));                                        // 29
  })), "\n          ", HTML.Raw('<button class="js-seeprofile btn btn-info"><span class="glyphicon glyphicon-user" aria-hidden="true"></span></button>'), "\n          ", HTML.Raw('<button class="js-newmsg btn btn-warning"><span class="glyphicon glyphicon-send" aria-hidden="true"></span></button>'), "\n          ", HTML.Raw('<button class="js-addfri btn btn-success"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span></button>'), "\n          ", HTML.Raw('<button class="js-blockusr btn btn-danger"><span class="glyphicon glyphicon-remove-sign" aria-hidden="true"></span></button>'), "\n        "), "\n        \n      "), "\n    ");
}));                                                                                                                  // 31
                                                                                                                      // 32
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"subscriptions.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// pages/users/client/subscriptions.js                                                                                //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Meteor.subscribe("userData");                                                                                         // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"users.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// pages/users/client/users.js                                                                                        //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Session.get("msgto", 0);                                                                                              // 1
Template.users.helpers({                                                                                              // 2
	'users': function () {                                                                                               // 3
		function users() {                                                                                                  // 3
			return Meteor.users.find();                                                                                        // 4
		}                                                                                                                   // 5
                                                                                                                      //
		return users;                                                                                                       // 3
	}()                                                                                                                  // 3
                                                                                                                      //
});                                                                                                                   // 2
Template.users.events({});                                                                                            // 8
Template.eachuser.events({                                                                                            // 11
	'click .js-seeprofile': function () {                                                                                // 12
		function clickJsSeeprofile(event) {}                                                                                // 12
                                                                                                                      //
		return clickJsSeeprofile;                                                                                           // 12
	}(),                                                                                                                 // 12
	'click .js-newmsg': function () {                                                                                    // 15
		function clickJsNewmsg(event) {                                                                                     // 15
			event.preventDefault();                                                                                            // 16
			Session.set("msgto", this.user && this.user._id); //check this!!!!                                                 // 17
			Router.go("messageWindow");                                                                                        // 18
		}                                                                                                                   // 19
                                                                                                                      //
		return clickJsNewmsg;                                                                                               // 15
	}()                                                                                                                  // 15
});                                                                                                                   // 11
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}},"client":{"layout":{"template.layout.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/layout/template.layout.js                                                                                   //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("layout");                                                                                       // 2
Template["layout"] = new Template("Template.layout", (function() {                                                    // 3
  var view = this;                                                                                                    // 4
  return [ HTML.DIV({                                                                                                 // 5
    "class": "navbar navbar-inverse navbar-fixed-top opaque-navbar"                                                   // 6
  }, "\n  ", HTML.DIV({                                                                                               // 7
    "class": "container-fluid"                                                                                        // 8
  }, "\n    ", HTML.Raw('<div class="navbar-header">\n      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navMain">\n  <span class="glyphicon glyphicon-chevron-right" style="color:white;"></span>\n    \n  </button>\n\n      <a class="navbar-brand">TraWorld</a>\n    </div>'), "\n    ", HTML.DIV({
    "class": "collapse navbar-collapse",                                                                              // 10
    id: "navMain"                                                                                                     // 11
  }, "\n      ", HTML.UL({                                                                                            // 12
    "class": "nav navbar-nav pull-right"                                                                              // 13
  }, "\n\n        ", Blaze.If(function() {                                                                            // 14
    return Spacebars.call(view.lookup("currentUser"));                                                                // 15
  }, function() {                                                                                                     // 16
    return [ "\n\n	\n	  		", HTML.LI({                                                                                // 17
      role: "presentation",                                                                                           // 18
      title: "Home"                                                                                                   // 19
    }, "\n		          ", HTML.A({                                                                                     // 20
      href: function() {                                                                                              // 21
        return Spacebars.mustache(view.lookup("pathFor"), "home");                                                    // 22
      }                                                                                                               // 23
    }, "\n		          	", HTML.H4(HTML.SPAN({                                                                         // 24
      "class": "glyphicon glyphicon-home",                                                                            // 25
      "aria-hidden": "true"                                                                                           // 26
    })), "\n				"), "\n	          "), "\n	          ", HTML.LI({                                                      // 27
      role: "presentation",                                                                                           // 28
      id: "itin"                                                                                                      // 29
    }, "\n	     		", HTML.A({                                                                                         // 30
      href: function() {                                                                                              // 31
        return Spacebars.mustache(view.lookup("pathFor"), "itineraries");                                             // 32
      }                                                                                                               // 33
    }, "\n					", HTML.SPAN({                                                                                         // 34
      "class": "glyphicon glyphicon-time",                                                                            // 35
      "aria-hidden": "true"                                                                                           // 36
    }), " +\n					", HTML.BR(), "Itinerary\n				"), "\n\n	          "), "\n			", HTML.LI({                            // 37
      role: "presentation",                                                                                           // 38
      title: "Current Group Camps"                                                                                    // 39
    }, "\n				", HTML.A({                                                                                             // 40
      href: function() {                                                                                              // 41
        return Spacebars.mustache(view.lookup("pathFor"), "groupCampSearch");                                         // 42
      }                                                                                                               // 43
    }, "\n					", HTML.SPAN({                                                                                         // 44
      "class": "glyphicon glyphicon-tent",                                                                            // 45
      "aria-hidden": "true"                                                                                           // 46
    }), "\n					", HTML.H6("Find Group Camps"), "\n				"), "\n			"), "\n	 	     ", HTML.LI({                          // 47
      role: "presentation",                                                                                           // 48
      title: "Design a New Group Camp"                                                                                // 49
    }, "\n	 			", HTML.A({                                                                                            // 50
      href: function() {                                                                                              // 51
        return Spacebars.mustache(view.lookup("pathFor"), "groupCampPost");                                           // 52
      }                                                                                                               // 53
    }, "\n					", HTML.SPAN({                                                                                         // 54
      "class": "glyphicon glyphicon-tent",                                                                            // 55
      "aria-hidden": "true"                                                                                           // 56
    }), " +\n					", HTML.H6("Design a Group Camp"), "\n				"), "\n\n	 	     "), "\n\n			", HTML.Comment(" ABOUT "), "\n	  	     ", HTML.LI({
      role: "presentation",                                                                                           // 58
      title: "About Us"                                                                                               // 59
    }, "\n	          	", HTML.A({                                                                                     // 60
      href: function() {                                                                                              // 61
        return Spacebars.mustache(view.lookup("pathFor"), "selfdisplay");                                             // 62
      }                                                                                                               // 63
    }, "\n					", HTML.SPAN({                                                                                         // 64
      "class": "glyphicon glyphicon-book",                                                                            // 65
      "aria-hidden": "true"                                                                                           // 66
    }), "\n					", HTML.H6(HTML.SMALL("Temp")), "\n				"), "\n	          "), "\n\n			", HTML.Comment(" COMMENTS "), "\n	  	    ", HTML.Comment('  <li role="presentation" title="Comments">\n	     		<a href="{{pathFor \'comments\'}}">\n					<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>\n					<h6><small>Comments</small></h6>\n				</a>\n	          </li> '), "\n	           ", HTML.LI({
      role: "presentation",                                                                                           // 68
      title: "Comments"                                                                                               // 69
    }, "\n	     		", HTML.A({                                                                                         // 70
      href: function() {                                                                                              // 71
        return Spacebars.mustache(view.lookup("pathFor"), "map");                                                     // 72
      }                                                                                                               // 73
    }, "\n					", HTML.SPAN({                                                                                         // 74
      "class": "glyphicon glyphicon-pencil",                                                                          // 75
      "aria-hidden": "true"                                                                                           // 76
    }), "\n					", HTML.H6("Google Maps API"), "\n				"), "\n	          "), "\n			", HTML.LI({                        // 77
      role: "presentation"                                                                                            // 78
    }, "\n	     		", HTML.A({                                                                                         // 79
      href: function() {                                                                                              // 80
        return Spacebars.mustache(view.lookup("pathFor"), "userprofiles");                                            // 81
      }                                                                                                               // 82
    }, "\n					", HTML.SPAN({                                                                                         // 83
      "class": "glyphicon glyphicon-user",                                                                            // 84
      "aria-hidden": "true"                                                                                           // 85
    }), "\n					", HTML.H6("My Profile"), "\n				"), "\n	          "), "\n						\n			", HTML.LI({                     // 86
      role: "presentation",                                                                                           // 87
      "class": "dropdown"                                                                                             // 88
    }, "\n					", HTML.A({                                                                                            // 89
      "class": "dropdown-toggle",                                                                                     // 90
      "data-toggle": "dropdown",                                                                                      // 91
      href: "#",                                                                                                      // 92
      role: "button",                                                                                                 // 93
      "aria-haspopup": "true",                                                                                        // 94
      "aria-expanded": "false"                                                                                        // 95
    }, " ", Blaze.View("lookup:userName.profile.first", function() {                                                  // 96
      return Spacebars.mustache(Spacebars.dot(view.lookup("userName"), "profile", "first"));                          // 97
    }), " ", Blaze.View("lookup:userName.profile.last", function() {                                                  // 98
      return Spacebars.mustache(Spacebars.dot(view.lookup("userName"), "profile", "last"));                           // 99
    }), " ", HTML.SPAN({                                                                                              // 100
      "class": "caret"                                                                                                // 101
    }), " "), "\n					", HTML.UL({                                                                                    // 102
      "class": "dropdown-menu"                                                                                        // 103
    }, "\n						", HTML.LI(HTML.A({                                                                                   // 104
      href: function() {                                                                                              // 105
        return Spacebars.mustache(view.lookup("pathFor"), "map");                                                     // 106
      }                                                                                                               // 107
    }, "Map")), "\n						", HTML.LI({                                                                                 // 108
      role: "separator",                                                                                              // 109
      "class": "divider"                                                                                              // 110
    }), "\n						", HTML.LI({                                                                                         // 111
      "class": "logout"                                                                                               // 112
    }, HTML.A({                                                                                                       // 113
      href: "#"                                                                                                       // 114
    }, "Logout")), "\n					"), "\n				"), "\n				", HTML.Comment(' <li class="nav">\n					<nav class="nav" id="onlythis">\n  <div class="burger">\n    <div class="burger__patty"></div>\n  </div>\n\n  <ul id="out" class="nav__list">\n    <li class="nav__item">\n      <a href="#1" class="nav__link c-blue"><i class="fa fa-camera-retro"></i></a>\n    </li>\n    <li class="nav__item">\n      <a href="#2" class="nav__link c-yellow scrolly"><i class="fa fa-bolt"></i></a>\n    </li>\n    <li class="nav__item">\n      <a href="#3" class="nav__link c-red"><i class="fa fa-music"></i></a>\n    </li>\n    <li class="nav__item">\n      <a href="#4" class="nav__link c-green"><i class="fa fa-paper-plane"></i></a>\n    </li>\n  </ul>\n</nav>\n</li> '), "\n			" ];
  }, function() {                                                                                                     // 116
    return [ "\n					", HTML.LI({                                                                                     // 117
      "class": "pull-right",                                                                                          // 118
      role: "presentation"                                                                                            // 119
    }, "\n						", HTML.A({                                                                                           // 120
      href: function() {                                                                                              // 121
        return Spacebars.mustache(view.lookup("pathFor"), "login");                                                   // 122
      }                                                                                                               // 123
    }, "\n							", HTML.SPAN({                                                                                       // 124
      "class": "glyphicon glyphicon-user",                                                                            // 125
      "aria-hidden": "true"                                                                                           // 126
    }), "\n							", HTML.H6("Sign in"), "\n						"), "\n					"), "\n			", HTML.LI({                                  // 127
      "class": "pull-right",                                                                                          // 128
      role: "presentation"                                                                                            // 129
    }, "\n				", HTML.A({                                                                                             // 130
      href: function() {                                                                                              // 131
        return Spacebars.mustache(view.lookup("pathFor"), "signup");                                                  // 132
      }                                                                                                               // 133
    }, "\n					", HTML.SPAN({                                                                                         // 134
      "class": "glyphicon glyphicon-user",                                                                            // 135
      "aria-hidden": "true"                                                                                           // 136
    }), "\n					", HTML.H6("Sign up"), "\n				"), "\n			"), "\n\n\n			" ];                                            // 137
  }), "\n		", HTML.Raw("<!-- </ul> -->"), "\n      "), "\n\n    "), "\n  "), "\n"), "\n	\n", Spacebars.include(view.lookupTemplate("yield")) ];
}));                                                                                                                  // 139
                                                                                                                      // 140
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"layout.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/layout/layout.js                                                                                            //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Template.layout.helpers({                                                                                             // 1
    userName: function () {                                                                                           // 2
        function userName() {                                                                                         // 2
            var liveUser = Meteor.userId();                                                                           // 3
            return Meteor.users.findOne({                                                                             // 4
                _id: liveUser                                                                                         // 5
            });                                                                                                       // 4
        }                                                                                                             // 7
                                                                                                                      //
        return userName;                                                                                              // 2
    }()                                                                                                               // 2
});                                                                                                                   // 1
Template.layout.events({                                                                                              // 9
    'click .logout': function () {                                                                                    // 10
        function clickLogout(event) {                                                                                 // 10
            event.preventDefault();                                                                                   // 11
            Meteor.logout();                                                                                          // 12
            Router.go('/');                                                                                           // 13
        }                                                                                                             // 14
                                                                                                                      //
        return clickLogout;                                                                                           // 10
    }()                                                                                                               // 10
                                                                                                                      //
});                                                                                                                   // 9
/*                                                                                                                    //
 **********************************************************                                                           //
 * OPAQUE NAVBAR SCRIPT                                                                                               //
 **********************************************************                                                           //
 */                                                                                                                   //
                                                                                                                      //
// Toggle tranparent navbar when the user scrolls the page                                                            //
                                                                                                                      //
$(window).scroll(function () {                                                                                        // 25
    if ($(this).scrollTop() > 50) /*height in pixels when the navbar becomes non opaque*/                             // 26
        {                                                                                                             // 27
            $('.opaque-navbar').addClass('opaque');                                                                   // 28
        } else {                                                                                                      // 29
        $('.opaque-navbar').removeClass('opaque');                                                                    // 30
    }                                                                                                                 // 31
});                                                                                                                   // 32
// new function($) {                                                                                                  //
//   $.fn.setCursorPosition = function(pos) {                                                                         //
//     if (this.setSelectionRange) {                                                                                  //
//       this.setSelectionRange(pos, pos);                                                                            //
//     } else if (this.createTextRange) {                                                                             //
//       var range = this.createTextRange();                                                                          //
//       range.collapse(true);                                                                                        //
//       if(pos < 0) {                                                                                                //
//         pos = $(this).val().length + pos;                                                                          //
//       }                                                                                                            //
//       range.moveEnd('character', pos);                                                                             //
//       range.moveStart('character', pos);                                                                           //
//       range.select();                                                                                              //
//     }                                                                                                              //
//   }                                                                                                                //
// }(jQuery);                                                                                                         //
// $('input[type=search]').focus(function() {                                                                         //
//   $(this).setCursorPosition(4);                                                                                    //
// });                                                                                                                //
// var menu = document.querySelector('.nav__list');                                                                   //
// var burger = document.querySelector('.burger');                                                                    //
// var doc = $(document);                                                                                             //
// var l = $('.scrolly');                                                                                             //
// var panel = $('.panel');                                                                                           //
// var vh = $(window).height();                                                                                       //
                                                                                                                      //
// var openMenu = function() {                                                                                        //
//   burger.classList.toggle('burger--active');                                                                       //
//   menu.classList.toggle('nav__list--active');                                                                      //
// };                                                                                                                 //
                                                                                                                      //
// reveal content of first panel by default                                                                           //
// panel.eq(0).find('.panel__content').addClass('panel__content--active');                                            //
                                                                                                                      //
// var scrollFx = function() {                                                                                        //
//   var ds = doc.scrollTop();                                                                                        //
//   var of = vh / 4;                                                                                                 //
                                                                                                                      //
// if the panel is in the viewport, reveal the content, if not, hide it.                                              //
//   for (var i = 0; i < panel.length; i++) {                                                                         //
//     if (panel.eq(i).offset().top < ds+of) {                                                                        //
//      panel                                                                                                         //
//        .eq(i)                                                                                                      //
//        .find('.panel__content')                                                                                    //
//        .addClass('panel__content--active');                                                                        //
//     } else {                                                                                                       //
//       panel                                                                                                        //
//         .eq(i)                                                                                                     //
//         .find('.panel__content')                                                                                   //
//         .removeClass('panel__content--active')                                                                     //
//     }                                                                                                              //
//   }                                                                                                                //
// };                                                                                                                 //
                                                                                                                      //
// var scrolly = function(e) {                                                                                        //
//   e.preventDefault();                                                                                              //
//   var target = this.hash;                                                                                          //
//   var $target = $(target);                                                                                         //
                                                                                                                      //
//   $('html, body').stop().animate({                                                                                 //
//       'scrollTop': $target.offset().top                                                                            //
//   }, 300, 'swing', function () {                                                                                   //
//       window.location.hash = target;                                                                               //
//   });                                                                                                              //
// }                                                                                                                  //
                                                                                                                      //
// var init = function() {                                                                                            //
//   burger.addEventListener('click', openMenu, false);                                                               //
//   window.addEventListener('scroll', scrollFx, false);                                                              //
//   window.addEventListener('load', scrollFx, false);                                                                //
//   $('a[href^="#"]').on('click',scrolly);                                                                           //
// };                                                                                                                 //
                                                                                                                      //
// doc.on('ready', init);                                                                                             //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"init.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/init.js                                                                                                     //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
// Meteor.startup(function() {                                                                                        //
//   Uploader.uploadUrl = Meteor.absoluteUrl("upload"); // Cordova needs absolute URL                                 //
// });                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"lib":{"collections.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// lib/collections.js                                                                                                 //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      //
Comments = new Meteor.Collection("comments");                                                                         // 2
Trips = new Meteor.Collection("trips");                                                                               // 3
DestSearched = new Meteor.Collection("searches");                                                                     // 4
GroupCampTrips = new Meteor.Collection("groupCampTrips");                                                             // 5
                                                                                                                      //
Settings = new Meteor.Collection("settings");                                                                         // 7
UserFavorites = new Meteor.Collection("userfavs");                                                                    // 8
FavLocations = new Meteor.Collection("favlocs");                                                                      // 9
Messages = new Meteor.Collection("messages");                                                                         // 10
MsgBuddies = new Meteor.Collection("msgbuddies");                                                                     // 11
Friends = new Meteor.Collection("friends");                                                                           // 12
UserProfiles = new Meteor.Collection('profiles');                                                                     // 13
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"globalHelper.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// lib/globalHelper.js                                                                                                //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
// if (Meteor.isClient) {                                                                                             //
//                                                                                                                    //
// Template.registerHelper('findNoAcconut', () =>{                                                                    //
//   if(!Accounts.findOne({})){                                                                                       //
//     console.log("retun true")                                                                                      //
//     return true;                                                                                                   //
//   }                                                                                                                //
//   else{                                                                                                            //
//     console.log("return false")                                                                                    //
//     return false;                                                                                                  //
//   }                                                                                                                //
// })                                                                                                                 //
//                                                                                                                    //
//                                                                                                                    //
// }                                                                                                                  //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"methods.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// lib/methods.js                                                                                                     //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Meteor.methods({                                                                                                      // 1
	insertTrip: function () {                                                                                            // 2
		function insertTrip(trip) {                                                                                         // 2
			Trips.insert(trip);                                                                                                // 3
		}                                                                                                                   // 4
                                                                                                                      //
		return insertTrip;                                                                                                  // 2
	}(),                                                                                                                 // 2
	sayhilib: function () {                                                                                              // 5
		function sayhilib() {                                                                                               // 5
			console.log("hi");                                                                                                 // 6
		}                                                                                                                   // 7
                                                                                                                      //
		return sayhilib;                                                                                                    // 5
	}(),                                                                                                                 // 5
	removeTrip: function () {                                                                                            // 8
		function removeTrip(trip) {                                                                                         // 8
			Trips.remove(trip);                                                                                                // 9
		}                                                                                                                   // 10
                                                                                                                      //
		return removeTrip;                                                                                                  // 8
	}(),                                                                                                                 // 8
	tosearch: function () {                                                                                              // 11
		function tosearch(destination) {                                                                                    // 11
			if (DestSearched.find({ location: destination }).count() == 0) {                                                   // 12
				console.dir("New Destination added to database");                                                                 // 13
				var search_obj = { location: destination,                                                                         // 14
					searches: 1                                                                                                      // 16
				};                                                                                                                // 15
				DestSearched.insert(search_obj);                                                                                  // 18
			} else {                                                                                                           // 20
				console.dir("Destination search incremented");                                                                    // 21
				DestSearched.update({ _id: DestSearched.findOne({ location: destination })._id }, { $inc: { searches: 1 } });     // 22
			}                                                                                                                  // 23
		}                                                                                                                   // 25
                                                                                                                      //
		return tosearch;                                                                                                    // 11
	}(),                                                                                                                 // 11
	submitsettings: function () {                                                                                        // 26
		function submitsettings(setting) {                                                                                  // 26
                                                                                                                      //
			if (Settings.find({ user: Meteor.userId() }).count() == 0) {                                                       // 28
				console.dir("Insert new User");                                                                                   // 29
				Settings.insert(setting);                                                                                         // 30
			} else {                                                                                                           // 32
				console.dir("User info updated");                                                                                 // 33
				Settings.update({ _id: Settings.findOne({ user: Meteor.userId() })._id }, { $set: setting });                     // 34
			}                                                                                                                  // 35
		}                                                                                                                   // 36
                                                                                                                      //
		return submitsettings;                                                                                              // 26
	}(),                                                                                                                 // 26
	removesettings: function () {                                                                                        // 37
		function removesettings() {                                                                                         // 37
			Settings.remove({});                                                                                               // 38
		}                                                                                                                   // 39
                                                                                                                      //
		return removesettings;                                                                                              // 37
	}(),                                                                                                                 // 37
	addFav: function () {                                                                                                // 40
		function addFav(fav) {                                                                                              // 40
			UserFavorites.insert(fav);                                                                                         // 41
		}                                                                                                                   // 42
                                                                                                                      //
		return addFav;                                                                                                      // 40
	}(),                                                                                                                 // 40
	removefav: function () {                                                                                             // 43
		function removefav(stuff) {                                                                                         // 43
			UserFavorites.remove(stuff);                                                                                       // 44
		}                                                                                                                   // 45
                                                                                                                      //
		return removefav;                                                                                                   // 43
	}(),                                                                                                                 // 43
	updateName: function () {                                                                                            // 46
		function updateName(name) {                                                                                         // 46
			Meteor.users.update({ _id: Meteor.userId() }, { $set: { userName: name } });                                       // 47
		}                                                                                                                   // 48
                                                                                                                      //
		return updateName;                                                                                                  // 46
	}(),                                                                                                                 // 46
	addMsg: function () {                                                                                                // 49
		function addMsg(msg) {                                                                                              // 49
			Messages.insert(msg);                                                                                              // 50
		}                                                                                                                   // 51
                                                                                                                      //
		return addMsg;                                                                                                      // 49
	}(),                                                                                                                 // 49
	removeMsg: function () {                                                                                             // 52
		function removeMsg() {                                                                                              // 52
			Messages.remove({});                                                                                               // 53
		}                                                                                                                   // 54
                                                                                                                      //
		return removeMsg;                                                                                                   // 52
	}(),                                                                                                                 // 52
	addMsgBuddy: function () {                                                                                           // 55
		function addMsgBuddy(u2id) {                                                                                        // 55
			if (MsgBuddies.find({ $and: [{ user: Meteor.userId() }, { userbuddy: u2id }] }).count() == 0) {                    // 56
				var u1buddy = {                                                                                                   // 57
					user: Meteor.userId(),                                                                                           // 58
					userbuddy: u2id,                                                                                                 // 59
					userbuddyProfile: Meteor.users.findOne({ _id: u2id })                                                            // 60
				};                                                                                                                // 57
				//msgs: Messages.find({$or:[{$and:[{user1:Meteor.userId()},{user2:u2id}]},{$and:[{user2:Meteor.userId()},{user1:u2id}]}]}, {sort:{msgcreatedAt:1}}),
				MsgBuddies.insert(u1buddy);                                                                                       // 63
			}                                                                                                                  // 64
			if (MsgBuddies.find({ $and: [{ user: u2id }, { userbuddy: Meteor.userId() }] }).count() == 0) {                    // 65
				var u2buddy = {                                                                                                   // 66
					user: u2id,                                                                                                      // 67
					userbuddy: Meteor.userId(),                                                                                      // 68
					userbuddyProfile: Meteor.users.findOne({ _id: Meteor.userId() })                                                 // 69
				};                                                                                                                // 66
				//msgs: Messages.find({$or:[{$and:[{user1:Meteor.userId()},{user2:u2id}]},{$and:[{user2:Meteor.userId()},{user1:u2id}]}]}, {sort:{msgcreatedAt:1}}),
				MsgBuddies.insert(u2buddy);                                                                                       // 72
			}                                                                                                                  // 73
		}                                                                                                                   // 74
                                                                                                                      //
		return addMsgBuddy;                                                                                                 // 55
	}(),                                                                                                                 // 55
	insertProf: function () {                                                                                            // 75
		function insertProf(prof) {                                                                                         // 75
			if (UserProfiles.find({ user: Meteor.userId() }).count() == 0) {                                                   // 76
				UserProfiles.insert(prof);                                                                                        // 77
			}                                                                                                                  // 78
		}                                                                                                                   // 79
                                                                                                                      //
		return insertProf;                                                                                                  // 75
	}(),                                                                                                                 // 75
	textedits: function () {                                                                                             // 80
		function textedits(id, textedit) {                                                                                  // 80
			Trips.findOne({ _id: id }, { $set: { textedit: textedit } });                                                      // 81
		}                                                                                                                   // 82
                                                                                                                      //
		return textedits;                                                                                                   // 80
	}()                                                                                                                  // 80
                                                                                                                      //
});                                                                                                                   // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"router.js":function(require){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// lib/router.js                                                                                                      //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Router.configure({                                                                                                    // 1
  layoutTemplate: 'layout'                                                                                            // 2
}); //tells what template to use for layout, has to have yield                                                        // 1
Router.route('/', { name: "home" });                                                                                  // 4
Router.route('itineraries');                                                                                          // 5
Router.route('about');                                                                                                // 6
Router.route('comments');                                                                                             // 7
Router.route('itdisplay');                                                                                            // 8
Router.route('searchresults');                                                                                        // 9
Router.route('account');                                                                                              // 10
Router.route('map');                                                                                                  // 11
Router.route('myAccount', { name: "myAccount" });                                                                     // 12
Router.route('/signup', { name: 'signup' });                                                                          // 13
Router.route('userprofiles');                                                                                         // 14
Router.route('login');                                                                                                // 15
Router.route('selfdisplay');                                                                                          // 16
                                                                                                                      //
var requireLogin = function requireLogin() {                                                                          // 19
  // if the user is not logged in...                                                                                  //
  if (!Meteor.userId()) {                                                                                             // 21
    // ...render the home template in order to login                                                                  //
    this.render('home');                                                                                              // 23
  } else {                                                                                                            // 24
    // otherwise continue                                                                                             //
    this.next();                                                                                                      // 26
  }                                                                                                                   // 27
};                                                                                                                    // 28
                                                                                                                      //
Router.onBeforeAction(requireLogin, {                                                                                 // 30
  // the only pages that don't require logged in user are:                                                            //
  except: ['signup', 'home', 'login', 'searchresults']                                                                // 32
});                                                                                                                   // 30
                                                                                                                      //
Router.route('/showtrip/:_id', { name: "showTrip",                                                                    // 36
  data: function () {                                                                                                 // 38
    function data() {                                                                                                 // 38
      var c = Trips.findOne({ _id: this.params._id });                                                                // 39
      console.dir(c);                                                                                                 // 40
      return c;                                                                                                       // 41
    }                                                                                                                 // 42
                                                                                                                      //
    return data;                                                                                                      // 38
  }()                                                                                                                 // 38
});                                                                                                                   // 37
                                                                                                                      //
Router.route('/showsearch/:_id', { name: "showSearch",                                                                // 47
  data: function () {                                                                                                 // 49
    function data() {                                                                                                 // 49
      var c = Trips.findOne({ _id: this.params._id });                                                                // 50
      return c;                                                                                                       // 51
    }                                                                                                                 // 52
                                                                                                                      //
    return data;                                                                                                      // 49
  }()                                                                                                                 // 49
});                                                                                                                   // 48
Router.route('/showpic/:_id', { name: "showPics",                                                                     // 56
  data: function () {                                                                                                 // 58
    function data() {                                                                                                 // 58
      return YourFileCollection.findOne({ _id: this.params._id });;                                                   // 59
    }                                                                                                                 // 60
                                                                                                                      //
    return data;                                                                                                      // 58
  }()                                                                                                                 // 58
});                                                                                                                   // 57
                                                                                                                      //
Router.route('/GroupCampDetails/:_id', { name: "GroupCampDetails",                                                    // 66
  data: function () {                                                                                                 // 68
    function data() {                                                                                                 // 68
      var c = GroupCampTrips.findOne({ _id: this.params._id });                                                       // 69
      console.dir(c);                                                                                                 // 70
      return c;                                                                                                       // 71
    }                                                                                                                 // 72
                                                                                                                      //
    return data;                                                                                                      // 68
  }()                                                                                                                 // 68
});                                                                                                                   // 67
                                                                                                                      //
// Router.route('/editor/:_id', function () {                                                                         //
//   this.render('Editor', {                                                                                          //
//     data: function () {                                                                                            //
//       Session.set('editorContent', 'editor content here');                                                         //
//       return Trips.findOne({_id: this.params._id})                                                                 //
//   }});                                                                                                             //
// });                                                                                                                //
                                                                                                                      //
// Group Camp                                                                                                         //
Router.route('groupCampSearch');                                                                                      // 86
Router.route('groupCampPost');                                                                                        // 87
                                                                                                                      //
Router.route('profiledisplay');                                                                                       // 90
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"upload.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// lib/upload.js                                                                                                      //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
YourFileCollection = new FS.Collection("yourFileCollection", {                                                        // 1
    stores: [new FS.Store.FileSystem("yourFileCollection", { path: "~/meteor_uploads" })]                             // 2
});                                                                                                                   // 1
YourFileCollection.allow({                                                                                            // 4
    insert: function () {                                                                                             // 5
        function insert(userId, doc) {                                                                                // 5
            return true;                                                                                              // 6
        }                                                                                                             // 7
                                                                                                                      //
        return insert;                                                                                                // 5
    }(),                                                                                                              // 5
    update: function () {                                                                                             // 8
        function update(userId, doc) {                                                                                // 8
            return true;                                                                                              // 9
        }                                                                                                             // 10
                                                                                                                      //
        return update;                                                                                                // 8
    }(),                                                                                                              // 8
    remove: function () {                                                                                             // 11
        function remove(userId, doc) {                                                                                // 11
            return true;                                                                                              // 12
        }                                                                                                             // 13
                                                                                                                      //
        return remove;                                                                                                // 11
    }(),                                                                                                              // 11
    download: function () {                                                                                           // 14
        function download(userId, doc) {                                                                              // 14
            return true;                                                                                              // 15
        }                                                                                                             // 16
                                                                                                                      //
        return download;                                                                                              // 14
    }()                                                                                                               // 14
});                                                                                                                   // 4
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},{"extensions":[".js",".json",".html",".css",".scss"]});
require("./pages/Itineraries/client/template.itineraries.js");
require("./pages/about/client/template.about.js");
require("./pages/googlemapapi/client/template.googlemapapi.js");
require("./pages/groupCampPost/client/template.groupCampPost.js");
require("./pages/groupCampSearch/client/template.groupCampSearch.js");
require("./pages/home/client/template.home.js");
require("./pages/itDisplay/client/template.itDisplay.js");
require("./pages/login/client/template.login.js");
require("./pages/searchresults/client/template.searchresults.js");
require("./pages/selfdisplay/client/template.selfdisplay.js");
require("./pages/settings/client/template.settings.js");
require("./pages/signup/client/template.signup.js");
require("./pages/userfavs/client/template.userfavs.js");
require("./pages/userprofiles/client/template.userprofiles.js");
require("./pages/users/client/template.users.js");
require("./client/layout/template.layout.js");
require("./pages/home/lib/method.js");
require("./pages/searchresults/lib/method.js");
require("./lib/collections.js");
require("./lib/globalHelper.js");
require("./lib/methods.js");
require("./lib/router.js");
require("./lib/upload.js");
require("./pages/Itineraries/client/itineraries.js");
require("./pages/Itineraries/client/subscriptions.js");
require("./pages/about/client/about.js");
require("./pages/googlemapapi/client/googlemapapi.js");
require("./pages/groupCampPost/client/groupCampPost.js");
require("./pages/groupCampSearch/client/groupCampSearch.js");
require("./pages/home/client/home.js");
require("./pages/home/client/subscriptions.js");
require("./pages/itDisplay/client/itdisplay.js");
require("./pages/login/client/login.js");
require("./pages/searchresults/client/searchresults.js");
require("./pages/searchresults/client/subscriptions.js");
require("./pages/selfdisplay/client/selfdisplay.js");
require("./pages/settings/client/settings.js");
require("./pages/settings/client/subscriptions.js");
require("./pages/signup/client/signup.js");
require("./pages/userfavs/client/subscriptions.js");
require("./pages/userfavs/client/userfavs.js");
require("./pages/userprofiles/client/userprofiles.js");
require("./pages/users/client/subscriptions.js");
require("./pages/users/client/users.js");
require("./client/layout/layout.js");
require("./client/init.js");