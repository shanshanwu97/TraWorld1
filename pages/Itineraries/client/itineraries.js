Session.set("userinput",0);
Session.set("notCompleteAlert",false);
Template.itineraries.helpers({
	trips:function(){
		// const dest= $(".js-dest").val();
		return Trips.find();
	},
  notCompleteAlertNeeded: function() {
    if (Session.get("notCompleteAlert"))
      return true;
    else
      return false;
  }
})
Template.itineraries.rendered=function(){
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
 });
}

Template.itineraries.events({
	"submit form": function(){
		event.preventDefault();
		console.log("hey u clicked");

		const name = $(".js-name").val();

		const desti=$(".js-dest1").val().toLowerCase();
		var dest = [{
			uniqid:Math.floor(Math.random() * 100000),
			value: desti}];
		var dest2=Session.get("inputs");
		dest= dest.concat(dest2);

		const arrive = $(".js-arrive").val();
		const depart = $(".js-depart").val();
		const amount = $(".js-trv").val();
		// if (!isNumeric($(".js-ex").val())){
		// 	alert("Please enter a valid number!");

		// }else if (!($(".js-title").val())){
		// 	alert("Please enter a valid title!");

		// }else{
			const expenses = Number($(".js-ex").val());
			const desc= $(".js-descript").val();
			const titleOf=$(".js-title").val();



			const username=Meteor.users.findOne({_id:Meteor.userId()});
			const ur=username&&username.profile&&username.profile.username;
			const img=$(".js-img").val();
			const txt=[];
			var imgs= Session.get("thumbpic");
      var likes=0;

			
      var complete = true;
     var filled = true;


    // TITLE
    if (!titleOf){  // Required
      complete = false;
      filled = false;
      $(".js-triptitle").removeClass('has-success').addClass('has-error');
    }
    else {
      $(".js-triptitle").removeClass('has-error').addClass('has-success');
    }

    // DESTINATION
    if (!desti){
      complete = false;
      filled = false;
      $(".js-tripdest").removeClass('has-success').addClass('has-error');
    }
    else {
      $(".js-tripdest").removeClass('has-error').addClass('has-success');
    }

    // DESCRIPTION
    if (!desc){
      filled = false;
      $(".js-tripdesc").removeClass('has-success').addClass('has-warning');
    }
    else {
      $(".js-tripdesc").removeClass('has-warning').addClass('has-success');
    }

    

    // FROM
    if (!arrive || isNaN(Date.parse(arrive)) || new Date(arrive) > new Date()){ // Required
      complete = false;
      filled = false;
      $(".js-triparrive").removeClass('has-success').addClass('has-error');
    }
    else {
      $(".js-triparrive").removeClass('has-error').addClass('has-success');
    }

    // TO
    if (!depart || isNaN(Date.parse(depart)) || new Date(depart) < new Date(arrive)){  // Required
      complete = false;
      filled = false;
      $(".js-tripdepart").removeClass('has-success').addClass('has-error');
    }
    else {
      $(".js-tripdepart").removeClass('has-error').addClass('has-success');
    }

    //DEADLINE
    // if (!deadline || isNaN(Date.parse(deadline)) || new Date(deadline) > new Date(From) || new Date(deadline) < new Date()){  // Required
    //   complete = false;
    //   filled = false;
    //   $(".js-deadlineGroup").removeClass('has-success').addClass('has-error');
    // }
    // else {
    //   $(".js-deadlineGroup").removeClass('has-error').addClass('has-success');
    // }

    // THRESHOLD
    if (!amount || amount < 1 || Math.floor(amount) != amount){ // Required
      complete = false;
      filled = false;
      $(".js-tripppl").removeClass('has-success').addClass('has-error');
    }
    else {
      $(".js-tripppl").removeClass('has-error').addClass('has-success');
    }

    // COST
    if (!expenses || !$.isNumeric(expenses) || expenses < 0 || (Math.floor(expenses) != expenses && expenses.length != expenses.indexOf('.') + 3)){
      filled = false;
      complete=false;
      $(".js-tripex").removeClass('has-success').addClass('has-error');
      // cost = null;
    }
    else {
      $(".js-tripex").removeClass('has-error').addClass('has-success');
    }

    // PICTURE
    if (!imgs){
      filled = false;
      $(".js-tripbanpic").removeClass('has-success').addClass('has-warning');
    }
    else {
      $(".js-tripbanpic").removeClass('has-warning').addClass('has-success');
    }


    if (filled) {
       const trip=
      {createdBy:Meteor.userId(), username: ur, datecreated: new Date(), title: titleOf, destination:dest, arrival: arrive, departure:depart, amountOfTraveler: amount, expenses: expenses, image: imgs, description: desc, textedit:txt,likes
      }
      Session.set("userinput",trip);
      Meteor.call("insertTrip", trip);
      var tripid=Session.get("temptripid");
      const goid='/showsearch/'+tripid;
      Router.go(goid);
    }
    else if (complete){
      const trip=
      {createdBy:Meteor.userId(), username: ur, datecreated: new Date(), title: titleOf, destination:dest, arrival: arrive, departure:depart, amountOfTraveler: amount, expenses: expenses, image: imgs, description: desc, textedit:txt,likes
      }
      Session.set("userinput",trip);
      $("#warningUncomp").modal();
    }
    else{
      Session.set("notCompleteAlert", true);
    }
   

		// }
	},
  "click .js-tripmodalsubmit" : function(event){
    $('.modal-backdrop').hide();
    $('body').removeClass('modal-open');
     $("#warningUncomp").modal('hide');
    var trip=Session.get("userinput");
    Meteor.call("insertTrip", trip);
      var tripid=Session.get("temptripid");
      const goid='/showsearch/'+tripid;
      Router.go(goid);
  },
	'click #deleteFileButton ': function (event) {
        console.log("deleteFile button ", this);
        YourFileCollection.remove({_id:this._id});

      },
      'change .your-upload-class': function (event, template) {
    console.log("uploading...")
    FS.Utility.eachFile(event, function (file) {
      console.log("each file...");
      var yourFile = new FS.File(file);
          yourFile.creatorId = Meteor.userId();  // todo
       var img=YourFileCollection.insert(yourFile, function (err, fileObj) {
        console.log("callback for the insert, err: ", err);
        if (!err) {
          console.log("inserted without error");
        }
        else {
          console.log("there was an error", err);
        }
      });
      Session.set("thumbpic",img&&img._id);
    });
  },
//   "click .js-picktime" :function(){
//     var time=$('#time').datepicker({
//     onSelect: function()
//     {
//         var dateObject = $(this).datepicker('getDate');
//     }
// });
//     $('.js-arrive').html(time);
//   }

})
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);

}


