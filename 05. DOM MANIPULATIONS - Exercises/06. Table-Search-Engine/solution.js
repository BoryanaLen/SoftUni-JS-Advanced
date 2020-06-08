function solve() {
  let searchBtn = document.getElementById("searchBtn");
  let allTableBodyRows = Array.from(document.getElementsByTagName("tbody")[0].children);
  
  searchBtn.addEventListener("click", find);

  function find(event){
   let searchText = document.getElementById("searchField").value;

   allTableBodyRows.forEach(element => {
      element.classList.remove("select");
      let array = Array.from(element.children).map(x => x.textContent.toLocaleLowerCase());
      let regex = RegExp(searchText.toLowerCase(), 'g');

      if(array.some(x => regex.test(x))){
         element.classList.add("select");
      }

      document.getElementById("searchField").value = "";
   });
  }
}