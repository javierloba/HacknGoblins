
HACK'N GOBLINS

Description

Un tauren tratará de eliminar a hordas de enemigos a base de bolazos de nieve!

Entretenido "mata-bichos" en el que defenderemos nuestra posición de las oleadas de goblins tirando bolas de nieve que rebotan por la pantalla.

Sólo tienes una vida, aprovéchala!



MVP (DOM - CANVAS)
MVP definition, deliverables.

Definir el juego con la mínima jugabilidad. Pantallas de título, de juego y de fin el juego y relación entre ellas, así como métodos para incorporar al jugador, los enemigos, las bolas de nieve y las lógicas de colisión y movimiento.

Assets básicos estáticos y animados.

Backlog

- Añadir enemigos voladores.
- Premitir que aparezcan enemigos desde la izquierda.
- Activar la posibilidad de pasar de una pantalla a otra hasta un máximo de 3.
- Incorporar elementos como armadura para una vida extra, nueva arma, llave y puerta a la sala de un boss.
- Incorporar 4 niveles de dificultad con bloqueo del último hasta completar los tres primeros
- Añadir un easter egg en el último nivel.

Data structure

main.js - game.js - player.js - enemy.js - bullets.js
Inactive: objects.js

Classes and methods definition.
Class Game: start(), startLoop(), checkCollisions, gameOver(), updateGameStats().
Class Player: setDirection(), updatePosition(), move(), handleScreenCollision(), removeLife(), draw(), animate(), didCollide(), shoot(), clearBullets().
Class Enemy: draw(), didCollide(), animate(), updatePosition(), isInsideScren().
Class Bullet: draw(), move().

States y States Transitions
Definition of the different states and their transition (transition functions)

createSplashScreen
removeSplashScreen

createGameScreen
removeGameScreen

createGameOverScreen
removeGameOverScreen

Task
Task definition in order of priority

Initial idea. Naming. Wireframes. Basic readme and trello. Initial files structure. Initial Git/GitHub. Define clases and methods. Create game screens. Define code in mvp methods. Search for assets. Add animated sprites.

Links
Trello
https://trello.com/b/eJZ8zRgH/hackn-goblins

Git
URls for the project repo and deploy Link Repo Link Deploy
https://github.com/javierloba/HacknGoblins

Slides
URls for the project presentation (slides) Link Slides.com