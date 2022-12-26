//LINKS FIREBASE
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
    userName=localStorage.getItem("userName")
    roomName=localStorage.getItem("roomName")
    function enviar(){
      msg=document.getElementById("msg").value
      firebase.database().ref(roomName).push({
            name:userName,
      message:msg,
      like:0

      })
      document.getElementById("msg").value=""
    }
function getData() { firebase.database().ref("/"+roomName).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebaseMessageId = childKey;
         messageData = childData;
//Início do código
console.log(firebaseMessageId);
console.log(messageData);
name=messageData['name'];
message=messageData['message'];
like=messageData['like'];
nameWithTag = "<h4> "+ name +"<img class='user_tick' src='tick.png'>";
messageWithTag = "<h4 class='message_h4'>" + message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebaseMessageId+" value="+like+" onclick='updateLike(this.id)'>";
spanWithTag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
row = nameWithTag + messageWithTag + like_button + spanWithTag;
document.getElementById("output").innerHTML += row;

//Fim do código
      } });  }); }
getData();
function updateLike(messageId){
      console.log("botão de like preciondo" +messageId);
      buttonId=messageId;
      likes=document.getElementById(buttonId).value;
      updateLikes=Number(likes)+1;
      console.log(updateLikes);
      firebase.database().ref(roomName).child(messageId).update({ like : updateLikes });
}
function logout(){
      localStorage.removeItem("userName");
      localStorage.removeItem("roomName");
      window.location.replace("index.html")
}