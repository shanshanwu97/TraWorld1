Meteor.methods({
	insertTrip: function(trip){
		Trips.insert(trip);
	},
	tosearch: function(destination){
		
		if(DestSearched.find({location: destination}).count()==0){
			console.dir("New Destination added to database");
			const search_obj=
			{location: destination,
			searches: 1
			}
			DestSearched.insert(search_obj);
			
		}else{
			console.dir("Destination search incremented");
			DestSearched.update({_id:DestSearched.findOne({location:destination})._id},{$inc:{searches: 1}});
		}
		
	}
})