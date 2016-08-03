Tracker.autorun(function(){
	Session.set("latLng", Geolocation.latLng());
	if (Session.get("latLng")!==null){
		Session.set("lat", Session.get("latLng").lat);
		Session.set("lng", Session.get("latLng").lng);
	}
})