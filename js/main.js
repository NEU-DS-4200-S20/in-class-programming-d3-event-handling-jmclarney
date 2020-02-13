// write your javascript code here.
// feel free to change the pre-set attributes as you see fit

let margin = {
    top: 60,
    left: 50,
    right: 30,
    bottom: 35
  },
  width = 500 - margin.left - margin.right,
  height = 500 - margin.top - margin.bottom;

let svg = d3.select('#vis1')
  .append('svg')
  .attr('preserveAspectRatio', 'xMidYMid meet') // this will scale your visualization according to the size of its parent element and the page.
  .attr('width', '100%') // this is now required by Chrome to ensure the SVG shows up at all
  .style('background-color', '#ccc')
  .attr('viewBox', [0, 0, width + margin.left + margin.right, height + margin.top + margin.bottom].join(' '))

text = svg.append('text')
  .attr('x', '30%')
  .attr('y', '35%')
  .attr('text-anchor', 'middle')
  .text('A')

text = svg.append('text')
  .attr('x', '70%')
  .attr('y', '35%')
  .attr('text-anchor', 'middle')
  .text('B')

rect = svg.append('rect')// The square we want to click on
  .attr('x', '20%')
  .attr('y', '40%')
  .attr('width', '20%')
  .attr('height', '20%')
  .attr('fill', 'yellow')

circle = svg.append('circle') // The circle we want to change color when the square is clicked
  .attr('cx', '70%')
  .attr('cy', '50%')
  .attr('r', '10%')
  .attr('fill', 'blue')


// Here, you'll have to use the d3.dispatch library to: 
//    - create a dispatch for when the color should change
//    - call that dispatch when the square is colored (by adding to the click listener in the square)
//    - receive that dispatch and change the color of the circle
// YOUR CODE HERE

var dispatch = d3.dispatch('changeColor');

rect.on('click', function() {
  console.log("rect clicked");  
  dispatch.call('changeColor')
  })

dispatch.on('changeColor', function() {
  console.log("rect clicked");
  circle.attr('fill', 'red')
})


// BONUS!!
var dispatch2 = d3.dispatch('changeColor2');
var isDoubleClicked = false;

// event listener
circle.on('click', function() {
  console.log("circle clicked");  
  dispatch2.call('changeColor2')
  })

// implementing double click functionality, if single click or not
// double clicked within 250 milliseconds then do nothing
dispatch2.on('changeColor2', function() {
  console.log("circle clicked");
  if ( isDoubleClicked ) {
    clearTimeout(isDoubleClicked);
    isDoubleClicked = false;
    circle.attr('fill', 'green')
    console.log("user double click");
  }
  else isDoubleClicked = setTimeout( function() {
    isDoubleClicked = false;
    console.log("user single click");
  }, 250)
})