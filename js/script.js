//Here I declare global variables to store the DOM elements
const listedStudents = document.getElementsByClassName("student-item");
//This is variable stores how many students I want to show on each page
const pageItems = 10;

//I declare search form variables and constants.

const page = document.querySelector(".page");
const list = document.querySelectorAll("li");
const listedStudentsParent = document.querySelector(".student-list");
const namesOfStudents = document.querySelectorAll(".student-details > h3");

//I create a search form and button dynamically

//Search form
const searchBar = document.createElement("input");
searchBar.type = "text";
searchBar.setAttribute("class", "searchInput");
const searchPlaceHolder = (searchBar.placeholder = "Search Students...");

//Search button
const searchButton = document.createElement("button");
searchButton.type = "button";
searchButton.setAttribute("class", "searchBtn");
searchButton.innerHTML = "Search";

//I append the search form and search button to the HTML document

const divHeader = document.querySelector(".page-header");
divHeader.appendChild(searchButton);
divHeader.appendChild(searchBar);

//This function is simply to hide or display a set of 10 students that are suppose to show for each page link. The functions loops through the Student List.
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

//Call on the appendPages function with the listedStudents variable as the parameter
appendPages(listedStudents);

//I build a function for the Search Form, in order to filter the students by letters or keywords. The function is also meant to paginate any search results.

// const searchValue = document.querySelector("input").value.toLowerCase();

// const search = searchValue => {
//   const searchResults = [];
//   const term = event.target.value.toLowerCase();
//   let noResults = document.querySelector(".noResults");

//   if (!term) {
//     showPage(listedStudents, 1);
//     appendPages(listedStudents);
//   } else {
//     if (noResults) {
//       noResults.parentNode.removeChild(noResults);
//     }
//     namesOfStudents.forEach((name, i) => {
//       name = name.textContent.toLowerCase();
//       if (name.indexOf(term) > -1) {
//         searchResults.push(listedStudents[i]);
//         listedStudents[i].style.display = "block";
//       } else {
//         listedStudents[i].style.display = "none";
//       }
//     });

//     //If the search form returns no results, a message is printed on that screen. Else the function appends and shows the search results

//     if (searchResults.length == 0 || searchResults === undefined) {
//       noResults = document.createElement("h2");
//       noResults.textContent = "No students found, please try again...";
//       noResults.className = "noResults";
//       page.insertBefore(noResults, listedStudentsParent);
//       const remove = document.querySelector(".pagination");
//       div.removeChild(remove);
//     } else {
//       appendPages(searchResults);
//       showPage(searchResults, 1);
//     }
//     console.log(searchResults.length);
//   }
// };

// //I invoke my search function with the keyup event listner
// searchBar.addEventListener("keyup", e => {
//   search(searchValue);
// });

// //Added a click event listener to my search button
// searchButton.addEventListener("click", e => {
//   search(searchValue);
//   console.log("This button is functional");
// });