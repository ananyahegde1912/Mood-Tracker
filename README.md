Description

I built a Mood Tracker web application to help users track their daily moods and write short journal entries. Users can select an emoji to show how they feel, write their thoughts in a large input box, and save their entries. The app also tracks a 7-day mood streak to encourage consistent journaling.

Features

Clickable mood emojis that change the page background according to the selected mood.

Motivational quote appears depending on the mood.

Large and easy-to-use input box for daily journal entries.

Save entries locally in the browser for data persistence.

Tracks 7-day streaks to motivate users to log their mood every day.

Responsive and interactive UI with hover effects and smooth transitions.


<img width="815" height="470" alt="Screenshot 2026-03-07 202131" src="https://github.com/user-attachments/assets/1142316d-5010-4026-a9f4-eed9b0dd0e08" />

How to Use

Open the index.html file in your browser.

Click on an emoji to select your mood for the day.

Read the motivational quote that appears for your selected mood.

Write your thoughts in the large journal input box.

Click the "Save" button to store your entry.

Check your streak below the input box to see how many consecutive days you have logged your mood.

Technical Approach

HTML is used to create the structure of the page, including emojis, input box, and buttons.

CSS is used for styling, adding hover effects, and making the page visually appealing.

JavaScript handles all the interactivity:

Detects which mood the user clicked using dataset attributes.

Changes the background and shows a motivational quote based on the selected mood.

Saves journal entries and streak counts using localStorage.

Updates streak count dynamically whenever a new entry is saved.

Installation

Download or clone this repository.

Open the index.html file in your browser.

Future Improvements

Add a calendar view to see mood trends over the month.

Use a backend database to save data permanently instead of relying on browser storage.

Add more mood options and custom quotes for more personalization.
