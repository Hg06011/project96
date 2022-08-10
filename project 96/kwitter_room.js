const firebaseConfig = {
    apiKey: "AIzaSyBArmmVkskxqx5YNRpI6JqVcMvZDG6kMz0",
    authDomain: "kwitter-8b1b4.firebaseapp.com",
    databaseURL: "https://kwitter-8b1b4-default-rtdb.firebaseio.com",
    projectId: "kwitter-8b1b4",
    storageBucket: "kwitter-8b1b4.appspot.com",
    messagingSenderId: "481579255987",
    appId: "1:481579255987:web:7e60fffb9b641f571fc8c6"
  };
  
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "welcome"+user_name+"!";

function addroom(){
Room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(Room_name).update({purpose:"Room_name"});
localStorage.setItem("room_name",Room_name);
window.location =" kwitter_page.html";
}
function getData() 
{firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room_name" + Room_names);
row = "<div class='room_name' id="+ Room_names +" onclick='redirectToRoomName(this.id)'>#"+ Room_names+ "</div><hr>";
   document.getElementById("output").innerHTML+= row;
//End code
      });});}
getData();
function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name",name);
window.location = "kwitter_page.html";
}