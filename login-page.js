// const loginForm = document.getElementById("login-form");
// const loginButton = document.getElementById("login-form-submit");
// const loginErrorMsg = document.getElementById("login-error-msg");

// // When the login button is clicked, the following code is executed
// loginButton.addEventListener("click", (e) => {
//     // Prevent the default submission of the form
//     e.preventDefault();
//     // Get the values input by the user in the form fields
//     const username = loginForm.username.value;
//     const password = loginForm.password.value;

//     if (username === "admin" && password === "web_dev") {
//         // If the credentials are valid, show an alert box and reload the page
//         alert("You have successfully logged in.");
//         window.open('index1.html', "_self")
//     } else {
//         // Otherwise, make the login error message show (change its oppacity)
//         loginErrorMsg.style.opacity = 1;
//     }
// })

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
	
	
function signUp(){
    
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    
    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
    
    alert("Signed Up");
}



function signIn(){
    
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    
    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
    
}

function signOut(){
		
    auth.signOut();
    alert("Signed Out");
    
}


auth.onAuthStateChanged(function(user){
		
    if(user){
        
        var email = user.email;
        alert("Active User " + email);
        
        //Take user to a different or home page
        window.open('index1.html', "_self")
        //is signed in
        
    }else{
        
        //alert("No Active User");
        //no user is signed in
    }
    
    
    
});
