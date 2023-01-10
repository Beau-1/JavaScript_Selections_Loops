console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for (let h = 0; h < 101; h++) {
    if (h % 2 == 0) {
        continue;
    } else { 
        console.log(h);
    }
}
//Additionaly 
for (let g =1; g <= 100; g += 2) {
  console.log(g);   
}
// This example works, because 
//when two is added to g, and 
//g starts on an odd number, 
//g will remain odd. 
//Also 
for (let f = 1; f < 100; f++) {
    if (f % 2 != 0){
        console.log(f);
    }
}
//
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for (let i = 0; i < 100; i++)   {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz")
    } else if (i % 3 == 0) {
        console.log("Fizz")
    } else if (i % 5 == 0) {
        console.log("Buzz")
    } else {
        console.log(i)
    } {
        
    } {
        
    }
}
//Exercise 3 
console.log("EXERCISE 3:\n==========\n");

let j = 1;


while (j <= 100) {
  if (j % 2 !== 0) {
    console.log(j);
  }
  j++;
}

let k = 1;

do {
  if (k % 2 !== 0) {
    console.log(k);
  }
  k++;
} while (k <= 100);



let l = 0;

while (l < 100) {
  if (l % 3 == 0 && l % 5 == 0) {
    console.log("FizzBuzz");
  } else if (l % 3 == 0) {
    console.log("Fizz");
  } else if (l % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(l);
  }

  l++;
}



let m = 0;

do {
  if (m % 3 == 0 && m % 5 == 0) {
    console.log("FizzBuzz");
  } else if (m % 3 == 0) {
    console.log("Fizz");
  } else if (m % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(m);
  }

  m++;
} while (m < 100);

//console.log(`Exercise 4`)
console.log("EXERCISE 4:\n==========\n");
//In this exercise, you will count from iterate from 1 to n. 
//If you iterate over a given value, then break out the loop and print "Found value!". 
//If you do not find the value in the given range, print "Did not find value".

let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500
console.log(`Value`)
console.log(value)
console.log(`n`)
console.log(n)
for (let o = 1; o <= n; o++) {
    if (o === value) {
      console.log("Found value!");
      break;
    }
  
  
  if (o > n) {
    console.log("Did not find value");
  }

}
  let p = 1;

while (p <= n) {
  if (p === value) {
    console.log("Found value!");
    break;
  }
  p++;
}

if (p > n) {
  console.log("Did not find value");
}


//Exercise 5
console.log("EXERCISE 5:\n==========\n");
//Start with the following code:


let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let end = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

//Re-implement exercise 2, but use `start` as the initial value for
// `i`, `n` as the range limit in `i <= n`, and `fizzDivisor` and `buzzDivisor` as 
//the dependent values for determining "FIZZ" and "BUZZ" print messages.




for (let t = start; t <= end; t++) {
    if (t % fizzDivisor === 0 && t % buzzDivisor === 0) {
      console.log("FIZZBUZZ");
    } else if (t % fizzDivisor === 0) {
      console.log("FIZZ");
    } else if (t % buzzDivisor === 0) {
      console.log("BUZZ");
    } else {
      console.log(t);
    }
  }



