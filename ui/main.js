// counter code
var button=document.get.ElementById('counter');

button.onclick= function() {
    
    
   // create a request object
   var request = new XMLHttpRequest();
   
   
   // capture the response and store it in a variable
   request.onreadystatechange = function() {
       if(request.readystate === XMLHttpRequest.Done ) {
           // take some action
           if(request.status === 200) {
               var counter=request.responseText;
               var span=document.getElementById('count');
               span.innerHTML=counter.toString();
           }
       }
       //not done yet
   };
   //make the request
   request.open('GET', 'http://ragadeepchaitanya567.imad.hasura-app.io/counter', true);
   request.send(null);
  
   };
   // submit name
   var nameInput = document.get.ElementById('name');
   var name = nameInput.value;
   var submit = document.getElementById('submit_btn');
   submit.onclick=function() {
     //make a request to theserver and send the name
     // capture the list of names and render it as a list
     var names=['name 1' , 'name 2', 'name 3' , 'name 4'];
     var list='';
     for(var i=0, i < names.length , i++){
         list += '<li>' + names[i] + '</li>;
         
     }
     var ul = document.getElementById('namelist');
     ul.innerHTML = list;
     
   };
   };