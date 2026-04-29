/**
 * DESSINTONIA WEB - Scalable Refactor
 * Centralized configuration and game engine
 */

const DEBUG = false; // Mude para true para ver logs de debug

const CONFIG = {
    TARGET_ZONES: [
        { id: 'zone-2', range: 20, points: 2, color: 'var(--target-2)' },
        { id: 'zone-3', range: 12, points: 3, color: 'var(--target-3)' },
        { id: 'zone-4', range: 4,  points: 4, color: 'var(--target-4)' }
    ],
    OPPONENT_POINTS: 1,
    WIN_SCORE: 10,
    TARGET_MIN_DISTANCE: 30,  // graus mínimos entre alvos consecutivos
    CARD_NO_REPEAT: true,      // impede carta igual consecutiva
    STRIKE_DELAY: 1500,        // ms entre raios no ataque
    TIMINGS: {
        announcementShow: 1200,
        preStrikeFlash:   1000,
        postStrikeReturn:  900,
        winRestartDelay:  2000,
        powerChargeShow:  1500
    },
    DIAL: {
        radius: 140,
        centerX: 200,
        centerY: 180,
        minAngle: 0,
        maxAngle: 180
    },
    TEAMS: [
        { id: 1, name: 'Time Violeta', label: 'TIME VIOLETA', color: 'var(--color-violet)' },
        { id: 2, name: 'Time Ciano',   label: 'TIME CIANO',   color: 'var(--color-cyan)'   }
    ],
    FALLBACK_CARDS: [
        { "left": "Quente", "right": "Frio" },
        { "left": "Inútil", "right": "Útil" },
        { "left": "Chato", "right": "Divertido" },
        { "left": "Lixo", "right": "Arte" },
        { "left": "Cheira mal", "right": "Cheira bem" },
        { "left": "Seco", "right": "Molhado" },
        { "left": "Leve", "right": "Pesado" },
        { "left": "Fácil", "right": "Difícil" },
        { "left": "Subestimado", "right": "Superestimado" },
        { "left": "Gosto Ruim", "right": "Gosto Bom" },
        { "left": "Triste", "right": "Feliz" },
        { "left": "Cansativo", "right": "Relaxante" },
        { "left": "Feio", "right": "Bonito" },
        { "left": "Pobre", "right": "Rico" },
        { "left": "Desconhecido", "right": "Famoso" },
        { "left": "Barato", "right": "Caro" },
        { "left": "Lento", "right": "Rápido" },
        { "left": "Curto", "right": "Longo" },
        { "left": "Suave", "right": "Áspero" },
        { "left": "Silencioso", "right": "Barulhento" },
        { "left": "Filme Ruim", "right": "Filme Bom" },
        { "left": "Comida Saudável", "right": "Junk Food" },
        { "left": "Seguro", "right": "Perigoso" },
        { "left": "Infantil", "right": "Adulto" },
        { "left": "Ciência", "right": "Magia" },
        { "left": "Fraco", "right": "Forte" },
        { "left": "Velho", "right": "Novo" },
        { "left": "Comum", "right": "Raro" },
        { "left": "Natural", "right": "Artificial" },
        { "left": "Simples", "right": "Complexo" },
        { "left": "Sem graça", "right": "Engraçado" },
        { "left": "Fora de moda", "right": "Na moda" },
        { "left": "Amargo", "right": "Doce" },
        { "left": "Sombrio", "right": "Iluminado" },
        { "left": "Grosseiro", "right": "Educado" },
        { "left": "Fraco de espírito", "right": "Corajoso" },
        { "left": "Introvertido", "right": "Extrovertido" },
        { "left": "Pessimista", "right": "Otimista" },
        { "left": "Formal", "right": "Informal" },
        { "left": "Analógico", "right": "Digital" },
        { "left": "Primitivo", "right": "Avançado" },
        { "left": "Egoísta", "right": "Generoso" },
        { "left": "Superficial", "right": "Profundo" },
        { "left": "Previsível", "right": "Surpreendente" },
        { "left": "Passado", "right": "Futuro" },
        { "left": "Terra", "right": "Espaço" },
        { "left": "Cidade grande", "right": "Interior" },
        { "left": "Trabalho chato", "right": "Trabalho dos sonhos" },
        { "left": "Terrestre", "right": "Aquático" },
        { "left": "Dia", "right": "Noite" },
        { "left": "Inverno", "right": "Verão" },
        { "left": "Racional", "right": "Emocional" },
        { "left": "Controlado", "right": "Caótico" },
        { "left": "Esquecível", "right": "Inesquecível" },
        { "left": "Overrated", "right": "Underrated" },
        { "left": "Bagunçado", "right": "Organizado" },
        { "left": "Covarde", "right": "Herói" },
        { "left": "Vilão", "right": "Mocinho" },
        { "left": "Clássico", "right": "Moderno" },
        { "left": "Ruído", "right": "Música" },
        { "left": "Trabalho braçal", "right": "Trabalho intelectual" },
        { "left": "Improviso", "right": "Planejamento" },
        { "left": "Sonho", "right": "Realidade" },
        { "left": "Ficção", "right": "Documentário" },
        { "left": "Medo", "right": "Confiança" },
        { "left": "Regras rígidas", "right": "Liberdade total" },
        { "left": "Caro demais", "right": "Não tem preço" },
        { "left": "Preguiçoso", "right": "Workaholic" },
        { "left": "Antiquado", "right": "Inovador" },
        { "left": "Perto", "right": "Longe" },
        { "left": "Pequeno", "right": "Gigante" },
        { "left": "Acidente", "right": "Destino" },
        { "left": "Amador", "right": "Profissional" },
        { "left": "Ingênuo", "right": "Esperto" },
        { "left": "Fã raiz", "right": "Fã casual" },
        { "left": "Azar", "right": "Sorte" },
        { "left": "Comédia", "right": "Drama" },
        { "left": "Privado", "right": "Público" },
        { "left": "Frio demais", "right": "Apaixonado" },
        { "left": "Esquecido", "right": "Lendário" },
        { "left": "Bolsonaro", "right": "Lula" },
        { "left": "Stark", "right": "Targaryen" }
    ]
};

