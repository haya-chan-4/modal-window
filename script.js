'use strict';

{
  const open = document.getElementById('open');
  const close = document.getElementById('close');
  const modal1 = document.getElementById('modal1');
  const mask = document.getElementById('mask');

  open.addEventListener('click', () => {
    modal1.classList.remove('hidden');
    mask.classList.remove('hidden');
    open.classList.add('hidden');
    // close.classList.add('hidden');
  });
  close.addEventListener('click', () => {
    modal1.classList.add('hidden');
    mask.classList.add('hidden');
    open.classList.remove('hidden');
  });
  mask.addEventListener('click', () => {
    close.click();
  });
}


  function updateClock() {
    var now = new Date();
    var dname = now.getDay(),
        mo = now.getMonth(),
        dnum = now.getDate(),
        yr = now.getFullYear(),
        hou = now.getHours(),
        min = now.getMinutes(),
        sec = now.getSeconds(),
        pe = 'AM';

        if(hou == 12) {
          hou = 0;
        }
        if(hou > 12) {
          hou = hou - 12;
          pe = 'PM';
        }

        Number.prototype.pad = function(digits){
          for(var n = this.toString(); n.length < digits; n = 0 + n );
          return n ;
        }

        var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        var week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        var ids = ['dayname', 'month', 'daynum', 'year', 'hour', 'minutes', 'seconds', 'period'];
        var values = [week[dname], months[mo], dnum.pad(2), yr, hou.pad(2), min.pad(2), sec.pad(2), pe];
        for(var i = 0; i < ids.length; i++)
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
  }

  function initClock(){
    updateClock();
    window.setInterval('updateClock()', 1);
  }
