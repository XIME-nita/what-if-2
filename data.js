// WRITE YOUR CODE BELOW THIS LINE


let favMovies = [
    {
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        description: "Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.",
		directors: ["Gabriele Muccino"],
        writers: ["Stephen King", "Frank Darabont"],
        stars: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
        genres: ["Drama"]
    },
    {
        title: "The Pursuit of Happyness",
        year: 2006,
        rating: 8.0,
        description: "A struggling salesman takes custody of his son as he's poised to begin a life-changing professional career.",
		directors: ["Gabriele Muccino"],
        writers: ["Steve Conrad"],
        stars: ["Will Smith", "Jaden Smith", "Thandiwe Newton"],
        genres: ["Biography", "Drama"]
    },
    {
        title: "The Green Mile",
        year: 1999,
        rating: 7.5,
        description: "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.",
		directors: ["Steve Conrad"],
        writers: ["Stephen King", "Frank Darabont"],
        stars: ["Tom Hanks", "David Morse", "Bonnie Hunt"],
		genres: ["Crime", "Drama", "Fantasy"]
    },
    {
        title: "The Dark Knight",
        year: 2008,
        rating: 9.0,
        description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
		directors: ["Christopher Nolan"],
        writers: ["Jonathan Nolan", "Christopher Nolan", "David S. Goyer"],
        stars: ["Christian Bale", "Heath Ledger","Aaron Eckhart"],
        genres: ["Crime", "Drama"]
    }
]

for (const movie of favMovies) {
  console.log(movie.title);
}

for (let i = 0; i < favMovies.length; i++) {
	const movie = favMovies[i];
	console.log(movie.title);
}

let totalRate = 0;
for (const movie of favMovies) {
  totalRate += movie.rating
}
let averageRate = totalRate / favMovies.length;
console.log(averageRate);


let newestMovie = favMovies[0];
for (const movie of favMovies) {
  if(movie.year > newestMovie.year) {
    newestMovie = movie;
  }
}
console.log(newestMovie);

let starsByMovies = "";
for (const movie of favMovies) {
  starsByMovies += movie.title + "\n\n";
  for (const star of movie.stars) {
    starsByMovies += star + ",\n";
  }
  starsByMovies += "\n_\n\n";
}
console.log(starsByMovies);






// DO NOT MODIFY THE CODE BELOW THIS LINE
let toExport;

try {
	toExport = [
		{name: "favMovies", content: favMovies, type: "array"},
		{name: "averageRate", content: averageRate, type: "number"},
		{name: "newestMovie", content: newestMovie, type: "object"},
		{name: "starsByMovies", content: starsByMovies, type: "string"}
	]
} catch (error) {
	toExport = {error: error.message}
}

export {toExport};
