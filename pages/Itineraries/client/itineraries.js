Session.set("userinput",0);
Template.itineraries.helpers({
	trips:function(){
		// const dest= $(".js-dest").val();
		return Trips.find();
	}
})

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
		if (!isNumeric($(".js-ex").val())){
			alert("Please enter a valid number!");

		}else if (!($(".js-title").val())){
			alert("Please enter a valid title!");

		}else{
			const expenses = Number($(".js-ex").val());
			const desc= $(".js-descript").val();
			const titleOf=$(".js-title").val();



			const username=Meteor.users.findOne({_id:Meteor.userId()});
			const ur=username&&username.profile&&username.profile.username;
			const img=$(".js-img").val();
			const txt=[];
			var imgs= Session.get("thumbpic");
      var likes=0;

			const trip=
			{createdBy:Meteor.userId(), username: ur, datecreated: new Date(), title: titleOf, destination:dest, arrival: arrive, departure:depart, amountOfTraveler: amount, expenses: expenses, image: img, thumbpic:imgs, description: desc, textedit:txt,likes
			}
			Session.set("userinput",trip);
			Meteor.call("insertTrip", trip);
      var tripid=Session.get("temptripid");
      const goid='/showsearch/'+tripid;
			Router.go(goid);

		}
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
