function checkAnagram() {
    let string1 = document.getElementById('string1').value;
    let string2 = document.getElementById('string2').value;

    string1 = string1.replace(/[^\w]/g, '').toLowerCase();
    string2 = string2.replace(/[^\w]/g, '').toLowerCase();

    let sortedString1 = string1.split('').sort().join('');
    let sortedString2 = string2.split('').sort().join('');

    let result = sortedString1 === sortedString2;
    document.getElementById('result').textContent = result ? 'True: Anagrams' : 'False: Not Anagrams';
}