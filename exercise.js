// 1) Select buttons and store them into two different variables 
/* 
    -Select the forst button without adding or using any "id"
    - Select the second button  by using id

*/

const firstButtonElement = document.querySelector('button');
// will return the first matching element;

const secondButtonElement = document.getElementById('change-bg-btn');




// 2) Add "click " event listener to both buttons (with two different functions). The functions should "console.dir()" the clicked buttons.

// -Output the first button by using the variable in which it's stored

// -output the second button WITHOUT using the variable in which it' stored

firstButtonElement.addEventListener('click', removeParagraph);
secondButtonElement.addEventListener('click',changBackgroundColor);
// function removeParagraph() {
//     console.dir(firstButtonElement); // will output the button

// }




// 3) Now select and store the paragraph mentioned in the text you see on page (first and third paragraph)

// -Select BOTH paragraphs by driling in the document and "navigating" to the mentioned elements

// If you struggle with DOM driling , use "id" instead but watch the solution @!


const firstParagraphElement=document.body.children[2].children[1];
console.log(firstParagraphElement);

const thirdParagraphElement=document.body.children[2].children[3];
console.log(thirdParagraphElement);


// 4) Change the function from (2) such that : 
//      - The first button removes the third paragraph (i.e. the paragraph p prior to it)

//      - The second button changes the background color of the first paragraph to blue

 
function removeParagraph() {
    // console.dir(firstButtonElement); // will output the button

    thirdParagraphElement.remove()

}

function changBackgroundColor(event) {
    // console.dir(event.target);
    // firstParagraphElement.style.backgroundColor='blue';
    // firstParagraphElement.className='blue-bg';
    firstParagraphElement.classList.add('blue-bg');
    

}

// 5) Solve (4) both by changig the "inline styles " as well as by adding CSS classes 

// Note: You'll have to add those classes to the style.css file first

