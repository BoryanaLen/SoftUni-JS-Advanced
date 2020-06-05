function deleteByEmail() {
    let email = document.getElementsByTagName("input")[0].value;
    let allTableRows = Array.from(document.getElementById("customers").rows);
    let result = "Not found.";

    allTableRows.forEach(element => {       
        if(element.children[1].textContent == email){
            element.remove();
            result = "Deleted."
        }
    });

    document.getElementById("result").textContent = result;
}