var email = document.getElementById("email")
var password = document.getElementById("password")
var name1 = document.getElementById("name")
var cnic1 = document.getElementById("cnic")
var address1 = document.getElementById("address")
var phone1 = document.getElementById("numberrr1")
var signup = document.getElementById("signup")
var signin = document.getElementById("signin")
var s_out = document.getElementById("signout")

signup.addEventListener("click", e => {

    if (email == "") {
        alert("Enter Email.com")
        if (password == "") {
            alert("Enter Password")
            if (cnic1 == "") {
                alert("Enter CNIC")
                if (phone1 == "") {
                    alert("Enter Phone Number")
                    if (address1 == "") {
                        alert("Enter Correct Address")
                    }
                }
            }
        }
    }
    else {

        firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
            .then((result) => {
                var user = result.user

                console.log("User :" + user)
                var obj = {
                    email: email.value,
                    password: password.value,
                    name: name1.value,
                    cnic: cnic1.value,
                    address: address1.value,
                    phone: phone1.value,
                    uid: user.uid,

                }

                firebase.database().ref("users/").child(`${name1.value}`).set(obj)
                    .then(data => {
                        alert("User Successfully Registered")
                        window.location = `signin.html`
                    })

            })
            .catch((e) => {
                console.log(e.code)
                console.log(e.message)
                alert(e.message)


            })
    }
})

signin.addEventListener("click", e => {

    if (email == "" || password == "") {
        alert("Enter E-mail And Password")
    }

    else {

        firebase.auth().signInWithEmailAndPassword(email.value, password.value)
            .then(result => {
                var user = result.user

                console.log(user)
                console.log("User Email :" + user.email)
                console.log("User UID :" + user.uid)
                console.log(result.user)

                localStorage.setItem("Current_User UID" + user.uid)

                firebase.database().ref("users/").child(`${name1.value}/`).equalTo(user.uid).once('value')
                    .then(snap => {
                        var data = snap.toJSON()
                        if (data == null) {
                            alert("Data Not Available")
                        }
                        else {
                            alert("Successfully Logged In")
                            window.replace('userdashboarad.html')
                        }
                    })

            })
            .catch((e) => {
                console.log(e.code)
                console.log(e.message)
                alert(e.message)
            })
    }
})


s_out.addEventListener("click", () => {
    firebase.auth().signOut()
})




    // firebase.database().ref("users/").child(`${name1.value}`).once('value', snap => {

    //     var data1 = snap.toJSON()
    //     console.log(data1)
    //     if (data1 == null) {
    //         alert("Data Not Available")
    //     }
    //     else {
    //         console.log(data1)
    //         var valuue = Object.values(data1)
    //         var divv = document.getElementById("users")

    //         divv.innerHTML = `${valuue}`
    //     }
    // })
