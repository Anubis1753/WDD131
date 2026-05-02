let selectElem = document.querySelector('#theme-select');
let pageContent = document.querySelector('body');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current === 'Light') {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    } else if (current === 'Dark') {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white"
    } else {
        document.body.style.backgroundColor = "White";
    }
}
          