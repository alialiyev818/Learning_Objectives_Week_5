function sortString() {
    let inputString = document.getElementById('inputString').value;
    let sortedString = inputString.split('').sort().join('');
    document.getElementById('sortedString').textContent = sortedString;
}