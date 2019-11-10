var firebaseConfig = {
    apiKey: "AIzaSyDC8yZg7x4q03oqP8qGoCnnHLSzKDA5x4U",
    authDomain: "movies-e2552.firebaseapp.com",
    databaseURL: "https://movies-e2552.firebaseio.com",
    projectId: "movies-e2552",
    storageBucket: "movies-e2552.appspot.com",
    messagingSenderId: "523726796586",
    appId: "1:523726796586:web:b7702e05f705ef0e8f1053",
    measurementId: "G-YMS5HG79LZ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var database = firebase.database();

  $("#add-movie-btn").on("click", function(event) {
      event.preventDefault(); 

      let mName = $("#movie-name").val().trim();
      let mtype = $("#movie-type").val().trim();


      var newMovie = {
          name: mName,
          type: mtype,
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
      var mtype = childSnapshot.val().type;


    var newRow = $("<tr>").append (
        $("<td>").text(mName),
        $("<td>").text(mtype)
    );

    $("#movie-list tbody").append(newRow);

  })