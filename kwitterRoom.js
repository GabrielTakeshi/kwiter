
//ADICIONE SEUS LINKS FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyD0UUIgvV4HLZlfGf_n858t45UARFT-EHo",
  authDomain: "website-2bdf4.firebaseapp.com",
  databaseURL: "https://website-2bdf4-default-rtdb.firebaseio.com",
  projectId: "website-2bdf4",
  storageBucket: "website-2bdf4.appspot.com",
  messagingSenderId: "617235289675",
  appId: "1:617235289675:web:d083eae04830dcd1919fce"
};
//inicializando firebase
firebase.initializeApp(firebaseConfig);
  userName = localStorage.getItem("userName");

document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";

function addRoom()
{
room_name=document.getElementById("roomName").value
firebase.database().ref("/").child(room_name).update({
  purpose:"adding room name"
})
localstorege.setItem("roomName",room_name)
window.location="kwitter_page.html"
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       roomNames = childKey;
       console.log("Nome da Sala - " + roomNames);
     row="<div class='room_name ' id="+roomNames+" onclick='redirectToRoomName(this.id)'>#"+roomNames+"</div><hr>"
     document.getElementById("output").innerHTML+=row
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("roomName", name);
    window.location = "kwitterPage.html";
}


function logout() {
localStorage.removeItem("userName");
localStorage.removeItem("roomName");
    window.location = "index.html";
}
