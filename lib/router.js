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
