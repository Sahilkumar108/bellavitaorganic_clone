document.addEventListener("DOMContentLoaded", function() {
    fetch("perfumes.json")
      .then(response => response.json())
      .then(data => {
        renderProducts(data.products);
      });
  });
  
  function renderProducts(products) {
    const container = document.getElementById("product-container");
  
    products.forEach(product => {
      const card = document.createElement("div");
      card.classList.add("card");
  
      const image = document.createElement("img");
      image.src = product.image;
      image.alt = product.name;
  
      const name = document.createElement("h2");
      name.textContent = product.name;
  
      const price = document.createElement("p");
      price.textContent = "Price: $" + product.price;
  
      const addButton = document.createElement("button");
      addButton.textContent = "Add to Cart";
      addButton.addEventListener("click", function() {
        // You can add your logic for adding to cart here
        console.log("Added to cart:", product.name);
      });
  
      card.appendChild(image);
      card.appendChild(name);
      card.appendChild(price);
      card.appendChild(addButton);
  
      container.appendChild(card);
    });
  }
  