export default function displayContact() {
  // const list = document.querySelector('#list');
  // const addNew = document.querySelector('#add-new');
  const contact = document.querySelector('#contact');
  const listPage = document.querySelector('#display-section');
  const formPage = document.querySelector('#add-page');
  const contactPage = document.querySelector('#contact-page');

  contact.addEventListener('click', () => {
    formPage.style.display = 'none';
    listPage.style.display = 'none';
    contactPage.style.display = 'flex';
  });
}