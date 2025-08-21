'use strict';

const tree = document.querySelector('.tree')
const liList = document.querySelectorAll('.tree li')
liList.forEach(li => {
  const span = document.createElement('span')
  span.textContent = li.firstChild.textContent.trim()
  li.removeChild(li.firstChild)
  li.insertBefore(span, li.firstChild)
});


tree.addEventListener('click',(e) => {
  const span = e.target.closest('span');
    if (!span) return;
  const toHide = span.parentElement.querySelector('ul');

  if (toHide) {
    toHide.hidden = !toHide.hidden;
    span.classList.toggle('collapsed', toHide.hidden);
  }
})

