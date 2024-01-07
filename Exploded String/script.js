function explodeString() {
    let inputString = document.getElementById('inputString').value;
    let explodedString = '';
    for (let i = 0; i < inputString.length; i++) {
        explodedString += inputString.substring(0, i + 1);
    }
    document.getElementById('explodedString').textContent = explodedString;
}
