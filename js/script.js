
const listedPeople = document.getElementsByClassName('student-item')
const items = 10;
const page = document.querySelector('.page')
const li = document.querySelectorAll('li')
const listParent = document.querySelector('.student-list')
const names = document.querySelectorAll('.student-details')



const show = (listedPeople,page) => {
   const begin = page * items - items;
   const end = page * items;

   for (let i = 0; i < listedPeople.length; i++) {
      if (i >= begin && i <end) {
         listedPeople[i].style.display = 'block'
      } else {
         listedPeople[i].style.display = 'none'
      }
   }
}

show(listedPeople,1)



const pageDiv = document.querySelector(".page");

const appengPage = li => {
   if (document.querySelector(".pagination") !== null) {
      const removeDiv = document.querySelector(".pagination");
      pageDiv.removeChild(removeDiv);
}

const pageLength = Math.ceil(list.length / pageItems);
  const paginationDiv = document.createElement("div");
  const ul = document.createElement("ul");
  paginationDiv.className = "pagination";
  pageDiv.appendChild(paginationDiv);
  paginationDiv.appendChild(ul);

  for (let i = 0; i < pageLength; i++) {
    if (i != pageLength) {
      const li = document.createElement("li");
      ul.appendChild(li);
      const a = document.createElement("a");
      a.href = "#";
      a.textContent = i + 1;
      if (i === 0) {
        a.setAttribute("class", "active");
      }
      li.appendChild(a);
    }
  }
}