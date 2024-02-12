const navbar = () => {
  return `
  <a href="./index.html"> 
<nav>
<div style="display: flex;">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIP-zagesI6oIDc6Z_EtyZSeHi4C949tp1VA&usqp=CAU" style="height: 30px;" alt="">
    <input type="search" style="border: none; border-bottom: 2px solid black; height: 30px; color: black; " placeholder="Search">
  </div>
  <div>
   <a href="./index.html"> <img src="https://bellavitaorganic.com/cdn/shop/files/BV-Logo-Black_Mobile.png?height=34&v=1706616045" alt=""></a>
  </div> 

  <div style="display: flex; justify-content: space-around; width: 100px;">
<a href="./login.html">        <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHidHqobXsnGVIq39pi4WdBpsdmbAMhUASucncoT1DXoLf2SMuXuRyzPJJXFIAoguMi60&usqp=CAU"  style="height: 30px; padding-left: 10px;" alt=""></a>
<a href="./cart.html">        <img src="https://static-00.iconduck.com/assets.00/shopping-cart-icon-512x462-yrde1eu0.png" alt="" style="height: 30px;">
</a>      </div>
</nav>
<a href="./product.html" style:"text-decoration: none;" >
<div id="ncategory" class="">
<div id="B1GF1">Buy 1 Get 1 Free</div>
<div id="crazy_deals">Crazy deals</div>
<div id="Shopall">Shop All</div>
<div id="bestsellers">BESTSELLERS</div>
<div id="perfumes">Perfumes</div>
<div id="Bathandbody">Bath & Body</div>
<div id="New_Arrivals">New Arrivals</div>
<div id="bath_body">Bath & Body</div>
<div id="skin_care">Skin-Care</div>
<div id="gifting">Gifting</div>
</div>
</a>
</a>
`;
};

let nav = document.querySelector("header");
nav.innerHTML = navbar();
