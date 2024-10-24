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
    return ( "rsharaf" );
  }

  if (query.toLowerCase().includes("What is your name?")) {
    //TODO add your Andrew ID below
    //TODO update the corresponding test case in __tests__
    return ( "rsharaf-313" );
  }

  const arithmeticMatch = query.toLowerCase().match(/what is (\d+) plus (\d+)\?/);
  if (arithmeticMatch) {
    const num1 = parseInt(arithmeticMatch[1]);
    const num2 = parseInt(arithmeticMatch[2]);
    return (num1 + num2).toString();
  }

  // Check for comparison queries (e.g., "Which of the following numbers is the largest: 2, 15, 80?")
  const largestNumberMatch = query.toLowerCase().match(/which of the following numbers is the largest: (.*)\?/);
  if (largestNumberMatch) {
    const numbers = largestNumberMatch[1].split(',').map(num => parseInt(num.trim()));
    const largestNumber = Math.max(...numbers);
    return largestNumber.toString();
  }
  return "";
}
