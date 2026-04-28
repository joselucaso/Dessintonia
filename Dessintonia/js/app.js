/**
 * SINTONIA WEB - Scalable Refactor
 * Centralized configuration and game engine
 */

const CONFIG = {
    // Target Zone Proportions (Original Rules)
    TARGET_ZONES: [
        { id: 'zone-2', range: 17.5, points: 2, color: 'var(--target-2)' },
        { id: 'zone-3', range: 7.5,  points: 3, color: 'var(--target-3)' },
        { id: 'zone-4', range: 2.2,  points: 4, color: 'var(--target-4)' }
    ],
    OPPONENT_POINTS: 1,
    DIAL: {
        radius: 140,
        centerX: 200,
        centerY: 180,
        minAngle: 17.5,
        maxAngle: 162.5
    },
    FALLBACK_CARDS: [
        { "left": "Quente", "right": "Frio" },
        { "left": "Inútil", "right": "Útil" },
        { "left": "Leve", "right": "Pesado" },
        { "left": "Fácil", "right": "Difícil" }
    ]
};

class SintoniaGame {
    constructor() {
        this.cards = [];
        this.currentCard = null;
        this.targetAngle = 90;
        this.markerAngle = 90;
        this.opponentGuess = null;
        this.state = 'guessing'; // 'guessing' | 'revealed'
        this.teamScores = { 1: 0, 2: 0 };
        this.currentTeam = 1; // 1 or 2
        this.sounds = {
            fail: new Audio('audio/faaah.mp3'),
            success: new Audio('audio/levelup.mp3')
        };
        
        // Game Feel elements
        this.flashOverlay = document.createElement('div');
        this.flashOverlay.className = 'flash-overlay';
        document.body.appendChild(this.flashOverlay);

        this.init();
    }

    async init() {
        await this.loadCards();
        this.setupDOMReferences();
        this.setupEventListeners();
        this.drawScale();
        this.newRound();
    }

    async loadCards() {
        try {
            const response = await fetch('data/cards.json');
            this.cards = response.ok ? await response.json() : CONFIG.FALLBACK_CARDS;
        } catch (e) {
            this.cards = CONFIG.FALLBACK_CARDS;
        }
    }

    setupDOMReferences() {
        this.dom = {
            svg: document.getElementById('dial-svg'),
            markerGroup: document.getElementById('marker-group'),
            screenPath: document.getElementById('screen-path'),
            targetGroup: document.getElementById('target-group'),
            scaleGroup: document.getElementById('scale-group'),
            opponentGroup: document.getElementById('opponent-guess-group'),
            leftConcept: document.getElementById('left-concept'),
            rightConcept: document.getElementById('right-concept'),
            scoreValue: document.querySelector('.score-value'),
            scoreDisplay: document.getElementById('score-display'),
            feedbackText: document.getElementById('feedback-text'),
            btnPeek: document.getElementById('btn-peek'),
            btnReveal: document.getElementById('btn-reveal'),
            btnRefresh: document.getElementById('btn-next'),
            btnGuessLeft: document.getElementById('btn-guess-left'),
            btnGuessRight: document.getElementById('btn-guess-right'),
            opponentControls: document.getElementById('opponent-controls'),
            team1Score: document.querySelector('#score-team-1 .value'),
            team2Score: document.querySelector('#score-team-2 .value'),
            team1Container: document.getElementById('score-team-1'),
            team2Container: document.getElementById('score-team-2')
        };
    }

