const paragraph = document.querySelector('p');
paragraph.style.color = 'lightblue';
paragraph.innerText = `Lorem ipsum dolor amet viral meh selfies drinking vinegar, intelligentsia poke flannel twee paleo enamel pin cray. Banjo celiac crucifix, kickstarter la croix air plant jianbing hashtag vinyl hell of man bun selvage schlitz banh mi. Tacos hella raclette quinoa blog, williamsburg adaptogen tbh. Hexagon af stumptown lumbersexual synth gentrify quinoa enamel pin celiac master cleanse. Truffaut typewriter shoreditch, semiotics iceland mixtape taxidermy umami distillery austin hashtag. Food truck synth wayfarers, street art banh mi actually authentic. Bitters tousled tattooed vegan neutra pug hell of fixie chia unicorn letterpress.`

const heading = document.querySelector('#heading');
heading.style.fontSize = '10px';
// or, as one line: 
// document.querySelector('#heading').style.fontSize = '10px';

const item13 = document.querySelector('#item-13');
item13.style.opacity = '0.50'
item13.innerText = 'I say, "Hi!"'
const image = document.querySelector('img');
image.src = `http://www.tioxic.com/wp-content/uploads/trex_4.jpg`
image.style.height = '300px';

const newImage = document.createElement('img');
newImage.src = 'http://www.tioxic.com/wp-content/uploads/trex_4.jpg';
const wrapperDiv = document.querySelector('div');
wrapperDiv.appendChild(newImage);

const newItem = document.createElement('li');
newItem.className = 'item';
newItem.id = 'item-16';
newItem.style.color = 'blue'
newItem.innerText = `I won't be fooled again.`;
const list = document.querySelector('ul');
list.appendChild(newItem);