function log(...args) { if (DEBUG) console.log(...args); }
function warn(...args) { if (DEBUG) console.warn(...args); }

class DessintoniaGame {
    constructor() {
        this.cards = [];
        this.cardDeck = [];   // baralho embaralhado
        this.deckIndex = 0;   // posição atual no baralho
        this.currentCard = null;
        this.alternativeCard = null;
        this.targetAngle = 90;
        this.markerAngle = 90;
        this.opponentGuess = null;
        this.state = 'guessing'; // 'guessing' | 'revealed' | 'gameover'
        this.teamScores = { 1: 0, 2: 0 };
        this.teamPower = { 1: 0, 2: 0 };
        this.currentTeam = 1;
        this.isPeeking = false;
        this.lastCardId = null; // para evitar repetição de carta
        this.sounds = {
            fail: new Audio('audio/faaah.mp3'),
            success: new Audio('audio/levelup.mp3'),
            spin: new Audio('audio/Roleta.mp3'),
            super: new Audio('audio/Poder1.mp3'),
            break: new Audio('audio/VidroQuebrando.mp3'),
            charge: new Audio('audio/CargaPoder.mp3')
        };
        
        // Game Feel elements
        this.init();
        this.isSpecialInProgress = false;
        
        // Estado inicial das flags de decisão
        this.hasUsedPowerThisRound = { 1: false, 2: false };
        this.hasGuessedThisRound = { 1: false, 2: false };
    }

    async init() {
        await this.loadCards();
        this.setupDOMReferences();
        this.setupEventListeners();
        this.drawScale();
        this.newRound();
    }

    async loadCards() {
        // Agora usamos a lista interna por padrão para evitar problemas de CORS/file://
        this.cards = CONFIG.FALLBACK_CARDS;
        
        try {
            const response = await fetch('data/cards.json');
            if (response.ok) {
                const remoteCards = await response.json();
                if (remoteCards && remoteCards.length > 0) {
                    this.cards = remoteCards;
                    log(`[CARDS] ${this.cards.length} cartas carregadas via fetch.`);
                }
            }
        } catch (e) {
            warn("[CARDS] Erro ao carregar cards.json (comum em file://). Usando lista interna.");
        }
        this.shuffleDeck(); // embaralha após carregar
    }

