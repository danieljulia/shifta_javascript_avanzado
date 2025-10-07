import axios from "axios";

async function searchWikipedia(query) {
  const url = 'https://en.wikipedia.org/w/api.php';
  const params = {
    action: 'query',
    format: 'json',
    list: 'search',
    srsearch: query,
    utf8: 1,
    origin: '*' // Required for CORS in browser-based environments
  };

  try {
    const response = await axios.get(url, { params });
    const searchResults = response.data.query.search;

    //ejercicio , aqui en lugar de mostrar los resultados en la consola escribirlos en el html usando js
    console.log(`Results for "${query}":`);
    searchResults.forEach((result, index) => {
      console.log(`\n${index + 1}. ${result.title}`);
      console.log(result.snippet.replace(/<[^>]+>/g, '') + '...');
      console.log(`https://en.wikipedia.org/wiki/${encodeURIComponent(result.title)}`);
    });
  } catch (error) {
    console.error('Error searching Wikipedia:', error.message);
  }
}

searchWikipedia('Paris');