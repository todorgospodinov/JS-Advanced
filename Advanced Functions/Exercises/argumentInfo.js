function argumentInfo () {
    let map = new Map();
    
    for (let value of arguments) {
        let typeValue = typeof value;

        if (typeValue == 'object') {
            console.log(`${typeValue}: `);
        } else {
            console.log(`${typeValue}: ${value}`);
        }

        let counter = 1;
        if (!map.has(typeValue)) {
            map.set(typeValue, counter);
        } else {
            let oldValue = map.get(typeValue);
            map.set(typeValue, oldValue +1);
        }
    }
    let sortedArr = Array.from(map).sort((a, b) => {
        return b[1] - a[1];
    }).forEach(el => {
        console.log(`${el[0]} = ${el[1]}`);  
    });
}
// argumentInfo('cat', 42, function () { console.log('Hello world!');} );
argumentInfo(42, 'cat', 15, 'kitten', 'tomcat');