const firebaseConfig = {
  apiKey: "AIzaSyBVnB870kG2W-Gew5QjpiYNL5VKmLC1Y90",
  authDomain: "kwitter-683cb.firebaseapp.com",
  databaseURL: "https://kwitter-683cb-default-rtdb.firebaseio.com",
  projectId: "kwitter-683cb",
  storageBucket: "kwitter-683cb.appspot.com",
  messagingSenderId: "947344972114",
  appId: "1:947344972114:web:5d894fff527bc914f5828b"
    };
    
  firebase.initializeApp(firebaseConfig);
  
  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");
  
  function send()
  {
  message = document.getElementById("message").value;
  firebase.database().ref(room_name).push({
  name:user_name,
  message:message,
  like:0
  });
  document.getElementById("message").value ="";
  }

  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
} });  }); }
getData();

function logout()
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "kwitter.html";
}