let rootNode = document.getElementById('root');
let counter = 0;
let a=10; //max number of actions
let b=1;
function newElement() {
  let li = document.createElement('li');
  let inputValue = document.getElementById('textForm').value;
  let text = document.createTextNode(inputValue);
  li.appendChild(text);
    if (inputValue === '') {
      document.getElementsByClassName('addBtn').disabled = true;
    } else {
    document.getElementById('list').appendChild(li);
    document.getElementById('textForm').value = '';
    let checkBox = document.createElement('span');
    let checkIcon = document.createElement('i');
    let checkTxt = document.createTextNode('check_box_outline_blank');
    checkBox.className = 'unchecked';
    checkIcon.className = 'material-icons';
    checkIcon.setAttribute('onclick', 'checkElement()');
    checkIcon.appendChild(checkTxt);
    checkBox.appendChild(checkIcon);
    li.insertBefore(checkBox, text);
    let span = document.createElement('span');
    let icon = document.createElement('i');
    let txt = document.createTextNode('delete');
    icon.className = 'material-icons';
    span.className = 'close';
    icon.setAttribute('onclick', 'deleteElements()');
    icon.appendChild(txt);
    span.appendChild(icon);
    li.appendChild(span);
    if (++counter > a-b) {
        document.querySelector('input').disabled = true;
        document.getElementsByClassName('addBtn').disabled = true;
        document.querySelector('input').className = 'fullList';
        showNotification();
    } else if (counter <= a) {
        document.querySelector('input').disabled = false;
      }
    }
}
function showNotification() {
  let fullList = document.getElementById('fullList');
  fullList.classList.toggle('show');
}

function deleteElements() {
let close = document.getElementsByClassName('close');
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = 'none'; 
  };
if (counter <= a) {
  document.querySelector('input').disabled = false;
}
}
--counter;
}
function checkElement() {
  let unchecked = document.getElementsByClassName('unchecked');
  for (let i = 0; i < unchecked.length; i++) {
    unchecked[i].onclick = function() {
      let unchecked = this;
      unchecked.style.display = 'none';
      let li = document.querySelectorAll('li');
      let text = li.text;
      let checkBox = document.createElement('span');
      let checkIcon = document.createElement('i');
      let checkTxt = document.createTextNode('check_box');
      checkBox.className = 'checked';
      checkIcon.className = 'material-icons';
      checkIcon.appendChild(checkTxt);
      checkBox.appendChild(checkIcon);
      li[i].insertBefore(checkBox, unchecked);
    };
  }
} 


