import axios from "axios";

// La clave se define en el archivo .env (ver .env.example)
const apiKey = import.meta.env.VITE_CAT_API_KEY;
const url_api = "https://api.thecatapi.com/v1/images/search";

axios.get(url_api, { params: { limit: 10, api_key: apiKey } })
  .then(response => {
    const results = response.data;
    results.forEach(result => {
      const img = document.createElement('img');
      img.src = result.url;
      img.alt = 'Cat Image';
      document.getElementById("fotos").appendChild(img);
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });