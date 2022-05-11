//YOUR FIREBASE LINKS

const firebaseConfig = {
      apiKey: "AIzaSyCZA8GVV1ztwbe8X_4IO6cEir_BislbL1s",
      authDomain: "kwitter-7695a.firebaseapp.com",
      databaseURL: "https://kwitter-7695a-default-rtdb.firebaseio.com",
      projectId: "kwitter-7695a",
      storageBucket: "kwitter-7695a.appspot.com",
      messagingSenderId: "934286577008",
      appId: "1:934286577008:web:4e90a54d6b5196c68813b5"
    };
    
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name"); 
    room_name = localStorage.getItem("room_name");
    function send()
{
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
});
document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();


