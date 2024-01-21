const passport = {
    name: "Petr",
    surname: "Petrov",
};

let passportCoppy = {};

for(let key in passport){
    passportCoppy[key] = passport[key];
}

passportCoppy.name = "Ivan";

console.log(passport.name);
console.log(passportCoppy.name);