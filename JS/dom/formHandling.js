// const checkName = () =>{

//     var name = document.getElementById("name").value;
//     if(name.length<3){
//         var nameError = document.getElementById("nameerror")
//         nameError.innerHTML = "Name must be greater than 3 characters"
//     }
//     else{
//         var nameError = document.getElementById("nameerror")
//         nameError.innerHTML = ""
//     }
// }
// const submitHandler = (event) =>{
//     event.preventDefault();
//     console.log("form submitted...")
//     var name = document.getElementById("name").value;
//     var email = document.getElementById("email").value;

//     if(name.length<3){
//         // alert("Name must be greater than 3 characters")
//         var nameError = document.getElementById("nameerror")
//         nameError.innerHTML = "Name must be greater than 3 characters"    
//     }
//     else{
//         var nameValue = document.getElementById("namevalue")
//         var emailValue = document.getElementById("emailvalue")
//         nameValue.textContent = name;
//         emailValue.textContent = email;
//     }
//     console.log(name, email)
// }

// Function to validate name input
const checkName = () => {
    var name = document.getElementById("name").value;
    var nameError = document.getElementById("nameError");
    if (name.length < 3) {
        nameError.innerHTML = "Name must be greater than 3 characters";
    } else {
        nameError.innerHTML = "";
    }
}

// Function to handle form submission
const submitHandler = (event) => {
    event.preventDefault();
    console.log("Form submitted...");

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var nameError = document.getElementById("nameError");

    if (name.length < 3) {
        nameError.innerHTML = "Name must be greater than 3 characters";
    } else {
        nameError.innerHTML = "";
        var nameValue = document.getElementById("submittedName");
        var emailValue = document.getElementById("submittedEmail");
        nameValue.textContent = name;
        emailValue.textContent = email;
    }

    console.log(name, email);
}
