(function chai(){       
    // Nmed IFFE                                                // 
    console.log( `DB Connected`)
})();

(() => {
    // UNnamed IIFE
    console.log(`IIFE Function two`)
})();

((name)=> {
    //  Prameter IIFE
    console.log(`Hello ${name}, welcome in JS`)
})("komalganeshrajole")

// we have to terminbate IIFE after one time user otherwise it will throw an error