const pictures = document.querySelector('#hotsprings')
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

pictures.addEventListener('click', openModal);

function openModal(e) {
    console.log(e.target.src)
    console.log(e.target.src.replace('sm', 'lg'));
    modalImage.src = e.target.src.replace('sm', 'lg');
    modal.showModal();
}

closeButton.addEventListener('click', () => {
    modal.close();
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});

const menuBtn = document.querySelector("#menu");

menuBtn.addEventListener("click", handleMenuBtnClick);

function handleMenuBtnClick() {
    const navigation = document.querySelector(".navigation");
    navigation.classList.toggle("show"); 
}