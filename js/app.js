/////////////////////////////EX1////////////////////////////////
let AllCard = document.getElementById("card");
async function DataAPI() {
  const Data = await fetch(`https://fakestoreapi.com/products/`);
  let Data12 = await Data.json();

  Data12.map((element) => {
    let Card = document.createElement("div");
    Card.setAttribute("class", "All-Card");
    AllCard.appendChild(Card);

    let img = document.createElement("img");
    img.setAttribute("src", `${element.image}`);
    Card.appendChild(img);

    let title = document.createElement("p");
    title.innerHTML = `Title : ${element.title}`;
    Card.appendChild(title);

    let price = document.createElement("p");
    price.innerHTML = `Price : $${element.price}`;
    Card.appendChild(price);

    let description = document.createElement("p");
    description.innerHTML = `Description : ${element.description}`;
    Card.appendChild(description);
  });
}
DataAPI();

/////////////////////////////Ex2////////////////////////////////

