var firebaseConfig = {
      apiKey: "AIzaSyCXBoCgF6U55bsELp_ocAxFSRqwjNIKnMI",
      authDomain: "leschat-5969a.firebaseapp.com",
      databaseURL: "https://leschat-5969a-default-rtdb.firebaseio.com",
      projectId: "leschat-5969a",
      storageBucket: "leschat-5969a.appspot.com",
      messagingSenderId: "201601636928",
      appId: "1:201601636928:web:e41fe73a17d9a898a61da5"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
userName = localStorage.getItem("Username");
roomName = localStorage.getItem("roomName");

function send() {
      message = document.getElementById("message").value;
      firebase.database().ref(roomName).push({
            name : userName,
            message : message,
            like : 0
      });
      document.getElementById("message").value = "";
}

function getData() { firebase.database().ref("/"+roomName).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         console.log(firebase_message_id);
         console.log(message_data);
         name = message_data["name"];
         message = message_data["message"];
         like = message_data["like"];
         nameTag = "<h4> " + name + "<img class = 'user_tick' src = 'tick.png'></h4>";
         messageTag = "<h4 class = 'message_h4'>" + message  + "</h4>";
         likeButton = "<button class = 'btn btn-warning' id = " + firebase_message_id + " value = '" + like + "'onclick = 'updateLike(this.id)'>";
         spanTag = "<span class = 'glyphicon glyphicon-thumbs-up'>LIKE :" + like + "</span></button><hr>";
         row = nameTag + messageTag + likeButton + spanTag;
         document.getElementById("output").innerHTML += row;
      } });  }); }
getData();

function updateLike(messageId) {
      console.log("clicked on the like button" + messageId);
      buttonId = messageId;
      likes = document.getElementById(buttonId).value;
      updatedLikes = Number(likes) + 1;
      console.log(updatedLikes);
      firebase.database().ref(roomName).child(messageId).update({
            like : updatedLikes
      });
}

function logOut() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("roomName");
      window.location = "index.html";
}