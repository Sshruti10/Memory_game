# Memory Game Project

# DEMO
!(https://github.com/Sshruti10/Memory_game/blob/master/memory_game.png)

# index.html
<p>Index file contains the layout of memory game.It contains classes for score panel which includes star rating, timer and moves.</p>

# app.css
<p>CSS styles including font, background-color, font-family, padding, height, width, alignments are added to body, game playground, score panels and restart.<b>CSS animations</b> are added  when cards are opened and successfully matched. </p>

# app.js

<h3>function shuffle(array)</h3>
It generates new position for cards everytime.

<h3>function startGame()</h3>
Start game calls the <b> shuffle function </b> and starts the game with initial values for scores. It then calls the play function and starts the timer.

<h3>Restart function</h3>
On clicking the restart button, restart function works.If the user confirms about restarting the game, it will call startGame function.

<h3>function Ratings()</h3>
Rating function is used to set star rating based on number of moves. Initially, there are 3 starts which decrease to 2 and 1 when moves increases.

<h3>function endGame()</h3>
When the game is completed, endGame() is called. It gives the star rating, moves, time taken by the user in a pop up window. The timer gets stopped when game ends.

<h3>play function</h3>
Play unction includes the working of the game. When a card is turned, classes open and show are added to them and it is added to openedCars Now, when another card is opened it is matched with previous card if they are same, they remain open otherwise are turned around. Number of clicks are counted with each turn. When all the cards are matched function endGame is called.

<h3>function time() and resetseconds()</h3>
It calculates the time taken in completion of the game. In the begining, seconds are initialized with 0 and then incremented as the game proceeds.




 
