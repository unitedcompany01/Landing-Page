// document.addEventListener("DOMContentLoaded", function() {
//     const form = document.getElementById("login-form");
//     const emailInput = document.getElementById("inputEmail3");
//     const passwordInput = document.getElementById("inputPassword3");
//     const rememberMeInput = document.getElementById("customCheck1");

//     app.post('/login.html', (req, res) => {
//         if(req.method === "POST"){
//             if(emailInput.value == "admin@gmail.com" && passwordInput.value == "admin"){
//                 window.alert("Login successful! ");
//                 window.location.href ="index.html";
//             }else{
//                 window.alert("Invalid email or password! ");
//             }
//             res.send();
//         }
//     });
    
//     form.addEventListener("submit", function(event) {
//         event.preventDefault();

//         const email = emailInput.value.trim();
//         const password = passwordInput.value.trim();

//         if (email === "") {
//             document.getElementById("email-error").innerHTML = "Please enter your email";
//         } else if (!validateEmail(email)) {
//             document.getElementById("email-error").innerHTML = "Please enter a valid email";
//         } else {
//             document.getElementById("email-error").innerHTML = "";
//         }

//         if (password === "") {
//             document.getElementById("password-error").innerHTML = "Please enter your password";
//         } else if (password.length < 8) {
//             document.getElementById("password-error").innerHTML = "Please enter a password with at least 8 characters";
//         } else {
//             document.getElementById("password-error").innerHTML = "";
//         }

//         if (email !== "" && password !== "" && validateEmail(email) && password.length >= 8) {
//             if (email === "arojadoj6@gmail.com" && password === "administrator") {
//                 window.alert("Login successfully.....");
//                 window.location.href = "index.html";
//             } else {
//                 window.alert("Invalid email or password!");
//             }

//             if (rememberMeInput.checked) {
//                 localStorage.setItem("email", email);
//                 localStorage.setItem("rememberMe", true);
//             } else {
//                 localStorage.removeItem("email");
//                 localStorage.removeItem("rememberMe");
//             }
//         }
//     });

//     // Check if remember me is checked
//     if (localStorage.getItem("rememberMe") === "true") {
//         rememberMeInput.checked = true;
//         emailInput.value = localStorage.getItem("email");
//     }

//     // Function to validate email
//     function validateEmail(email) {
//         const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//         return emailRegex.test(email);
//     }
// });