/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

const listedPeople = document.getElementsByClassName('student-item')
const items = 10;
const page = document.querySelector('.page')
const li = document.querySelectorAll('li')
const listParent = document.querySelector('.student-list')
const names = document.querySelectorAll('.student-details')


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/




/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.
***/

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



/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/





// Remember to delete the comments that came with this file, and replace them with your own code comments.