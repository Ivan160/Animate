import animate from './animate';

function search(item) {
   return {
      width: parseInt(getComputedStyle(item).width),
      padding: {
         right: parseInt(getComputedStyle(item).paddingRight),
         left: parseInt(getComputedStyle(item).paddingLeft)
      },
   };
}

var slidingLeft = function (item, animationTime) {
   if (!animationTime) animationTime = 250;
   item.style.overflow = 'hidden';
   item.style.display = 'block';
   var properties = search(item);
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

var slidingRight = function (item, animationTime) {
   if (!animationTime) animationTime = 250;
   item.style.overflow = 'hidden';
   item.style.display = 'block';
   var properties = search(item);
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

var slidingToggleHorizon = function (item, animationTime) {
   if (getComputedStyle(item).display === 'none' ||
      getComputedStyle(item).width === 'auto' ||
      getComputedStyle(item).opacity === '0') {
      slidingLeft(item, animationTime);
   } else {
      slidingRight(item, animationTime);
   }
};
export {slidingLeft, slidingRight, slidingToggleHorizon};
