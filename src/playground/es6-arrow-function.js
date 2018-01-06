var app = 'app';
console.log(app);

//challenge

const fullName = 'Navid Xeon'

const getFirstName = function(name){
    return name.split(' ')[0];
};
console.log('getFirstname', getFirstName(fullName));

const getFirstNameArrow = (name) => {
    return name.split(' ')[0];
}

const getFirstNameExp = (name) => name.split(' ')[0];

console.log('getFirstname', getFirstNameArrow(fullName));