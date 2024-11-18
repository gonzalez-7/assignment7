// 1. Create a page that displays a balloon (using the balloon emoji, 🎈). When you press
// the up arrow, it should inflate (grow) 10 percent, and when you press the down arrow,
// it should deflate (shrink) 10 percent. You can control the size of text (emoji are
// text) by setting the font-size CSS property (style.fontSize) on its parent element.
// Remember to include a unit in the value—for example, pixels (10px). The key names of
// the arrow keys are "ArrowUp" and "ArrowDown". Make sure the keys change only the
// balloon, without scrolling the page.
// When that works, add a feature where, if you blow up the balloon past a certain size,
// it explodes. In this case, exploding means that it is replaced with a 💥 emoji, and
// the event handler is removed (so that you can’t inflate or deflate the explosion).
// Hint: keeping track of the size in percentage might be easier.
// Hint: Make sure you quote the emoji characters. They are strings, after all.
// Hint: document.getElementById("balloon") will get the balloon element on the page.

// 2. The index.html page has a tabbed layout. Make the default state of the layout show
// the first tab, and make it so that when you click the links at the top the correct
// tab's contents are displayed and the others are hidden. Prevent the default action of
// the links and set up an event listener with the logic necessary to make the tabs
// function as expected. There are many ways to accomplish this task, but you will need
// to at minimum add listeners to each link and toggle the display of the tab contents.
// Hint: display: none; hides an element, and display: block; will bring it

// Task 1: 
const balloon = document.getElementById("balloon"); // Select the balloon element by its ID
let fontSize = 30; // Starting font size in pixels
balloon.style.fontSize = `${fontSize}px`; // Apply the initial font size to the balloon
document.addEventListener("keydown", (event) => { // Listen for keydown events on the document
    if (event.key === "ArrowUp") { // Check if the pressed key is the up arrow
        fontSize *= 1.1; // Increase the font size by 10%
        balloon.style.fontSize = `${fontSize}px`; // Update the balloon's font size
        event.preventDefault(); // Prevent the default browser behavior (e.g., page scrolling)
    } else if (event.key === "ArrowDown") { // Check if the pressed key is the down arrow
        fontSize *= 0.9; // Decrease the font size by 10%
        balloon.style.fontSize = `${fontSize}px`; // Update the balloon's font size
        event.preventDefault(); // Prevent the default browser behavior (e.g., page scrolling)
    }
});

// Task 2:
const tabs = document.querySelectorAll("#tabbed-layout ul li a"); // Select all tab links inside the tabbed layout
const contents = document.querySelectorAll("#tabbed-contents div"); // Select all tab contents inside the tabbed layout

contents.forEach((content, index) => { 
    content.style.display = index === 0 ? "block" : "none"; // Show the first tab content and hide the rest
});

tabs.forEach((tab, index) => { 
  tab.addEventListener("click", (event) => { // Add a click event listener to each tab link
    event.preventDefault(); // Prevent the default link behavior (e.g., page refreshing)

    contents.forEach((content) => { 
      content.style.display = "none"; // Hide all tab contents
    });

    contents[index].style.display = "block"; // Display the content corresponding to the clicked tab
  });
});