export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("andrew id")) {
    //TODO add your Andrew ID below
    //TODO update the corresponding test case in __tests__
    return "rsharaf";
  }

  // Check for the "What is your name?" query
  if (query.toLowerCase() === "what is your name?") {
    return "My name is Retaj.";
  }

  // Check for arithmetic queries (e.g., "What is 60 plus 73?")
  const arithmeticMatch = query.toLowerCase().match(/what is (\d+)\s+plus\s+(\d+)\?/);
  if (arithmeticMatch) {
    const num1 = parseInt(arithmeticMatch[1], 10);
    const num2 = parseInt(arithmeticMatch[2], 10);
    
    // Ensure the numbers are valid integers
    if (!isNaN(num1) && !isNaN(num2)) {
      return (num1 + num2).toString();
    }
    
    return "Invalid input.";
  }

  // Check for comparison queries (e.g., "Which of the following numbers is the largest: 2, 15, 80?")
  const largestNumberMatch = query.toLowerCase().match(/which of the following numbers is the largest:\s*(.*)\?/);
  if (largestNumberMatch) {
    // Extract numbers from the query, remove any extra spaces, and convert to integers
    const numbers = largestNumberMatch[1].split(',').map(num => parseInt(num.trim(), 10));
    
    // Ensure all values are valid numbers
    if (numbers.every(num => !isNaN(num))) {
      const largestNumber = Math.max(...numbers);
      return largestNumber.toString();
    }
    
    return "Invalid input.";
  }

  return "";
}
