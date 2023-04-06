

const modal = document.querySelector('.modal');
const btnClose = document.querySelector('.modal-header__close');
const enMassaFittor = document.querySelectorAll("[data-modal]");

function toggleModal() {
    modal.classList.toggle('modal--show');
}

function clickOutside(e) {
    if (e.target === modal) {
        toggleModal();
    }
}

enMassaFittor.forEach(fitta => {
    fitta.addEventListener('click', toggleModal);
});

btnClose.addEventListener('click', toggleModal);
window.addEventListener('click', clickOutside); 