////////////////////////////////////////////
// Hoisting

// function
// calculateAge(1965);
//
// function calculateAge(year) {
//     console.log(2016 - year);
// }


//
// var retirement = function (year) {
//     console.log(65 - (2016 - year));
// }
//
// retirement(1990);
//

// variables

// console.log(age);
// var age = 23;
//
// function foo() {
//    var age = 65;
//    console.log(age);
// }
//
// foo();
// console.log(age);





///////////////////////////////////////////////////////
/// Scoping


// var a = 'Hello!';
// first();
//
//
// function first() {
//   var b = 'Hi!';
//   second();
//
//   function second() {
//     var c = 'Hey!';
//     console.log(a + b +c);
//   }
// }




// Example to show the difference between execution stack and scope chain


// var a = 'Hello!';
// first();
//  function first() {
//    var b = 'Hi!';
//    second();
//    function second() {
//      var c = 'Hey!';
//      third();
//    }
//  }
//
//
//  function third() {
//    var d = 'John';
//    // console.log(c);
//    console.log(a+d);
//  }






////////////////////////////////////////
// The this keyword


// calculateAge(1985);
//
// function calculateAge(year) {
//     console.log(2016 - year);
//     console.log(this);
// }





var john = {
  name: 'John',
  yearofBirth:1990,
  calculateAge: function() {
    console.log(this);
    console.log(2016 - this.yearofBirth);
    /*
    function innerFunction() {
      console.log(this);
    }
    innerFunction();
    */
  }
}


john.calculateAge();




var mike = {
  name: 'Mike',
  yearofBirth: 1984
};


mike.calculateAge = john.calculateAge;
mike.calculateAge();
