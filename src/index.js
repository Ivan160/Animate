'use strict';
import sliding from './modules/sliding';

addEventListener('DOMContentLoaded', function() {
   var clubsList = document.querySelector('.clubs-list');
   clubsList.addEventListener('click', function(){
      var item = this.querySelector('ul');
      sliding(item, {animationTime: 300, action: 'slidingDown'});
   });
});