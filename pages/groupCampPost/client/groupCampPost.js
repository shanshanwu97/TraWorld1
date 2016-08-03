Meteor.subscribe("theDestSearched");

Template.groupCampPost.rendered=function(){
	this.autorun(function () {
		if (GoogleMaps.loaded()) {
			var autocomplete;
			var options = {types: ['(cities)'] };
			autocomplete = new google.maps.places.Autocomplete(
			/** @type {HTMLInputElement} */(document.getElementById('autocomplete')), options);
			google.maps.event.addListener(autocomplete, 'place_changed', function() {});
		}
	});
}

Template.groupCampPost.helpers({
	setUp: function(){
		Session.set("notCompleteAlertNeeded", false);
		Session.set("ErrorMessage-title", null);
		Session.set("ErrorMessage-destination", null);
		Session.set("ErrorMessage-from", null);
		Session.set("ErrorMessage-to", null);
		Session.set("ErrorMessage-deadline", null);
		Session.set("ErrorMessage-threshold", null);
	},

	trips:function(){
		return GroupCampTrips.find();
	},

	getUserName: function() {return Meteor.users.findOne({_id: Meteor.userId()}).profile.username;},

	notCompleteAlertNeeded: function() {
		if (Session.get("notCompleteAlertNeeded"))
			return true;
		else
			return false;
	},

	getError: function(type) {
		return Session.get("ErrorMessage-" + type);
	}
})

