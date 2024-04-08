    // Fetch and inject the navbar content
    fetch('navbar.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('navbarContainer').innerHTML = data;
      });