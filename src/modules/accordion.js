import animate from './animate';
var accordion = function (animationTime) {
   if (!animationTime) animationTime = 400;
   var style = document.createElement('style');
   style.textContent = `
   .accordion-elem-body {height: 0; overflow: hidden;}
   .accordion-active {height: auto;}
   `;
   document.head.appendChild(style);
   var elemBody = document.querySelectorAll('[data-accordion-elem]');
   for (var n = 0; n < elemBody.length; n++) {
      elemBody[n].classList.add('accordion-elem-body');
   }

   function accordionAnimate(elemOpen, accordionActive) {
      animate({
         duration: animationTime,
         timing: function (timeFraction) {
            return timeFraction;
         },
         draw: function (progress) {
            elemOpen.style.height = elemOpen.scrollHeight * progress + "px";
         }
      });

      setTimeout(function () {
         if (accordionActive) accordionActive.classList.remove('accordion-active');
         elemOpen.classList.add('accordion-active');
      }, animationTime);

      if (!accordionActive) return;
      animate({
         duration: animationTime,
         timing: function (timeFraction) {
            return timeFraction;
         },
         draw: function (progress) {
            accordionActive.style.height = accordionActive.scrollHeight * (1 - progress) + "px";
         }
      });
   }

   var accordionGroup = document.querySelectorAll('.accordion-group');
   for (var i = 0; i < accordionGroup.length; i++) {
      accordionGroup[i].addEventListener('click', function (e) {
         e.preventDefault();
         var link = e.target.closest('[data-accordion-link]');
         if (link) {
            var accordionActive = this.querySelector('.accordion-active');
            var elemOpen = this.querySelector('[data-accordion-elem="' + link.getAttribute('data-accordion-link') + '"]');
            if (accordionActive && elemOpen === accordionActive) return;
            accordionAnimate(elemOpen, accordionActive);
         }
      });
   }
};
export default accordion;