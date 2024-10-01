export default function taskBlock(trueOrFalse) {
  const task = false;  // Use const for variables that won't be reassigned
  const task2 = true;

  if (trueOrFalse) {
    const task = true;   // Block-scoped variables using const
    const task2 = false;
  }

  return [task, task2];  // Return the outer task and task2 variables
}
