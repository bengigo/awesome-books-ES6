export default function displayForm() {
  // const list = document.querySelector('#list');
  const addNew = document.querySelector('#add-new');
  // const contact = document.querySelector('#contact');
  const listPage = document.querySelector('#display-section');
  const formPage = document.querySelector('#add-page');
  const contactPage = document.querySelector('#contact-page');
  addNew.addEventListener('click', () => {
    formPage.style.display = 'flex';
    listPage.style.display = 'none';
    contactPage.style.display = 'none';
  });
}