// not much change here.  i've removed your original search bar and tidied up your new one a little.  

//Here I declare global constiables to store the DOM elements
const listedStudents = document.getElementsByClassName("student-item");
//This is constiable stores how many students I want to show on each page
const pageItems = 10;

//I declare search form constiables and constants.

const page = document.querySelector(".page");
const list = document.querySelectorAll("li");
const listedStudentsParent = document.querySelector(".student-list");
const namesOfStudents = document.querySelectorAll(".student-details > h3");


// make sure to switch out your const declarations for let or const.  
const form = document.querySelector("#search-form");
const searchbox = document.querySelector(".searchbox");

// Allows you to submit when you press Enter
form.addEventListener("submit", function(e) {
  e.preventDefault();
  
    
  });


// Adds the placeholder when the searchbox is in focus
searchbox.addEventListener("focus", function(e) {
  searchbox.setAttribute("placeholder", "Search...");
});

// Removes Text and the placeholder when the search box is out of focus
searchbox.addEventListener("focusout", function(e) {
  searchbox.value = null;
  searchbox.removeAttribute("placeholder");
});

const divHeader = document.querySelector(".page-header");
divHeader.appendChild(searchbox);
divHeader.appendChild(form);


const showPage = (listedStudents, page) => {
  const start = page * pageItems - pageItems;
  let end = page * pageItems;

  for (let i = 0; i < listedStudents.length; i++) {
    if (i >= start && i < end) {
      listedStudents[i].style.display = "block";
    } else {
      listedStudents[i].style.display = "none";
    }
  }
};

//Call on the showPage Function with the necessary parameters
showPage(listedStudents, 1);

//The appendPages function is to generate, append, and add functionality to the pagination buttons-by creating the necessary divs, ul and li elements to store the links, for the student list

const div = document.querySelector(".page");

const appendPages = list => {
  if (document.querySelector(".pagination") !== null) {
    const remove = document.querySelector(".pagination");
    div.removeChild(remove);
  }

  const liLength = Math.ceil(list.length / pageItems);
  const pagDiv = document.createElement("div");
  const ul = document.createElement("ul");
  pagDiv.className = "pagination";
  div.appendChild(pagDiv);
  pagDiv.appendChild(ul);

  for (let i = 0; i < liLength; i++) {
    if (i != liLength) {
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

  //Click event listener to loop through all the page links and bring up the associated number of students for the active page number

  const pageClick = document.querySelectorAll("a");

  for (let i = 0; i < pageClick.length; i++) {
    pageClick[i].addEventListener("click", event => {
      const prevPage = document.querySelector(".active");
      prevPage.className = "";

      const newPage = event.target;
      newPage.className = "active";

      const pageNumber = newPage.textContent;
      showPage(list, pageNumber);
    });
  }
};

//Call on the appendPages function with the listedStudents constiable as the parameter
appendPages(listedStudents);



//I build a function for ok the Search Form, in order to filter the students by letters or keywords. The function is also meant to paginate any search results.

const searchValue = document.querySelector("input").value.toLowerCase();

const search = searchValue => {
  const searchResults = [];
  const term = event.target.value.toLowerCase();
  let noResults = document.querySelector(".noResults");

  if (!term) {
    showPage(listedStudents, 1);
    appendPages(listedStudents);
  } else {
    if (noResults) {
      noResults.parentNode.removeChild(noResults);
    }
    namesOfStudents.forEach((name, i) => {
      name = name.textContent.toLowerCase();
      if (name.indexOf(term) > -1) {
        searchResults.push(listedStudents[i]);
        listedStudents[i].style.display = "block";
      } else {
        listedStudents[i].style.display = "none";
      }
    });

    //If the search form returns no results, a message is printed on that screen. Else the function appends and shows the search results

    if (searchResults.length == 0 || searchResults === undefined) {
      noResults = document.createElement("h2");
      noResults.textContent = "No results found please try a diffrent name";
      noResults.className = "noResults";
      page.insertBefore(noResults, listedStudentsParent);
      const remove = document.querySelector(".pagination");
      div.removeChild(remove);
    } else {
      appendPages(searchResults);
      showPage(searchResults, 1);
    }
    
  }
};

form.addEventListener("keyup", e => {
  search(searchValue);
});

searchbox.addEventListener("click", e => {
  search(searchValue);
  
});