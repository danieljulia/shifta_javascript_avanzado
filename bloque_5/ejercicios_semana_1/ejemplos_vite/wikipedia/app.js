import axios from 'axios';

//esta funcion retorna un objeto con los resultados de la busqueda en wikipedia 
const searchWikipedia = async (query) => {
  try {
    const response = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          format: 'json',
          list: 'search',
          srsearch: query,
          utf8: 1,
          origin: '*',  // Add this for CORS
        },
      
      });
    console.log(response.data);
    muestraResultados(response.data);
  } catch (error) {
    console.error('Error fetching data from Wikipedia API:', error);
  }
};

//retorna el parametro de la url con el nombre que se le pase
const getQueryParam = (param) => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  };


//recuperamos el parametro "query" de la url 
const queryParam = getQueryParam('query');
if (queryParam) { //si existe llamamos la funcion
  searchWikipedia(queryParam);
  
}

function muestraResultados(data){
    const results = data.query.search;
    const container = document.getElementById('resultsContainer');
    container.innerHTML = ''; // Clear previous results
    results.forEach(result => {
      const title = result.title;
      const snippet = result.snippet;
      const link = `https://en.wikipedia.org/wiki/${encodeURIComponent(title)}`;
      const resultItem = document.createElement('li');
      resultItem.innerHTML = `<a href="${link}" target="_blank">${title}</a><p>${snippet}</p>`;
      container.appendChild(resultItem);
    });
}
