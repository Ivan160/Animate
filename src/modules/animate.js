function animate(data) {
   var duration = data.duration;
   if (!duration) duration = 400;
   var timing = data.timing;
   if (!timing) timing = function (timeFraction) {return timeFraction;};
   var draw = data.draw;
   var start = performance.now();
   requestAnimationFrame(function animate(time) {
      var timeFraction = (time - start) / duration;
      if (timeFraction > 1) {
         timeFraction = 1;
      }
      var progress = timing(timeFraction);
      draw(progress);
      if (timeFraction < 1) {
         requestAnimationFrame(animate);
      }
   });
}
export default animate;