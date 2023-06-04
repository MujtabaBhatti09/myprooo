var email = document.getElementById("email");
var password = document.getElementById("password");
var name1 = document.getElementById("name");
var cnic1 = document.getElementById("cnic");
var address1 = document.getElementById("address");
var phone1 = document.getElementById("numberrr1");
var signup = document.getElementById("signup");
var signin = document.getElementById("signin");
var signout = document.getElementById("signout");
var donate_data = document.getElementById("donate_data");

var grcy_qnty_data = "";

var donnate_type = "";


function getdata(){
  var id = localStorage.getItem("Current_User UID");
  // console.log(firebase)
  firebase.database().ref(`/users/${id}`).child(`donnate`).once('value', (snap) => {

    const data11 = snap.toJSON()
    console.log(Object.values(data11))
    
  })
  
}


if (signup != undefined || signup != null) {
  signup.addEventListener("click", (e) => {
    if (email == "") {
      alert("Enter Email.com");
      if (password == "") {
        alert("Enter Password");
        if (cnic1 == "") {
          alert("Enter CNIC");
          if (phone1 == "") {
            alert("Enter Phone Number");
            if (address1 == "") {
              alert("Enter Correct Address");
            }
          }
        }
      }
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value)
        .then((result) => {
          var user = result.user;

          console.log("User :" + user);
          var obj = {
            email: email.value,
            password: password.value,
            name: name1.value,
            cnic: cnic1.value,
            address: address1.value,
            phone: phone1.value,
            uid: user.uid,
          };

          firebase
            .database()
            .ref("users/")
            .child(user.uid)
            .set(obj)
            .then((data) => {
              alert("User Successfully Registered");
              window.location = `signin.html`;
            });
        })
        .catch((e) => {
          console.log(e.code);
          console.log(e.message);
          alert(e.message);
        });
    }
  });
}

if (signin != null || signin != undefined) {
  signin.addEventListener("click", (e) => {
    if (email == "" || password == "") {
      alert("Enter E-mail And Password");
    } else {
      // console.log("run func")
      firebase
        .auth()
        .signInWithEmailAndPassword(email.value, password.value)
        .then((result) => {
          var user = result.user;

          // console.log(user)
          // console.log("User Email :" + user.email)
          // console.log("User UID :" + user.uid)
          // console.log(result.user)

          localStorage.setItem("Current_User UID", user.uid);

          firebase
            .database()
            .ref("users/")
            .child(user.uid)
            .once("value")
            .then((snap) => {
              var data = snap.val();
              // console.log(data)
              if (data == null) {
                alert("Data Not Available");
              } else {
                alert("Successfully Logged In");
                window.location.replace("userdashboard.html");
              }
            });
        })
        .catch((e) => {
          console.log(e.code);
          console.log(e.message);
          alert(e.message);
        });
    }
  });
}

signout.addEventListener("click", () => {
  firebase.auth().signOut();
  localStorage.clear();
  window.location.replace("signin.html");
});

//   var sndmsg = document.getElementById("sndmsg1")

//   sndmsg.addEventListener("click", e => {
//     console.log("msd")
//   })
// For Clothes

//   donatee.addEventListener("click", (e) => {

//     var obj1 = {

//          select: sel.value,

//          Charity: cash.innerText,

//          Grocery_Items: itemsgrcy.innerText,

//          GroceryQuantity : grcy_qnty.value ,

//         //  Food_Item: food_qnty.value,

//          Clothes: clth_cat.value,

//          Clothes_Quantity: clthvall.innerText,

//          Other_Goods: goodtext.innerText,

//          Goods_Quantity: gooddval.innerText,

//         }

//     firebase.database().ref("users/").child("uid/").child("Donation/").push(e.obj1.innerHTML)

//   })

////////////Display and hide input

var cash = document.getElementById("$csh");
var grocery = document.getElementById("grcy");
var food = document.getElementById("food");
var cloth = document.getElementById("clth");
var goods = document.getElementById("gds");
var ccsh = document.getElementById("cchg");

// Date Picker Jquery

// For DropDown Values

var select = document.getElementById("sel");
select.addEventListener("click", (e) => {
  console.log(e.target.value);
  donnate_type = e.target.value;

  // firebase.database().ref("users/").push(e.target.value)
  var content = document.getElementById("dropdownMenu2");

  content.innerHTML = `${e.target.value}`;
  e.preventDefault();
});

// For Grocery Items

var grcy_qnty = document.getElementById("grcy-qnty");

grcy_qnty.addEventListener("click", (e) => {
  console.log(e.target.value);
  grcy_qnty_data = e.target.value;
  // firebase.database().ref("users/").push(e.target.value)

  var toast = document.getElementById("down1");

  toast.innerHTML = `${e.target.value}`;
});

// For Food Items

var food_qnty = document.getElementById("food-qnty");
food_qnty.addEventListener("click", (e) => {
  console.log(e.target.value);
  // firebase.database().ref("users/").push(e.target.value)
  var toast1 = document.getElementById("down2");
  toast1.innerHTML = `${e.target.value}`;
});

// For Clothes

var clth_cat = document.getElementById("clth-cat");
clth_cat.addEventListener("click", (e) => {
  console.log(e.target.value);
  // firebase.database().ref("users/").push(e.target.value)
  var toast2 = document.getElementById("down3");
  toast2.innerHTML = `${e.target.value}`;
});

////////////Display and hide input

