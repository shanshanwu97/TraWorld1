Router.configure({
	layoutTemplate: 'layout',
}); //tells what template to use for layout, has to have yield
Router.route('/',{name:"home"});
Router.route('itineraries');
Router.route('about');
Router.route('comments');
Router.route('itdisplay');
Router.route('searchresults');
Router.route('account');
Router.route('map');
Router.route('myAccount',{name:"myAccount"});
Router.route('/signup', {name: 'signup'});
Router.route('userprofiles');

var requireLogin = function () {
// if the user is not logged in...
  if (!Meteor.userId()) {
    // ...render the home template in order to login
    this.render('home');
  } else {
    // otherwise continue
    this.next();
  }
};

Router.onBeforeAction(requireLogin, {
  // the only pages that don't require logged in user are:
  except: ['signup', 'home','login']
});


Router.route('/showtrip/:_id',
	{name:"showTrip",
	 data: function(){
 		const c = Trips.findOne({_id:this.params._id});
 		console.dir(c);
 		return c;
		}
 	 }

);

Router.route('/showsearch/:_id',
	{name:"showSearch",
	 data: function(){
 		const c = Trips.findOne({_id:this.params._id});
 		console.dir(c);
 		return c;
		}
 	 }

);


Router.route('/GroupCampDetails/:_id',
	{name: "GroupCampDetails",
		data: function() {
			const c = GroupCampTrips.findOne({_id:this.params._id});
	 		console.dir(c);
	 		return c;
		}
	}
);

// Router.route('/editor/:_id', function () {
//   this.render('Editor', {
//     data: function () {
//       Session.set('editorContent', 'editor content here');
//       return Trips.findOne({_id: this.params._id})
//   }});
// });


// Group Camp
Router.route('groupCampSearch');
Router.route('groupCampPost');




