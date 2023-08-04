// Cache DOM elements
const form = document.querySelector("form");
const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");

// Initialize user array from localStorage or create empty array
const user = JSON.parse(localStorage.getItem("user")) || [];

// Check if email already exists in user array
function isDuplicateEmail(email) {
  return user.some((user) => user.email === email);
}

// form submission
function signup(event) {
  event.preventDefault();

  // Get input values
  const firstName = firstNameInput.value;
  const lastName = lastNameInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  // Validate input fields
  if (
    !firstName ||
    !lastName ||
    !email ||
    !password ||
    !confirmPassword ||
    password !== confirmPassword
  ) {
    alert("Invalid details");
    return;
  }

  if (isDuplicateEmail(email)) {
    alert("Email already in use");
    return;
  }

  // Create new user object and add to user array
  const newUser = { firstName, lastName, email, password };
  user.push(newUser);

  // Store updated user array in localStorage
  localStorage.setItem("user", JSON.stringify(user));

  // Clear input fields
  firstNameInput.value = "";
  lastNameInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";
  confirmPasswordInput.value = "";

  alert("Signup successful");
  window.location.href = "login\index.html";
}

form.addEventListener("submit", signup);