    setupEventListeners() {
        // Dragging & Clicking
        let isDragging = false;
        
        const startAction = (e) => {
            if (this.state === 'revealed') return;
            isDragging = true;
            updateFromEvent(e);
        };

        const updateFromEvent = (e) => {
            if (!isDragging || this.state === 'revealed') return;
            const angle = this.getAngleFromEvent(e);
            this.updateMarker(angle);
        };

        const stopAction = () => isDragging = false;

        this.dom.svg.addEventListener('mousedown', startAction);
        window.addEventListener('mousemove', updateFromEvent);
        window.addEventListener('mouseup', stopAction);

        this.dom.svg.addEventListener('touchstart', startAction, { passive: false });
        window.addEventListener('touchmove', updateFromEvent, { passive: false });
        window.addEventListener('touchend', stopAction);

        // Peek (Hold logic)
        const startPeek = () => { if (this.state !== 'revealed') this.dom.screenPath.style.opacity = '0.3'; };
        const endPeek = () => { if (this.state !== 'revealed') this.dom.screenPath.style.opacity = '1'; };

        this.dom.btnPeek.addEventListener('mousedown', startPeek);
        this.dom.btnPeek.addEventListener('mouseup', endPeek);
        this.dom.btnPeek.addEventListener('mouseleave', endPeek);
        this.dom.btnPeek.addEventListener('touchstart', (e) => { e.preventDefault(); startPeek(); });
        this.dom.btnPeek.addEventListener('touchend', endPeek);

        // Game Actions
        this.dom.btnReveal.addEventListener('click', () => this.reveal());
        this.dom.btnRefresh.addEventListener('click', () => this.newRound());
        
        this.dom.btnGuessLeft.addEventListener('click', () => this.setOpponentGuess('left'));
        this.dom.btnGuessRight.addEventListener('click', () => this.setOpponentGuess('right'));
    }

    newRound() {
        // Toggle team turn
        this.currentTeam = this.state === 'revealed' ? (this.currentTeam === 1 ? 2 : 1) : this.currentTeam;
        
        this.state = 'guessing';
        this.opponentGuess = null;
        
        // UI Reset
        this.dom.targetGroup.innerHTML = '';
        this.dom.targetGroup.style.opacity = '0'; // Hide completely while screen closes
        this.dom.screenPath.style.opacity = '1'; // Close screen smoothly
        this.dom.scoreValue.textContent = '0';
        this.dom.scoreDisplay.style.color = 'var(--text-secondary)';
        this.dom.scoreDisplay.style.textShadow = 'none';
        this.dom.feedbackText.textContent = '';
        this.dom.opponentGroup.style.display = 'none';
        this.dom.btnGuessLeft.classList.remove('active');
        this.dom.btnGuessRight.classList.remove('active');
        this.dom.opponentControls.style.opacity = '1';
        this.dom.opponentControls.style.pointerEvents = 'auto';
        this.dom.btnPeek.disabled = false;
        this.dom.btnReveal.disabled = false;

        // Update Turn UI
        this.dom.team1Container.classList.toggle('active', this.currentTeam === 1);
        this.dom.team2Container.classList.toggle('active', this.currentTeam === 2);

        // New Content
        this.currentCard = this.cards[Math.floor(Math.random() * this.cards.length)];
        this.dom.leftConcept.textContent = this.currentCard.left;
        this.dom.rightConcept.textContent = this.currentCard.right;
        
        this.targetAngle = CONFIG.DIAL.minAngle + Math.random() * (CONFIG.DIAL.maxAngle - CONFIG.DIAL.minAngle);
        this.drawTarget(this.targetAngle);
        
        // Wait for the screen to fully close before revealing the target behind it
        setTimeout(() => {
            this.dom.targetGroup.style.opacity = '1';
        }, 500);
        
        // Reset pointer style
        const pointer = this.dom.markerGroup.querySelector('.marker-line-main');
        pointer.style.stroke = '#ff3b3b';
        pointer.style.filter = 'none';
        
        this.updateMarker(90);
    }

    reveal() {
        this.state = 'revealed';
        this.dom.screenPath.style.opacity = '0';
        
        const score = this.calculateScore();
        
        // Add score to current team
        this.teamScores[this.currentTeam] += score;
        this.dom.scoreValue.textContent = score;
        
        let feedback = this.generateFeedbackText(score);
        
        // Check opponent guess
        if (this.opponentGuess) {
            const otherTeam = this.currentTeam === 1 ? 2 : 1;
            const isActuallyLeft = this.targetAngle < this.markerAngle;
            const isActuallyRight = this.targetAngle > this.markerAngle;
            const won = (this.opponentGuess === 'left' && isActuallyLeft) || (this.opponentGuess === 'right' && isActuallyRight);
            
            if (won && score < 4) {
                this.teamScores[otherTeam] += CONFIG.OPPONENT_POINTS;
                feedback += ` (+${CONFIG.OPPONENT_POINTS} ponto para o time adversário!)`;
            } else if (!won && score < 4) {
                feedback += " (Adversários erraram o palpite.)";
            }
        }

        this.updateScoreUI();
        this.dom.feedbackText.textContent = feedback;
        
        this.applyScoreVisuals(score);

        this.dom.btnPeek.disabled = true;
        this.dom.btnReveal.disabled = true;
        this.dom.opponentControls.style.opacity = '0.5';
        this.dom.opponentControls.style.pointerEvents = 'none';
    }

