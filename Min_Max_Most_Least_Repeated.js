function analyzeArray(arr) {
    if (!arr.length) {
        console.log("Array is empty.");
        return;
    }

    let sum = arr.reduce((a, b) => a + b, 0);
    let avg = sum / arr.length;
    let min = Math.min(...arr);
    let max = Math.max(...arr);

    let frequency = {};
    arr.forEach(num => {
        if (!frequency[num]) frequency[num] = 0;
        frequency[num]++;
    });

    let mostRepeated = arr[0], leastRepeated = arr[0];
    let maxCount = 1, minCount = frequency[arr[0]];

    for (let num in frequency) {
        if (frequency[num] > maxCount) {
            maxCount = frequency[num];
            mostRepeated = num;
        }
        if (frequency[num] < minCount) {
            minCount = frequency[num];
            leastRepeated = num;
        }
    }

    console.log(`Sum: ${sum}`);
    console.log(`Average: ${avg}`);
    console.log(`Min: ${min}`);
    console.log(`Max: ${max}`);
    console.log(`Most Repeated Element: ${mostRepeated} (repeated ${maxCount} times)`);
    console.log(`Least Repeated Element: ${leastRepeated} (repeated ${minCount} times)`);
}

//For example:
analyzeArray([1, 2, 3, 4, 5, 2, 3, 3, 4]);