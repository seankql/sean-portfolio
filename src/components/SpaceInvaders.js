import React, { useEffect, useRef } from "react";
import bugSvg from "../assets/bug.svg"; 

const SpaceInvaders = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        const updateCanvasSize = () => {
            canvas.width = (window.innerWidth * 0.3333) - 60;
            canvas.height = window.innerHeight * 0.4;
        };

        updateCanvasSize();
        window.addEventListener("resize", updateCanvasSize);

        const player = {
            x: canvas.width / 2 - 15,
            y: canvas.height - 20,
            width: 30,
            height: 10,
            color: "#FCECC9",
            speed: 5
        };

        let bullets = [];
        let enemies = [];
        const enemyRows = 3, enemyCols = 5;
        let enemySpeed = 1;

        const spawnEnemies = () => {
            enemies = [];
            for (let row = 0; row < enemyRows; row++) {
                for (let col = 0; col < enemyCols; col++) {
                    enemies.push({
                        x: col * 50 + 20,
                        y: row * 30 + 20,
                        width: 20,
                        height: 20,
                        speedX: enemySpeed
                    });
                }
            }
        };

        spawnEnemies();

        let keys = {};
        let lastShootTime = 0;
        const shootCooldown = 100;

        window.addEventListener("keydown", (e) => {
            keys[e.key] = true;
            if (e.key === " ") e.preventDefault();
        });

        window.addEventListener("keyup", (e) => {
            keys[e.key] = false;
        });

        const bugImage = new Image();
        bugImage.src = bugSvg;

        function update() {
            if (keys["ArrowLeft"] && player.x > 0) player.x -= player.speed;
            if (keys["ArrowRight"] && player.x + player.width < canvas.width) player.x += player.speed;

            if (keys[" "] && Date.now() - lastShootTime > shootCooldown) {
                bullets.push({ x: player.x + player.width / 2, y: player.y, width: 3, height: 10, speed: 4 });
                lastShootTime = Date.now();
                keys[" "] = false;
            }

            bullets.forEach((bullet, index) => {
                bullet.y -= bullet.speed;
                if (bullet.y < 0) bullets.splice(index, 1);
            });

            enemies.forEach(enemy => {
                enemy.x += enemy.speedX;
                if (enemy.x + enemy.width > canvas.width || enemy.x < 0) enemy.speedX *= -1;
            });

            bullets.forEach((bullet, bIndex) => {
                enemies.forEach((enemy, eIndex) => {
                    if (
                        bullet.x < enemy.x + enemy.width &&
                        bullet.x + bullet.width > enemy.x &&
                        bullet.y < enemy.y + enemy.height &&
                        bullet.y + bullet.height > enemy.y
                    ) {
                        enemies.splice(eIndex, 1);
                        bullets.splice(bIndex, 1);
                    }
                });
            });

            if (enemies.length === 0) {
                enemySpeed = Math.min(enemySpeed + 0.5, 2.5);
                spawnEnemies();
            }
        }

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = player.color;
            ctx.fillRect(player.x, player.y, player.width, player.height);

            bullets.forEach(bullet => {
                ctx.fillStyle = "#FCECC9";
                ctx.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);
            });

            enemies.forEach(enemy => {
                ctx.drawImage(bugImage, enemy.x, enemy.y, enemy.width, enemy.height);
            });
        }

        function gameLoop() {
            update();
            draw();
            requestAnimationFrame(gameLoop);
        }

        gameLoop();

        return () => {
            window.removeEventListener("resize", updateCanvasSize);
            window.removeEventListener("keydown", (e) => (keys[e.key] = true));
            window.removeEventListener("keyup", (e) => (keys[e.key] = false));
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: "fixed",
                left: "30px",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 1000,
                background: "transparent"
            }}
        />
    );
};

export default SpaceInvaders;