    updateScoreUI() {
        this.dom.team1Score.textContent = this.teamScores[1];
        this.dom.team2Score.textContent = this.teamScores[2];
    }

    calculateScore() {
        const diff = Math.abs(this.markerAngle - this.targetAngle);
        if (diff <= 2.2) return 4;
        if (diff <= 7.5) return 3;
        if (diff <= 17.5) return 2;
        return 0;
    }

    generateFeedbackText(score) {
        let text = "";
        switch(score) {
            case 4: text = "SINTONIA TOTAL! +4"; break;
            case 3: text = "MUITO BOM! +3"; break;
            case 2: text = "BOM TRABALHO! +2"; break;
            default: text = "FORA DO ALVO!";
        }

        return text;
    }

    applyScoreVisuals(score) {
        const colors = { 4: 'var(--target-4)', 3: 'var(--target-3)', 2: 'var(--target-2)' };
        const pointer = this.dom.markerGroup.querySelector('.marker-line-main');
        
        if (colors[score]) {
            // Apply glow and color to pointer
            pointer.style.stroke = colors[score];
            pointer.style.filter = 'drop-shadow(0 0 15px ' + colors[score] + ')';
            
            // 1. NEON FLASHBANG (Team Color)
            const teamColor = this.currentTeam === 1 ? 'var(--color-red)' : 'var(--color-green)';
            this.flashOverlay.style.background = `radial-gradient(circle at 50% 50%, ${teamColor} 0%, transparent 80%)`;
            this.flashOverlay.classList.add('active');
            
            // 2. SCREEN SHAKE (Scales with score)
            const shakeClass = score === 4 ? 'shake-extreme' : 'shake-intense';
            document.body.classList.add(shakeClass);
            
            // 3. MEGA SCORE POP
            this.dom.scoreDisplay.style.color = colors[score];
            
            // Reset animation by removing and re-adding class
            this.dom.scoreDisplay.classList.remove('mega-highlight', 'mega-highlight-epic');
            void this.dom.scoreDisplay.offsetWidth; // Trigger reflow
            this.dom.scoreDisplay.classList.add(score === 4 ? 'mega-highlight-epic' : 'mega-highlight');

            // Play success sound
            this.sounds.success.currentTime = 0;
            this.sounds.success.play().catch(e => console.log("Audio play prevented by browser."));
            
            // Cleanup Flash and Shake fast, so CSS transitions handle the fade
            setTimeout(() => {
                this.flashOverlay.classList.remove('active');
                document.body.classList.remove(shakeClass);
            }, 50);
            
            // Cleanup pointer and score pop later
            setTimeout(() => {
                this.dom.scoreDisplay.classList.remove('mega-highlight', 'mega-highlight-epic');
                pointer.style.filter = 'none';
            }, 2500);
        } else {
            // Play fail sound if score is 0
            this.sounds.fail.currentTime = 0;
            this.sounds.fail.play().catch(e => console.log("Audio play prevented by browser."));
        }
    }

    setOpponentGuess(side) {
        if (this.state === 'revealed') return;
        this.opponentGuess = side;
        this.dom.opponentGroup.style.display = 'block';
        this.dom.btnGuessLeft.classList.toggle('active', side === 'left');
        this.dom.btnGuessRight.classList.toggle('active', side === 'right');
        this.updateOpponentArrow();
    }

    updateMarker(angle) {
        this.markerAngle = angle;
        this.dom.markerGroup.setAttribute('transform', `rotate(${angle - 90}, 200, 180)`);
        if (this.opponentGuess) this.updateOpponentArrow();
    }

