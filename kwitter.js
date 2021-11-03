const firebaseConfig = {
    apiKey: "AIzaSyB1-9juVmQ4PSQaGhR4SLopnpBO--Ed2M4",
    authDomain: "project-kwitter-e4e67.firebaseapp.com",
    databaseURL: "https://project-kwitter-e4e67-default-rtdb.firebaseio.com",
    projectId: "project-kwitter-e4e67",
    storageBucket: "project-kwitter-e4e67.appspot.com",
    messagingSenderId: "834800910532",
    appId: "1:834800910532:web:704d90766cc47624e44991",
    measurementId: "G-10VHLMKZJQ"
  };
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

function addUser() {
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "kwitter_room.html";
    }

    function addRoom()
    {
        room_name = document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({
            purpose : "adding room"
        })
    }