function constructionCrew (object) {
    if (object.dizziness) {
        const ML = 0.1;
        let amountToAdd = parseFloat(object.weight * ML * object.experience);
        object.levelOfHydrated += amountToAdd;
        object.dizziness = false;
    }
    
    return object;
}
// constructionCrew({ 
//     weight: 80,
//     experience: 1,
//     levelOfHydrated: 0,
//     dizziness: true 
// });

// constructionCrew({ weight: 95,
//     experience: 3,
//     levelOfHydrated: 0,
//     dizziness: false })
constructionCrew ({
    weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true 
});