    // Embaralhamento Fisher-Yates
    shuffleDeck() {
        this.cardDeck = [...this.cards.keys()]; // [0, 1, 2, ...n]
        for (let i = this.cardDeck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cardDeck[i], this.cardDeck[j]] = [this.cardDeck[j], this.cardDeck[i]];
        }
        this.deckIndex = 0;
        log(`[DECK] Baralho embaralhado com ${this.cardDeck.length} cartas.`);
    }

    // Retira a próxima carta do baralho; embaralha de novo se acabar
    drawCard() {
        if (this.deckIndex >= this.cardDeck.length) {
            this.shuffleDeck();
            log('[DECK] Baralho esgotado — novo embaralhamento.');
        }

        let idx = this.cardDeck[this.deckIndex++];
        let card = this.cards[idx];

        // Se a configuração de não repetir estiver ativa e a carta for igual à última
        if (CONFIG.CARD_NO_REPEAT && this.lastCardId === (card.left + card.right)) {
            // Tenta pegar a próxima se houver
            if (this.deckIndex < this.cardDeck.length) {
                idx = this.cardDeck[this.deckIndex++];
                card = this.cards[idx];
            } else {
                // Se era a última, reembaralha
                this.shuffleDeck();
                idx = this.cardDeck[this.deckIndex++];
                card = this.cards[idx];
            }
        }

        this.lastCardId = card.left + card.right;
        return card;
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
            graphicalScore: document.getElementById('graphical-score'),
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
            team2Container: document.getElementById('score-team-2'),
            flashOverlay: document.getElementById('flash-overlay'),
            superAnnouncement: document.getElementById('super-announcement'),
            superText: document.getElementById('super-text'),
            lightningStrike: document.getElementById('lightning-strike'),
            // Elementos do Poder Centralizado
            powerCentralWrapper: document.getElementById('power-central-wrapper'),
            btnPowerTrigger: document.getElementById('btn-power-trigger'),
            menuPowerCentral: document.getElementById('menu-power-central'),
            powerBars: {
                1: document.getElementById('special-bar-1'),
                2: document.getElementById('special-bar-2')
            },
            progressBars: {
                1: document.getElementById('progress-1'),
                2: document.getElementById('progress-2')
            },
            btnAltCard: document.getElementById('btn-alt-card'),
            cardChoiceModal: document.getElementById('card-choice-modal'),
            cardOpt1: document.getElementById('card-opt-1'),
            cardOpt2: document.getElementById('card-opt-2'),
            opt1Left: document.getElementById('opt-1-left'),
            opt1Right: document.getElementById('opt-1-right'),
            opt2Left: document.getElementById('opt-2-left'),
            opt2Right: document.getElementById('opt-2-right'),
            btnCloseCardModal: document.getElementById('btn-close-card-modal')
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
        const startPeek = () => { 
            if (this.state !== 'revealed') {
                this.isPeeking = true;
                this.dom.screenPath.style.opacity = '0.3'; 
                this.dom.targetGroup.style.opacity = '1';
            }
        };
        const endPeek = () => { 
            if (this.state !== 'revealed') {
                this.isPeeking = false;
                this.dom.screenPath.style.opacity = '1'; 
                this.dom.targetGroup.style.opacity = '0';
            }
        };

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
        
        // Power Actions Centralizadas
        this.dom.btnPowerTrigger.addEventListener('click', () => {
            this.dom.menuPowerCentral.classList.toggle('active');
        });

        this.dom.menuPowerCentral.querySelectorAll('.opt-power').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const level = parseInt(btn.dataset.level);
                // O time da vez (currentTeam) usa o próprio poder para atacar o adversário
                console.log(`Time ${this.currentTeam} atacando com Nível ${level}`);
                this.executeSuperAttack(this.currentTeam, level);
                this.dom.menuPowerCentral.classList.remove('active');
            });
        });

        // Events para o Card Alternativo
        this.dom.btnAltCard.addEventListener('click', () => this.showAlternativeCardModal());
        this.dom.cardOpt1.addEventListener('click', () => this.selectCard(1));
        this.dom.cardOpt2.addEventListener('click', () => this.selectCard(2));
        this.dom.btnCloseCardModal.addEventListener('click', () => {
            this.dom.cardChoiceModal.style.display = 'none';
            this.dom.btnAltCard.style.display = 'block'; // Mostra o botão de volta se cancelou
        });
    }

    // Helper: retorna dados do time pelo id
    getTeamData(id) {
        return CONFIG.TEAMS.find(t => t.id === id);
    }

    newRound() {
        log("--- INICIANDO NOVA RODADA ---");
        // Resetar flags de decisão para AMBOS os times
        this.hasUsedPowerThisRound = { 1: false, 2: false };
        this.hasGuessedThisRound = { 1: false, 2: false };
        this.hasDrawnAlternativeCard = false;
        this.alternativeCard = null;

        // Alternar time sempre (se não revelou o alvo, perde a vez)
        this.currentTeam = this.currentTeam === 1 ? 2 : 1;
        
        this.state = 'guessing';
        this.opponentGuess = null;
        
        // Reset Visual
        this.dom.targetGroup.innerHTML = '';
        this.dom.targetGroup.style.opacity = '1'; // Mantém visível por trás da tela
        this.dom.screenPath.style.opacity = '1';
        this.dom.scoreValue.textContent = '0';
        this.dom.scoreDisplay.style.color = 'var(--text-secondary)';
        this.dom.scoreDisplay.style.textShadow = 'none';
        this.dom.feedbackText.textContent = '';
        this.dom.feedbackText.classList.remove('miss');
        this.dom.scoreDisplay.style.display = 'none'; // Esconde "0 PONTOS"
        this.dom.graphicalScore.innerHTML = '';
        this.dom.opponentGroup.style.display = 'none';
        this.dom.btnGuessLeft.classList.remove('active');
        this.dom.btnGuessRight.classList.remove('active');

        // Garante distância mínima entre alvos consecutivos
        const prevAngle = this.targetAngle;
        let newAngle;
        let attempts = 0;
        do {
            newAngle = Math.random() * 180;
            attempts++;
        } while (Math.abs(newAngle - prevAngle) < CONFIG.TARGET_MIN_DISTANCE && attempts < 20);
        this.targetAngle = newAngle;
        this.updateMarker(90);
        
        // Próxima carta do baralho (sem repetição até esgotar todas)
        this.currentCard = this.drawCard();
        this.dom.leftConcept.textContent = this.currentCard.left;
        this.dom.rightConcept.textContent = this.currentCard.right;
        
        // Exibe o botão de sortear nova carta e trava o revelar até a roleta parar
        this.dom.btnAltCard.style.display = 'block';
        this.dom.btnReveal.disabled = true;

        this.runSpinAnimation(this.targetAngle);

        this.dom.btnPeek.disabled = false;
        this.updateTeamUI();
        this.updatePowerButtonVisibility();
        
        if (this.dom.opponentControls) {
            this.dom.opponentControls.style.opacity = '1';
            this.dom.opponentControls.style.pointerEvents = 'auto';
            this.dom.btnGuessLeft.disabled = false;
            this.dom.btnGuessRight.disabled = false;
        }

        const pointer = this.dom.markerGroup.querySelector('.marker-line-main');
        const pivot = this.dom.markerGroup.querySelector('.marker-pivot');
        if (pointer) {
            pointer.style.stroke = '#ff3b3b';
            pointer.style.filter = 'none';
        }
        if (pivot) {
            pivot.style.fill = '#ff3b3b';
            pivot.style.filter = 'drop-shadow(0 0 10px rgba(255, 59, 59, 0.5))';
        }
    }

    runSpinAnimation(finalAngle) {
        // Duração aleatória entre 2.2s e 3.5s para quebrar o ritmo fixo
        const duration = 2200 + (Math.random() * 1300); 
        const startTime = performance.now();
        
        log(`[GAME] Novo Alvo: ${finalAngle.toFixed(2)}° | Duração: ${(duration/1000).toFixed(2)}s`);

        // Sincronizar som para terminar junto com a animação
        if (this.sounds.spin) {
            if (this.sounds.spin.duration) {
                // Inicia no ponto exato para que o fim do áudio bata com o fim da animação
                let startAudioTime = this.sounds.spin.duration - (duration / 1000);
                this.sounds.spin.currentTime = Math.max(0, startAudioTime);
            } else {
                this.sounds.spin.currentTime = 0;
            }
            this.sounds.spin.play().catch(e => console.log("Audio play blocked by browser."));
        }

        const startAngle = Math.random() * 180;
        
        // Mais voltas (entre 6 e 12 meia-voltas) para aumentar a velocidade e aleatoriedade
        const extraSpins = (Math.floor(Math.random() * 7) + 6) * 180;
        const totalTravel = extraSpins + ((finalAngle - startAngle + 180) % 180);

        const animate = (time) => {
            const elapsed = time - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Ease out mais acentuado para um final mais dramático
            const easedProgress = 1 - Math.pow(1 - progress, 4);
            const currentAngle = (startAngle + (easedProgress * totalTravel)) % 180;
            
            this.drawTarget(currentAngle);
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                this.drawTarget(finalAngle);
                // Só esconde se o jogador NÃO estiver segurando o botão de espiar
                if (!this.isPeeking) {
                    this.dom.targetGroup.style.opacity = '0';
                }
                // Libera o botão de revelar agora que a roleta parou
                this.dom.btnReveal.disabled = false;
                
                // Pausa o som exatamente no momento que a roleta para
                if (this.sounds.spin) {
                    this.sounds.spin.pause();
                }
            }
        };
        requestAnimationFrame(animate);
    }

    showAlternativeCardModal() {
        if (this.state !== 'guessing') return;
        
        // Só sorteia se ainda não tiver sorteado a alternativa nesta rodada
        if (!this.alternativeCard) {
            this.alternativeCard = this.drawCard();
            this.hasDrawnAlternativeCard = true;
        }
        
        this.dom.btnAltCard.style.display = 'none'; // Some o botão enquanto o modal está aberto

        // Preenche o modal com as opções
        this.dom.opt1Left.textContent = this.currentCard.left;
        this.dom.opt1Right.textContent = this.currentCard.right;
        
        this.dom.opt2Left.textContent = this.alternativeCard.left;
        this.dom.opt2Right.textContent = this.alternativeCard.right;

        // Exibe o modal
        this.dom.cardChoiceModal.style.display = 'flex';
    }

    selectCard(choiceIndex) {
        if (choiceIndex === 2) {
            this.currentCard = this.alternativeCard;
            this.dom.leftConcept.textContent = this.currentCard.left;
            this.dom.rightConcept.textContent = this.currentCard.right;
        }
        // Se escolheu 1, mantém a carta atual

        // Esconde o modal
        this.dom.cardChoiceModal.style.display = 'none';
        // NÃO limpamos a alternativeCard aqui para manter a lógica de uma por rodada
        // mas marcamos como usada para sumir com o botão de vez
        this.dom.btnAltCard.style.display = 'none';
    }

    updateTeamUI() {
        this.dom.team1Container.classList.toggle('active', this.currentTeam === 1);
        this.dom.team2Container.classList.toggle('active', this.currentTeam === 2);
    }



    updatePowerButtonVisibility() {
        if (!this.dom.powerCentralWrapper) return;

        // O Poder SÓ está disponível na fase de adivinhação (antes de revelar)
        if (this.state === 'revealed' || this.state === 'gameover') {
            this.dom.powerCentralWrapper.style.opacity = '0';
            this.dom.powerCentralWrapper.style.pointerEvents = 'none';
            return;
        }

        // O Poder pertence ao TIME DA VEZ (quem está tentando descobrir o alvo)
        const teamColor = this.currentTeam === 1 ? 'var(--color-violet)' : 'var(--color-cyan)';
        const power = this.teamPower[this.currentTeam];
        const alreadyGuessed = this.hasGuessedThisRound[this.currentTeam];
        const alreadyUsedPower = this.hasUsedPowerThisRound[this.currentTeam];

        // REGRA: O botão de poder aparece se o time da vez tem cargas (power > 0)
        // e ainda não deu palpite NEM usou poder nesta rodada.
        if (power > 0 && !alreadyGuessed && !alreadyUsedPower) {
            this.dom.powerCentralWrapper.style.opacity = '1';
            this.dom.powerCentralWrapper.style.pointerEvents = 'all';
            
            // O botão de raio fica sempre ativo quando há energia
            this.dom.btnPowerTrigger.classList.add('active');
            this.dom.btnPowerTrigger.style.color = teamColor;
            this.dom.btnPowerTrigger.style.borderColor = teamColor;
            this.dom.btnPowerTrigger.style.boxShadow = `0 0 20px ${teamColor}`;
            this.dom.btnPowerTrigger.style.opacity = '1';
            
            // Atualizar opções do menu — desabilita níveis acima da carga disponível
            this.dom.menuPowerCentral.querySelectorAll('.opt-power').forEach(btn => {
                const level = parseInt(btn.dataset.level);
                btn.style.color = teamColor;
                btn.disabled = power < level;
                btn.style.opacity = power < level ? '0.3' : '1';
            });
        } else {
            // Esconde o botão se as regras não forem atendidas
            this.dom.powerCentralWrapper.style.opacity = '0';
            this.dom.powerCentralWrapper.style.pointerEvents = 'none';
            this.dom.menuPowerCentral.classList.remove('active');
        }
    }

    reveal() {
        this.state = 'revealed';
        this.dom.screenPath.style.opacity = '0';
        this.dom.targetGroup.style.opacity = '1';
        this.dom.btnAltCard.style.display = 'none'; // Garantir que some ao revelar
        
        const score = this.calculateScore();
        
        // Add score to current team
        this.teamScores[this.currentTeam] += score;
        this.dom.scoreValue.textContent = score;
        
        let feedback = this.generateFeedbackText(score);
        
        // Check opponent guess
        if (this.opponentGuess) {
            const otherTeam = this.currentTeam === 1 ? 2 : 1;
            let diff = this.targetAngle - this.markerAngle;
            if (diff > 90) diff -= 180;
            else if (diff < -90) diff += 180;
            
            const isActuallyLeft = diff < 0;
            const isActuallyRight = diff > 0;
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
        this.dom.feedbackText.classList.toggle('miss', score === 0);

        // Estrelas de pontuação (simples, leve)
        const colors = { 4: 'var(--target-4)', 3: 'var(--target-3)', 2: 'var(--target-2)' };
        this.dom.graphicalScore.innerHTML = '';
        if (score > 0) {
            this.dom.scoreDisplay.style.display = 'block';
            this.dom.scoreDisplay.style.color = colors[score];
            for (let i = 0; i < score; i++) {
                const star = document.createElement('span');
                star.className = 'score-star';
                star.textContent = '★';
                star.style.color = colors[score];
                this.dom.graphicalScore.appendChild(star);
            }
        } else {
            this.dom.scoreDisplay.style.display = 'none';
        }

        this.applyScoreVisuals(score);

        // Lógica da Barra de Especial:
        // Quando o time ATUAL acerta o alvo (score > 0), ele carrega 1 carga de poder.
        // O poder fica disponível para usar nas PRÓXIMAS rodadas.
        if (score > 0) {
            if (this.teamPower[this.currentTeam] < 3) {
                this.teamPower[this.currentTeam]++;
            }
            this.updatePowerUI();
            this.updatePowerButtonVisibility();
        }

        this.dom.btnPeek.disabled = true;
        this.dom.btnReveal.disabled = true;
        this.dom.opponentControls.style.opacity = '0.5';
        this.dom.opponentControls.style.pointerEvents = 'none';
    }

    updateScoreUI() {
        this.dom.team1Score.textContent = this.teamScores[1];
        this.dom.team2Score.textContent = this.teamScores[2];
        // Atualiza barras de progresso
        [1, 2].forEach(id => {
            const bar = this.dom.progressBars[id];
            if (bar) bar.style.width = `${Math.min(this.teamScores[id] / CONFIG.WIN_SCORE * 100, 100)}%`;
        });
        this.updatePowerUI();
        this.checkWin();
    }

    checkWin() {
        if (this.state === 'gameover') return; // guard contra reentrada
        const winner = [1, 2].find(id => this.teamScores[id] >= CONFIG.WIN_SCORE);
        if (!winner) return;

        // Trava o jogo
        this.state = 'gameover';
        this.dom.btnReveal.disabled = true;
        this.dom.btnPeek.disabled = true;
        this.dom.btnRefresh.disabled = true;
        this.dom.btnAltCard.style.display = 'none';
        this.dom.opponentControls.style.opacity = '0.3';
        this.dom.opponentControls.style.pointerEvents = 'none';
        this.updatePowerButtonVisibility();

        const teamName  = winner === 1 ? 'TIME VIOLETA' : 'TIME CIANO';
        const teamColor = winner === 1 ? 'var(--color-violet)' : 'var(--color-cyan)';

        // Mostra anúncio de vitória com classe responsiva
        if (this.dom.superText) {
            this.dom.superText.className = 'win-text'; // troca para classe responsiva
            this.dom.superText.textContent = `🏆 ${teamName} VENCEU! 🏆`;
            this.dom.superText.style.color = teamColor;
        }
        this.dom.superAnnouncement.classList.add('active', 'win-screen');

        // Flash da cor do vencedor
        document.body.style.setProperty('--team-power-color', teamColor);
        document.body.classList.add('power-charging');
        setTimeout(() => document.body.classList.remove('power-charging'), 1500);

        // Botão de reiniciar — criado com createElement (seguro e manutenível)
        setTimeout(() => {
            const restartBtn = document.createElement('button');
            restartBtn.id = 'btn-restart';
            restartBtn.textContent = 'JOGAR NOVAMENTE';
            restartBtn.style.cssText = [
                'margin:20px auto 0', 'padding:12px 30px', 'font-size:1rem',
                'font-weight:900', 'border-radius:12px', 'border:none',
                'cursor:pointer', 'letter-spacing:1px', 'display:block',
                'pointer-events:auto', 'position:relative', 'z-index:10001',
                `background:${teamColor}`, 'color:#000',
                "font-family:'Outfit',sans-serif"
            ].join(';');
            restartBtn.addEventListener('click', () => {
                this.dom.superAnnouncement.classList.remove('active', 'win-screen');
                this.dom.superText.className = 'super-text'; // restaura classe original
                this.dom.superText.innerHTML = '';
                this.dom.superText.style.color = '';
                this.teamScores = { 1: 0, 2: 0 };
                this.teamPower  = { 1: 0, 2: 0 };
                this.shuffleDeck(); // novo baralho ao reiniciar
                this.currentTeam = 1;
                this.dom.btnRefresh.disabled = false;
                this.state = 'revealed';
                this.updateScoreUI();
                this.newRound();
            });
            this.dom.superText.appendChild(document.createElement('br'));
            this.dom.superText.appendChild(restartBtn);
        }, CONFIG.TIMINGS.winRestartDelay);
    }

    updatePowerUI() {
        [1, 2].forEach(teamId => {
            const bar = this.dom.powerBars[teamId];
            if (!bar) return;
            
            const segments = Array.from(bar.querySelectorAll('.special-segment'));
            const power = this.teamPower[teamId];
            
            segments.forEach((seg, idx) => {
                // Como usamos column-reverse, o índice 0 é o de baixo
                seg.classList.toggle('filled', idx < power);
            });

            // A barra "acende" se tiver qualquer energia pronta para usar
            bar.classList.toggle('ready', power >= 1);
        });
    }

    executeSuperAttack(attackerId, level = 3) {
        // attackerId = time que usa o poder (time da vez)
        // targetId   = time que recebe o dano (adversário)
        if (this.isSpecialInProgress || this.hasGuessedThisRound[attackerId]) {
            warn("Ataque bloqueado: ou já em andamento ou o time já adivinhou!");
            return;
        }

        const targetId = attackerId === 1 ? 2 : 1;
        const teamName = attackerId === 1 ? 'VIOLETA' : 'CIANO';
        const teamColor = attackerId === 1 ? 'var(--color-violet)' : 'var(--color-cyan)';
        
        this.isSpecialInProgress = true;
        this.hasUsedPowerThisRound[attackerId] = true;
        this.dom.opponentControls.style.opacity = '0.3';
        this.dom.opponentControls.style.pointerEvents = 'none';

        log(`>>> ATAQUE: Nível ${level} do Time ${teamName}`);

        this.updatePowerUI();

        // --- FASE 1: Mensagem aparece (0 → 1200ms) ---
        if (this.dom.superText) {
            this.dom.superText.innerHTML = `ATAQUE NÍVEL ${level}! ⚡`;
            this.dom.superText.style.color = teamColor;
        }
        this.dom.superAnnouncement.classList.add('active');
        
        this.sounds.charge.currentTime = 0;
        this.sounds.charge.play().catch(e => console.log("Audio charge prevented"));
        
        document.body.classList.add('power-charging');
        document.body.style.setProperty('--team-power-color', teamColor);

        // --- FASE 2: Mensagem some, tela continua piscando (1200ms → 2200ms) ---
        setTimeout(() => {
            this.dom.superAnnouncement.classList.remove('active');
            document.body.classList.remove('power-charging');

            // Pisca a tela rapidamente para criar tensão antes do impacto
            let flashCount = 0;
            const flashInterval = setInterval(() => {
                this.dom.flashOverlay.style.background = teamColor;
                this.dom.flashOverlay.classList.add('active');
                setTimeout(() => this.dom.flashOverlay.classList.remove('active'), 120);
                flashCount++;
                if (flashCount >= 4) clearInterval(flashInterval);
            }, 220);

            // --- FASE 3: Raio cai no placar (2200ms) ---
            setTimeout(() => {
                this.runStageImpact(targetId, teamColor, attackerId, level);
            }, 1000);

        }, 1200);
    }

    // Estágios do Ataque Especial Remodelados


    runStageImpact(targetTeamId, teamColor, attackerId, level) {
        const container = targetTeamId === 1 ? this.dom.team1Container : this.dom.team2Container;
        
        // Aplicar brilho e zoom inicial no placar alvo
        container.classList.add('score-impact-zoom');
        container.style.transform = `scale(${1.1 + (level * 0.1)})`;

        const STRIKE_DELAY = CONFIG.STRIKE_DELAY;

        const fireStrike = (strikeIndex) => {
            const rect = container.getBoundingClientRect();

            // --- Dano: -1 ponto por raio ---
            if (this.teamScores[targetTeamId] > 0) {
                this.teamScores[targetTeamId]--;
                this.updateScoreUI();
            }

            // Número flutuante de dano por raio
            const floating = document.createElement('div');
            floating.className = 'floating-point-loss';
            floating.textContent = `-1`;
            // Pequeno offset horizontal para não sobrepor em ataques múltiplos
            floating.style.left = `${40 + (strikeIndex * 20)}%`;
            container.appendChild(floating);
            setTimeout(() => { if (floating.parentNode) floating.remove(); }, 1200);

            // Raio caindo no placar
            this.dom.lightningStrike.style.left = `${rect.left + rect.width / 2}px`;
            this.dom.lightningStrike.style.top  = `${rect.top}px`;
            this.dom.lightningStrike.style.color = teamColor;
            this.dom.lightningStrike.classList.remove('active');
            void this.dom.lightningStrike.offsetWidth; // force reflow
            this.dom.lightningStrike.classList.add('active');

            // Flash e shake por raio
            this.dom.flashOverlay.style.background = teamColor;
            this.dom.flashOverlay.classList.add('active');
            setTimeout(() => this.dom.flashOverlay.classList.remove('active'), 180);



            // Som de impacto
            this.sounds.super.currentTime = 0;
            this.sounds.super.play().catch(() => {});

            // Estilhaços + som de vidro apenas no último raio
            if (strikeIndex === level - 1) {
                setTimeout(() => {
                    this.sounds.break.currentTime = 0;
                    this.sounds.break.play().catch(() => {});
                    this.createGlassShatter(container);
                    container.classList.add('score-overload');
                }, 150);
            }

            // Faíscas
            for (let i = 0; i < 8; i++) {
                setTimeout(() => {
                    const spark = document.createElement('div');
                    spark.className = 'spark';
                    spark.style.color = teamColor;
                    spark.style.left = `${30 + Math.random() * 40}%`;
                    spark.style.top  = '50%';
                    const dx = (Math.random() - 0.5) * 200 + 'px';
                    const dy = (Math.random() - 0.5) * 200 + 'px';
                    spark.style.setProperty('--dx', dx);
                    spark.style.setProperty('--dy', dy);
                    container.appendChild(spark);
                    setTimeout(() => spark.remove(), 600);
                }, i * 25);
            }

            // Próximo raio ou finalização
            const isLast = strikeIndex === level - 1;
            if (!isLast) {
                setTimeout(() => fireStrike(strikeIndex + 1), STRIKE_DELAY);
            } else {
                // Último raio: aguarda um pouco e encerra
                setTimeout(() => {

                    this.runStageReturn(targetTeamId, attackerId, level);
                }, 900);
            }
        };

        // Pequeno delay antes do primeiro raio (zoom entra, depois bate)
        setTimeout(() => {
            fireStrike(0);
        }, 400);
    }

    runStageReturn(targetTeamId, attackerId, level) {
        const container = targetTeamId === 1 ? this.dom.team1Container : this.dom.team2Container;
        const bar = this.dom.powerBars[attackerId];

        container.style.transition = 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        container.style.transform = 'translate(0, 0) scale(1)';
        
        // O placar agora fica parado na lateral, apenas treme
        setTimeout(() => {
            // Finalização Absoluta
            container.classList.remove('score-impact-zoom');
            container.classList.remove('score-overload');
            bar.classList.remove('attack');
            
            // Esvaziar exatamente a quantidade de energia usada
            this.teamPower[attackerId] -= level;
            if (this.teamPower[attackerId] < 0) this.teamPower[attackerId] = 0;
            
            this.isSpecialInProgress = false;
            log(">>> ATAQUE ESPECIAL FINALIZADO.");
            
            this.updatePowerUI();
            this.updatePowerButtonVisibility();
        }, 800);
    }

    createGlassShatter(container) {
        // REDUZIDO PARA 8 ESTILHAÇOS PARA PERFORMANCE
        for (let i = 0; i < 8; i++) {
            const shard = document.createElement('div');
            shard.className = 'glass-shard';
            
            // Formato de triângulo aleatório
            const p1 = `${Math.random()*100}% ${Math.random()*100}%`;
            const p2 = `${Math.random()*100}% ${Math.random()*100}%`;
            const p3 = `${Math.random()*100}% ${Math.random()*100}%`;
            shard.style.clipPath = `polygon(${p1}, ${p2}, ${p3})`;
            
            // Tamanho equilibrado
            shard.style.width = (Math.random() * 40 + 20) + 'px';
            shard.style.height = (Math.random() * 40 + 20) + 'px';
            shard.style.left = Math.random() * 100 + '%';
            shard.style.top = Math.random() * 100 + '%';
            
            // Física otimizada
            const dx = (Math.random() - 0.5) * 600 + 'px';
            const dy = (Math.random() * 600 + 200) + 'px'; 
            const dr = (Math.random() - 0.5) * 720 + 'deg';
            
            shard.style.setProperty('--dx', dx);
            shard.style.setProperty('--dy', dy);
            shard.style.setProperty('--dr', dr);
            
            shard.style.animation = 'shard-explode 1.2s ease-out forwards';
            
            container.appendChild(shard);
            setTimeout(() => shard.remove(), 1200);
        }
    }



    calculateScore() {
        let diff = Math.abs(this.markerAngle - this.targetAngle);
        // Ajuste para alvo toroidal (que dá a volta)
        diff = Math.min(diff, 180 - diff);
        
        if (diff <= 4) return 4;   // Zona vermelha (±4 graus)
        if (diff <= 12) return 3;  // Zona laranja (±12 graus)
        if (diff <= 20) return 2;  // Zona amarela (±20 graus)
        return 0;
    }

    generateFeedbackText(score) {
        return score === 0 ? "FORA DO ALVO!" : "";
    }

    applyScoreVisuals(score) {
        const colors = { 4: 'var(--target-4)', 3: 'var(--target-3)', 2: 'var(--target-2)' };
        const pointer = this.dom.markerGroup.querySelector('.marker-line-main');
        const pivot   = this.dom.markerGroup.querySelector('.marker-pivot');

        if (score > 0) {
            // Muda cor do ponteiro para a zona acertada
            if (pointer) pointer.style.stroke = colors[score];
            if (pivot)   pivot.style.fill = colors[score];

            // Som de sucesso
            this.sounds.success.currentTime = 0;
            this.sounds.success.play().catch(() => {});

        } else {
            // Som de erro
            this.sounds.fail.currentTime = 0;
            this.sounds.fail.play().catch(() => {});
        }
    }

    setOpponentGuess(side) {
        const opponentId = this.currentTeam === 1 ? 2 : 1;
        if (this.state === 'revealed' || this.state === 'gameover' || this.hasUsedPowerThisRound[opponentId]) return;
        
        this.hasGuessedThisRound[opponentId] = true; // Marca que o oponente adivinhou
        this.updatePowerButtonVisibility(); // Esconde o botão de poder instantaneamente
        
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

    drawBand(band) {
        const segments = [];
        if (band.start < 0 && band.end > 0) {
            segments.push({ start: 180 + band.start, end: 180 });
            segments.push({ start: 0, end: band.end });
        } else if (band.start < 180 && band.end > 180) {
            segments.push({ start: band.start, end: 180 });
            segments.push({ start: 0, end: band.end - 180 });
        } else if (band.end <= 0) {
            segments.push({ start: 180 + band.start, end: 180 + band.end });
        } else if (band.start >= 180) {
            segments.push({ start: band.start - 180, end: band.end - 180 });
        } else {
            segments.push({ start: band.start, end: band.end });
        }

        // Determinar qual segmento é o maior para exibir o número
        let largestIndex = 0;
        let maxLen = -1;
        segments.forEach((s, i) => {
            const len = s.end - s.start;
            if (len > maxLen) {
                maxLen = len;
                largestIndex = i;
            }
        });

        segments.forEach((s, i) => {
            const showText = (i === largestIndex);
            this.drawSegment(s.start, s.end, band.color, band.pts, showText);
        });
    }

    drawSegment(start, end, color, pts, showText) {
        if (start >= end) return;
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute('d', this.describeArc(200, 180, 140, start, end));
        path.setAttribute('fill', 'none');
        path.setAttribute('stroke', color);
        path.setAttribute('stroke-width', '40');
        path.setAttribute('stroke-linecap', 'butt');
        this.dom.targetGroup.appendChild(path);

        if (showText) {
            const mid = (start + end) / 2;
            const pos = this.polarToCartesian(200, 180, 152, mid);
            const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
            text.setAttribute('x', pos.x); text.setAttribute('y', pos.y);
            text.setAttribute('text-anchor', 'middle');
            text.setAttribute('dominant-baseline', 'central');
            text.setAttribute('fill', '#000');
            text.setAttribute('font-family', "'Outfit', sans-serif");
            text.setAttribute('font-size', '8px');
            text.setAttribute('font-weight', '500');
            text.setAttribute('style', 'pointer-events: none;');
            text.textContent = pts;
            this.dom.targetGroup.appendChild(text);
        }
    }

    drawTarget(centerAngle) {
        this.dom.targetGroup.innerHTML = '';
        // Cada bloco tem exatamente 8 graus de largura (Total 40 graus)
        const bands = [
            { start: centerAngle - 20, end: centerAngle - 12, color: 'var(--target-2)', pts: '2' },
            { start: centerAngle - 12, end: centerAngle - 4,  color: 'var(--target-3)', pts: '3' },
            { start: centerAngle - 4,  end: centerAngle + 4,  color: 'var(--target-4)', pts: '4' },
            { start: centerAngle + 4,  end: centerAngle + 12, color: 'var(--target-3)', pts: '3' },
            { start: centerAngle + 12, end: centerAngle + 20, color: 'var(--target-2)', pts: '2' }
        ];
        bands.forEach(band => this.drawBand(band));
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
window.addEventListener('DOMContentLoaded', () => {
    new DessintoniaGame();
    
    // Register Service Worker for PWA
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('./sw.js')
                .then(reg => console.log('Service Worker registrado com sucesso.'))
                .catch(err => console.log('Erro ao registrar Service Worker.', err));
        });
    }
});
