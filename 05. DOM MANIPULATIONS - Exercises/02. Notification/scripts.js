function notify(message) {
   let output = document.getElementById("notification");
   output.textContent = message;

    output.style.display = "block";

    setTimeout(removeThing, 2000)

    function removeThing() {
        output.style.display = 'none';  
    }
}