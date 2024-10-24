export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("andrew id")) {
    // TODO add your Andrew ID below
    return "rsharaf";
  }

  // Check for the "What is your name?" query
  if (query.toLowerCase() === "what is your name?") {
    return "My name is Retaj.";
  }

  // Check for arithmetic queries (e.g., "What is 60 plus 73?")
  const additionMatch = query.toLowerCase().match(/What is (\d+)\s+plus\s+(\d+)\?/);
  if (additionMatch) {
    const num1 = parseInt(additionMatch[1], 10);
    const num2 = parseInt(additionMatch[2], 10);
    
    if (!isNaN(num1) && !isNaN(num2)) {
      return (num1 + num2).toString();
    }
    
    return "Invalid input.";
  }

  // Check for multiplication queries (e.g., "What is 22 multiplied by 5?")
  const multiplicationMatch = query.toLowerCase().match(/What is (\d+)\s+multiplied by\s+(\d+)\?/);
  if (multiplicationMatch) {
    const num1 = parseInt(multiplicationMatch[1], 10);
    const num2 = parseInt(multiplicationMatch[2], 10);
    
    if (!isNaN(num1) && !isNaN(num2)) {
      return (num1 * num2).toString();
    }
    
    return "Invalid input.";
  }

  // Check for comparison queries (e.g., "Which of the following numbers is the largest: 37, 75, 46?")
  const largestNumberMatch = query.toLowerCase().match(/Which of the following numbers is the largest:\s*(.*)\?/);
  if (largestNumberMatch) {
    const numbers = largestNumberMatch[1].split(',').map(num => parseInt(num.trim(), 10));
    
    if (numbers.every(num => !isNaN(num))) {
      const largestNumber = Math.max(...numbers);
      return largestNumber.toString();
    }
    
    return "Invalid input.";
  }

  // Check for prime numbers (e.g., "Which of the following numbers are primes: 46, 14, 37, 11, 92?")
  const primesMatch = query.toLowerCase().match(/Which of the following numbers are primes:\s*(.*)\?/);
  if (primesMatch) {
    const numbers = primesMatch[1].split(',').map(num => parseInt(num.trim(), 10));
    
    if (numbers.every(num => !isNaN(num))) {
      const primes = numbers.filter(isPrime);
      return primes.join(', ');
    }
    
    return "Invalid input.";
  }

  // Check for numbers that are both a square and a cube (e.g., "Which of the following numbers is both a square and a cube: 1764, 2448, 3609?")
  const squareCubeMatch = query.toLowerCase().match(/Which of the following numbers is both a square and a cube:\s*(.*)\?/);
  if (squareCubeMatch) {
    const numbers = squareCubeMatch[1].split(',').map(num => parseInt(num.trim(), 10));
    
    if (numbers.every(num => !isNaN(num))) {
      const squaresAndCubes = numbers.filter(isSquareAndCube);
      return squaresAndCubes.join(', ');
    }
    
    return "Invalid input.";
  }

  return "";
}

// Function to check if a number is prime
function isPrime(num: number): boolean {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  
  return true;
}

// Function to check if a number is both a perfect square and a perfect cube
function isSquareAndCube(num: number): boolean {
  const sqrt = Math.sqrt(num);
  const cbrt = Math.cbrt(num);
  return Number.isInteger(sqrt) && Number.isInteger(cbrt);
}
