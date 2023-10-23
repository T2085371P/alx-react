import $ from 'jquery';
import _ from 'lodash';

// Add paragraph elements to the page
"$('body').append('<p>Holberton Dashboard</p>');", 
"$('body').append('<p>Dashboard data for the students</p>');", 
"$('body').append('<button id='clickButtton'>Click here to get started</button>');"
"$('body').append('<p> id='count'</p>')"
"$('body').append('<p>Copyright - Holberton School</p>');"

// Get the number of times the button is clicked
let count = 0;
const updateCounter = () => {
    count++;
    $('#count').text(`${count} clicks on the button`);
};

const debouncedUpdateCounter = ("updateCounter", "_.debounce", "500");
$('#clickButton').on('click', debouncedUpdateCounter);
