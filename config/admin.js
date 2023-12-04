// Get a reference to the database service
var database = firebase.database();

// Reference to the "users" location in the database
var usersRef = database.ref('users/');

// Fetch user IDs
usersRef.once('value').then((snapshot) => {

    snapshot.forEach((childSnapshot) => {

        var userId = childSnapshot.key;
        // console.log("User ID: " + userId);

        // Get a reference to the user's data in the database
        var userDataRef = database.ref(`users/${userId}/Donate`);

        // Retrieve user data from the database and add it to an object called 'user'
        userDataRef.once('value', (data) => {

            var user = data.toJSON();

            console.log(user);

            var object = Object.values(user);

            var donorName = document.getElementById("donorsData");

            object.map((data) => {

                donorName.innerHTML = `
                <div class="card">
                <h5>Donor Name: ${data.Donate_Type}</h5>
                </div>
                
                `;

            });

        });

    });

});




// // Get a reference to the database service
// var database = firebase.database();

// // Reference to the "users" location in the database
// var usersRef = database.ref('users/');

// // Fetch user IDs
// usersRef.once('value').then((snapshot) => {
//     // Clear the existing content before appending new data
//     var donorName = document.getElementById("donorsData");
//     donorName.innerHTML = '';

//     snapshot.forEach((childSnapshot) => {
//         var userId = childSnapshot.key;
//         var userData = childSnapshot.val();
//         console.log(userId)

//         userData.forEach(function (data) {
//             donorName.innerHTML += `
//                 <div class="card">
//                     <h5>Donor Name: ${data.name}</h5>
//                 </div>`;
//         });
//     });
// }).catch((error) => {
//     console.error("Error fetching data:", error);
// });

// //In this code, we initialize Firebase and get a reference to the database service. We then fetch user IDs from the "users" location in the database. For each user ID, we retrieve the user's data from the database and display it on the web page. The user data is displayed in a card format, including the donor's name, email, phone number, CNIC, and address..</s>


// // Get a reference to the database service
// var database = firebase.database();

// // Reference to the "users" location in the database
// var usersRef = database.ref('users/');

// // Fetch user IDs
// usersRef.once('value').then((snapshot) => {
//     // Clear the existing content before appending new data
//     var donorName = document.getElementById("donorsData");
//     // donorName.innerHTML = '';

//     snapshot.forEach((childSnapshot) => {
//         var userId = childSnapshot.key;
//         var userData = childSnapshot.val();

//         userData.forEach((v) => {
//             donorName.innerHTML += `
//                 <div class="card">
//                     <h5 class="card-header">Donor Name: ${v.name}</h5>
//                     <ul class="list-group list-group-flush">
//                         <li class="list-group-item"><b>Email:</b> <a href="#">${v.email}</a></li>
//                         <li class="list-group-item"><b>Phone:</b> ${v.phone}</li>
//                         <li class="list-group-item"><b>CNIC:</b> ${v.cnic}</li>
//                         <li class="list-group-item"><b>Address:</b> ${v.address}</li>
//                     </ul>
//                 </div>`;
//         });
//     });
// }).catch((error) => {
//     console.error("Error fetching data:", error);
// });


// // Get a reference to the database service
// var database = firebase.database();

// // Reference to the "users" location in the database
// var usersRef = database.ref('users/');

// // Fetch user IDs
// usersRef.once('value').then((snapshot) => {
//     // Clear the existing content before appending new data
//     var donorName = document.getElementById("donorsData");
//     donorName.innerHTML = '';

//     snapshot.forEach((childSnapshot) => {
//         var userId = childSnapshot.key;
//         var userData = childSnapshot.val();

//         // Check if userData is an object
//         if (typeof userData === 'object' && userData !== null) {
//             // Iterate over object properties
//             Object.values(userData).forEach((data) => {
//                 donorName.innerHTML += `
//                     <div class="card">
//                         <h5>Donor Name: ${data.name}</h5>
//                     </div>`;
//             });
//         } else {
//             console.error("Invalid data structure for user:", userId);
//         }
//     });
// }).catch((error) => {
//     console.error("Error fetching data:", error);
// });





// // Get a reference to the database service
// var database = firebase.database();

// // Reference to the "users" location in the database
// var usersRef = database.ref('users/');

// // Fetch user IDs
// usersRef.once('value').then((snapshot) => {
//     // Clear the existing content before appending new data
//     var donorName = document.getElementById("donorsData");
//     donorName.innerHTML = '';

//     snapshot.forEach((childSnapshot) => {
//         var userId = childSnapshot.key;
//         var userData = childSnapshot.val();

//         // Check if userData is an object
//         if (typeof userData === 'object' && userData !== null) {
//             // Iterate over object properties
//             Object.values(userData).forEach((data) => {
//                 // Log the retrieved data for debugging
//                 console.log("Retrieved data:", data);

//                 // Check if 'name' property is present
//                 if (data && data.name) {
//                     donorName.innerHTML += `
//                         <div class="card">
//                             <h5>Donor Name: ${data.name}</h5>
//                         </div>`;
//                 } else {
//                     console.error("Invalid data structure for user:", userId, data);
//                 }
//             });
//         } else {
//             console.error("Invalid data structure for user:", userId, userData);
//         }
//     });
// }).catch((error) => {
//     console.error("Error fetching data:", error);
// });
