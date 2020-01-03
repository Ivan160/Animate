# Sliding
With these functions, you can show and hide selected elements on the page, by smoothly expanding and collapsing.

Сall Sliding and pass item and if necessary options
```js
import sliding from './sliding';

addEventListener('DOMContentLoaded', function() {
   var clubsList = document.querySelector('.clubs-list');
   clubsList.addEventListener('click', function(){
      var item = this.querySelector('ul');
      
      sliding(item, {animationTime: 300, action: 'slidingDown'});
      
   });
});
```

## Options
### Default options
Vertical Sliding toggle
```js
sliding(item);
```

### Pass additional options in Object
<code>animationTime</code> - duration of the animation
```js
sliding(item, {animationTime: 300});
```

<code>action</code> - the action that the animation will perform
```js
sliding(item, {action: 'slidingDown'});
```
### Action: 
<code>slidingDown</code> - Display the matched elements with a sliding motion. /n
<code>slidingUp</code> - Hide the matched elements with a sliding motion.
<code>slidingToggle</code> - 


<code>slidingLeft</code> - 
<code>slidingRight</code> - 
<code>slidingToggleHorizon</code> - 
