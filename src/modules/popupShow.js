import {fadingIn, fadingOut, fadingToggle} from './fading';

var popupShow = function () {
   function popupСlose(popup) {
      popup.addEventListener('click', function (e) {
         var target = e.target;
         switch (true) {
            case target.matches('.overlay'):
               fadingOut(popup);
               return;
            case target.closest('.close-form') !== null:
               fadingOut(popup);
               return;
         }
      });
   }

   var popupBtn = document.querySelectorAll('[data-popup]');
   for (var i = 0; i < popupBtn.length; i++) {
      popupBtn[i].addEventListener('click', function () {
         var popup = document.querySelector(this.getAttribute('data-popup'));
         fadingIn(popup);
         popupСlose(popup);
      });
   }
};
export default popupShow;
