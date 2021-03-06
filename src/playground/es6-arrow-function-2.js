console.log('es-arrow-2 running');
// arguments object - no longer bound with arrow functions

const add = (a, b) => {
    // console.log(arguments);
    return a + b;
};
console.log(add(55, 1, 1001));

// this keyword - no longer bound

const user = {
    name: 'Andrew',
    cities: ['Philadelphia', 'New York', 'Dublin'],
    //arrow fuction doesn't work this goes to global scope
    // printPlacesLived: function() {

    //     //or
    //     // this.cities.forEach((city) => {
    //     //     console.log(this.name + 'has lived in ' + city)
    //     // });

    //     return this.cities.map((city) => this.name + ' has lived in ' + city);
    // }

    printPlacesLived() {
        // const that = this;
        // this.cities.forEach(function (city) {
        //     console.log(that.name + 'has lived in ' + city)
        // });

        //or
        // this.cities.forEach((city) => {
        //     console.log(this.name + 'has lived in ' + city)
        // });

        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
    
};
console.log(user.printPlacesLived());

// Challenge area

// const multiplier = {
//     numbers: [10, 20, 30],
//     multiplyBy: 3,
//     multiply() {
//         return this.numbers.map((number) => number * this.multiplyBy);
//     }
// };

// console.log(multiplier.multiply());
//Challenge area!

const multiplier = {
    numbers: [1,2,3],
    multiply(num) {
        return this.numbers.map((mnum) => mnum * num);
    }
};
console.log(multiplier.multiply(3));