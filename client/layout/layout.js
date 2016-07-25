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
// var menu = document.querySelector('.nav__list');
// var burger = document.querySelector('.burger');
// var doc = $(document);
// var l = $('.scrolly');
// var panel = $('.panel');
// var vh = $(window).height();

// var openMenu = function() {
//   burger.classList.toggle('burger--active');
//   menu.classList.toggle('nav__list--active');
// };

// reveal content of first panel by default
// panel.eq(0).find('.panel__content').addClass('panel__content--active');

// var scrollFx = function() {
//   var ds = doc.scrollTop();
//   var of = vh / 4;
  
  // if the panel is in the viewport, reveal the content, if not, hide it.
//   for (var i = 0; i < panel.length; i++) {
//     if (panel.eq(i).offset().top < ds+of) {
//      panel
//        .eq(i)
//        .find('.panel__content')
//        .addClass('panel__content--active');
//     } else {
//       panel
//         .eq(i)
//         .find('.panel__content')
//         .removeClass('panel__content--active')
//     }
//   }
// };

// var scrolly = function(e) {
//   e.preventDefault();
//   var target = this.hash;
//   var $target = $(target);

//   $('html, body').stop().animate({
//       'scrollTop': $target.offset().top
//   }, 300, 'swing', function () {
//       window.location.hash = target;
//   });
// }

// var init = function() {
//   burger.addEventListener('click', openMenu, false);
//   window.addEventListener('scroll', scrollFx, false);
//   window.addEventListener('load', scrollFx, false);
//   $('a[href^="#"]').on('click',scrolly);
// };

// doc.on('ready', init);
