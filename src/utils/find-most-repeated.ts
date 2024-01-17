export function findMostRepeatedItem(arr: string[]) {
  let frequencyMap = {} as any;
  let mostRepeatedItem;
  let maxFrequency = 0;

  for (let item of arr) {
    frequencyMap[item] = (frequencyMap[item] || 0) + 1;
    if (frequencyMap[item] > maxFrequency) {
      mostRepeatedItem = item;
      maxFrequency = frequencyMap[item];
    }
  }
  return mostRepeatedItem;
}