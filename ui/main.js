console.log('Loaded!');

var but=document.getElementById('counter');
var span=document.getElementById('count');
var count=0;
but.onclick = function(){
  count=count+1;
  span.innerHTML=count.toString();
    
};