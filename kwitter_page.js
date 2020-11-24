var firebaseConfig = {
    apiKey: "AIzaSyBiHYq1akW4zQ9zQDhaS0orYsuEezhYwq0",
    authDomain: "chatapp-4387a.firebaseapp.com",
    databaseURL: "https://chatapp-4387a.firebaseio.com",
    projectId: "chatapp-4387a",
    storageBucket: "chatapp-4387a.appspot.com",
    messagingSenderId: "299070311162",
    appId: "1:299070311162:web:b159dc0318b70c27d7d743"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
    function addRoom(){
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose:"adding roomname"
          });
          localStorage.setItem("room_name",room_name);
          window.location="kwitter_room.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Roomname -"+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_room.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}