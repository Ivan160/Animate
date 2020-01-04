import animate from './animate';

function search(item) {
   return {
      height: parseInt(getComputedStyle(item).height),
      padding: {
         top: parseInt(getComputedStyle(item).paddingTop),
         bot: parseInt(getComputedStyle(item).paddingBottom)
      },
   };
}

var slidingDown = function (item, animationTime) {
   if (!animationTime) animationTime = 250;
   item.style.overflow = 'hidden';
   item.style.display = 'block';
   var properties = search(item);
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

var slidingUp = function (item, animationTime) {
   if (!animationTime) animationTime = 250;
   item.style.overflow = 'hidden';
   item.style.display = 'block';
   var properties = search(item);
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

var slidingToggle = function (item, animationTime) {
   if (getComputedStyle(item).display === 'none' ||
      getComputedStyle(item).height === 'auto' ||
      getComputedStyle(item).opacity === '0') {
      slidingDown(item, animationTime);
   } else {
      slidingUp(item, animationTime);
   }
};
export {slidingDown, slidingUp, slidingToggle};
