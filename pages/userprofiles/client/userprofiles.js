
Template.profiledisplay.helpers({
	profile:function(){
		// const dest= $(".js-dest").val();
		return UserProfiles.find();
	}
})
Template.userprofiles.events({
	"click .js-submit": function(event){
		event.preventDefault();
		console.log("hey u clicked");
		const msg = $(".js-greeting").val();
		const pre = $(".js-prefer").val();
		const setting=
			{user:Meteor.userId(), greetingmsg:msg, preferloc:pre};			
			Meteor.call("submitsettings", setting);

		
	},
	"click .js-check": function(event){
		event.preventDefault();
		const urname=$(".js-username").val();
		var user=Meteor.users.findOne({_id:Meteor.userId()});
		if (user.userName&&user!=null){
			alert("You already have a username, you can only change it once!");
		}
		else if (Meteor.users.find({userName:urname}).count()==0){
			alert("The username is available!");
		}else{
			alert("The username is not available! Please re-enter!");
		}
	},
	"click .js-submitname": function(event){
		event.preventDefault();
		var user=Meteor.users.findOne({_id:Meteor.userId()});
		if (user.userName&&user!=null){
			alert("You already have a username, you can only change it once!");
		}else{
			const finalname=$(".js-username").val();
			Meteor.call("updateName", finalname);
		}
	},


})
Template.userprofiles.events({
	"click .js-submitinfo": function(event){
		event.preventDefault();
		console.log("hey u clicked");
		const fname = $(".js-name").val();

		const email = $(".js-email").val();
		const loc = $(".js-loc").val();
		const amount = $(".js-trv").val();
		
			const prof=
			{user:Meteor.userId(), name:fname, email:email, location:loc}; 
			Meteor.call("insertProf", prof);
			Router.go('profiledisplay');
			
	},
	 

})
