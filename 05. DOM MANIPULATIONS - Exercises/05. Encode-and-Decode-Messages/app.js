function encodeAndDecodeMessages() {
    
    let allButtons = Array.from(document.getElementsByTagName("button"));
    let buttonEncode = allButtons[0];
    let buttonDecode = allButtons[1];

    buttonEncode.addEventListener("click", encode);
    buttonDecode.addEventListener("click", decode);

    function encode(event){
        let text = document.getElementsByTagName("textarea")[0].value;
        let charCodes = [];

        for (let index = 0; index < text.length; index++) {
            charCodes.push(text.charCodeAt(index) + 1);            
        }

        let decodeText = String.fromCharCode(...charCodes);
        document.getElementsByTagName("textarea")[0].value = "";
        document.getElementsByTagName("textarea")[1].value = decodeText;

    }

    function decode(event){
        let text = document.getElementsByTagName("textarea")[1].value;
        let charCodes = [];

        for (let index = 0; index < text.length; index++) {
            charCodes.push(text.charCodeAt(index) - 1);            
        }

        let encodeText = String.fromCharCode(...charCodes);
        document.getElementsByTagName("textarea")[1].value = encodeText;
    }
}