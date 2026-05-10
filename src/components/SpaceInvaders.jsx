import React, { useEffect, useRef, useState } from "react";

const W = 260;
const H = 230;

const INVADER = [
  [0,0,1,0,0,0,1,0,0],
  [0,0,0,1,0,1,0,0,0],
  [0,0,1,1,1,1,1,0,0],
  [0,1,1,0,1,0,1,1,0],
  [1,1,1,1,1,1,1,1,1],
  [1,0,1,1,1,1,1,0,1],
  [1,0,1,0,0,0,1,0,1],
  [0,0,0,1,0,1,0,0,0],
];

const ROW_COLORS = ['#c77dff', '#00d4ff', '#ff6b9d'];

const EW = 22, EH = 16, ECOLS = 5, EROWS = 3, EGX = 10, EGY = 10;

const makeEnemies = (wave) => {
  const startX = (W - (ECOLS * (EW + EGX) - EGX)) / 2;
  const speed = 0.7 + wave * 0.18;
  return Array.from({ length: EROWS * ECOLS }, (_, i) => {
    const row = Math.floor(i / ECOLS), col = i % ECOLS;
    return { x: startX + col * (EW + EGX), y: 28 + row * (EH + EGY), w: EW, h: EH, row, vx: speed };
  });
};

const SpaceInvaders = () => {
  const canvasRef = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = W;
    canvas.height = H;

    const stars = Array.from({ length: 40 }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      r: Math.random() * 1.2 + 0.3,
      phase: Math.random() * Math.PI * 2,
    }));

    const player = { x: W / 2 - 14, y: H - 28, w: 28, h: 18, speed: 4.5 };

    let bullets = [], eBullets = [], enemies = [], particles = [];
    let score = 0, lives = 3, wave = 1, frame = 0;
    let gameOver = false;
    let lastShoot = 0, lastEShoot = 0;
    const SHOOT_CD = 200;

    enemies = makeEnemies(wave);

    const restart = () => {
      score = 0; lives = 3; wave = 1; gameOver = false;
      bullets = []; eBullets = []; particles = [];
      player.x = W / 2 - 14;
      enemies = makeEnemies(wave);
    };

    const keys = {};
    const onDown = (e) => {
      keys[e.key] = true;
      if (e.key === ' ') e.preventDefault();
      setStarted(true);
      if (gameOver && e.key === ' ') restart();
    };
    const onUp = (e) => { keys[e.key] = false; };
    window.addEventListener('keydown', onDown);
    window.addEventListener('keyup', onUp);

    const spawnParticles = (x, y, color) => {
      for (let i = 0; i < 10; i++) {
        const a = (i / 10) * Math.PI * 2;
        const s = Math.random() * 2.5 + 0.8;
        particles.push({ x, y, vx: Math.cos(a) * s, vy: Math.sin(a) * s,
          life: 1, decay: 0.045 + Math.random() * 0.03, r: Math.random() + 0.5, color });
      }
    };

    const drawStars = () => {
      stars.forEach(s => {
        const a = 0.25 + Math.sin(frame * 0.012 + s.phase) * 0.2;
        ctx.fillStyle = `rgba(255,255,255,${a})`;
        ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2); ctx.fill();
      });
    };

    const drawPlayer = () => {
      const { x, y, w, h } = player;
      ctx.save();
      ctx.shadowColor = '#00d4ff'; ctx.shadowBlur = 14;
      ctx.fillStyle = '#00d4ff';
      ctx.beginPath();
      ctx.moveTo(x + w / 2, y);
      ctx.lineTo(x + w * 0.88, y + h);
      ctx.lineTo(x + w * 0.62, y + h * 0.62);
      ctx.lineTo(x + w / 2, y + h * 0.82);
      ctx.lineTo(x + w * 0.38, y + h * 0.62);
      ctx.lineTo(x + w * 0.12, y + h);
      ctx.closePath(); ctx.fill();
      // engine glow
      ctx.shadowBlur = 10;
      ctx.fillStyle = `rgba(0,212,255,${0.35 + Math.sin(frame * 0.2) * 0.2})`;
      ctx.beginPath(); ctx.ellipse(x + w / 2, y + h + 4, 5, 3, 0, 0, Math.PI * 2); ctx.fill();
      ctx.restore();
    };

    const drawInvader = (e) => {
      const color = ROW_COLORS[e.row % ROW_COLORS.length];
      const pw = e.w / 9, ph = e.h / 8;
      ctx.save();
      ctx.shadowColor = color; ctx.shadowBlur = 5;
      ctx.fillStyle = color;
      INVADER.forEach((row, ry) =>
        row.forEach((px, cx) => {
          if (px) ctx.fillRect(e.x + cx * pw, e.y + ry * ph, pw - 0.3, ph - 0.3);
        })
      );
      ctx.restore();
    };

    const drawLives = () => {
      ctx.save();
      ctx.shadowColor = '#00d4ff'; ctx.shadowBlur = 8; ctx.fillStyle = '#00d4ff';
      for (let i = 0; i < lives; i++) {
        const lx = 8 + i * 16, ly = 8;
        ctx.beginPath();
        ctx.moveTo(lx + 6, ly);
        ctx.lineTo(lx + 12, ly + 10);
        ctx.lineTo(lx + 7, ly + 7);
        ctx.lineTo(lx + 6, ly + 9);
        ctx.lineTo(lx + 5, ly + 7);
        ctx.lineTo(lx, ly + 10);
        ctx.closePath(); ctx.fill();
      }
      ctx.restore();
    };

    const drawHUD = () => {
      drawLives();
      ctx.save();
      ctx.shadowColor = '#00d4ff'; ctx.shadowBlur = 6;
      ctx.fillStyle = '#00d4ff';
      ctx.font = 'bold 10px monospace';
      ctx.textAlign = 'right';
      ctx.fillText(String(score).padStart(5, '0'), W - 8, 14);
      ctx.shadowBlur = 0;
      ctx.fillStyle = 'rgba(0,212,255,0.4)';
      ctx.font = '8px monospace';
      ctx.fillText(`W${wave}`, W - 8, 24);
      ctx.restore();
    };

    const drawGameOver = () => {
      ctx.fillStyle = 'rgba(6,12,26,0.9)';
      ctx.fillRect(0, 0, W, H);
      ctx.save();
      ctx.textAlign = 'center';
      ctx.shadowColor = '#00d4ff'; ctx.shadowBlur = 20;
      ctx.fillStyle = '#00d4ff';
      ctx.font = 'bold 16px monospace';
      ctx.fillText('GAME OVER', W / 2, H / 2 - 26);
      ctx.shadowBlur = 0;
      ctx.fillStyle = '#8ba3c1';
      ctx.font = '10px monospace';
      ctx.fillText(`SCORE  ${String(score).padStart(5,'0')}`, W / 2, H / 2 - 4);
      ctx.fillText(`WAVE   ${wave}`, W / 2, H / 2 + 12);
      if (frame % 70 < 48) {
        ctx.shadowColor = '#00d4ff'; ctx.shadowBlur = 8;
        ctx.fillStyle = '#00d4ff';
        ctx.font = '9px monospace';
        ctx.fillText('SPACE TO RESTART', W / 2, H / 2 + 34);
      }
      ctx.restore();
    };

    let animId;
    const loop = () => {
      animId = requestAnimationFrame(loop);
      frame++;

      ctx.fillStyle = '#060c1a';
      ctx.fillRect(0, 0, W, H);
      drawStars();

      if (gameOver) { drawGameOver(); return; }

      // Player move
      if (keys['ArrowLeft'] && player.x > 0) player.x -= player.speed;
      if (keys['ArrowRight'] && player.x + player.w < W) player.x += player.speed;

      // Player shoot
      if (keys[' '] && Date.now() - lastShoot > SHOOT_CD) {
        bullets.push({ x: player.x + player.w / 2 - 1, y: player.y, w: 2, h: 10, speed: 7 });
        lastShoot = Date.now();
        keys[' '] = false;
      }

      // Move bullets
      bullets = bullets.filter(b => { b.y -= b.speed; return b.y > 0; });

      // Move enemies
      let hitWall = false;
      enemies.forEach(e => {
        e.x += e.vx;
        if (e.x + e.w > W - 2 || e.x < 2) hitWall = true;
      });
      if (hitWall) {
        enemies.forEach(e => { e.vx *= -1; e.y += 10; });
        if (enemies.some(e => e.y + e.h >= player.y - 4)) gameOver = true;
      }

      // Enemy shoot
      const eShootInterval = Math.max(500, 1800 - wave * 100 - (15 - enemies.length) * 50);
      if (Date.now() - lastEShoot > eShootInterval && enemies.length) {
        const shooter = enemies[Math.floor(Math.random() * enemies.length)];
        eBullets.push({
          x: shooter.x + shooter.w / 2 - 1,
          y: shooter.y + shooter.h,
          w: 2, h: 8, speed: 2.5 + wave * 0.15,
          color: ROW_COLORS[shooter.row],
        });
        lastEShoot = Date.now();
      }
      eBullets = eBullets.filter(b => { b.y += b.speed; return b.y < H; });

      // Player bullet vs enemy
      bullets = bullets.filter(bullet => {
        let hit = false;
        enemies = enemies.filter(e => {
          if (!hit && bullet.x < e.x + e.w && bullet.x + bullet.w > e.x &&
              bullet.y < e.y + e.h && bullet.y + bullet.h > e.y) {
            hit = true;
            score += (EROWS - e.row) * 10;
            spawnParticles(e.x + e.w / 2, e.y + e.h / 2, ROW_COLORS[e.row]);
            return false;
          }
          return true;
        });
        return !hit;
      });

      // Enemy bullet vs player
      eBullets = eBullets.filter(b => {
        const hit = b.x < player.x + player.w && b.x + b.w > player.x &&
                    b.y < player.y + player.h && b.y + b.h > player.y;
        if (hit) {
          lives--;
          spawnParticles(player.x + player.w / 2, player.y + player.h / 2, '#00d4ff');
          if (lives <= 0) gameOver = true;
        }
        return !hit;
      });

      // Next wave
      if (enemies.length === 0) {
        wave++;
        bullets = []; eBullets = [];
        enemies = makeEnemies(wave);
      }

      // Update & draw particles
      particles = particles.filter(p => {
        p.x += p.vx; p.y += p.vy; p.vy += 0.06; p.life -= p.decay; return p.life > 0;
      });
      particles.forEach(p => {
        ctx.save(); ctx.globalAlpha = p.life;
        ctx.shadowColor = p.color; ctx.shadowBlur = 5; ctx.fillStyle = p.color;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
        ctx.restore();
      });

      // Draw enemies
      enemies.forEach(drawInvader);

      // Draw enemy bullets
      eBullets.forEach(b => {
        ctx.save(); ctx.shadowColor = b.color; ctx.shadowBlur = 8;
        ctx.fillStyle = b.color; ctx.fillRect(b.x, b.y, b.w, b.h); ctx.restore();
      });

      // Draw player bullets
      bullets.forEach(b => {
        ctx.save(); ctx.shadowColor = '#ffffff'; ctx.shadowBlur = 10;
        ctx.fillStyle = '#ffffff'; ctx.fillRect(b.x, b.y, b.w, b.h); ctx.restore();
      });

      drawPlayer();
      drawHUD();
    };

    loop();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('keydown', onDown);
      window.removeEventListener('keyup', onUp);
    };
  }, []);

  return (
    <div className="si-wrapper">
      {!started && <span className="si-play-label">▶ play</span>}
      <canvas ref={canvasRef} className="si-canvas" />
    </div>
  );
};

export default SpaceInvaders;
