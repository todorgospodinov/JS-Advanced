function bodyMassIndex (name, age, weight, height) {
    let obj = {
        name: name,
        personalInfo : {
                age, 
                weight,
                height,
        },
        BMI: Math.round(weight / Math.pow(height /100 , 2)),
        status: ''
    };
    
    if (obj.BMI < 18.5) {
        obj.status = 'underweight';
    } else if (obj.BMI < 25) {
        obj.status = 'normal';
    }  else if (obj.BMI < 30) {
        obj.status = 'overweight';
    }  else if (obj.BMI >= 30) {
        obj.status = 'obese';
        obj.recommendation = 'admission required';
    }
    return obj;
}
console.log(bodyMassIndex("Simona", 29, 71, 164));