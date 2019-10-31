
const adress = {
    street: 'rua 1',
    city: 'cidade 2',
    zipCode: '123'
}

function creatAdressF(street,city,zipCode) {
    return {
        street,
        city,
        zipCode
    }
}

function CreateAdressC(street,city,zipCode) {
    this.street = street,
    this.city = city,
    this.zipCode = zipCode
}

let adressC = new CreateAdressC('rua 1','city 1', '123');
let adressF = creatAdressF('rua 1','city 1', '123') ;

for (key in adressC)
    console.log(key, adressC[key]);
    console.log(key, adressF[key]);

function areEqual(adress1,adress2) {
    for (key in adress1)
        return adress1[key] === adress2[key];
}

function areSame(adress1,adress2) {
    return adress1 === adress2;
}

console.log(areEqual(adressC,adressF));
console.log(areSame(adressC,adressF));