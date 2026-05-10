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
        let score = 0;

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

        const keys = {};
        let lastShootTime = 0;
        const shootCooldown = 100;

        const handleKeyDown = (e) => {
            keys[e.key] = true;
            if (e.key === " ") e.preventDefault();
        };

        const handleKeyUp = (e) => {
            keys[e.key] = false;
        };

        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyUp);
        window.addEventListener("resize", updateCanvasSize);

        const bugImage = new Image();
        bugImage.src = bugSvg;

        let animationId;

        function update() {
            if (keys["ArrowLeft"] && player.x > 0) player.x -= player.speed;
            if (keys["ArrowRight"] && player.x + player.width < canvas.width) player.x += player.speed;

            if (keys[" "] && Date.now() - lastShootTime > shootCooldown) {
                bullets.push({ x: player.x + player.width / 2, y: player.y, width: 3, height: 10, speed: 4 });
                lastShootTime = Date.now();
                keys[" "] = false;
            }

            bullets = bullets.filter(bullet => {
                bullet.y -= bullet.speed;
                return bullet.y > 0;
            });

            enemies.forEach(enemy => {
                enemy.x += enemy.speedX;
                if (enemy.x + enemy.width > canvas.width || enemy.x < 0) enemy.speedX *= -1;
            });

            bullets = bullets.filter(bullet => {
                let hit = false;
                enemies = enemies.filter(enemy => {
                    if (
                        bullet.x < enemy.x + enemy.width &&
                        bullet.x + bullet.width > enemy.x &&
                        bullet.y < enemy.y + enemy.height &&
                        bullet.y + bullet.height > enemy.y
                    ) {
                        hit = true;
                        score++;
                        return false;
                    }
                    return true;
                });
                return !hit;
            });

            if (enemies.length === 0) {
                enemySpeed = Math.min(enemySpeed + 0.5, 2.5);
                spawnEnemies();
            }
        }

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = "#FCECC9";
            ctx.font = "12px monospace";
            ctx.fillText(`Score: ${score}`, canvas.width - 70, 16);

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
            animationId = requestAnimationFrame(gameLoop);
        }

        gameLoop();

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener("resize", updateCanvasSize);
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("keyup", handleKeyUp);
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
