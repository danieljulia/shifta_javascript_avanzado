// Define shared components only
const SiteHeader = {
    template: `
      <header>
        <nav>
          <a href="index.html">Home</a> |
          <a href="projects.html">Projects</a> |
          <a href="about.html">About</a>
        </nav>
      </header>
    `
  };
  
  const SiteFooter = {
    template: `
      <footer>
        <p>© 2025 My Portfolio</p>
      </footer>
    `
  };
  

  const projects=fetch('./data/data.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    return data.projects;
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });