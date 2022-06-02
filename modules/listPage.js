export default function displayList() {
  const list = document.querySelector('#list');
  // const addNew = document.querySelector('#add-new');
  // const contact = document.querySelector('#contact');
  const listPage = document.querySelector('#display-section');
  const formPage = document.querySelector('#add-page');
  const contactPage = document.querySelector('#contact-page');

  list.addEventListener('click', () => {
    formPage.style.display = 'none';
    // formPage.classList.toggle('hide');
    listPage.style.display = 'flex';
    // listPage.classList.toggle('hide');
    contactPage.style.display = 'none';
    // contactPage.classList.toggle('hide');
  });
}