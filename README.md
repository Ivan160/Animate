# Sliding
With these functions, you can show and hide selected elements on the page, by smoothly expanding and collapsing.

```js
import {slidingDown, slidingUp, slidingToggle} from './sliding';

addEventListener('DOMContentLoaded', function() {
   var clubsList = document.querySelector('.clubs-list');
   clubsList.addEventListener('click', function(){
      var item = this.querySelector('ul');
      
      slidingToggle(item, 300);
      
   });
});
```

## sliding.js

### Pass additional options in Object
<code>animationTime</code> - duration of the animation </br> 
*default options = 250*
```js
slidingToggle(item, 300);
```

<code>action</code> - the action that the animation will perform </br> 
*default options = slidingToggle*
```js
slidingToggle(item, 300});
```
<code>slidingDown</code> - Display the matched elements with a sliding motion. </br>
<code>slidingUp</code> - Hide the matched elements with a sliding motion. </br>
<code>slidingToggle</code> - *default options* Display or Hide the matched elements with a sliding motion </br>

## slidingHorizon.js
```js
import {slidingLeft, slidingRight, slidingToggleHorizon} from './slidingHorizon';

addEventListener('DOMContentLoaded', function() {
   var clubsList = document.querySelector('.clubs-list');
   clubsList.addEventListener('click', function(){
      var item = this.querySelector('ul');
      
      slidingToggleHorizon(item, 300);
      
   });
});
```

additional a sliding motion horizontally


<code>slidingLeft</code> - Display the matched elements with a sliding motion horizontally.  </br>
<code>slidingRight</code> - Hide the matched elements with a sliding motion horizontally.  </br>
<code>slidingToggleHorizon</code> - Display or Hide the matched elements with a sliding motion horizontally  </br>
