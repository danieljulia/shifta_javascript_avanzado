import axios from "axios";

const apiKey = "live_hMwATbY2YIrmC2BtGwQTfdwYr7y3mXrfHB2IhJSULRV0HeKP14NyqKcF86PvWLcq";
const url_api = "https://api.thedogapi.com/v1/images/search";

axios.get(url_api, { headers: { "X-Api-Key": apiKey }, params: { limit: 10 } })
  .then(response => {
    const results = response.data;
    results.forEach(result => {
      const img = document.createElement('img');
      img.src = result.url;
      img.alt = 'Dog Image';
      document.getElementById("fotos").appendChild(img);
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });