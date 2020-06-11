function personalBMI(name, age, weight,height){
    let obj = {
        name: name,
        personalInfo: {age: age, weight: weight, height: height},
        BMI: Math.round(weight / Math.pow(height/100, 2)),
    };

    function calculateStatus(){
        const bmi = this.BMI;
        let result = "";

        switch(true){
            case bmi < 18.5 : result = "underweight"; break;
            case bmi < 25 : result = "normal"; break;
            case bmi < 30 : result = "overweight"; break;
            case bmi >= 30 : result = "obese"; break;
        }

        return result;
    }

    obj.status = calculateStatus.apply(obj);

    if(obj.status === "obese"){
        obj.recommendation = "admission required";
    }

    return obj;
}

//personalBMI("Peter", 29, 75, 182);
personalBMI("Honey Boo Boo", 9, 57, 137);