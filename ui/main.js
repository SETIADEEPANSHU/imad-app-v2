console.log('Loaded!');

var but=document.getElementById('counter');

var count=0;
but.onclick = function(){
    
    var req=new XMLHttpRequest();
    
    req.onreadystatechange = function()
    {
      if(req.readyState == XMLHttpRequest.DONE)
      {
          if(req.status == 200)
          {
              var count=req.responseText;
              var span=document.getElementById('count');
               span.innerHTML=count.toString();
          }
      }
    };
    
    req.open('GET','http://setiadeepanshu.imad.hasura-app.io/counter',true);
    req.send(null);

 
    
};

var button=document.getElementById('submit');
//var names="";

button.onclick = function()
{
    
    var req=new XMLHttpRequest();
    
    req.onreadystatechange = function()
    {
      if(req.readyState == XMLHttpRequest.DONE)
      {
          if(req.status == 200)
          {
               var names=req.responseTest;
               names=JSON.parse(names);
               var nameList="";
                          for(var i=0;i<names.length;i++)
                          {
                            nameList+="<li>"+names[i]+"</li>";
                          }
                          var ullist=document.getElementById('ullist');
                          ullist.innerHTML=nameList;
          }
      }
    };
    
    
    
  var nameInput=document.getElementById('name');
  var name=nameInput.value;
  
  
  
   req.open('GET','http://setiadeepanshu.imad.hasura-app.io/submit-name?name='+ name ,true);
   req.send(null);
  
  
};