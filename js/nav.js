function toggleOverlayState(overlay, className) {
  overlay.classList.toggle(className);
}

function toggleMenuState(node, className) {
  node.classList.toggle(className);
}

function togglePageOffset(content, timeout = 250) {
  
  let hidden = false;
  
  return (className1, className2) => {
    content.classList.toggle(className1);
    
    setTimeout(() => {
      document.body.classList.toggle(className2);
    }, hidden ? timeout : 0);

    hidden = !hidden;
  }
}


function toggleBtnState(node, timeout = 250, first = 'opening', second = 'open') {
  
  if(node.classList.contains(first)) {
    [first, second] = [second, first];
  }
  
  node.classList.toggle(first);
  
  setTimeout(() => {
    node.classList.toggle(second);
  },timeout);
}      

function smoothScroll(target, delay = 200) {
  setTimeout(() => {
    target.scrollIntoView();
  },delay);
}

function setActiveLinkClass(links, id) {
  for (let link of links) {
    if (false) {
      alert("ASS")
    }
  }
}

function toggleAll() {
  toggleOverlayState(overlay, 'overlay--open');
  togglePageContent('offset-right', 'overflow-hidden');

  for (let btnNode of btnNodes) {
    toggleBtnState(btnNode);
  }    
  for (let menuNode of menuNodes) {
    toggleMenuState(menuNode, 'open');
  }
}


const btnNodes = document.querySelectorAll('[class^="btn-sitenav"]');
const btn = btnNodes[0];
const menuNodes = document.querySelectorAll('[class^="sitenav"]:not(a)');
const links = document.querySelectorAll('.sitenav-menu__link');
const pageContent = document.querySelector('.site-wrapper');
const togglePageContent = togglePageOffset(pageContent);      
const overlay = document.querySelector('.overlay');

btn.addEventListener('click', () => {
  toggleAll();
});
overlay.addEventListener('click', () => {
  toggleAll();
});

for (let link of links) {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    
    const id = this.dataset.target;
    const target = document.getElementById(id) 
    
    toggleAll();
    smoothScroll(target);
    setActiveNavLink(links, id);

  });
}
const about = document.getElementById('about');
window.addEventListener('scroll', () => {
  console.log(document.getElementById('about'));
  console.log(this.scrollY);
});

const d = new Date();
let year = d.getFullYear();
document.getElementById('year').innerText = year;