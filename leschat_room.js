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
    document.getElementById("username").innerHTML = "welcome " + userName;
    function addRoom() {
          roomName  = document.getElementById("roomName").value;
          firebase.database().ref("/").child(roomName).update({
                purpose : "adding room"
          });
          localStorage.setItem("roomName", roomName); 
          window.location = "leschat_page.html";
    }
    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
           Room_names = childKey;
           console.log("room name: " + Room_names);
           row = "<div class = 'room_name' id = " + Room_names + " onclick = 'redirectToRoomName(this.id)'> #" + Room_names + "</div><hr>";
           document.getElementById("output").innerHTML += row;
      });});}
      getData();
      function redirectToRoomName(name) {
            console.log(name);
            localStorage.setItem("roomName", name);
            window.location = "leschat_page.html";
      }

      function logout() {
            localStorage.removeItem("Username");
            localStorage.removeItem("roomName");
            window.location = "index.html";
      }