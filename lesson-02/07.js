let passportMarried = {
    name: "Petr",
    surname: "Petrov",
       address: {
        country: "USA",
        city: "Bobryisk"
    }
};


let passportMarried2 = {};

for(let key in passportMarried){
    if(passportMarried[key] == 'object'){
        for(let newKey in passportMarried[key]){
            passportMarried2[key][newKey] = passportMarried[key][newKey];
        }
    }else {
        passportMarried2[key] = passportMarried[key]
    }
}

passportMarried2.married = true;
console.log(passportMarried);
console.log(passportMarried2);