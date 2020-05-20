// Write the code necessary to do the following:

// Select the section with an id of container without using querySelector.
// document.getElementById("container");

// Select the section with an id of container using querySelector.
// document.querySelector("#container")

// Select all of the list items with a class of “second”.
//document.getElementsByClassName("second");

// Select a list item with a class of third, but only the list item inside of the ol tag.
// document.querySelector("ol .third");

// Give the section with an id of container the text “Hello!”.
// const section = document.querySelector("#container")
// undefined
// section.innerText
// "one
// two
// three
// one
// two
// three"
// section.innerText = "Hello"
// "Hello"

// Add the class main to the div with a class of footer.
// const footer1 = document.querySelector(".footer")
// footer1.classList.add("main")

// ANOTHER OPTION
// footer.className += "main";

// Remove the class main on the div with a class of footer.
// const footer1 = document.querySelector(".footer")
// footer1.classList.remove("main")

// Create a new li element.
//const newLi = document.createElement("li")

// Give the li the text “four”.
// const newLi = document.createElement("li")
// newLi.innerText = "four"

// Append the li to the ul element.
// const ul = document.querySelector("ul")
// ul.append(newLi) OR ul.appendChild(newLi);

// Loop over all of the lis inside the ol tag and give them a background color of “green”.
// const Lis = document.querySelectorAll("ol > li");
// for (let li of Lis) {
// li.style.backgroundColor = "green";
// }

// ANOTHER OPTION

// let liInsideOl = document.querySelectorAll("ol li");

// for(let i = 0; i < liInsideOl.length; i++){
//     liInsideOl[i].style.backgroundColor = "green";
// }

// Remove the div with a class of footer
// const footerDiv = document.querySelector(".footer")
// footerDiv.remove();
