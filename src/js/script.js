const openSidebar = document.querySelector('.open-sidebar');
const closeSidebar = document.querySelector('.close-sidebar');

const header = document.querySelector('header');

openSidebar.addEventListener('click', () => {
  header.classList.add('show');
  openSidebar.style.display = 'none';
});

closeSidebar.addEventListener('click', () => {
  header.classList.remove('show');
  openSidebar.style.display = 'block';
});
