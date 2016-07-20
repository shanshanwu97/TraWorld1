Template.layout.helpers({
  userName: function() {
      const liveUser = Meteor.userId();
      return Meteor.users.findOne({
          _id: liveUser
      });
  },
})
Template.layout.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
        Router.go('/');
    },

});
 /*
  **********************************************************
  * OPAQUE NAVBAR SCRIPT
  **********************************************************
  */

  // Toggle tranparent navbar when the user scrolls the page

  $(window).scroll(function() {
    if($(this).scrollTop() > 50)  /*height in pixels when the navbar becomes non opaque*/ 
    {
        $('.opaque-navbar').addClass('opaque');
    } else {
        $('.opaque-navbar').removeClass('opaque');
    }
});
// new function($) {
//   $.fn.setCursorPosition = function(pos) {
//     if (this.setSelectionRange) {
//       this.setSelectionRange(pos, pos);
//     } else if (this.createTextRange) {
//       var range = this.createTextRange();
//       range.collapse(true);
//       if(pos < 0) {
//         pos = $(this).val().length + pos;
//       }
//       range.moveEnd('character', pos);
//       range.moveStart('character', pos);
//       range.select();
//     }
//   }
// }(jQuery);
// $('input[type=search]').focus(function() {
//   $(this).setCursorPosition(4);
// });
