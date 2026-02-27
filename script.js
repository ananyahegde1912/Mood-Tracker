const circles = document.querySelectorAll('.mood-circle');
const quoteBox = document.querySelector('.mood-quote');


let selectedMood = null; 

const moodBackgrounds = {
  happy: "Images/happy bg.png",
  excited: "Images/excited bg.png",
  neutral: "Images/neutral bg.png",
  tired: "Images/tired bg.jpg",
  sad: "Images/sad bg.jpg"
};

const moodQuotes = {
  happy: "Yay! Tell me more on what made you happy",
  excited: "Omg! Yippee! What are you excited for?",
  neutral: "It's okay! We all feel neutral sometimes ;)",
  tired: "Oh no... How have you been coping so far?",
  sad: "Sorry to hear that :( What's got you feeling this way?"
};

function handleMoodClick(event) {
  const selectedCircle = event.currentTarget;
  const mood = selectedCircle.dataset.mood;

  
  circles.forEach(circle => circle.classList.remove('selected'));

 
  selectedCircle.classList.add('selected');

  
  quoteBox.textContent = moodQuotes[mood];
  quoteBox.style.display = 'block';

  
  document.body.style.backgroundImage = `url('${moodBackgrounds[mood]}')`;

  
  selectedMood = mood;
}


circles.forEach(circle => {
  circle.addEventListener('click', handleMoodClick);
});


const journalInput = document.getElementById('journal-input');
const saveButton = document.getElementById('save-journal');
const savedMessage = document.getElementById('saved-message');
const streakMessage = document.getElementById('streak-message'); 


window.addEventListener('load', () => {
  const savedText = localStorage.getItem('journalText');
  if (savedText) {
    journalInput.value = savedText;
  }
});


let streak = parseInt(localStorage.getItem('streak')) || 0;


saveButton.addEventListener('click', () => {
  if (!selectedMood) {
    
    savedMessage.textContent = "Please select a mood before writing in your journal!";
    savedMessage.style.color = "red";
    setTimeout(() => savedMessage.textContent = "", 10000); 
    return; 
  }

  
  const text = journalInput.value;
  localStorage.setItem('journalText', text);

  savedMessage.textContent = "Saved successfully!";
  savedMessage.style.color = "green";
  setTimeout(() => savedMessage.textContent = "", 2000);

  
  streak++;
  localStorage.setItem('streak', streak);

  if (streak >= 7) {
    streakMessage.textContent = "Congratulations! You just completed your 7-day mood streak. Keep going for the next 7 days. Good luck!";
  } else {
    const daysLeft = 7 - streak;
    streakMessage.textContent = `You've logged your mood ${streak} day(s) in a row. ${daysLeft} more day(s) left to complete a streak! Good luck!`;
  }
});

