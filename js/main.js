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
rect.on('click', function() {
  console.log("rect clicked");
})
