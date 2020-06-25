function solve() {
   let inputs = Array.from(document.querySelectorAll("#add-new input"));
   let listAvailable = document.querySelector("#products ul");
   let myProductsList = document.querySelector("#myProducts ul");
   let addButton = document.querySelector("#add-new button");
   let filterButton = document.querySelector(".filter button");
   let buyButton = document.querySelector("#myProducts button");

   addButton.addEventListener("click", add);
   filterButton.addEventListener("click", filter);
   buyButton.addEventListener("click", buyProd);

   function add(event){
      event.preventDefault();
      let name = inputs[0].value;
      let quantity = Number(inputs[1].value);
      let price = Number(inputs[2].value);

      let newLi = document.createElement("li");
      let span = document.createElement("span");
      span.textContent = name;
      newLi.appendChild(span);
      let strong = document.createElement("strong");
      strong.textContent = `Available: ${quantity}`;
      newLi.appendChild(strong);
      let newDiv = document.createElement("div");
      let divStrong = document.createElement("strong");
      divStrong.textContent = `${price.toFixed(2)}`;
      newDiv.appendChild(divStrong);
      let button = document.createElement("button");
      button.textContent = "Add to Client's List";
      newDiv.appendChild(button);
      newLi.appendChild(newDiv);

      listAvailable.appendChild(newLi);

      button.addEventListener("click", buy);

      function buy(){
         let newLiProd = document.createElement("li");
         newLiProd.textContent = name;
         let strongProd = document.createElement("strong");
         strongProd.textContent = `${price.toFixed(2)}`;
         newLiProd.appendChild(strongProd);

         myProductsList.appendChild(newLiProd);
         quantity -= 1;
         if(quantity === 0){
            newLi.remove();
         }
         else{          
            strong.textContent = `Available: ${quantity}`;
         }
         

         let currentTotal = document.getElementsByTagName("h1")[1].textContent.split(" ")[2];
         let total = Number(currentTotal) + price;
         document.getElementsByTagName("h1")[1].textContent = `Total Price: ${total.toFixed(2)}`;
      }
   }

   function filter(){
      let text = document.getElementById("filter").value.toLowerCase();
      let currentProducts = Array.from(listAvailable.children);
      
      currentProducts.forEach(element => {
         let name = element.getElementsByTagName("span")[0].textContent.toLowerCase();;
         if(name.indexOf(text) < 0){
            element.style.display = "none";
         }
      });
   }

   function buyProd(){
      document.getElementsByTagName("h1")[1].textContent = "Total Price: 0.00";
      myProductsList.innerHTML = "";
   }
}