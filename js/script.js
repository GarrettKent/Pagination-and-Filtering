//These are my global variables.
const studentIndex = document.getElementsByClassName('student-item');
const pageHeading = document.querySelector('.page-header');
let page = 1;
let studentsPerPage = 10;

/***  
 I created the showPage function, then created a loop to show a max of 10 students per page.
 Then, I created a conditional statement to display the students in the page.
 ***/ 
const showPage = (list, page) => {
   let maxIndex = (page * studentsPerPage) - 1;
   let minIndex = (maxIndex - 9);
   for (let i = 0; i < list.length; i+=1) {
      if ( i >= minIndex && i <= maxIndex ) {
         list[i].style.display = '';
      }
      else {
         list[i].style.display = 'none';
      };
   };
};

/*** 
I created the appendPageLinks functions. I also created a loop for the five needed pages. Then, I made links
to click on those pages, along with making an addEventListener, allowing the person to click.
***/ 
const appendPageLinks = (list) => {
   let numberOfPage = Math.ceil(list.length / 10);
   let div = document.createElement('div');
   let newDiv = document.querySelector('.page');
   let ul = document.createElement('ul');
   newDiv.appendChild(div);
   div.classList.add('pagination');
   div.appendChild(ul);      
    for (let i = 1; i <= numberOfPage; i+=1) {
      let li = document.createElement('li');
      let a = document.createElement('a');
      a.href = '#';
      a.textContent = i; 
      ul.appendChild(li); 
      li.appendChild(a); 
      li.addEventListener('click', (e) => {
         showPage(studentIndex, i);
      });
   }; 
};
// Finally, I called the funtions.
showPage(studentIndex, page);
appendPageLinks(studentIndex);