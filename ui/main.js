console.log('Loaded!');

var but=document.getElementById('counter');
var span=document.getElementById('count');
var count=0;
but.onclick = function(){
    
    var req=new XMLHttpRequest();
    
    req.onreadystatechanged = function()
    {
      if(req.readyState == XMLHttpRequest.DONE)
      {
          if(req.status == 200)
          {
              var count=req.responseText;
               span.innerHTML=count.toString();
          }
      }
    };

 
    
};