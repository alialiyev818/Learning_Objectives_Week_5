function analyzeArray() {
    const input = document.getElementById("arrayInput").value;
    const array = input.split(',').map(num => parseInt(num.trim(), 10));
    
    const sum = array.reduce((acc, val) => acc + val, 0);
    const average = sum / array.length;
    const min = Math.min(...array);
    const max = Math.max(...array);

    const frequency = array.reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
    }, {});

    let mostRepeated = array[0];
    let leastRepeated = array[0];

    for (let key in frequency) {
        if (frequency[key] > frequency[mostRepeated]) {
            mostRepeated = key;
        }
        if (frequency[key] < frequency[leastRepeated]) {
            leastRepeated = key;
        }
    }

    document.getElementById("output").innerHTML = `
        <p>Sum: ${sum}</p>
        <p>Average: ${average.toFixed(2)}</p>
        <p>Min: ${min}</p>
        <p>Max: ${max}</p>
        <p>Most Repeated: ${mostRepeated}</p>
        <p>Least Repeated: ${leastRepeated}</p>
    `;
}

document.getElementById("arrayInput").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        analyzeArray();
    }
});
