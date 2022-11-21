// WRITE YOUR CODE BELOW THIS LINE

let favoriteBooks = [
	{
		title: "Interstellar",
		year : 2014,
		rating : 8.6,
		description : "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
		writers : ["Jonathan Nolan","Christopher Nolan"],
		stars : ["Matthew McConaughey","Anne Hathaway","Jessica Chastain"],
		genres : ["Adventure","Drama","Sci-Fi"]

	},
	{
		title: "Schindler's List",
		year : 1993,
		rating : 9.0,
		description : "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
		writers : ["Thomas Keneally","Steven Zaillian"],
		stars : ["Liam Neeson","Ralph Fiennes","Ben Kingsley"],
		genres : ["Biography","Drama","History"]
	},
	{	
		title: "The Godfather",
		year : 1972,
		rating : 9.2,
		description : "The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.",
		writers : ["Mario Puzo","Francis Ford Coppola"],
		stars : ["Marlon Brando","Al Pacino","James Caan"],
		genres : ["Crime","Drama"]
	},
	{
		title: "The Last Samurai",
		year : 2003,
		rating : 7.8,
		description : "An American military advisor embraces the Samurai culture he was hired to destroy after he is captured in battle.",
		writers : ["John Logan","Edward Zwick","Marshall Herskovitz"],
		stars : ["Tom Cruise","Ken Watanabe","Billy Connolly"],
		genres : ["Action","Drama"]
	}
]

console.log("The title of this first movie is: ", favoriteBooks[0].title);
console.log("The release year of the second movie is: ", favoriteBooks[1].year);
console.log("The INDB ratubg if the third movie is: ", favoriteBooks[2].rating);
console.log("The short description of the fourth movie is: ", favoriteBooks[3].description);
console.log("The lead director of the first movie is: ", favoriteBooks[0].writers[0]);
console.log("The lead writer of the second movie is: ", favoriteBooks[1].writers[0]);
console.log("The lead star of the third movie is: ", favoriteBooks[2].stars[0]);
console.log("The main genre of the fourth movie is: ", favoriteBooks[3].genres[0]);

let avarageRating = 0;
avarageRating=((favoriteBooks[0].rating+favoriteBooks[1].rating+favoriteBooks[2].rating+favoriteBooks[3].rating)/4);
console.log("The avarage rating of all 4 movies is: ", avarageRating);

let avarageAge = 0;
avarageAge=((favoriteBooks[0].year+favoriteBooks[1].year+favoriteBooks[2].year+favoriteBooks[3].year)/4);
console.log("The avarage age of all 4 movies is: ", avarageAge);

// DO NOT MODIFY THE CODE BELOW THIS LINE
let toExport;

try {
	toExport = [
		{name: "favMovies", content: favMovies, type: "array"},
        {name: "averageRating", content: averageRating, type: "number"},
        {name: "averageAge", content: averageAge, type: "number"}
	]
} catch (error) {
	toExport = {error: error.message}
}

export {toExport};
