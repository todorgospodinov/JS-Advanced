function myFunc (array, command) {
    if (command === 'asc') {
        return array.sort((a,b) =>{
            return a - b;
        }); 
     } 
   
    if (command === 'desc') {
        return array.sort((a,b) => {
        return b - a;
        });
    }
}
myFunc([14, 7, 17, 6, 8], 'asc');
myFunc([14, 7, 17, 6, 8], 'desc');