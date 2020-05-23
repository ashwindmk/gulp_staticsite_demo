var colors = ["#FF0000", "#00FF00", "#0000FF", "#00FFFF"];
var max = colors.length - 1;
var min = 0;
var range = max - min + 1;

function changeColor(e) {
    var index = Math.floor((Math.random() * range) + min);
    var color = colors[index];
    console.log('Changing color of ' + e.currentTarget + ' to ' + color + '(' + index + ')');
    e.currentTarget.style.backgroundColor = color;
}

var sections = Array.from(document.querySelectorAll('section'));
sections.forEach(function(section, i) {
    section.addEventListener('click', function(e) {
        console.log('section ' + i + ' / ' + sections.length);
        changeColor(e);
    });
});

console.log('Message one');


console.log('Message two');
