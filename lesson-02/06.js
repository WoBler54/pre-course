let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};

let passportWithAddressCoppy = {}


for(let key in passportWithAddress){
    if(typeof passportWithAddress[key]== 'object'){
        passportWithAddressCoppy[key] = {};
        for(let newKey in passportWithAddress[key]){
            passportWithAddressCoppy[key][newKey] = passportWithAddress[key][newKey];
        }
    }else{
        
        passportWithAddressCoppy[key] = passportWithAddress[key];
    }
}


passportWithAddressCoppy.address.city = 'Bobryisk';
console.log(passportWithAddress.address.city);
console.log(passportWithAddressCoppy.address.city);


