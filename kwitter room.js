// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8Jz6HLwD_2PyXfWVxMT1X1lcwQ4ZKx5I",
  authDomain: "greetingbot-dbnr.firebaseapp.com",
  databaseURL: "https://greetingbot-dbnr-default-rtdb.firebaseio.com",
  projectId: "greetingbot-dbnr",
  storageBucket: "greetingbot-dbnr.appspot.com",
  messagingSenderId: "949662976736",
  appId: "1:949662976736:web:ea0f34a93f12b68ffd9e85"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addRoom()
{
    room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}
