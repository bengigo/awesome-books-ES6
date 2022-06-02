export default function displayList() {
  const list = document.querySelector('#list');
  const addNew = document.querySelector('#add-new');
  const contact = document.querySelector('#contact');
  const listPage = document.querySelector('#display-section');
  const formPage = document.querySelector('add-page');
  const contactPage = document.querySelector('contact-page');

  addNew.addEventListener('click', () => {
    formPage.style.display = 'none';
    listPage.style.display = 'flex';
    contactPage.style.display = 'none';
  });
}