function attachEventsListeners() {
   let button = document.getElementById("convert");
   button.addEventListener("click", calculate);

   function calculate(){
       let value = document.getElementById("inputDistance").value;
       let inputOptions = document.getElementById("inputUnits");
       let from = inputOptions.options[inputOptions.selectedIndex].value;
       let outputOptions = document.getElementById("outputUnits");
       let to = outputOptions.options[outputOptions.selectedIndex].value;

       let inputToMeter = 0;
       let result = 0;
        
        switch (from){
        case 'km':
            inputToMeter = value * 1000;
            break;
        case 'm':
            inputToMeter = value;
            break;
        case 'cm':
            inputToMeter = value * 0.01;
            break;
        case 'mm':
            inputToMeter = value * 0.001;
            break;
        case 'mi':
            inputToMeter = value * 1609.34;
            break;
        case 'yrd':
            inputToMeter = value * 0.9144;
            break;
        case 'ft':
            inputToMeter = value * 0.3048;
            break;
        case 'in':
            inputToMeter = value * 0.0254;
            break;
        }

        switch (to){
        case 'km':
            result =  inputToMeter / 1000;
            break;
        case 'm':
            result =  inputToMeter;
            break;
        case 'cm':
            result =  inputToMeter / 0.01;
            break;
        case 'mm':
            result =  inputToMeter / 0.001;
            break;
        case 'mi':
            result =  inputToMeter / 1609.34;
            break;
        case 'yrd':
            result =  inputToMeter / 0.9144;
            break;
        case 'ft':
            result =  inputToMeter / 0.3048;
            break;
        case 'in':
            result =  inputToMeter / 0.0254;
            break;
        }
        document.getElementById("outputDistance").value = result;
   }
}