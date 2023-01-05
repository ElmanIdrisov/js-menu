const menuButton = document.querySelector('.mobile-menu__button');
const menuList = document.querySelector('.mobile-menu__list');

function showMenu() {
     const hasActive = menuButton.getAttribute('class').includes('active');
     
     if(hasActive) {
        menuButton.classList.remove('active');
        menuList.style.height = '0';
        return
    } 

     menuButton.classList.add('active');
     menuList.style.height = '200px'; 

    
}

menuButton.addEventListener('click', () => showMenu());