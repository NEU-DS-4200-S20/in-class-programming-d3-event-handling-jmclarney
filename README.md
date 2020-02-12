# Assignment — D3 Event Handling

Link to your GitHub pages website: `[insert your hyperlink here]`

# Aim of the assignment

In this assignment you will learn how to handle and create new events with D3.
You will not have to create any new chart, you will just demonstrate your understanding of how events work.

# Instructions

## Setup

1. Clone this repository to your local machine.
  
    E.g., in your terminal / command prompt `CD` to where you want this the folder for this activity to be. Then run `git clone <YOUR_REPO_URL>`

    **Under no circumstances should you be editing files via the GitHub website user interface.** Do all your edits locally after cloning the repository.

1. `CD` or open a terminal / command prompt window into the cloned folder.

1. Start a simple python webserver. E.g., `python -m http.server`, `python3 -m http.server`, or `py -m http.server`. If you are using python 2 you will need to use `python -m SimpleHTTPServer` instead, but please switch to python 3 as [Python 2 was sunset on 2020.01.01](https://www.python.org/doc/sunset-python-2/).

1. Wait for the output: `Serving HTTP on 0.0.0.0 port 8000 (http://0.0.0.0:8000/)`

1. Now open your web browser (Firefox or Chrome) and navigate to the URL: http://localhost:8000

## Update Hyperlinks

1. In `README.md` (this file) update the URL above with your actual GitHub pages URL.

1. In `index.html` update the GitHub repo URL with the URL of your repository. It is in the span with `id="forkongithub"`.

## Implement Custom Click Event

`js/main.js` creates an svg inside the `div` with id `#vis1` and draws a square and a circle for you.
You will be creating a new custom event type to handle clicking on a pre-existing **square** in an svg.
When the square is clicked, the **circle** should change color to **red**.

Implement the following functionality as part of `js\main.js`.

As you work, make your edits and commit major versions to your git repository.

1. Define a custom event `changeColor` using [d3-dispatch](https://github.com/d3/d3-dispatch).

1. Create an event listener that dispatches a `changeColor` event when the **square** is clicked.

    There are pre-existing DOM events for [`click`](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event) and [`mousedown`](https://developer.mozilla.org/en-US/docs/Web/API/Element/mousedown_event) which are part of the [standard DOM events](https://developer.mozilla.org/en-US/docs/Web/Events#Standard_events).
    You may listen for a `click` or `mousedown` event and use it to then dispatch the `changeColor` event using `d3-dispatch`.

1. Create an event listener on the **circle** that is triggered on a `changeColor` event and changes the **circle's** color to **red**.

Do not simply have a listener on the **square** that changes the color directly, e.g., *`selection`*`.on('click', function(d, i){ // code that changes the color });`
**You must use `d3-dispatch` to send and listen for a custom `changeColor` event.**

We are aware that the same objective can be obtained by using standard predefined DOM events.
However, learning how to use `d3-dispatch` correctly will be especially useful to you in the upcoming brushing and linking assignment.
In that assignment you will create multiple modular yet linked visualizations and you will want your code to be more loosely coupled and easier to manage.
The brushing and linking assignment will be impossible to do without first understanding `d3-dispatch`.

## Bonus: Implement Custom Double-Click Event

To get a 1-point bonus on your grade, additionally implement the following functionality as part of `js\main.js`.

1. Similar to before, and continuing to use `d3-dispatch`, implement a custom `changeColor2` event.

1. Create an event listener that dispatches a `changeColor2` event when the **circle** is **double-clicked**.

    A double-click is two clicks in a very short period of time. In order to implement a double-click, you will need to use a timer, like this:

    ```
    setTimeout(function, milliseconds);
    ```
    Reference: [Javascript timing events.](https://www.w3schools.com/js/js_timing.asp)

    **Using the pre-existing [`dblclick` DOM event](https://developer.mozilla.org/en-US/docs/Web/API/Element/dblclick_event) is not allowed in this submission.**

1. Create an event listener on the **square** that is triggered on a `changeColor2` event and changes the **circle's** color to **green**.


Points will not be deducted for failing this bonus step, but make sure that the code in your GitHub repository works properly for the first step from the time of the deadline onwards.

## Academic Honesty

You are welcome to use D3 tutorials or resources as a starting point for your code.
However, **you must cite and reference the resources or sample code you use and explain how you use them**.
Failure to properly cite and attribute code is a breach of academic honesty.
Also, per our syllabus, homework is an individual assessment and should be completed by you alone.
Simply copying existing examples without performing thoughtful edits is a breach of academic honesty.
You are welcome to ask fellow classmates and students for help and discuss the assignment, but **the submission should be your own work**.

# Submission Instructions

1. Ensure you updated (1) the GitHub Pages URL at the top of this `README.md` file and (2) the GitHub repository URL in `index.html` in the span with `id="forkongithub"`.

1. Commit and push your files to GitHub. We will grade based on what is visible on the GitHub Page.

1. Submit the URL of **your GitHub Classroom-generated repository** to the associated assignment on Canvas. 

    **Do not submit a link to a personal repository. It must be within our class GitHub organization.** 

# Grading

You will receive full marks if:

* Everything is submitted by the due date following the instructions above.

* Coding was done properly:
    * Your code was regularly committed and not edited via the GitHub user interface online.
    * You have clear, commented, and validated code.
    * Your web page loads properly and looks as expected in the latest Firefox and Chrome browsers.
    * Any code from other sources (modified or copied straight) is clearly acknowledged, including how you use it.

* Your visualization works as required:
    * Your `changecolor` event is implemented properly following the instructions and using `d3-dispatch`.
    * *Bonus:* Your `changecolor2` event is implemented properly following the instructions and without using the `dblclick` event.
    
* **You will receive a 0 if:**
    * *You submit late.* Any commits made after the due date will be ignored when your work is graded and your repo link must be submitted before the deadline.
    * *You submit an incorrect link on Canvas.* Your link must be to the GitHub Classroom-generated **repo**, not Page or a personal repo.
    * *You fail to correctly update the required hyperlinks:* the GitHub Pages URL in `README.md` AND the GitHub repository URL in `index.html`
    * *The GitHub Page does not load,* e.g., necessary files/libraries are not included, JavaScript errors break the page,you renamed `index.html`.
    The teaching staff will be testing using the latest Firefox and Chrome browsers on their computers.
    We will not fault you for issues beyond your control, e.g., the GitHub Pages service going down.
    * *Through some other means you make it challenging for us to grade your work.*
    E.g., dramatic changes to file names and directory structure, code obfuscation or minimization, etc.

    These are standard course policies for programming assignments.

# Tips and Tricks

## Resources

**There are different versions of D3**, so make sure that the tutorials that you are using are up-to-date and use the same version we are.

* [D3 Homepage](https://d3js.org)
* [D3 API Documentation](https://github.com/d3/d3/blob/master/API.md)
* [D3 Wiki Gallery](https://github.com/d3/d3/wiki/Gallery)
* [D3 Wiki Tutorials](https://github.com/d3/d3/wiki/Tutorials)
* [Tons of examples on bl.ocks.org](https://bl.ocks.org/)
* [D3 Tips and Tricks **v3.x (Warning: old version of D3)**](https://leanpub.com/D3-Tips-and-Tricks/read)

## Function/method chaining

D3, and this exercise, use [function chaining](https://en.wikipedia.org/wiki/Method_chaining) to apply several changes to the same visualization.

You don't have to use chaining.
E.g., instead of this:
```js
d3.select('body')
  .append('p')
    .text('Hello, world!');
```
you can write:
```js
var body = d3.select('body');
var p = body.append('p');
p.text('Hello, world!');
```

## JS statements: `let` vs. `var` vs. `const`

To make our code more modular, reusable, and error-free we should limit variable scope to the relevant parts of the code.
In part, we do this by using [`let` statements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let) instead of [`var`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var) by default so as to not set global variables.
We can also use [`const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const) to create read-only references.

## ES6 Arrow functions `=>`

Note that we can use [ES6 Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions).
E.g., instead of writing `function(d){ return d.name; }` we write `d => d.name` or `d => { return d.name; }`. We would use the latter version with surrounding `{...}` when we need multiple lines of code vs. just a simple expression.
