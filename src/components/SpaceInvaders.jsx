import React, { useEffect, useRef, useState } from "react";
import bugSvg from "../assets/bug.svg";

const SpaceInvaders = () => {
    const canvasRef = useRef(null);
    const [playing, setPlaying] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        const updateCanvasSize = () => {
            canvas.width = Math.min(240, window.innerWidth * 0.22);
            canvas.height = 180;
        };

        updateCanvasSize();

        const player = {
            x: canvas.width / 2 - 15,
            y: canvas.height - 20,
            width: 30,
            height: 10,
            color: "#00d4ff",
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
                        x: col * 42 + 10,
                        y: row * 28 + 14,
                        width: 18,
                        height: 18,
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
            setPlaying(true);
        };

        const handleKeyUp = (e) => { keys[e.key] = false; };

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
                bullets.push({ x: player.x + player.width / 2, y: player.y, width: 2, height: 9, speed: 5 });
                lastShootTime = Date.now();
                keys[" "] = false;
            }

            bullets = bullets.filter(b => { b.y -= b.speed; return b.y > 0; });

            enemies.forEach(e => {
                e.x += e.speedX;
                if (e.x + e.width > canvas.width || e.x < 0) e.speedX *= -1;
            });

            bullets = bullets.filter(bullet => {
                let hit = false;
                enemies = enemies.filter(enemy => {
                    if (
                        bullet.x < enemy.x + enemy.width &&
                        bullet.x + bullet.width > enemy.x &&
                        bullet.y < enemy.y + enemy.height &&
                        bullet.y + bullet.height > enemy.y
                    ) { hit = true; score++; return false; }
                    return true;
                });
                return !hit;
            });

            if (enemies.length === 0) {
                enemySpeed = Math.min(enemySpeed + 0.5, 3);
                spawnEnemies();
            }
        }

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = "rgba(0,212,255,0.6)";
            ctx.font = "10px monospace";
            ctx.fillText(`${score}`, canvas.width - 24, 12);

            ctx.fillStyle = player.color;
            ctx.fillRect(player.x, player.y, player.width, player.height);

            bullets.forEach(b => {
                ctx.fillStyle = "#00d4ff";
                ctx.fillRect(b.x, b.y, b.width, b.height);
            });

            enemies.forEach(e => ctx.drawImage(bugImage, e.x, e.y, e.width, e.height));
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
        <div className="si-wrapper">
            {!playing && (
                <span className="si-play-label">▶ play</span>
            )}
            <canvas ref={canvasRef} className="si-canvas" />
        </div>
    );
};

export default SpaceInvaders;
