fetch("https://fakestoreapi.com/products/characters?limit=10")
.then(res => res.json())
.then(data =>{
    let card = "";
    for (let DD of data.id){
        card +=`<div class="card" style="width: 18rem;">
    <img src="${DD.image}" class="card-img-top" alt="${DD.name}">
    <div class="card-body">
      <h5 class="card-title">${DD.name}</h5>
      <p class="card-text">${DD.descripcion}</p>
    </div>
  </div>`
    }
    document.getElementById("Lista").innerHTML = card
})