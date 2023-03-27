// aqui exportaras las funciones que necesites

// let formAuthentication;

/* export function initialize() {
  formAuthentication = document.getElementById('form');
  formAuthentication.addEventListener('submit', authentication, false);
}

function authentication(event) {
  event.preventDefault();
  const userEmail = event.taget.userEmail.value;
  const registerPassword = event.target.registerPassword.value;

  firebaseError.auth().signInWithEmailAndPassword(userEmail, registerPassword)
    .then((result) => {
      window.location.href = '#/wall';
    })
    .catch((error) => {
      $('#errorModal').modal();
    });
}

 // Obtener la referencia a la lista de comentarios en Firestore
  var commentsRef = firebase.firestore().collection("comments");

  // mostrar los comentarios en tiempo real
  commentsRef.orderBy("timestamp", "desc").onSnapshot(function(snapshot) {
    // borrar los comentarios antiguos
    var commentsList = document.getElementById("comments");
    commentsList.innerHTML = "";

    // agregar los nuevos comentarios
    snapshot.forEach(function(doc) {
      var comment = doc.data().comment;

      var commentItem = document.createElement("li");
      commentItem.innerText = comment;

      commentsList.appendChild(commentItem);
    });
  });

function post() {
  var comment = document.getElementById("newComment").value;
  var ref = firebase.database().ref("comments");
    ref.push().set(comment);

    document.getElementById("buttonPost").addEventListener("click", function() {
  var ref = firebase.database().ref("comments");
  ref.on("value", function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var childData = childSnapshot.val();
      console.log(childData);
    });
  });
});

}

*/
