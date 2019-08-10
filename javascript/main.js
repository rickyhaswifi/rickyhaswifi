document.addEventListener("DOMContentLoaded", function() {
  
  // Name Input
  document.getElementById('nameInput').addEventListener('input', function(e){
  let name = "Princess " + e.target.value;
  document.getElementById('nameOutput').innerHTML = name;
  });

  let princess = document.getElementById('nameOutput');
  princess.className += ' princess';

  // Homepage text 
  document.getElementsByTagName('title')[0].innerHTML = 'About Me';
  document.getElementById('myName').innerHTML = 'Hi my name is Ricardo,';
  document.getElementById('yourName').innerHTML = 'what\'s your name?';
  document.getElementById('goldenBook').innerHTML = 'This golden book belongs to';

    let goldenBook = document.getElementById("goldenBook");
    goldenBook.className += " introh2";

  document.getElementById('tap').innerHTML = 'Tap a button to play audio!';

  document.getElementById('proj').innerHTML = 'Projects';
  document.getElementById('lnza').innerHTML = "Lnza.me";
  document.getElementById('lnzaP').innerHTML = "HTML • Bootstrap • CSS • Wavesurfer JS";
  document.getElementById('lnzaLink').innerHTML = '<a href="https://lnza.me" target="_blank">www.lnza.me</a> <a href="https://github.com/rickyhaswifi/Lnza.me/blob/master/index.html" target="_blank"><i class="fab fa-github"></i></a>';

  document.getElementById('lifeH').innerHTML = 'Lifestone Church';
  document.getElementById('lifeP').innerHTML = 'Squarespace • Custom CSS';
  document.getElementById('lifeLink').innerHTML = '<a href="https://lifestonechurch.net" target="_blank">www.lifestonechurch.net</a>';

  document.getElementById('gpoH').innerHTML = 'Alliance GPO';
  document.getElementById('gpoP').innerHTML = 'Squarespace • Custom CSS';
  document.getElementById('gpoLink').innerHTML = '<a href="https://www.alliancegpo.com/primary" target="_blank">www.alliancegpo.com</a>  <button type="button" class="btn btn-hello" data-toggle="modal" data-target="#exampleModalCenter"><i class="fas fa-pencil-ruler"></i></button>';

  document.getElementById('seeMore').innerHTML = '<a href="https://entendy.com/portfolio/" target="_blank">+ See More</a>';

  document.getElementById('contact').innerHTML = '<h1>Contact Me</h1><a class="aIconFooter" href="https://github.com/rickyhaswifi" target="_blank"><i class="fab fa-github-square fa-fw fa-3x iconFooter"></i></a> <a class="aIconFooter" href="mailto:rickyhaswifi@gmail.com"><i class="fas fa-envelope-square fa-fw fa-3x iconFooter"></i></a> <a class="aIconFooter" href="https://www.youtube.com/user/Entendy"><i class="fab fa-youtube-square fa-fw fa-3x iconFooter"></i></a>';

  let footer = (new Date().getFullYear())
  document.getElementById('copyR').innerHTML  = '©' + footer + ' Ricardo Bautista <br> <a href="https://github.com/rickyhaswifi/rickyhaswifi.github.io" target="_blank">View Source Code</a>' ;



  // WAVESURFER JS START
  
  // A U D I O 1 
  
  let story1 = WaveSurfer.create({
    container: '#story1',
    waveColor: '#fff',
    progressColor: '#FFB002'
  });
  
  story1.load('../audio/story-1.mp3');
  
  story1.on('ready', function() {
    story1.pause();
    story1.setVolume(1);
  });
  
  document
    .querySelector('[data-action="story1"]')
    .addEventListener('click', story1.playPause.bind(story1));
  
  // A U D I O 2
  
  let story2 = WaveSurfer.create({
    container: '#story2',
    backend: 'MediaElement',
    waveColor: '#fff',
    progressColor: '#FFB002'
  });
  
  story2.load('../audio/story-2.mp3');
  
  story2.on('ready', function() {
    story2.pause();
    story2.setVolume(1);
  });
  
  document
    .querySelector('[data-action="story2"]')
    .addEventListener('click', story2.playPause.bind(story2));
    
    // A U D I O 3
  
  let story3 = WaveSurfer.create({
    container: '#story3',
    waveColor: '#fff',
    progressColor: '#FFB002'
  });
  
  story3.load('../audio/story-3.mp3');
  
  story3.on('ready', function() {
    story3.pause();
    story3.setVolume(1);
  });
  
  document
    .querySelector('[data-action="story3"]')
    .addEventListener('click', story3.playPause.bind(story3));
  
    // A U D I O 4
  
  let story4 = WaveSurfer.create({
    container: '#story4',
    waveColor: '#fff',
    progressColor: '#FFB002'
  });
  
  story4.load('../audio/story-4.mp3');
  
  story4.on('ready', function() {
    story4.pause();
    story4.setVolume(1);
  });
  
  document
    .querySelector('[data-action="story4"]')
    .addEventListener('click', story4.playPause.bind(story4));
  
    // A U D I O 5
  
  let story5 = WaveSurfer.create({
    container: '#story5',
    waveColor: '#fff',
    progressColor: '#FFB002'
  });
  
  story5.load('../audio/story-5.mp3');
  
  story5.on('ready', function() {
    story5.pause();
    story5.setVolume(1);
  });
  
  document
    .querySelector('[data-action="story5"]')
    .addEventListener('click', story5.playPause.bind(story5));
  
    // A U D I O 6
  
  let story6 = WaveSurfer.create({
    container: '#story6',
    waveColor: '#fff',
    progressColor: '#FFB002'
  });
  
  story6.load('../audio/story-6.mp3');
  
  story6.on('ready', function() {
    story6.pause();
    story6.setVolume(1);
  });
  
  document
    .querySelector('[data-action="story6"]')
    .addEventListener('click', story6.playPause.bind(story6));
  
    // A U D I O 7
  
  let story7 = WaveSurfer.create({
    container: '#story7',
    waveColor: '#fff',
    progressColor: '#FFB002'
  });
  
  story7.load('../audio/story-7.mp3');
  
  story7.on('ready', function() {
    story7.pause();
    story7.setVolume(1);
  });
  
  document
    .querySelector('[data-action="story7"]')
    .addEventListener('click', story7.playPause.bind(story7));
  
    // A U D I O 8
  
  let story8 = WaveSurfer.create({
    container: '#story8',
    waveColor: '#fff',
    progressColor: '#FFB002'
  });
  
  story8.load('../audio/story-8.mp3');
  
  story8.on('ready', function() {
    story8.pause();
    story8.setVolume(1);
  });
  
  document
    .querySelector('[data-action="story8"]')
    .addEventListener('click', story8.playPause.bind(story8));
  
    // A U D I O 9
  
  let story9 = WaveSurfer.create({
    container: '#story9',
    waveColor: '#fff',
    progressColor: '#FFB002'
  });
  
  story9.load('../audio/story-9.mp3');
  
  story9.on('ready', function() {
    story9.pause();
    story9.setVolume(1);
  });
  
  document
    .querySelector('[data-action="story9"]')
    .addEventListener('click', story9.playPause.bind(story9));
  
    // A U D I O 10 
  
  let story10 = WaveSurfer.create({
    container: '#story10',
    waveColor: '#fff',
    progressColor: '#FFB002'
  });
  
  story10.load('../audio/story-10.mp3');
  
  story10.on('ready', function() {
    story10.pause();
    story10.setVolume(1);
  });
  
  document
    .querySelector('[data-action="story10"]')
    .addEventListener('click', story10.playPause.bind(story10));
  
  console.log('The end')
})