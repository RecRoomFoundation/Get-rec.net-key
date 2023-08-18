url = window.location.href
if (url.includes("rec.net")) {
   try {
    b_token = "Bearer " + JSON.parse(localStorage.getItem("oidc.user:https://auth.rec.net:recnet"))["access_token"]
    console.log(b_token)
    alert("Successfully printed bearer token on console!")
    }
    catch(err) {
        alert("Not logged in on RecNet!")
    } 
}
else {
    alert("Not in rec.net")
}
