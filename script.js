// myProducts.filter((item)=>item.title.includes(search.value))
// Hosting site on netlify github pages not working
// myCartProductArray = myProducts.filter((item)=> myCartIDs.includes(item.id))

// Add event listener for the Login button
document.getElementById('login-btn').addEventListener("click", ()=>{
    // Redirect to login page
    window.location.href="./login/index.html"
})

// Add event listener for the Signup button
document.getElementById('signup-btn').addEventListener("click", ()=>{
    // Redirect to signup page
    window.location.href="./signup/index.html"
})
