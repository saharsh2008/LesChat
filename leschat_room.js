var firebaseConfig = {
      apiKey: "AIzaSyA9WBnBH1c1PbZtWahmjrM16dR4s4x8SWo",
      authDomain: "leschat-97a9f.firebaseapp.com",
      databaseURL: "https://leschat-97a9f-default-rtdb.firebaseio.com",
      projectId: "leschat-97a9f",
      storageBucket: "leschat-97a9f.appspot.com",
      messagingSenderId: "60973100677",
      appId: "1:60973100677:web:c37f3648ac666cc3d783ec"
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