import animate from './animate';

var fadingIn = function (item, animationTime) {
   if (!animationTime) animationTime = 300;
   item.style.opacity = '0';
   item.style.display = 'block';
   animate({
      duration: animationTime,
      draw: function (progress) {
         item.style.opacity = 1 * progress;
      }
   });
};

var fadingOut = function (item, animationTime) {
   if (!animationTime) animationTime = 300;
   item.style.opacity = '1';
   item.style.display = 'block';
   animate({
      duration: animationTime,
      draw: function (progress) {
         item.style.opacity = 1 * (1 - progress);
      }
   });
   setTimeout(function () {
      item.setAttribute('style', 'display: none');
   }, +animationTime + 100);
};

var fadingToggle = function (item, animationTime) {
   if (getComputedStyle(item).display === 'none' || getComputedStyle(item).opacity === '0') {
      fadingIn(item, animationTime);
   } else {
      fadingOut(item, animationTime);
   }
};

export {fadingIn, fadingOut, fadingToggle};
