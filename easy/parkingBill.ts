// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(E: string, L: string): number {
  // Implement your solution here
  // Parse the entry and exit times
  const [entryHour, entryMinute] = E.split(":").map(Number);
  const [exitHour, exitMinute] = L.split(":").map(Number);

  // Convert times to total minutes
  const entryTime = entryHour * 60 + entryMinute;
  const exitTime = exitHour * 60 + exitMinute;

  // Calculate the total parked time in minutes
  const totalMinutes = exitTime - entryTime;

  // Compute the total cost
  const entranceFee = 2;
  const firstHourFee = 3;
  const additionalHourFee = 4;

  // Minimum cost is at least the entrance fee and the first hour
  let totalCost = entranceFee + firstHourFee;

  // Calculate the additional full or partial hours beyond the first hour
  if (totalMinutes > 60) {
    const additionalHours = Math.ceil((totalMinutes - 60) / 60);
    totalCost += additionalHours * additionalHourFee;
  }

  return totalCost;
}
