Template.myAccount.helpers({
  getAccount:function(){
		// const dest= $(".js-dest").val();
		return Accounts.find({});
	}
})
