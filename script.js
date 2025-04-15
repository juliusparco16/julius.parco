/**
 * Portfolio Website Script
 *
 * Includes:
 * - Smooth scrolling for internal links
 * - Fade-in animations on scroll using Intersection Observer
 * - Interactive constellation background animation on Canvas
 */

document.addEventListener('DOMContentLoaded', () => {

    // --- Smooth Scroll ---
    // Adds smooth scrolling to internal links (e.g., #about, #skills)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default anchor behavior
            const targetId = this.getAttribute('href');
            // Ensure targetId is a valid selector (not just "#")
            if (targetId && targetId.length > 1) {
                try {
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        targetElement.scrollIntoView({
                            behavior: 'smooth', // Enable smooth scrolling
                            block: 'start'      // Align target element to the top
                        });
                    } else {
                        console.warn(`Smooth scroll target element not found for selector: ${targetId}`);
                    }
                } catch (error) {
                    // Catch potential errors from invalid selectors
                    console.error(`Error finding smooth scroll target element with selector: ${targetId}`, error);
                }
            }
        });
    });

    // --- Intersection Observer for Fade-in Animations ---
    const fadeElements = document.querySelectorAll('.fade-in');

    // Check if IntersectionObserver is supported by the browser
    if ('IntersectionObserver' in window) {
        // Callback function executed when observed elements intersect
        const fadeInOnScroll = (entries, observer) => {
            entries.forEach(entry => {
                // If the element is currently intersecting with the viewport
                if (entry.isIntersecting) {
                    // Add the 'visible' class to trigger the CSS fade-in transition
                    entry.target.classList.add('visible');
                    // Stop observing the element once it has become visible
                    observer.unobserve(entry.target);
                }
            });
        };

        // Create a new Intersection Observer instance
        const observer = new IntersectionObserver(fadeInOnScroll, {
            root: null, // Observe relative to the viewport
            threshold: 0.1, // Trigger when 10% of the element is visible
            // rootMargin: '0px 0px -50px 0px' // Optional: trigger slightly before it's fully in view
        });

        // Start observing each element with the 'fade-in' class
        fadeElements.forEach(el => {
            observer.observe(el);
        });
    } else {
        // Fallback for browsers that don't support IntersectionObserver
        console.warn("IntersectionObserver not supported. Fade-in animations disabled.");
        // Make all elements visible immediately as a fallback
        fadeElements.forEach(el => el.classList.add('visible'));
    }


    // --- Constellation Network Canvas Animation ---
    const canvas = document.getElementById('constellationCanvas');

    // Only proceed if the canvas element exists
    if (canvas) {
        try {
            const ctx = canvas.getContext('2d');
            // Ensure the context was successfully created
            if (!ctx) { throw new Error("Could not get 2D context from canvas."); }

            let width = canvas.width = window.innerWidth;
            let height = canvas.height = window.innerHeight;

            // --- Configuration ---
            const particleCount = 100;          // Number of particles
            const maxDistance = 120;            // Max distance for lines between particles
            const mouseInteractionDistance = 150; // Max distance for lines to mouse
            const particleSpeed = 0.5;          // Base speed of particles
            const particleRadius = 2;           // Size of particles

            // Attempt to get colors from CSS variables, provide fallbacks
            const rootStyle = getComputedStyle(document.documentElement);
            const particleColor = rootStyle.getPropertyValue('--particle-color').trim() || 'rgba(100, 255, 218, 0.5)';
            const lineColor = rootStyle.getPropertyValue('--line-color').trim() || 'rgba(100, 255, 218, 0.1)';
            // --- End Configuration ---

            let particles = []; // Array to hold particle objects
            let mouse = { x: null, y: null }; // Object to store mouse coordinates
            let animationFrameId = null; // ID for cancelling animation frame

            // --- Particle Class ---
            class Particle {
                constructor(x, y) {
                    this.x = x;
                    this.y = y;
                    // Assign random initial velocity within +/- particleSpeed
                    this.vx = (Math.random() - 0.5) * particleSpeed * 2;
                    this.vy = (Math.random() - 0.5) * particleSpeed * 2;
                    this.radius = particleRadius;
                }

                // Update particle position based on velocity
                update() {
                    this.x += this.vx;
                    this.y += this.vy;

                    // Boundary collision detection - bounce off edges
                    if (this.x - this.radius < 0 || this.x + this.radius > width) this.vx *= -1;
                    if (this.y - this.radius < 0 || this.y + this.radius > height) this.vy *= -1;
                }

                // Draw the particle on the canvas
                draw() {
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                    ctx.fillStyle = particleColor;
                    ctx.fill();
                }
            }

            // --- Initialization Function ---
            // Creates the initial set of particles
            function init() {
                particles = []; // Clear existing particles
                // Ensure width/height are up-to-date before creating particles
                width = canvas.width = window.innerWidth;
                height = canvas.height = window.innerHeight;
                for (let i = 0; i < particleCount; i++) {
                    // Create particles at random positions within the canvas
                    let x = Math.random() * width;
                    let y = Math.random() * height;
                    particles.push(new Particle(x, y));
                }
            }

            // --- Calculate Distance ---
            // Helper function to find distance between two points (particles or mouse)
            function getDistance(p1, p2) {
                const dx = p1.x - p2.x;
                const dy = p1.y - p2.y;
                return Math.sqrt(dx * dx + dy * dy); // Pythagorean theorem
            }

            // --- Draw Connections ---
            // Draws lines between nearby particles and between particles and the mouse
            function drawLines() {
                let p1, p2, distance;
                // Iterate through all unique pairs of particles
                for (let i = 0; i < particles.length; i++) {
                    p1 = particles[i];
                    for (let j = i + 1; j < particles.length; j++) {
                        p2 = particles[j];
                        distance = getDistance(p1, p2);

                        // If distance is less than the threshold, draw a line
                        if (distance < maxDistance) {
                            // Calculate line opacity based on distance (closer = more opaque)
                            const opacity = 1 - (distance / maxDistance);
                            // Dynamically create the rgba color string with calculated opacity
                            const rgbaColor = lineColor.replace(/[\d\.]+\)$/g, `${opacity.toFixed(2)})`);

                            ctx.beginPath();
                            ctx.moveTo(p1.x, p1.y);
                            ctx.lineTo(p2.x, p2.y);
                            ctx.strokeStyle = rgbaColor; // Use calculated color
                            ctx.lineWidth = 0.5; // Style for inter-particle lines
                            ctx.stroke();
                        }
                    }

                    // Draw lines from particles to the mouse cursor if it's within range
                    if (mouse.x !== null && mouse.y !== null) {
                        distance = getDistance(p1, mouse);
                        if (distance < mouseInteractionDistance) {
                            const opacity = 1 - (distance / mouseInteractionDistance);
                            const rgbaColor = lineColor.replace(/[\d\.]+\)$/g, `${opacity.toFixed(2)})`);

                            ctx.beginPath();
                            ctx.moveTo(p1.x, p1.y);
                            ctx.lineTo(mouse.x, mouse.y);
                            ctx.strokeStyle = rgbaColor;
                            ctx.lineWidth = 1; // Style for mouse interaction lines
                            ctx.stroke();
                        }
                    }
                }
            }

            // --- Animation Loop ---
            // The main function that runs on every frame
            function animate() {
                // Clear the entire canvas
                ctx.clearRect(0, 0, width, height);

                // Update and draw each particle
                particles.forEach(p => {
                    p.update();
                    p.draw();
                });

                // Draw the connecting lines
                drawLines();

                // Request the browser to run this function again for the next frame
                animationFrameId = requestAnimationFrame(animate);
            }

            // --- Event Listeners ---
            // Update mouse coordinates on mouse movement
            window.addEventListener('mousemove', (event) => {
                mouse.x = event.clientX;
                mouse.y = event.clientY;
            });
            // Reset mouse coordinates when the cursor leaves the window
            window.addEventListener('mouseout', () => {
                mouse.x = null;
                mouse.y = null;
            });

            // Handle window resize events
            let resizeTimeout;
            window.addEventListener('resize', () => {
                // Cancel the current animation frame to prevent glitches during resize
                if (animationFrameId) { cancelAnimationFrame(animationFrameId); animationFrameId = null; }
                // Debounce the resize event to avoid excessive calculations
                clearTimeout(resizeTimeout);
                resizeTimeout = setTimeout(() => {
                    // Re-initialize canvas dimensions and particles
                    init();
                    // Restart the animation loop if it's not already running
                    if (!animationFrameId) { animate(); }
                }, 250); // Wait 250ms after the last resize event before re-initializing
            });

            // --- Start the Animation ---
            init(); // Create initial particles
            animate(); // Begin the animation loop

        } catch (error) {
             // Log errors and optionally hide the canvas
             console.error("Error initializing constellation canvas animation:", error);
             if (canvas) { canvas.style.display = 'none'; }
        }
    } else {
        // Log a warning if the canvas element isn't found
        console.warn("Canvas element with id 'constellationCanvas' not found.");
    }

}); // End DOMContentLoaded listener
