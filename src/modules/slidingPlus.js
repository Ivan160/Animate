import animate from './animate';
var sliding = function (item, settings) {
   var animationTime = 250;

   function search() {
      return {
         width: parseInt(getComputedStyle(item).width),
         height: parseInt(getComputedStyle(item).height),
         padding: {
            top: parseInt(getComputedStyle(item).paddingTop),
            bot: parseInt(getComputedStyle(item).paddingBottom),
            right: parseInt(getComputedStyle(item).paddingRight),
            left: parseInt(getComputedStyle(item).paddingLeft)
         },
      };
   }

   var slidingDown = function () {
      item.style.overflow = 'hidden';
      item.style.display = 'block';
      var properties = search();
      item.style.paddingTop = '0';
      item.style.paddingBottom = '0';
      item.style.height = '0';
      animate({
         duration: animationTime,
         draw: function (progress) {
            item.style.height = properties.height * progress + "px";
            item.style.paddingTop = properties.padding.top * progress + "px";
            item.style.paddingBottom = properties.padding.bot * progress + "px";
         }
      });
   };

   var slidingUp = function () {
      item.style.overflow = 'hidden';
      item.style.display = 'block';
      var properties = search();
      animate({
         duration: animationTime,
         draw: function (progress) {
            item.style.height = properties.height * (1 - progress) + "px";
            item.style.paddingTop = properties.padding.top * (1 - progress) + "px";
            item.style.paddingBottom = properties.padding.bot * (1 - progress) + "px";
         }
      });
      setTimeout(function () {
         item.setAttribute('style', 'display: none');
      }, +animationTime + 100);
   };

   var slidingToggle = function () {
      if (getComputedStyle(item).display === 'none' ||
         getComputedStyle(item).height === 'auto' ||
         getComputedStyle(item).opacity === '0') {
         slidingDown();
      } else {
         slidingUp();
      }
   };


   var slidingLeft = function () {
      item.style.overflow = 'hidden';
      item.style.display = 'block';
      var properties = search();
      item.style.paddingRight = '0';
      item.style.paddingLeft = '0';
      item.style.width = '0';
      animate({
         duration: animationTime,
         draw: function (progress) {
            item.style.width = properties.width * progress + "px";
            item.style.paddingRight = properties.padding.right * progress + "px";
            item.style.paddingLeft = properties.padding.left * progress + "px";
         }
      });
   };

   var slidingRight = function () {
      item.style.overflow = 'hidden';
      item.style.display = 'block';
      var properties = search();
      animate({
         duration: animationTime,
         draw: function (progress) {
            item.style.width = properties.width * (1 - progress) + "px";
            item.style.paddingRight = properties.padding.right * (1 - progress) + "px";
            item.style.paddingLeft = properties.padding.left * (1 - progress) + "px";
         }
      });
      setTimeout(function () {
         item.setAttribute('style', 'display: none');
      }, +animationTime + 100);
   };

   var slidingToggleHorizon = function () {
      if (getComputedStyle(item).display === 'none' ||
         getComputedStyle(item).width === 'auto' ||
         getComputedStyle(item).opacity === '0') {
         slidingLeft();
      } else {
         slidingRight();
      }
   };


   ! function init() {
      if (!settings) {
         slidingToggle();
         return;
      }

      if (settings.animationTime) animationTime = settings.animationTime;
      var action = settings.action;
      switch (action) {
         case 'slidingDown':
            slidingDown();
            break;
         case 'slidingUp':
            slidingUp();
            break;
         case 'slidingLeft':
            slidingLeft();
            break;
         case 'slidingRight':
            slidingRight();
            break;
         case 'slidingToggleHorizon':
            slidingToggleHorizon();
            break;
         default:
            slidingToggle();
            break;
      }
   }()
};
export default sliding;