//client only code
Template.itineraries.onCreated(function() {
  Session.set('inputs', []); // on page load, set this to have no inputs
});

Template.itineraries.helpers({
  inputs: function () {
    return Session.get('inputs'); // reactively watches the Session variable, so when it changes, this result will change and our template will change
  }
});

// Now we'll set up a click handler to add inputs to our array when we   click the "add" button
Template.itineraries.events({
  'click #add-input': function () {
    var inputs = Session.get('inputs');
    var uniqid = Math.floor(Math.random() * 100000); // Give a unique ID so you can pull _this_ input when you click remove
    inputs.push({uniqid: uniqid, value: ""});
    Session.set('inputs', inputs);
  }
});
// We also need handlers for when the inputs themselves are changed / removed
Template.input.events({
  'click .remove-input': function(event) {
  	event.preventDefault();
    var uniqid = $(event.currentTarget).attr('uniqid');
    inputs = Session.get('inputs');
    inputs = _.filter(inputs, function(x) { return x.uniqid != uniqid; });
    Session.set('inputs', inputs);
  },
  'change input': function(event) {
    var $input = $(event.currentTarget);
    var uniqid = $input.attr('uniqid');
    inputs = Session.get('inputs');
    index = inputs.findIndex(function(x) { return x.uniqid == uniqid; });
    inputs[index].value = $input.val().toLowerCase();
    Session.set('inputs', inputs);
    console.log(Session.get('inputs'));
  }
});
