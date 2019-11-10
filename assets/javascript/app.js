var firebaseConfig = {
    apiKey: "AIzaSyDC8yZg7x4q03oqP8qGoCnnHLSzKDA5x4U",
    authDomain: "movies-e2552.firebaseapp.com",
    databaseURL: "https://movies-e2552.firebaseio.com",
    projectId: "movies-e2552",
    storageBucket: "movies-e2552.appspot.com",
    messagingSenderId: "523726796586",
    appId: "1:523726796586:web:f3a91f0c770b9b4e8f1053",
    measurementId: "G-CFC9ESDZYL"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  var database = firebase.database();

  $("#add-movie-btn").on("click", function(event) {
      event.preventDefault(); 

      let mName = $("#movie-name").val().trim();
      let type = $("#movie-type").val().trim();


      var newMovie = {
          name: mName,
          type: type,
      };

      database.ref().push(newMovie);

      console.log(newMovie.name);
      console.log(newMovie.type);

      alert("You have added a movie");

      $("#movie-name").val("");
      $("#movie-type").val("");

  });

  database.ref().on("child_added", function(childSnapshot) {
      console.log(childSnapshot.val());

      var mName = childSnapshot.val().name;
      var type = childSnapshot.val().type;


    var newRow = $("<tr>").append (
        $("<td>").text(mName),
        $("<td>").text(type)
    );

    $("#movie-list tbody").append(newRow);

  })