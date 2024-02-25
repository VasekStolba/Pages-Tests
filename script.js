// Define the searchPhrase function
async function searchPhrase() {
  // Get the search term from the search bar
  const searchTerm = document.getElementById("search-bar").value.toLowerCase();

  // Fetch the data from the JSON file
  const response = await fetch("phrases.json");

  // Convert the response to JSON
  const data = await response.json();

  // Filter the phrases that include the search term
  const phrases = data.phrases.filter((item) => item.phrase.toLowerCase().includes(searchTerm));

  // Display the phrases in the console
  console.log("Phrases:");
  phrases.forEach((phrase) => {
    console.log(`- ${phrase.phrase}`);
  });
}
