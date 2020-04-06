// document.addEventListener("DOMContentLoaded", function() {
  
  // // Name Input

  // document.getElementById('nameForm').addEventListener('submit', function(event){3
  //   event.preventDefault();
  //   document.querySelector('#storyApp').scrollIntoView({ 
  //     behavior: 'smooth' 
  //   });
  // });

  // document.getElementById('nameInput').addEventListener('input', function(e){
  // e.preventDefault();
  // let name = "Princess " + e.target.value;
  // document.getElementById('nameOutput').innerHTML = name;
  // });

  // let princess = document.getElementById('nameOutput');
  // princess.className += ' princess';

  // // Homepage text 
  // document.getElementsByTagName('title')[0].innerHTML = 'About Me';
  // document.getElementById('myName').innerHTML = 'Hi my name is Ricardo,';
  // document.getElementById('yourName').innerHTML = 'what\'s your name?';
  // document.getElementById('goldenBook').innerHTML = 'This golden book belongs to';

  //   let goldenBook = document.getElementById("goldenBook");
  //   goldenBook.className += " introh2";

  // document.getElementById('tap').innerHTML = 'Tap a button to play audio!';

  document.getElementById('proj').innerHTML =  `Hi I'm Ricardo Bautista - Check out my projects`;
  document.getElementById('lnza').innerHTML = "Lnza.me - Homepage";
  document.getElementById('lnzaP').innerHTML = "275K hits on a music link platform for fans. One link, all stores. HTML • Bootstrap • CSS • Wavesurfer JS";
  document.getElementById('lnzaLink').innerHTML = '<a href="https://lnza.me" target="_blank">www.lnza.me</a> <a href="https://github.com/rickyhaswifi/Lnza.me/blob/master/index.html" target="_blank"><i class="fab fa-github-square"></i></a> <a href="https://www.youtube.com/watch?v=Pny0V-qlhiA" target="_blank"><i class="fab fa-youtube-square"></i></a>';

  document.getElementById('lifeH').innerHTML = 'Lifestone Church';
  document.getElementById('lifeP').innerHTML = 'Donated website using Squarespace • Custom CSS • Podcast Distribution • Video Editing';
  document.getElementById('lifeLink').innerHTML = '<a href="https://lifestonechurch.net" target="_blank">www.lifestonechurch.net</a>';

  document.getElementById('gpoH').innerHTML = 'Alliance GPO';
  document.getElementById('gpoP').innerHTML = 'Squarespace • Custom CSS • Photoshop';
  document.getElementById('gpoLink').innerHTML = '<a href="https://www.alliancegpo.com/" target="_blank">www.alliancegpo.com</a>  <button type="button" class="btn btn-hello" data-toggle="modal" data-target="#exampleModalCenter"><i class="fas fa-pencil-ruler"></i></button>';

  // document.getElementById('seeMore').innerHTML = '<a href="https://entendy.com/portfolio/" target="_blank">+ See More</a>';

  document.getElementById('contact').innerHTML = '<a class="aIconFooter" href="https://github.com/rickyhaswifi" target="_blank"><i class="fab fa-github-square fa-fw fa-3x iconFooter"></i></a> <a class="aIconFooter" href="mailto:rickyhaswifi@gmail.com"><i class="fas fa-envelope-square fa-fw fa-3x iconFooter"></i></a> <a class="aIconFooter" href="https://www.youtube.com/user/Entendy" target="_blank"><i class="fab fa-youtube-square fa-fw fa-3x iconFooter"></i></a>';

  let footer = (new Date().getFullYear())
  document.getElementById('copyR').innerHTML  = '©' + footer + ' Ricardo Bautista <br> <a href="https://github.com/rickyhaswifi/rickyhaswifi.github.io" target="_blank">View Source Code</a>' ;

// }
// )