
$.ajax(hi)({
    type: "GET",
    url: "http://www.omdbapi.com/?i=tt0325980&apikey=a9aa16e4",
    dataType: "JSON",
    success: function(response){
        console.log(response);
        showMovieDetails(response.Title,response.Released,
            response.Poster,response.Actors,response.Plot);
    },
    error: function(error){
        console.log("Error has happened" + error);
    }
});

$.ajax({
    type: "POST"
})
function showMovieDetails(title, release, poster, actor, plot){
    var heading = $("<h1>").text(title);
    $("body").append(heading);
    //  var posterimg = $("<img>").attr("src",poster);
    //  $("body").append(posterimg);
    var res = actor.split(',');
    var toget = res.join(' ')
    var nameActor1 = $("<h3>").text(res[0]);
    $("body").append(nameActor1);
    var nameActor2 = $("<h3>").text(res[1]);
    $("body").append(nameActor2);
    var nameActor3 = $("<h3>").text(res[2]);
    $("body").append(nameActor3);
    var nameActor4 = $("<h3>").text(res[3]);
    $("body").append(nameActor4);
    var releasedate = $("<h2>").text(release);
    $("body").append(releasedate);
    //  var thePlot = $("<h4>").text(plot);
  //  $("body").append(thePlot);
}