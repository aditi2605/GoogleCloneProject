document.addEventListener("click", function (event) {
    // Checking if the button was clicked
    if (!event.target.matches("#button")) return;
  
    fetch("<https://")
      .then((response) => response.json())
      .then((data) => console.log(data));
  });