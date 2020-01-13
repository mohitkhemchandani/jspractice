let verified=false
let loggedIn=true
let payment=false
let guest=false

if (verified && loggedIn && payment){
    console.log("You are allowed to access paid courses")
}
else if ( verified || guest){
    console.log("You are allowed to access free courses.")
}
else{
    console.log("Message: Contact the admin to verify the email.")
}