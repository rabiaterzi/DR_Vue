/*import * as firebase from 'firebase/app';
import 'firebase/auth'*/
import firebase from '@firebase/app';
require('firebase/auth');
/*import firebase from 'firebase'
require('firebase/auth')*/
/*
<script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-app.js"></script>
<script>
  // Your web app's Firebase configuration
  
  // Initialize Firebase
  
</script>*/

var firebaseConfig = {
    apiKey: "AIzaSyD0c9a38G_8L7k09tqHmrmU2Hk_CeUBhEQ",
    authDomain: "dr-firebase-9de85.firebaseapp.com",
    projectId: "dr-firebase-9de85",
    storageBucket: "dr-firebase-9de85.appspot.com",
    messagingSenderId: "602632802158",
    appId: "1:602632802158:web:f59e6d568054f7f743fb7f"
  };
  
  firebase.initializeApp(firebaseConfig);

/*let app =null;
if(!firebase.apps.length){
    app=firebase.initializeApp(firebaseConfig);
}
export default firebase;*/