cash.addEventListener("click", (e) => {
  var d = document.getElementById("d-inp");
  var g = document.getElementById("d-inp-grcy");
  var f = document.getElementById("d-inp-food");
  var c = document.getElementById("d-inp-clth");
  var b = document.getElementById("d-inp-goods");

  g.classList.add("d-none");
  f.classList.add("d-none");
  c.classList.add("d-none");
  b.classList.add("d-none");
  d.classList.remove("d-none");
});
grocery.addEventListener("click", (e) => {
  var d = document.getElementById("d-inp");
  var g = document.getElementById("d-inp-grcy");
  var f = document.getElementById("d-inp-food");
  var c = document.getElementById("d-inp-clth");
  var b = document.getElementById("d-inp-goods");

  d.classList.add("d-none");
  g.classList.remove("d-none");
  f.classList.add("d-none");
  b.classList.add("d-none");
  c.classList.add("d-none");
});
food.addEventListener("click", (e) => {
  var d = document.getElementById("d-inp");
  var g = document.getElementById("d-inp-grcy");
  var f = document.getElementById("d-inp-food");
  var c = document.getElementById("d-inp-clth");
  var b = document.getElementById("d-inp-goods");

  f.classList.remove("d-none");
  c.classList.add("d-none");
  b.classList.add("d-none");
  d.classList.add("d-none");
  g.classList.add("d-none");
});
cloth.addEventListener("click", (e) => {
  var d = document.getElementById("d-inp");
  var g = document.getElementById("d-inp-grcy");
  var f = document.getElementById("d-inp-food");
  var c = document.getElementById("d-inp-clth");
  var b = document.getElementById("d-inp-goods");

  d.classList.add("d-none");
  g.classList.add("d-none");
  f.classList.add("d-none");
  c.classList.remove("d-none");
  b.classList.add("d-none");
});
goods.addEventListener("click", (e) => {
  var d = document.getElementById("d-inp");
  var g = document.getElementById("d-inp-grcy");
  var f = document.getElementById("d-inp-food");
  var c = document.getElementById("d-inp-clth");
  var b = document.getElementById("d-inp-goods");

  d.classList.add("d-none");
  g.classList.add("d-none");
  f.classList.add("d-none");
  c.classList.add("d-none");
  b.classList.remove("d-none");
});

donate_data.addEventListener("click", () => {
  var id = localStorage.getItem("Current_User UID");

  let key = firebase
    .database()
    .ref("users/")
    .child(id + "/donnate")
    .push().key;

  donnate_type == "Cash"
    ? firebase
        .database()
        .ref("users/")
        .child(id + "/donnate/" + key.toString())
        .set({
          donnate_key: key,
          donnate_type: donnate_type,
          donnate_value: cashamount.value,
        })
    : donnate_type == "Grocery"
    ? // console.log(groceryitem1.value)

      firebase
        .database()
        .ref("users/")
        .child(id + "/donnate/" + key.toString())
        .set({
          donnate_key: key,
          donnate_type: donnate_type,
          item: grcy_qnty_data,
          donnate_value: groceryitem1.value,
        })
    : donnate_type == "Food"
    ? firebase
        .database()
        .ref("users/")
        .child(id + "/donnate/" + key.toString())
        .set({
          donnate_key: key,
          donnate_type: donnate_type,
          item: document.getElementById("down2").innerText,
          donnate_value: "",
        })
    : donnate_type == "Clothes"
    ? firebase
        .database()
        .ref("users/")
        .child(id + "/donnate/" + key.toString())
        .set({
          donnate_key: key,
          donnate_type: donnate_type,
          item: document.getElementById("down3").innerText,
          donnate_value: clothval.value,
        })
    : donnate_type == "Other Goods"
    ? firebase
        .database()
        .ref("users/")
        .child(id + "/donnate/" + key.toString())
        .set({
          donnate_key: key,
          donnate_type: donnate_type,
          item:gooditem1.value,
          donnate_value:goodvall.value,
        })
    : console.log("new data");

  // firebase.database().ref("users/").child(id+"/donnate/"+key.toString()).set({
  //    donnate_key:key,
  //    donnate_type:donnate_type,
  //   donnate_value: cashamount.value!="" ?
  //    cashamount.value :
  //   grcy_qnty.value !=""
  //   ?
  //   grcy_qnty.value : "test"

  //    Grocery_Item: groceryitem1.value,
  //    Grocery_Quantity: grcy_qnty.value,
  //    Food_Quantity: food_qnty.value,
  //    Clothes_Type: clth_cat.value,
  //    Clothes_Quantity: clothval.value,
  //    Other_Goods: groceryitem1.value,
  //    Good_Quantity: goodvall.value

  // })
});

// Pushing GoodItem Donation To Database

var gooditem1 = document.getElementById("gooditem1");
var goodvall = document.getElementById("goodval");



// var data = localStorage.

// End Goods

// Pushing Clothes Donation To Database

var clothval = document.getElementById("clothvall");



// clth_cat == category selection already get as clth_cat

// End Clothes

// Pushing FoodItem Donation To Database

// food_qnty already get for food quantity

// End Food

// Pushing Grocery Item Donation To Database

var groceryitem1 = document.getElementById("groceryitem1");

// grcy_qnty already get for grocery quantity

// End Grocery

// Pushing Cash Donation To Database

var cashamount = document.getElementById("cashamount");

// End Cash
