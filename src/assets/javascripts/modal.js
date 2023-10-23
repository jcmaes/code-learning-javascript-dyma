const body = document.querySelector("body");
let modalBackdrop;
let modal;

const createModalBackdrop = () => {
    modalBackdrop = document.createElement('div');
    modalBackdrop.classList.add('modal__backdrop');
    modalBackdrop.addEventListener('click', () => {
        modalBackdrop.remove();
    });
};

const createModal = question => {
    modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
        <p>${question}</p>
    `;
    const cancel = document.createElement('button');
    cancel.innerText = 'Cancel';
    cancel.classList.add('btn', 'btn-secondary');
    const confirm = document.createElement('button');
    confirm.innerText = 'Confirm';
    confirm.classList.add('btn', 'btn-primary');
    modal.append(cancel, confirm);
};

export function openModal(question) {
    createModalBackdrop();
    createModal(question);

    modalBackdrop.append(modal);
    body.append(modalBackdrop);
}