Template.groupCampPost.events({
	"click .js-submit": function(event){
		event.preventDefault();

		author = Meteor.users.findOne({_id: Meteor.userId()}).profile.username;
		timestamp = new Date();

		title = $(".js-title").val();
		message = $(".js-message").val();
		description = $(".js-description").val();
		rawTags = $(".js-tags").val();
		tags = [];

		destination = $(".js-destination").val();
		From = $(".js-from").val();
		to = $(".js-to").val();
		deadline = $(".js-deadline").val();

		travelers = [author];
		bookmarks = [];
		threshold = $(".js-threshold").val();

		cost = $(".js-cost").val();
		link = $(".js-link").val();
		picture = $(".js-picture").val();


		complete = true;
		filled = true;


		// TITLE
		if (!title){	// Required
			complete = false;
			filled = false;
			$(".js-titleGroup").removeClass('has-success').addClass('has-error');
			Session.set("ErrorMessage-title", "Your trip must have a name!");
		}
		else {
			$(".js-titleGroup").removeClass('has-error').addClass('has-success');
			Session.set("ErrorMessage-title", null);
		}

		// MESSAGE
		if (!message){
			filled = false;
			$(".js-messageGroup").removeClass('has-success').addClass('has-warning');
		}
		else {
			$(".js-titleGroup").removeClass('has-warning').addClass('has-success');
		}

		// DESCRIPTION
		if (!description){
			filled = false;
			$(".js-descriptionGroup").removeClass('has-success').addClass('has-warning');
		}
		else {
			$(".js-descriptionGroup").removeClass('has-warning').addClass('has-success');
		}

		// TAGS
		if (!rawTags){
			filled = false;
			$(".js-tagsGroup").removeClass('has-success').addClass('has-warning');
		}
		else {
			tags = $(".js-tags").val().split(",");
			for (i = 0; i < tags.length; i++) 	{tags[i] = tags[i].trim();}
			tags = tags.sort();
			$(".js-tagsGroup").removeClass('has-warning').addClass('has-success');
		}

		// DESTINATION
		if (!destination){	// Required
			complete = false;
			filled = false;
			$(".js-destinationGroup").removeClass('has-success').addClass('has-error');
			Session.set("ErrorMessage-destination", "Your trip must have a destination!");
		}
		else {
			$(".js-destinationGroup").removeClass('has-error').addClass('has-success');
			Session.set("ErrorMessage-destination", null);
		}

		// FROM
		if (!From || isNaN(Date.parse(From))){	// Required
			complete = false;
			filled = false;
			$(".js-fromGroup").removeClass('has-success').addClass('has-error');
			Session.set("ErrorMessage-from", "Your trip must have a departure date!");
		}
		else if (new Date(From) < new Date()) {
			complete = false;
			filled = false;
			$(".js-fromGroup").removeClass('has-success').addClass('has-error');
			Session.set("ErrorMessage-from", "You can't plan a trip in the past!");
		}
		else {
			$(".js-fromGroup").removeClass('has-error').addClass('has-success');
			Session.set("ErrorMessage-from", null);
		}

		// TO
		if (!to || isNaN(Date.parse(to))){	// Required
			complete = false;
			filled = false;
			$(".js-toGroup").removeClass('has-success').addClass('has-error');
			Session.set("ErrorMessage-to", "Your trip must have an arival date!");
		}
		else if (new Date(to) < new Date(From)) {
			complete = false;
			filled = false;
			$(".js-toGroup").removeClass('has-success').addClass('has-error');
			Session.set("ErrorMessage-to", "You can't came back before you leave!");
		}
		else if (new Date(to) < new Date()) {
			complete = false;
			filled = false;
			$(".js-toGroup").removeClass('has-success').addClass('has-error');
			Session.set("ErrorMessage-to", "You can't plan a trip in the past!");
		}
		else {
			$(".js-toGroup").removeClass('has-error').addClass('has-success');
			Session.set("ErrorMessage-to", null);
		}

		//DEADLINE
		if (!deadline || isNaN(Date.parse(deadline))){	// Required
			complete = false;
			filled = false;
			$(".js-deadlineGroup").removeClass('has-success').addClass('has-error');
			Session.set("ErrorMessage-deadline", "Your trip must have a deadline!");
		}
		else if (new Date(deadline) > new Date(From)) {
			complete = false;
			filled = false;
			$(".js-deadlineGroup").removeClass('has-success').addClass('has-error');
			Session.set("ErrorMessage-deadline", "Your deadline must be before your departure date!");
		}
		else if (new Date(deadline) < new Date()) {
			complete = false;
			filled = false;
			$(".js-deadlineGroup").removeClass('has-success').addClass('has-error');
			Session.set("ErrorMessage-deadline", "You need to give other travelers a chance to sign up!");
		}
		else {
			$(".js-deadlineGroup").removeClass('has-error').addClass('has-success');
			Session.set("ErrorMessage-deadline", null);
		}

		// THRESHOLD
		if (!threshold || threshold < 2){	// Required
			complete = false;
			filled = false;
			$(".js-thresholdGroup").removeClass('has-success').addClass('has-error');
			Session.set("ErrorMessage-threshold", "You must require at least one other person to go with you!");
		}
		else if (Math.floor(threshold) != threshold) {
			complete = false;
			filled = false;
			$(".js-thresholdGroup").removeClass('has-success').addClass('has-error');
			Session.set("ErrorMessage-threshold", "Travelers are discrete units. Please select a whole number.");
		}
		else {
			$(".js-thresholdGroup").removeClass('has-error').addClass('has-success');
			Session.set("ErrorMessage-threshold", null);
		}

		// COST
		if (!cost || !$.isNumeric(cost) || cost < 0 || (Math.floor(cost) != cost && cost.length != cost.indexOf('.') + 3)){
			filled = false;
			$(".js-costGroup").removeClass('has-success').addClass('has-warning');
			cost = null;
		}
		else {
			$(".js-costGroup").removeClass('has-warning').addClass('has-success');
		}

		// LINK
		if (!link){
			filled = false;
			$(".js-linkGroup").removeClass('has-success').addClass('has-warning');
		}
		else {
			$(".js-linkGroup").removeClass('has-warning').addClass('has-success');
		}

		// PICTURE
		if (!picture){
			filled = false;
			$(".js-pictureGroup").removeClass('has-success').addClass('has-warning');
		}
		else {
			$(".js-pictureGroup").removeClass('has-warning').addClass('has-success');
		}


		if (filled) {
			GroupCampTrips.insert({author, timestamp, title, message, description, tags: tags, destination, from: new Date(From), to: new Date(to), deadline: new Date(deadline), travelers, threshold, cost, link, picture, chat: []});
			Router.go("groupCampSearch");
		}
		else if (complete){
			$("#warningModal").modal();
		}
		else{
			Session.set("notCompleteAlertNeeded", true);
		}
	},

	"click .js-modalSubmit": function(event) {
		author = Meteor.users.findOne({_id: Meteor.userId()}).profile.username;
		timestamp = new Date();

		title = $(".js-title").val();
		message = $(".js-message").val();
		description = $(".js-description").val();
		rawTags = $(".js-tags").val();
		tags = [];

		destination = $(".js-destination").val();
		From = $(".js-from").val();
		to = $(".js-to").val();
		deadline = $(".js-deadline").val();

		travelers = [author];
		threshold = $(".js-threshold").val();

		cost = $(".js-cost").val();
		link = $(".js-link").val();
		picture = $(".js-picture").val();


		// TAGS
		if (rawTags){
			tags = $(".js-tags").val().split(",");
			for (i = 0; i < tags.length; i++) 	{tags[i] = tags[i].trim();}
			tags = tags.sort();
		}

		// COST
		if (!cost || !$.isNumeric(cost) || cost < 0 || (Math.floor(cost) != cost && cost.length != cost.indexOf('.') + 3))
			cost = null;


		GroupCampTrips.insert({author, timestamp, title, message, description, tags: tags, destination, from: new Date(From), to: new Date(to), deadline: new Date(deadline), travelers, threshold, cost, link, picture, chat: []});
		$("#warningModal").modal('hide');
		$('body').removeClass('modal-open');
		$('.modal-backdrop').hide();
		Router.go("groupCampSearch");
	}
})
