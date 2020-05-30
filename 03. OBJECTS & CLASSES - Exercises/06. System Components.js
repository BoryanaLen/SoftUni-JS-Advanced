function systemComponents(array){
    let systems = [];
    array.forEach(element => {
        let details = element.split(" | ");
        let system = details[0];
        let component = details[1];
        let subcomponent = details[2];

        if(systems.some(s => s.system === system)){
            let systemObj = systems.find(s => s.system === system);

            if(systemObj.components.some(c => c.name === component)){
                let obj = systemObj.components.find(c => c.name === component);
                obj.subcomponents.push(subcomponent);
            }
            else{
                let objComponent = {
                    name: component,
                    subcomponents: [subcomponent],
                };
                systemObj.components.push(objComponent);
            }
        }
        else{
            let objComponent = {
                name: component,
                subcomponents: [subcomponent],
            };

            let obj = {
                system: system,
                components: [objComponent],
            }

            systems.push(obj);
        }
    });

    systems.sort((ob1,ob2) => {
        if (ob1.components.length < ob2.components.length) {
            return 1;
        } 
        else if (ob1.components.length > ob2.components.length) { 
            return -1;
        }
    
        // Else go to the 2nd item
        if (ob1.system < ob2.system) { 
            return -1;
        } 
        else if (ob1.system > ob2.system) {
            return 1
        }
    });

   systems.forEach(element => {
       console.log(element.system);

       element.components.sort((ob1,ob2) => {
            if (ob1.subcomponents.length < ob2.subcomponents.length) {
                return 1;
            } 
            else if (ob1.subcomponents.length > ob2.subcomponents.length) { 
                return -1;
            }
        });

       element.components.forEach(elem => {
           console.log(`|||${elem.name}`);

           elem.subcomponents.forEach(element => {
            console.log(`||||||${element}`);
           });
       });
   });
}

systemComponents(['SULS | Main Site | Home Page',
'SULS | Main Site | Login Page',
'SULS | Main Site | Register Page',
'SULS | Judge Site | Login Page',
'SULS | Judge Site | Submittion Page',
'Lambda | CoreA | A23',
'SULS | Digital Site | Login Page',
'Lambda | CoreB | B24',
'Lambda | CoreA | A24',
'Lambda | CoreA | A25',
'Lambda | CoreC | C4',
'Indice | Session | Default Storage',
'Indice | Session | Default Security']
);