  //Here I declare and store elements
const listedStudents = document.getElementsByClassName("student-item");
//I stored how many items to display per page
const pageItems = 10;

//I declare for variables

const page = document.querySelector(".page");
const list = document.querySelectorAll("li");
const listedStudentsParent = document.querySelector(".student-list");
const namesOfStudents = document.querySelectorAll(".student-details > h3");


// created search selectors 
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

// I append the search to the document

const divHeader = document.querySelector(".page-header");
divHeader.appendChild(searchbox);
divHeader.appendChild(form);

// This is to show or hide a set of the students that are supposed to be on that page

const showPage = (listedStudents, page) => {
  const start = page * pageItems - pageItems;
  let end = page * pageItems;
// Added a loop to go through the list

  for (let i = 0; i < listedStudents.length; i++) {
    if (i >= start && i < end) {
      listedStudents[i].style.display = "block";
    } else {
      listedStudents[i].style.display = "none";
    }
  }
};

//Called the function 
showPage(listedStudents, 1);

// To create the necessary divs needed

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

  //Event listener to loop through all the page links and bring the number of students active on the page

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

//Call on the appendPages 
appendPages(listedStudents);



//function for the Search Form, in order to filter keywords

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

    //If there is no results a message appears on the screen

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

// My search function event listner

form.addEventListener("keyup", e => {
  search(searchValue);
}
);

searchbox.addEventListener("click", e => {
  search(searchValue);
  
});