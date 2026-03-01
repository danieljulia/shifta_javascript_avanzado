import axios from "axios";

const url_api = "https://api.thecatapi.com/v1/images/search?limit=10&api_key=ylX4blBYT9FaoVd6OhvR";

axios.get(url_api)
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