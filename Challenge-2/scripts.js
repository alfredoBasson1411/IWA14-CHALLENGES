// Declare the functions outside of any object
function add(a, b) {
    return a + b; // Function to add two numbers
  }
  
  function multiply(a, b) {
    return a * b; // Function to multiply two numbers
  }
  
  function internal() {
    // Calculate the sum of a and b
    const added = this.add(this.internal.a, this.internal.b);
    // Multiply the sum by c
    return this.multiply(added, this.internal.c);
  }
  
  // Not allowed to change below this
  const example1 = {
    internal: {
      a: 2, // First number for example1
      b: 4, // Second number for example1
      c: 8, // Third number for example1
    },
    add, // Reference to the add function
    multiply, // Reference to the multiply function
    calculate: internal, // Reference to the internal function
  };
  
  const example2 = {
    internal: {
      a: 2, // First number for example2
      b: 2, // Second number for example2
      c: 3, // Third number for example2
    },
    add, // Reference to the add function
    multiply, // Reference to the multiply function
    calculate: internal, // Reference to the internal function
  };
  
  // Output the result of calling the calculate method for each example
  console.log(example1.calculate()); // Example 1 result
  console.log(example2.calculate()); // Example 2 result
  