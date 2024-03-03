# Balloon Animation

This JavaScript code creates an animated scene of balloons floating around within a canvas element in a web browser.

## Features

- Generates a canvas element and sets up a drawing context.
- Creates an array of balloons with random properties such as position, velocity, size, and color.
- Animates the balloons, updating their positions and applying wind effect.
- Handles collisions with the walls of the canvas, causing balloons to bounce off.
- Utilizes requestAnimationFrame for smooth animation rendering.

## Usage

To use this code in your project, follow these steps:

1. **Include Script**: Include the `main.js` script in your HTML file.

   ```html
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <title>Balloon Animation</title>
       <script src="main.js"></script>
     </head>
     <body>
       <canvas id="canvas"></canvas>
     </body>
   </html>
   ```

2. **Add Canvas**: Add a canvas element to your HTML with the id `canvas`.

3. **Initialization**: Call `window.onload` to initialize the animation when the window loads.

   ```javascript
   window.onload = function () {
     // Your initialization code here
   };
   ```

Customize the animation parameters and styles to fit your project requirements.

## Parameters

- `numBalloons`: Number of balloons to be generated.
- `balloon.radius`: Radius of each balloon.
- `balloon.maxSpeed`: Maximum speed of balloons.
- `balloon.minSpeed`: Minimum speed of balloons.
- `balloon.colors`: Array of colors for balloons.

## Functions

- `init()`: Initializes the canvas and sets up event listeners.
- `update()`: Updates the positions of balloons and handles collisions.
- `drawBalloons()`: Draws the balloons on the canvas.
- `randomColor()`: Generates a random color for balloons.
- `handleCollisions(balloon)`: Handles collisions of balloons with the canvas boundaries.
- `animate()`: Main animation loop using requestAnimationFrame.

Feel free to experiment with the code and create your own unique balloon animations!
