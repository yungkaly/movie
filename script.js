const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "2a4cf5584amshb2d423b2db488e2p1969dejsn6d8c6bc546ac",
    "X-RapidAPI-Host": "streaming-availability.p.rapidapi.com",
  },
};

fetch(
  "https://streaming-availability.p.rapidapi.com/v2/search/basic?country=us&services=netflix%2Cprime.buy%2Chulu.addon.hbo%2Cpeacock.free&output_language=en&show_type=movie&genre=18&show_original_language=en&keyword=zombie",
  options
)
  .then((response) => response.json())
  .then((response) => {
    const movieList = document.querySelector("#movieList");
    response.result.forEach((movie) => {
      const div = document.createElement("div");
      div.innerHTML = `
	  <div class="movieInfo">
	  <img class="posters" src="${movie.posterURLs["original"]}" alt="Movie poster">
	  <div class="publication" id="year">${movie.year}</div>
	  <div class="flex_bar">
		  <img class="imdb_img" style="width: 30px;" src="https://cdn-icons-png.flaticon.com/512/5977/5977585.png" alt="">
		  <div class="imdb_point" style="font-size: 11px; color: gray;">${
        movie.imdbRating
      } / 100</div>
	  </div>
		<div class="movie_name" id="movieTitle">${movie.title}</div>
		</div>
		<div class="movie_type">${movie.genres.map((genre) => genre.name).join()}</div>
	`;
      movieList.appendChild(div);
    });
  })
  .catch((err) => console.error(err));
