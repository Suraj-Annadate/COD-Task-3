const firstName=document.querySelector("#firstName")
const lastName=document.querySelector("#lastName")
const oldPassword=document.querySelector("#oldPassword")
const newPassword=document.querySelector("#newPassword")
const confirmPassword=document.querySelector("#confirmPassword")

const saveInfoButton =document.getElementById("saveInfoBtn")
const saveButton=document.querySelector("#saveBtn")
const logoutButton=document.querySelector("#logoutBtn")

const currentUser=JSON.parse(localStorage.getItem("currentUser"))
let allUsersArr=JSON.parse(localStorage.getItem("user"))


var currentUserStr = localStorage.getItem("currentUser");
if(currentUserStr === null){
  alert("You are not authorized person to access page. Please login or sign up to continue.");
  window.location.href = "../index.html";
} else {
  // var currentUser = JSON.parse(currentUserStr);
  if(typeof currentUser.firstName === "undefined" || typeof currentUser.lastName === "undefined" || currentUser.firstName === null){
    alert("You are not authorized to access this page. Please login or sign up to continue.");
    window.location.href = "../index.html";
  }
}

firstName.value=currentUser.firstName
lastName.value=currentUser.lastName
//function for saving users info

saveInfoButton.addEventListener("click", saveInfoFunction)

// Define the saveInfoFunction
function saveInfoFunction(e){
  e.preventDefault() // Prevent the default form submission behavior

  // Update currentUser object with new values
  currentUser.firstName = firstName.value
  currentUser.lastName = lastName.value

  console.log(currentUser) // log the updated currentUser to the console for debugging purposes

  // Save updated currentUser object to localStorage
  localStorage.setItem("currentUser", JSON.stringify(currentUser))
  
  // Loop through allUsersArr and update the corresponding user object (if any)
  allUsersArr.forEach((item) => {
    if(currentUser.email == item.email){
      item.firstName = firstName.value
      item.lastName = lastName.value
    }
  });

  // Save the updated allUsersArr to localStorage
  localStorage.setItem("user", JSON.stringify(allUsersArr))

  // Display a success message
  alert("Information saved");   
}


// Add an event listener to the "save" button and call saveFunction when clicked
saveButton.addEventListener("click", saveFunction)

// Define the saveFunction
function saveFunction(e){
  e.preventDefault() // Prevent the default form submission behavior

  // Check if the old password entered matches the currentUser's password
  if(oldPassword.value != currentUser.password){
    alert("Please Put The Correct Password")
  }

  // Check if the new password and confirm password fields match
  if(newPassword.value != confirmPassword.value){
    alert("New Password And Confirm Password Not Matched")
  } else if(newPassword.value==""){
    alert("Please put the New Password Before Saving")
  } else if(newPassword.value!="" && newPassword.value == confirmPassword.value && oldPassword.value == currentUser.password ){
    // If all conditions are met, update the user's information and save it to localStorage

    // Update currentUser object with new values
    currentUser.password = newPassword.value
    currentUser.firstName = firstName.value
    currentUser.lastName = lastName.value

    console.log(currentUser) // log the updated currentUser to the console for debugging purposes

    // Save updated currentUser object to localStorage
    localStorage.setItem("currentUser", JSON.stringify(currentUser))
  
    // Loop through allUsersArr and update the corresponding user object (if any)
    allUsersArr.forEach((item) => {
      if(currentUser.email == item.email){
        item.password=newPassword.value
        item.firstName=firstName.value
        item.lastName=lastName.value
      }
    });

    // Save the updated allUsersArr to localStorage
    localStorage.setItem("user", JSON.stringify(allUsersArr))

    // Display a success message and clear the password fields
    alert("Information updated")
    oldPassword.value=""
    newPassword.value=""
    confirmPassword.value=""
  }
}


//function for logout
logoutButton.addEventListener("click",logoutFunction)
function logoutFunction(e){
  e.preventDefault()
    localStorage.setItem("currentUser", JSON.stringify({}))
     window.location.href="../index.html";
    alert("Logged out successfully")

     return;
}