    updateOpponentArrow() {
        const offset = this.opponentGuess === 'left' ? -25 : 25;
        this.dom.opponentGroup.setAttribute('transform', `rotate(${this.markerAngle + offset - 90}, 200, 180)`);
    }

    getAngleFromEvent(e) {
        const pt = this.dom.svg.createSVGPoint();
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        pt.x = clientX; pt.y = clientY;
        
        const svgP = pt.matrixTransform(this.dom.svg.getScreenCTM().inverse());
        const dx = svgP.x - CONFIG.DIAL.centerX;
        const dy = CONFIG.DIAL.centerY - svgP.y;
        
        let ourAngle = 180 - (Math.atan2(dy, dx) * 180 / Math.PI);
        return Math.max(0, Math.min(180, ourAngle));
    }

    drawTarget(centerAngle) {
        this.dom.targetGroup.innerHTML = '';
        const bands = [
            { start: centerAngle - 17.5, end: centerAngle - 7.5, color: 'var(--target-2)', pts: '2' },
            { start: centerAngle - 7.5, end: centerAngle - 2.2, color: 'var(--target-3)', pts: '3' },
            { start: centerAngle - 2.2, end: centerAngle + 2.2, color: 'var(--target-4)', pts: '4' },
            { start: centerAngle + 2.2, end: centerAngle + 7.5, color: 'var(--target-3)', pts: '3' },
            { start: centerAngle + 7.5, end: centerAngle + 17.5, color: 'var(--target-2)', pts: '2' }
        ];

        bands.forEach(band => {
            const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
            path.setAttribute('d', this.describeArc(200, 180, 140, Math.max(0, band.start), Math.min(180, band.end)));
            path.setAttribute('fill', 'none');
            path.setAttribute('stroke', band.color);
            path.setAttribute('stroke-width', '40');
            path.setAttribute('stroke-linecap', 'butt');
            this.dom.targetGroup.appendChild(path);

            const mid = (Math.max(0, band.start) + Math.min(180, band.end)) / 2;
            const pos = this.polarToCartesian(200, 180, 140, mid);
            const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
            text.setAttribute('x', pos.x); text.setAttribute('y', pos.y);
            text.setAttribute('text-anchor', 'middle');
            text.setAttribute('dominant-baseline', 'central');
            text.setAttribute('fill', '#000');
            text.setAttribute('font-family', "'Outfit', sans-serif");
            text.setAttribute('font-size', '9px');
            text.setAttribute('font-weight', '500');
            text.setAttribute('style', 'pointer-events: none;');
            text.textContent = band.pts;
            this.dom.targetGroup.appendChild(text);
        });
    }

    drawScale() {
        this.dom.scaleGroup.innerHTML = '';
        for (let i = 10; i < 180; i += 10) {
            const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
            const p1 = this.polarToCartesian(200, 180, 155, i);
            const p2 = this.polarToCartesian(200, 180, 160, i);
            line.setAttribute('x1', p1.x); line.setAttribute('y1', p1.y);
            line.setAttribute('x2', p2.x); line.setAttribute('y2', p2.y);
            line.setAttribute('stroke', 'rgba(255,255,255,0.2)');
            line.setAttribute('stroke-width', '1');
            this.dom.scaleGroup.appendChild(line);
        }
    }

    polarToCartesian(centerX, centerY, radius, angleInDegrees) {
        const rad = (180 - angleInDegrees) * Math.PI / 180.0;
        return { x: centerX + (radius * Math.cos(rad)), y: centerY - (radius * Math.sin(rad)) };
    }

    describeArc(x, y, radius, startAngle, endAngle) {
        const start = this.polarToCartesian(x, y, radius, startAngle);
        const end = this.polarToCartesian(x, y, radius, endAngle);
        const largeArc = Math.abs(endAngle - startAngle) <= 180 ? "0" : "1";
        return `M ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArc} 1 ${end.x} ${end.y}`;
    }
}

// Start Game
window.addEventListener('DOMContentLoaded', () => new SintoniaGame());
