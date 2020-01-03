# Sliding

Сall Sliding and pass item and if necessary options
```js
import sliding from './sliding';

addEventListener('DOMContentLoaded', function() {
   var clubsList = document.querySelector('.clubs-list');
   clubsList.addEventListener('click', function(){
      var item = this.querySelector('ul');
      
      sliding(item, {animationTime: 300});
      
   });
});
```

## Options
###Default options
Vertical Sliding toggle
```js
sliding(item);
```

Pass additional options in Object
<code>animationTime</code>
```js
sliding(item, {animationTime: 300});
```
