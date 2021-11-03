
const firebaseConfig = {
      apiKey: "AIzaSyAPraEyg7_vcsk_1l042mxWGk5rauLUZgo",
      authDomain: "kwitter-1cb58.firebaseapp.com",
      databaseURL: "https://kwitter-1cb58-default-rtdb.firebaseio.com",
      projectId: "kwitter-1cb58",
      storageBucket: "kwitter-1cb58.appspot.com",
      messagingSenderId: "1027023983156",
      appId: "1:1027023983156:web:e98f98ac6d450505bdf061"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
      user_name = localStorage.getItem("user_name");

      function addRoom()
    {
      room_name = document.getElementById("room_name").value;
    
      firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
      });
    
        localStorage.setItem("room_name", room_name);
        
        window.location = "kwitter_page.html";
    }

      //function getData() 
//{firebase.database().ref("/").on('value', function(snapshot) 
//{document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) 
//{childKey  = childSnapshot.key;
      // Room_names = childKey;
      //Start code

      //End code
      //});});}
//getData();

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name - " + Room_names);
     row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
     document.getElementById("output").innerHTML += row;
   });
 });

}

function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}

function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";
}