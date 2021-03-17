// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC_umHIoZAXOezaiI1b_mNk-1ogD9ZAtLA",
    authDomain: "block-pharma.firebaseapp.com",
    projectId: "block-pharma",
    storageBucket: "block-pharma.appspot.com",
    messagingSenderId: "239776979606",
    appId: "1:239776979606:web:c8f8f9f64622b9ef52c0b7"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    const auth = firebase.auth();
    
    function signOut(){
            
        auth.signOut();
        alert("Signed Out");
        window.open('index.html', "_self")
        
    }