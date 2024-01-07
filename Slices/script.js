function sliceWord() {
    let word = document.getElementById('wordInput').value;
    let output = document.getElementById('output');
    output.innerHTML = ''; 

    for (let i = 0; i <= word.length; i++) {
        let slicedWord = word.slice(0, i) + "_" + word.slice(i);
        let paragraph = document.createElement('p');
        paragraph.textContent = slicedWord.replace('_', ' '); 
        output.appendChild(paragraph);
    }
}
