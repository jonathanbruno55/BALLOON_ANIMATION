window.onload = function () {
    // Set up canvas and context
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight;

    // Array to hold balloon objects
    var balloons = [],
        wind = 0.02; // Wind speed

    // Create some balloons with random properties
    for (var i = 0; i < 99; i++) {
        balloons.push({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: Math.random() * 2 - 1, // Random horizontal velocity
            vy: Math.random() * 2 - 1, // Random vertical velocity
            radius: 10 + Math.random() * 20, // Random balloon size
            color: randomColor() // Random balloon color
        });
    }

    // Start animation loop
    update();

    // Function to update balloon positions and draw them
    function update() {
        // Clear canvas
        context.clearRect(0, 0, width, height);

        // Update and draw each balloon
        balloons.forEach(function (balloon) {
            // Update balloon position
            balloon.x += balloon.vx;
            balloon.y += balloon.vy;

            // Apply wind
            balloon.vx += wind;
            balloon.vy += Math.random() * 0.1 - 0.05;

            // Bounce off walls
            if (balloon.x + balloon.radius > width || balloon.x - balloon.radius < 0) {
                balloon.vx *= -1;
            }
            if (balloon.y + balloon.radius > height || balloon.y - balloon.radius < 0) {
                balloon.vy *= -1;
            }

            // Draw the balloon
            drawBalloon(balloon);
        });

        // Request next frame
        requestAnimationFrame(update);
    }

    // Function to draw a single balloon
    function drawBalloon(balloon) {
        context.beginPath();
        context.arc(balloon.x, balloon.y, balloon.radius, 0, Math.PI * 2);
        context.fillStyle = balloon.color;
        context.fill();
    }

    // Function to generate a random color
    function randomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
};