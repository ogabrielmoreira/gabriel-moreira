/* Case Aventura Católica: idioma (EN/PT), entrada das seções, barra de XP e pinos do mapa.
   O texto em inglês já vem no HTML; este dicionário cobre a troca de idioma. */
(function () {
  'use strict';
  var COPY = {
 "en": {
  "meta.title": "Aventura Católica · A free 3D game for catechesis | Gabriel Moreira",
  "meta.desc": "Case study: a free 3D browser game that teaches the Catholic faith to children, built as a volunteer project with Three.js, Blender and Claude Code. iOS and Android in development.",
  "nav.projects": "Projects",
  "nav.play": "Play the game",
  "nav.progress": "Reading progress",
  "hero.eyebrow": "Game design · Three.js · Volunteer project · 2026",
  "hero.sub": "A free 3D game that teaches children the Catholic faith, through play.",
  "hero.cta1": "Play now",
  "hero.cta2": "How it was made",
  "hero.status": "Live on the web · iOS and Android in development",
  "hero.phone.alt": "The game running on a phone held sideways, with on-screen controls",
  "meta.role.k": "Role",
  "meta.role.v": "Idea, art direction, design and development, with Claude Code",
  "meta.aud.k": "For",
  "meta.aud.v": "Children aged 6 to 12 in catechesis",
  "meta.cost.k": "Price",
  "meta.cost.v": "Free. No ads, purchases or data collection",
  "meta.when.k": "Started",
  "meta.when.v": "November 2026 · started on the 12th",
  "note.tag": "Why it is here",
  "note.p": "<strong>This is not the kind of project I usually show.</strong> I made it public to prove a point: when I connect years of experience in technology and design with AI like Claude Code, I can venture into very different stacks. Lately that includes game development. It began as a volunteer project and it is where two things I love meet: my Catholic faith and my gamer side.",
  "why.eyebrow": "Where it came from",
  "why.h": "Faith, volunteering and a gamer’s itch",
  "why.lead": "I am a Roman Catholic and I serve in the Pascom (communications ministry) of the Diocese of Santo André: I take photos, help with the live broadcasts of Mass and enjoy making VFX for diocesan projects. One day the question came up: what if I built a game to evangelize the kids in catechesis in a playful, simple way?",
  "why.c1.h": "The mission",
  "why.c1.p": "Evangelize catechesis children in a playful, simple way, with a 3D world they actually want to explore.",
  "why.c2.h": "The source",
  "why.c2.p": "Every text comes from the Catechism of the Catholic Church and the Vatican website, and the source is recorded in the game.",
  "why.c3.h": "The rules",
  "why.c3.p": "Free. No ads, purchases, sign-up or data collection. Volunteer work, made to be shared with the diocese and beyond.",
  "concept.eyebrow": "Concept",
  "concept.h": "A Catholic village inspired by Chaves",
  "concept.lead": "The world is a small village where everybody knows everybody, like the neighborhood of Chaves. There is a square, a parish church, neighbors and characters who each carry a piece of knowledge. I dressed it in Brazilian colonial architecture and aimed for a warm, animated-film look.",
  "concept.refs.k": "The target",
  "concept.refs.p": "Three reference images I put in the project folder on day one.",
  "concept.res.k": "The result",
  "concept.res.p": "The same ideas running in real time, in the browser.",
  "concept.ref1.alt": "Reference image: village square with a fountain, a small church and a catechist",
  "concept.ref2.alt": "Reference image: church interior with altar, crucifix and children",
  "concept.ref3.alt": "Reference image: garden with altar servers and a priest",
  "concept.res1.alt": "In the game: the square in front of the church",
  "concept.res2.alt": "In the game: inside the church, with the aisle, pews and altar",
  "concept.res3.alt": "In the game: the Path of the Saints with its chapels",
  "concept.honest": "<strong>It did not start pretty.</strong> The first playable had a Roblox-like look with little doll characters, and I said so: the graphics were rough and I did not want that style. That feedback is what pushed the project into Blender.",
  "world.eyebrow": "The world",
  "world.h": "The village from above",
  "world.lead": "One connected map you walk on foot: the square in the middle, the parish church to the north and the gardens around it. The game has a minimap and a full village map, with a dotted trail to your current mission.",
  "world.img.alt": "Aerial view of the whole village: church, square, gardens and the toy train track",
  "world.p1.h": "Parish Church",
  "world.p1.p": "Altar, ambo, tabernacle, baptismal font, crucifix, statues, pews and the 14 Stations of the Cross on the walls.",
  "world.p2.h": "Community Square",
  "world.p2.p": "The fountain of Our Lady of Graces, the houses and neighbors, and a Saint Francis statue with a Dog and a Cat.",
  "world.p3.h": "Path of the Saints",
  "world.p3.p": "A round plaza with chapels for 11 saints, plus a corner for the titles of Our Lady.",
  "world.p4.h": "Rosary Garden",
  "world.p4.p": "A giant rosary on the ground whose beads light up as you pray, and the grotto of Our Lady of Lourdes.",
  "world.p5.h": "Sacraments Garden",
  "world.p5.p": "Seven stained-glass steles, one for each sacrament, to find and sort into three groups.",
  "world.p6.h": "Altar Servers’ Porch",
  "world.p6.p": "An open porch with the objects of the Mass, where kids train to be altar servers.",
  "world.p7.h": "Little Train Station",
  "world.p7.p": "A narrated ride around the whole village, with its own soundtrack.",
  "world.map.cap": "The in-game village map, with a dotted trail to the current mission.",
  "world.map.alt": "In-game village map listing the places and showing the player and the mission marker",
  "world.g1": "The square and the fountain of Our Lady of Graces",
  "world.g2": "Inside the church: a walkable interior, not a backdrop",
  "world.g3": "The Stations of the Cross on the church walls",
  "world.g4": "The Path of the Saints",
  "world.g5": "The Sacraments Garden",
  "world.g6": "The Rosary Garden and the Lourdes grotto",
  "world.g7": "Saint Francis statue, with the Dog that roams the square",
  "world.alt1": "The village square with the fountain and houses",
  "world.alt2": "Church interior with a red carpet down the aisle",
  "world.alt3": "Stained glass and Stations of the Cross inside the church",
  "world.alt4": "Entrance arch of the Path of the Saints",
  "world.alt5": "Garden path lined with stained-glass steles",
  "world.alt6": "Rosary beads on the ground leading to a grotto",
  "world.alt7": "Saint Francis statue in the square",
  "chars.eyebrow": "Characters",
  "chars.h": "A village full of people with something to teach",
  "chars.lead": "Each character carries a piece of knowledge and talks in short, simple lines, with the source recorded. They have no proper names on purpose: they are roles, like the catechist, the priest and the sister. And the player is always a child, boy or girl, never an adult.",
  "chars.c1.role": "The catechist",
  "chars.c1.teach": "The church and the sacraments",
  "chars.c1.q": "“Hi, I am the catechist of our community. How nice to see you here!”",
  "chars.c2.role": "The priest",
  "chars.c2.teach": "Prayers and the Way of the Cross",
  "chars.c2.q": "“The peace of Jesus! I am glad you came.”",
  "chars.c3.role": "The sister",
  "chars.c3.teach": "The Rosary",
  "chars.c3.q": "“Do you see this giant rosary on the floor? Each bead is a prayer.”",
  "chars.c4.role": "The gardener",
  "chars.c4.teach": "The saints",
  "chars.c4.q": "“The saints are God’s friends. They lived as Jesus taught and pray for us from heaven.”",
  "chars.c5.role": "The sick neighbor",
  "chars.c5.teach": "Helping others",
  "chars.c5.q": "“I am a bit under the weather, so I stay at the door watching the square.”",
  "chars.c6.role": "The kids of the square",
  "chars.c6.teach": "Company along the way",
  "chars.c6.q": "Other children share the village with you, so it never feels empty.",
  "make.eyebrow": "How the characters were made",
  "make.h": "Directed by hand, built with Blender and AI",
  "make.lead": "The characters were not downloaded. I directed every one of them, and I connected Blender to Claude Code so the AI could build what I described, round after round, until it looked right.",
  "make.s1.h": "Direction",
  "make.s1.p": "I define the look, the roles and the proportions: kid-friendly and cartoon, warm colors, a boy or a girl to play, never an adult.",
  "make.s2.h": "Blender + AI",
  "make.s2.p": "Python scripts run in Blender 4.5 build one continuous body mesh, with hair, clothes and accessories as separate objects, so the game can swap hair color, shirt, skirts, cassocks and the altar server tunic.",
  "make.s3.h": "Rig and look",
  "make.s3.p": "The mesh is bound to a CC0 skeleton with 9 animations (idle, walk, jog, run, jump, land, talk, interact, dance). Toon shading and outlines in Three.js give the cartoon look.",
  "make.code.cap": "The start of tools/blender/personagem.py, the script that builds the character.",
  "make.cust.img.alt": "Character creator: choose boy or girl, skin, hair and shirt color",
  "make.cust.h": "Your own character",
  "make.cust.p": "One screen, no steps: boy or girl, skin tone, hairstyle, hair color and shirt, with the character changing live beside the panel.",
  "play.eyebrow": "Gameplay",
  "play.h": "Learn by exploring, answer by playing",
  "play.lead": "Nine missions, all playable from start to finish. Characters send you to places, each discovery opens a short text with its source, and small activities check what you learned, with no pressure and unlimited tries.",
  "play.s1": "Talking: short lines, read aloud, with the speaker’s role",
  "play.s2": "Questions with big, clear choices",
  "play.s3": "Saint cards with a painting and a one-line virtue",
  "play.s4": "Backpack: missions, medals, diary and progress",
  "play.s1.alt": "Dialogue box with the catechist speaking",
  "play.s2.alt": "Question about Saint Francis with three answer cards",
  "play.s3.alt": "Card for Saint Carlo Acutis with a portrait and text",
  "play.s4.alt": "Backpack screen listing missions and their locks",
  "play.m.h": "The nine missions",
  "play.m1": "Getting to know God’s house",
  "play.m1.p": "Find 5 places in the church and answer 3 picture questions.",
  "play.m2": "The objects of the Mass",
  "play.m2.p": "Discover 5 liturgical objects and play “which object is it?”.",
  "play.m3": "Learning to pray",
  "play.m3.p": "The Sign of the Cross and the Our Father, then complete the prayer.",
  "play.m4": "The seven sacraments",
  "play.m4.p": "Find 7 stained glasses and sort the sacraments into 3 groups.",
  "play.m5": "My first day as altar server",
  "play.m5.p": "Pick the garment, set the credence table, order the procession, carry the candle.",
  "play.m6": "Rosary apprentice",
  "play.m6.p": "Find 4 mystery plaques and pray one mystery while the beads light up.",
  "play.m7": "The journey of the saints",
  "play.m7.p": "Visit 11 chapels, from Saint Francis to Saint Carlo Acutis and Our Lady.",
  "play.m8": "Helping others",
  "play.m8.p": "Bring bread to a sick neighbor and think through situations of charity and forgiveness.",
  "play.m9": "The Way of the Cross",
  "play.m9.p": "Walk the 14 stations and end in the joy of Easter.",
  "play.prog.h": "Progress that rewards curiosity",
  "play.prog.p": "Learning points, 6 levels, 14 medals, a discovery diary with the sources, saved prayers and an unlockable altar server tunic. There are also invitations to live what was learned outside the game, which on purpose give no points.",
  "play.acc.h": "Accessible by default",
  "play.acc.p": "Big buttons, keyboard navigation, large text, high contrast, reduced motion and a light mode for simple devices.",
  "faith.eyebrow": "Faith content",
  "faith.h": "Every text has a source",
  "faith.lead": "This was the rule from the first prompt: all catechetical material must come from the Catechism of the Catholic Church and the Vatican website. I did not want a game that “sounds Catholic”, I wanted one that can be checked.",
  "faith.n1": "92",
  "faith.n1.p": "sources checked, one by one, listed in the project docs",
  "faith.n2": "40",
  "faith.n2.p": "Catechism paragraphs read in the full text and compared with the in-game summary",
  "faith.n3": "Vulgata",
  "faith.n3.p": "Bible passages checked against the Latin Nova Vulgata on the Holy See website",
  "faith.fix.h": "The checks found mistakes, and I fixed them",
  "faith.fix.p": "The Glory Be was citing the Catechism, which does not contain that prayer, so it now cites Rosarium Virginis Mariae. The Creed now follows the Catechism text exactly. For Saint Carlo Acutis I removed two details that no consulted source confirmed.",
  "faith.warn.tag": "Honest limit",
  "faith.warn.p": "The game does not replace Mass, the sacraments or in-person catechesis. The content was written from official sources, but a catechist or priest still has to review it before it is used with children, and I say so on the game’s own “parents and catechists” screen.",
  "mob.eyebrow": "Mobile",
  "mob.h": "Built to be played sideways",
  "mob.lead": "The same game opens in a phone’s browser. Round joystick, a jump button and a talk button, controls sized to the screen height and notch-safe, and a layout that never scrolls. The native iOS and Android versions are what I am coding now.",
  "mob.t1": "Title screen on a phone",
  "mob.t2": "Joystick, jump and talk buttons",
  "mob.t3": "Dialogues sized to the screen",
  "mob.t1.alt": "Game title screen on a phone held sideways",
  "mob.t2.alt": "Gameplay on a phone with a round joystick, a jump button and a talk button",
  "mob.t3.alt": "Catechist dialogue on a phone",
  "mob.perf.h": "It adapts to the device",
  "mob.perf.p": "On phones it already starts with fewer effects, and on any device, if it slows down for a few seconds, it lowers the effects by itself, one level at a time. There is also a Light mode in the settings. On my iPhone it runs smoothly.",
  "tech.eyebrow": "Under the hood",
  "tech.h": "Technology and where the assets came from",
  "tech.lead": "A static site: no build step, no server, no database. Open the page and play.",
  "tech.r1.k": "Engine",
  "tech.r1.v": "<b>Three.js r170</b> with plain ES modules, written for the browser, plus the glTF loader and post-processing.",
  "tech.r2.k": "3D art",
  "tech.r2.v": "<b>Blender 4.5 LTS</b> driven by Python scripts for the characters and the sacred images, plus CC0 packs from <b>Quaternius</b> for nature, buildings, props and animations.",
  "tech.r3.k": "Look",
  "tech.r3.v": "Toon shading in three light bands, dark outlines on characters and sacred images, warm light and soft shadows.",
  "tech.r4.k": "Performance",
  "tech.r4.v": "Textures reduced to 1024 px WebP with glTF Transform and sharp, automatic quality steps, Light mode. When I measured on my computer: about 16 ms per frame at 1080p in the square, with roughly 1 million triangles.",
  "tech.r5.k": "Audio",
  "tech.r5.v": "More than 440 narrated lines with pt-BR neural voices (AI), one voice per character, plus a soundtrack and footsteps that change with the floor. I built a recording studio page so a human voice can replace any line.",
  "tech.r6.k": "Launch",
  "tech.r6.v": "Hosted on <b>Vercel</b> under <b>aventuracatolica.com.br</b>, with a privacy page covering LGPD and ECA Digital. Progress and nickname stay on the device.",
  "tech.r7.k": "AI workflow",
  "tech.r7.v": "<b>Claude Code</b> with game-development skills, working inside the project folder, running Blender from the command line and testing in a real browser on every round.",
  "assets.h": "Where each asset came from",
  "assets.a1.k": "3D models and animations",
  "assets.a1.v": "Quaternius, CC0: Stylized Nature MegaKit, Medieval Village MegaKit, Fantasy Props MegaKit and Universal Animation Library, downloaded from OpenGameArt.",
  "assets.a2.k": "Characters and sacred images",
  "assets.a2.v": "Original meshes built in Blender with scripts, on top of the Quaternius skeleton. No third-party character model.",
  "assets.a3.k": "Paintings and prints",
  "assets.a3.v": "Saints, Our Lady and the Stations of the Cross come from Wikimedia Commons, in public domain or free licenses, with author, license and page recorded in the credits file.",
  "assets.a4.k": "Texts",
  "assets.a4.v": "Catechism of the Catholic Church, vatican.va and the Nova Vulgata, with each reference stored beside the text that uses it.",
  "assets.a5.k": "Voices",
  "assets.a5.v": "Neural pt-BR voices (AI), replaceable by human recordings.",
  "assets.a6.k": "Libraries",
  "assets.a6.v": "three.js (MIT), glTF Transform (MIT) and sharp (Apache-2.0). Blender (GPL) is used only to generate files and is not shipped with the game.",
  "proc.eyebrow": "Process",
  "proc.h": "Built with Claude Code, one round at a time",
  "proc.lead": "In its first days the project went through more than twenty rounds. Each round was the same loop: I play, I say what bothers me, Claude changes it, and we test again.",
  "proc.t1.d": "Nov 12",
  "proc.t1.h": "The brief",
  "proc.t1.p": "I asked Claude Code to act as a full game-development team (designers, developers, 3D artists, kid UX, writers and catechism consultants) and deliver a real, playable game, not a concept. Browser first, architecture ready for mobile, reference images in a folder.",
  "proc.t2.d": "Nov 12",
  "proc.t2.h": "“The graphics are still rough”",
  "proc.t2.p": "The first playable had the structure I liked, but the look was not it. I asked for real saint images, a boy or girl to play (no adults), the Passion of Christ told in a playful way, and a better render.",
  "proc.t3.d": "Nov 12",
  "proc.t3.h": "Blender comes in",
  "proc.t3.p": "I told Claude it could install whatever was needed. Blender 4.5 went on the machine, the characters were rebuilt as a skinned mesh, the village got CC0 packs, and toon shading plus outlines moved the look toward the references.",
  "proc.t4.d": "Nov 13",
  "proc.t4.h": "The official site",
  "proc.t4.p": "The site goes public on Vercel under the custom domain aventuracatolica.com.br. Parents and catechists screen (LGPD, ECA Digital), the 92-source check, soundtrack, a landscape phone layout and automatic graphics quality.",
  "proc.t5.d": "Nov 14 to 15",
  "proc.t5.h": "Roles instead of names",
  "proc.t5.p": "All characters became roles (“Hi, I am the catechist”), and the voices were regenerated. Saint Francis got a statue in the square, with a Dog and a Cat that remind kids animals are God’s creatures (Catechism, n. 2416).",
  "proc.t6.d": "Nov 17",
  "proc.t6.h": "Polish",
  "proc.t6.p": "A better face for the Saint Francis statue, moved away from Our Lady’s fountain; the Cat now sits near a neighbor’s house and the Dog wanders the square. Small things that make the village feel alive.",
  "status.eyebrow": "Status",
  "status.h": "Where it stands today",
  "status.lead": "This case is a snapshot of a project that keeps growing. I will keep updating it as the native apps and the new content arrive.",
  "status.c1.t": "Live now",
  "status.c1.l1": "Playable on the web, responsive on desktop and phone",
  "status.c1.l2": "9 missions, 14 medals, more than 440 narrated lines",
  "status.c1.l3": "Free, with no ads and no data collection",
  "status.c2.t": "In development",
  "status.c2.l1": "Native iOS and Android versions, which I am coding now",
  "status.c2.l2": "One path I am evaluating: wrapping this same game with Capacitor",
  "status.c2.l3": "Touch, performance and low-end phones to test on real devices",
  "status.c3.t": "Next",
  "status.c3.l1": "More content: Trinity, creation, the life of Jesus, Bible stories, the liturgical year, the Pope and bishops",
  "status.c3.l2": "Human voice recordings and a review by a catechist or priest",
  "status.c3.l3": "Tests with children and the public launch",
  "cta.h": "Come explore the village",
  "cta.p": "Free, in the browser, on your computer or phone. I am recording content about the project and will start announcing it soon, so follow along.",
  "cta.play": "Play Aventura Católica",
  "cta.ig": "Follow @gabrieltechdesign",
  "cta.back": "Back to projects",
  "foot.p": "Made with faith, as a volunteer. Ad Maiorem Dei Gloriam.",
  "lang.en": "English",
  "lang.pt": "Português"
 },
 "pt": {
  "meta.title": "Aventura Católica · Um jogo 3D gratuito para a catequese | Gabriel Moreira",
  "meta.desc": "Case: um jogo 3D gratuito, para navegador, que ensina a fé católica às crianças, feito como projeto voluntário com Three.js, Blender e Claude Code. iOS e Android em desenvolvimento.",
  "nav.projects": "Projetos",
  "nav.play": "Jogar",
  "nav.progress": "Progresso da leitura",
  "hero.eyebrow": "Game design · Three.js · Projeto voluntário · 2026",
  "hero.sub": "Um jogo 3D gratuito que ensina a fé católica às crianças, brincando.",
  "hero.cta1": "Jogar agora",
  "hero.cta2": "Como foi feito",
  "hero.status": "No ar na web · iOS e Android em desenvolvimento",
  "hero.phone.alt": "O jogo rodando em um celular deitado, com os controles na tela",
  "meta.role.k": "Papel",
  "meta.role.v": "Ideia, direção de arte, design e desenvolvimento, com o Claude Code",
  "meta.aud.k": "Para quem",
  "meta.aud.v": "Crianças de 6 a 12 anos na catequese",
  "meta.cost.k": "Preço",
  "meta.cost.v": "Gratuito. Sem anúncios, compras ou coleta de dados",
  "meta.when.k": "Início",
  "meta.when.v": "Novembro de 2026 · começou no dia 12",
  "note.tag": "Por que está aqui",
  "note.p": "<strong>Este não é o tipo de projeto que costumo mostrar.</strong> Deixei público para mostrar uma coisa: quando conecto anos de experiência em tecnologia e design com inteligência artificial, como o Claude Code, posso me aventurar em stacks bem diferentes. Ultimamente isso inclui a criação de jogos. Começou como um projeto voluntário e é onde duas coisas de que gosto muito se encontram: a minha fé católica e o meu lado gamer.",
  "why.eyebrow": "De onde veio",
  "why.h": "Fé, voluntariado e coceira de gamer",
  "why.lead": "Sou católico apostólico romano e sirvo na Pascom (Pastoral da Comunicação) da Diocese de Santo André: tiro fotos, ajudo nas transmissões da Missa e gosto de criar VFX para projetos da diocese. Um dia veio a pergunta: e se eu fizesse um jogo para evangelizar as crianças da catequese de um jeito lúdico e simples?",
  "why.c1.h": "A missão",
  "why.c1.p": "Evangelizar as crianças da catequese de um jeito lúdico e simples, com um mundo 3D que elas realmente queiram explorar.",
  "why.c2.h": "A fonte",
  "why.c2.p": "Todo texto vem do Catecismo da Igreja Católica e do site do Vaticano, e a fonte fica registrada no jogo.",
  "why.c3.h": "As regras",
  "why.c3.p": "Gratuito. Sem anúncios, compras, cadastro ou coleta de dados. Trabalho voluntário, feito para ser compartilhado com a diocese e além dela.",
  "concept.eyebrow": "Conceito",
  "concept.h": "Uma vila católica inspirada no Chaves",
  "concept.lead": "O mundo é uma vilinha onde todo mundo se conhece, como a vizinhança do Chaves. Tem uma praça, uma igreja matriz, vizinhos e personagens que carregam, cada um, um pedaço de conhecimento. Vesti tudo de arquitetura colonial brasileira e mirei num visual quente, de filme de animação.",
  "concept.refs.k": "O alvo",
  "concept.refs.p": "Três imagens de referência que coloquei na pasta do projeto no primeiro dia.",
  "concept.res.k": "O resultado",
  "concept.res.p": "As mesmas ideias rodando em tempo real, no navegador.",
  "concept.ref1.alt": "Imagem de referência: praça com chafariz, igrejinha e uma catequista",
  "concept.ref2.alt": "Imagem de referência: interior da igreja com altar, crucifixo e crianças",
  "concept.ref3.alt": "Imagem de referência: jardim com coroinhas e um padre",
  "concept.res1.alt": "No jogo: a praça em frente à igreja",
  "concept.res2.alt": "No jogo: dentro da igreja, com o corredor, os bancos e o altar",
  "concept.res3.alt": "No jogo: o Caminho dos Santos com suas capelinhas",
  "concept.honest": "<strong>Não começou bonito.</strong> O primeiro jogável tinha um visual estilo Roblox, com bonequinhos, e eu falei: o gráfico estava ruim e eu não queria aquele estilo. Foi esse retorno que levou o projeto para o Blender.",
  "world.eyebrow": "O mundo",
  "world.h": "A vila vista de cima",
  "world.lead": "Um mapa único e contínuo, percorrido a pé: a praça no meio, a igreja matriz ao norte e os jardins em volta. O jogo tem minimapa e um mapa grande da vila, com uma trilha pontilhada até a missão atual.",
  "world.img.alt": "Vista aérea de toda a vila: igreja, praça, jardins e os trilhos do trenzinho",
  "world.p1.h": "Igreja Matriz",
  "world.p1.p": "Altar, ambão, sacrário, pia batismal, crucifixo, imagens, bancos e as 14 estações da Via-Sacra nas paredes.",
  "world.p2.h": "Praça da Comunidade",
  "world.p2.p": "O chafariz de Nossa Senhora das Graças, as casas e os vizinhos, e a estátua de São Francisco com um Cachorro e um Gato.",
  "world.p3.h": "Caminho dos Santos",
  "world.p3.p": "Uma praça em roda com capelinhas para 11 santos, e um recanto com os títulos de Nossa Senhora.",
  "world.p4.h": "Jardim do Rosário",
  "world.p4.p": "Um terço gigante no chão, com as contas que se acendem enquanto se reza, e a gruta de Nossa Senhora de Lourdes.",
  "world.p5.h": "Jardim dos Sacramentos",
  "world.p5.p": "Sete vitrais em estela, um para cada sacramento, para descobrir e separar em três grupos.",
  "world.p6.h": "Varanda dos Coroinhas",
  "world.p6.p": "Uma varanda aberta com os objetos da Missa, onde a criança treina para ser coroinha.",
  "world.p7.h": "Estação do Trenzinho",
  "world.p7.p": "Um passeio narrado pela vila inteira, com trilha sonora própria.",
  "world.map.cap": "O mapa da vila dentro do jogo, com a trilha pontilhada até a missão atual.",
  "world.map.alt": "Mapa da vila no jogo listando os lugares e mostrando o jogador e a marca da missão",
  "world.g1": "A praça e o chafariz de Nossa Senhora das Graças",
  "world.g2": "Dentro da igreja: um interior para caminhar, não um cenário",
  "world.g3": "As estações da Via-Sacra nas paredes da igreja",
  "world.g4": "O Caminho dos Santos",
  "world.g5": "O Jardim dos Sacramentos",
  "world.g6": "O Jardim do Rosário e a gruta de Lourdes",
  "world.g7": "Estátua de São Francisco, com o Cachorro que passeia pela praça",
  "world.alt1": "A praça da vila com o chafariz e as casas",
  "world.alt2": "Interior da igreja com tapete vermelho no corredor",
  "world.alt3": "Vitrais e estações da Via-Sacra dentro da igreja",
  "world.alt4": "Arco de entrada do Caminho dos Santos",
  "world.alt5": "Caminho do jardim com vitrais em estela",
  "world.alt6": "Contas do terço no chão levando a uma gruta",
  "world.alt7": "Estátua de São Francisco na praça",
  "chars.eyebrow": "Personagens",
  "chars.h": "Uma vila cheia de gente com algo para ensinar",
  "chars.lead": "Cada personagem carrega um pedaço de conhecimento e fala em frases curtas e simples, com a fonte registrada. Eles não têm nome próprio de propósito: são papéis, como a catequista, o padre e a irmã. E quem joga é sempre uma criança, menino ou menina, nunca um adulto.",
  "chars.c1.role": "A catequista",
  "chars.c1.teach": "A igreja e os sacramentos",
  "chars.c1.q": "“Olá, eu sou a catequista da nossa comunidade. Que alegria ver você aqui!”",
  "chars.c2.role": "O padre",
  "chars.c2.teach": "Orações e o Caminho da Cruz",
  "chars.c2.q": "“A paz de Jesus! Que bom que você veio.”",
  "chars.c3.role": "A irmã",
  "chars.c3.teach": "O terço",
  "chars.c3.q": "“Está vendo este terço gigante no chão? Cada bolinha é uma conta, e cada conta é uma oração.”",
  "chars.c4.role": "O jardineiro",
  "chars.c4.teach": "Os santos",
  "chars.c4.q": "“Os santos são amigos de Deus. Viveram como Jesus ensinou e, do céu, rezam por nós.”",
  "chars.c5.role": "A vizinha doente",
  "chars.c5.teach": "Ajudar o próximo",
  "chars.c5.q": "“Ando meio doentinha, então fico aqui na porta olhando a praça.”",
  "chars.c6.role": "As crianças da praça",
  "chars.c6.teach": "Companhia pelo caminho",
  "chars.c6.q": "Outras crianças dividem a vila com você, para ela nunca parecer vazia.",
  "make.eyebrow": "Como os personagens foram feitos",
  "make.h": "Dirigidos à mão, construídos com Blender e IA",
  "make.lead": "Os personagens não foram baixados. Eu dirigi cada um deles e conectei o Blender ao Claude Code para a IA construir o que eu descrevia, rodada após rodada, até ficar certo.",
  "make.s1.h": "Direção",
  "make.s1.p": "Eu defino o visual, os papéis e as proporções: infantil e cartum, cores quentes, menino ou menina para jogar, nunca um adulto.",
  "make.s2.h": "Blender + IA",
  "make.s2.p": "Scripts em Python rodados no Blender 4.5 montam uma malha contínua do corpo, com cabelos, roupas e acessórios como objetos separados, para o jogo trocar a cor do cabelo, a camiseta, saias, batinas e a túnica de coroinha.",
  "make.s3.h": "Esqueleto e visual",
  "make.s3.p": "A malha é ligada a um esqueleto CC0 com 9 animações (parado, andar, trotar, correr, pular, pousar, conversar, interagir, dançar). Sombreamento em faixas e contorno no Three.js dão o visual de desenho animado.",
  "make.code.cap": "O início de tools/blender/personagem.py, o script que constrói o personagem.",
  "make.cust.img.alt": "Criar personagem: escolha menino ou menina, pele, cabelo e cor da camiseta",
  "make.cust.h": "O seu personagem",
  "make.cust.p": "Uma tela só, sem passos: menino ou menina, tom de pele, cabelo, cor do cabelo e camiseta, com o boneco mudando na hora ao lado do painel.",
  "play.eyebrow": "Jogabilidade",
  "play.h": "Aprender explorando, responder brincando",
  "play.lead": "Nove missões, todas jogáveis do início ao fim. Os personagens mandam a criança a lugares, cada descoberta abre um texto curto com a fonte, e pequenas atividades conferem o que ela aprendeu, sem pressão e com quantas tentativas quiser.",
  "play.s1": "Conversa: falas curtas, narradas, com o papel de quem fala",
  "play.s2": "Perguntas com opções grandes e claras",
  "play.s3": "Cartões dos santos, com pintura e a virtude em uma linha",
  "play.s4": "Mochila: missões, medalhas, diário e progresso",
  "play.s1.alt": "Caixa de diálogo com a catequista falando",
  "play.s2.alt": "Pergunta sobre São Francisco com três cartões de resposta",
  "play.s3.alt": "Cartão de São Carlo Acutis com retrato e texto",
  "play.s4.alt": "Tela da mochila listando as missões e seus cadeados",
  "play.m.h": "As nove missões",
  "play.m1": "Conhecendo a Casa de Deus",
  "play.m1.p": "Encontrar 5 lugares da igreja e responder a 3 perguntas com imagens.",
  "play.m2": "Os objetos da Missa",
  "play.m2.p": "Descobrir 5 objetos litúrgicos e jogar “qual é o objeto?”.",
  "play.m3": "Aprendendo a rezar",
  "play.m3.p": "O Sinal da Cruz e o Pai-Nosso, e depois completar a oração.",
  "play.m4": "Os sete sacramentos",
  "play.m4.p": "Descobrir 7 vitrais e separar os sacramentos em 3 grupos.",
  "play.m5": "Meu primeiro dia como coroinha",
  "play.m5.p": "Escolher a veste, preparar a credência, ordenar a procissão, levar a vela.",
  "play.m6": "Aprendiz do Rosário",
  "play.m6.p": "Encontrar 4 placas dos mistérios e rezar um mistério enquanto as contas se acendem.",
  "play.m7": "A jornada dos santos",
  "play.m7.p": "Visitar 11 capelinhas, de São Francisco a São Carlo Acutis e Nossa Senhora.",
  "play.m8": "Ajudando o próximo",
  "play.m8.p": "Levar pães a uma vizinha doente e pensar em situações de caridade e perdão.",
  "play.m9": "O Caminho da Cruz",
  "play.m9.p": "Percorrer as 14 estações e terminar na alegria da Páscoa.",
  "play.prog.h": "Progresso que premia a curiosidade",
  "play.prog.p": "Pontos de aprendizado, 6 níveis, 14 medalhas, um diário de descobertas com as fontes, orações guardadas e uma túnica de coroinha para desbloquear. Também há convites para viver o que aprendeu fora do jogo, que de propósito não valem pontos.",
  "play.acc.h": "Acessível desde o início",
  "play.acc.p": "Botões grandes, navegação por teclado, letras grandes, alto contraste, menos movimento e um modo leve para aparelhos simples.",
  "faith.eyebrow": "Conteúdo de fé",
  "faith.h": "Todo texto tem fonte",
  "faith.lead": "Essa foi a regra desde o primeiro prompt: todo o material catequético tem de vir do Catecismo da Igreja Católica e do site do Vaticano. Eu não queria um jogo que “soa católico”, queria um jogo que pode ser conferido.",
  "faith.n1": "92",
  "faith.n1.p": "fontes conferidas, uma por uma, listadas na documentação do projeto",
  "faith.n2": "40",
  "faith.n2.p": "números do Catecismo lidos no texto integral e comparados com o resumo do jogo",
  "faith.n3": "Vulgata",
  "faith.n3.p": "passagens bíblicas conferidas no texto latino da Nova Vulgata, no site da Santa Sé",
  "faith.fix.h": "A conferência achou erros, e eu corrigi",
  "faith.fix.p": "O Glória ao Pai citava o Catecismo, que não traz essa oração, e agora cita a Rosarium Virginis Mariae. O Creio passou a seguir exatamente o texto do Catecismo. Em São Carlo Acutis, tirei dois detalhes que nenhuma fonte consultada confirma.",
  "faith.warn.tag": "Limite honesto",
  "faith.warn.p": "O jogo não substitui a Missa, os sacramentos nem a catequese presencial. O conteúdo foi redigido a partir de fontes oficiais, mas ainda precisa da revisão de um catequista ou de um padre antes de ser usado com crianças, e eu digo isso na própria tela “Para pais e catequistas” do jogo.",
  "mob.eyebrow": "Celular",
  "mob.h": "Feito para ser jogado deitado",
  "mob.lead": "O mesmo jogo abre no navegador do celular. Controle redondo, botão de pular e botão de conversar, controles proporcionais à altura da tela e respeitando o notch, e um layout que nunca rola. As versões nativas para iOS e Android são o que estou programando agora.",
  "mob.t1": "Tela inicial no celular",
  "mob.t2": "Direcional, pular e conversar",
  "mob.t3": "Diálogos no tamanho da tela",
  "mob.t1.alt": "Tela inicial do jogo em um celular deitado",
  "mob.t2.alt": "Jogo em um celular com direcional redondo, botão de pular e botão de conversar",
  "mob.t3.alt": "Diálogo da catequista em um celular",
  "mob.perf.h": "Ele se adapta ao aparelho",
  "mob.perf.p": "Em celulares o jogo já começa com menos efeitos e, em qualquer aparelho, se ficar lento por alguns segundos, ele reduz os efeitos sozinho, um nível por vez. Há também um Modo leve nos Ajustes. No meu iPhone ele roda liso.",
  "tech.eyebrow": "Por baixo do capô",
  "tech.h": "Tecnologia e de onde vieram os assets",
  "tech.lead": "Um site estático: sem etapa de build, sem servidor, sem banco de dados. Abriu a página, jogou.",
  "tech.r1.k": "Motor",
  "tech.r1.v": "<b>Three.js r170</b> com módulos ES puros, escrito para o navegador, mais o carregador glTF e o pós-processamento.",
  "tech.r2.k": "Arte 3D",
  "tech.r2.v": "<b>Blender 4.5 LTS</b> guiado por scripts em Python para os personagens e as imagens sacras, mais pacotes CC0 da <b>Quaternius</b> para natureza, construções, objetos e animações.",
  "tech.r3.k": "Visual",
  "tech.r3.v": "Sombreamento em três faixas de luz, contornos escuros nos personagens e nas imagens sacras, luz quente e sombras suaves.",
  "tech.r4.k": "Desempenho",
  "tech.r4.v": "Texturas reduzidas para WebP de 1024 px com glTF Transform e sharp, redução automática de qualidade, Modo leve. Quando medi no meu computador: cerca de 16 ms por quadro em 1080p na praça, com cerca de 1 milhão de triângulos.",
  "tech.r5.k": "Áudio",
  "tech.r5.v": "Mais de 440 falas narradas com vozes neurais em português do Brasil (IA), uma voz por personagem, mais trilha sonora e passos que mudam com o piso. Criei uma página de estúdio de gravação para uma voz humana poder substituir qualquer fala.",
  "tech.r6.k": "Publicação",
  "tech.r6.v": "Hospedado na <b>Vercel</b> em <b>aventuracatolica.com.br</b>, com uma página de privacidade sobre LGPD e ECA Digital. O progresso e o apelido ficam só no aparelho.",
  "tech.r7.k": "Fluxo com IA",
  "tech.r7.v": "<b>Claude Code</b> com skills de desenvolvimento de jogos, trabalhando dentro da pasta do projeto, rodando o Blender pela linha de comando e testando em um navegador de verdade a cada rodada.",
  "assets.h": "De onde veio cada asset",
  "assets.a1.k": "Modelos 3D e animações",
  "assets.a1.v": "Quaternius, CC0: Stylized Nature MegaKit, Medieval Village MegaKit, Fantasy Props MegaKit e Universal Animation Library, baixados do OpenGameArt.",
  "assets.a2.k": "Personagens e imagens sacras",
  "assets.a2.v": "Malhas originais construídas no Blender com scripts, sobre o esqueleto da Quaternius. Nenhum modelo de personagem de terceiros.",
  "assets.a3.k": "Pinturas e gravuras",
  "assets.a3.v": "Santos, Nossa Senhora e a Via-Sacra vêm do Wikimedia Commons, em domínio público ou licença livre, com autor, licença e página registrados no arquivo de créditos.",
  "assets.a4.k": "Textos",
  "assets.a4.v": "Catecismo da Igreja Católica, vatican.va e Nova Vulgata, com cada referência guardada junto do texto que a usa.",
  "assets.a5.k": "Vozes",
  "assets.a5.v": "Vozes neurais em português do Brasil (IA), substituíveis por gravações humanas.",
  "assets.a6.k": "Bibliotecas",
  "assets.a6.v": "three.js (MIT), glTF Transform (MIT) e sharp (Apache-2.0). O Blender (GPL) é usado só para gerar arquivos e não é distribuído com o jogo.",
  "proc.eyebrow": "Processo",
  "proc.h": "Feito com o Claude Code, uma rodada de cada vez",
  "proc.lead": "Nos primeiros dias o projeto passou por mais de vinte rodadas. Cada rodada foi o mesmo ciclo: eu jogo, digo o que me incomoda, o Claude muda, e testamos de novo.",
  "proc.t1.d": "12/11",
  "proc.t1.h": "O briefing",
  "proc.t1.p": "Pedi ao Claude Code que agisse como uma equipe completa de desenvolvimento de jogos (designers, desenvolvedores, artistas 3D, UX infantil, roteiristas e consultores de catequese) e entregasse um jogo de verdade, jogável, não um conceito. Navegador primeiro, arquitetura pronta para o celular, imagens de referência numa pasta.",
  "proc.t2.d": "12/11",
  "proc.t2.h": "“O gráfico ainda está ruinzinho”",
  "proc.t2.p": "O primeiro jogável tinha a estrutura que eu queria, mas o visual não era aquilo. Pedi imagens reais de santos, menino ou menina para jogar (sem adultos), a Paixão de Cristo de um jeito lúdico e um render melhor.",
  "proc.t3.d": "12/11",
  "proc.t3.h": "O Blender entra",
  "proc.t3.p": "Disse ao Claude que ele podia instalar o que precisasse. O Blender 4.5 entrou na máquina, os personagens foram refeitos como malha com esqueleto, a vila ganhou pacotes CC0 e o sombreamento em faixas com contorno aproximou o visual das referências.",
  "proc.t4.d": "13/11",
  "proc.t4.h": "O site oficial",
  "proc.t4.p": "O site vai ao ar na Vercel com o domínio próprio aventuracatolica.com.br. Tela para pais e catequistas (LGPD, ECA Digital), a conferência das 92 fontes, trilha sonora, layout para celular deitado e qualidade gráfica automática.",
  "proc.t5.d": "14 a 15/11",
  "proc.t5.h": "Papéis em vez de nomes",
  "proc.t5.p": "Todos os personagens viraram papéis (“Olá, eu sou a catequista”) e as vozes foram regeradas. São Francisco ganhou uma estátua na praça, com um Cachorro e um Gato que lembram às crianças que os animais são criaturas de Deus (Catecismo, n. 2416).",
  "proc.t6.d": "17/11",
  "proc.t6.h": "Acabamento",
  "proc.t6.p": "Um rosto melhor na estátua de São Francisco, que saiu de perto do chafariz de Nossa Senhora; o Gato ficou perto da casa de uma vizinha e o Cachorro passeia pela praça. Pequenas coisas que deixam a vila viva.",
  "status.eyebrow": "Status",
  "status.h": "Em que pé está hoje",
  "status.lead": "Este case é um retrato de um projeto que continua crescendo. Vou atualizando conforme os apps nativos e os conteúdos novos chegarem.",
  "status.c1.t": "No ar agora",
  "status.c1.l1": "Jogável na web, responsivo no computador e no celular",
  "status.c1.l2": "9 missões, 14 medalhas, mais de 440 falas narradas",
  "status.c1.l3": "Gratuito, sem anúncios e sem coleta de dados",
  "status.c2.t": "Em desenvolvimento",
  "status.c2.l1": "Versões nativas para iOS e Android, que estou programando agora",
  "status.c2.l2": "Um caminho que estou avaliando: empacotar este mesmo jogo com o Capacitor",
  "status.c2.l3": "Toque, desempenho e celulares simples para testar em aparelhos reais",
  "status.c3.t": "Próximos passos",
  "status.c3.l1": "Mais conteúdo: Trindade, criação, a vida de Jesus, histórias da Bíblia, ano litúrgico, o Papa e os bispos",
  "status.c3.l2": "Gravações com voz humana e a revisão de um catequista ou padre",
  "status.c3.l3": "Testes com crianças e o lançamento ao público",
  "cta.h": "Venha explorar a vila",
  "cta.p": "Gratuito, no navegador, no computador ou no celular. Estou gravando conteúdo sobre o projeto e em breve começo a divulgar, então acompanhe.",
  "cta.play": "Jogar Aventura Católica",
  "cta.ig": "Seguir @gabrieltechdesign",
  "cta.back": "Voltar aos projetos",
  "foot.p": "Feito com fé, como voluntário. Ad Maiorem Dei Gloriam.",
  "lang.en": "English",
  "lang.pt": "Português"
 }
};

  function applyLang(lang) {
    var dict = COPY[lang] || COPY.en;
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
    document.title = dict['meta.title'];
    var md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute('content', dict['meta.desc']);
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var v = dict[el.getAttribute('data-i18n')];
      if (v !== undefined) el.innerHTML = v;
    });
    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      var v = dict[el.getAttribute('data-i18n-alt')];
      if (v !== undefined) el.alt = v;
    });
    document.querySelectorAll('[data-i18n-label]').forEach(function (el) {
      var v = dict[el.getAttribute('data-i18n-label')];
      if (v !== undefined) el.setAttribute('aria-label', v);
    });
    document.querySelectorAll('.lang-switch button').forEach(function (b) {
      b.setAttribute('aria-pressed', b.dataset.l === lang ? 'true' : 'false');
    });
    // Mantém o idioma ao voltar para o portfólio.
    document.querySelectorAll('a[data-home]').forEach(function (a) {
      var hash = a.getAttribute('href').indexOf('#projects') > -1 ? '#projects' : '';
      a.setAttribute('href', '../' + (lang === 'pt' ? '?lang=pt' : '') + hash);
    });
  }

  var current = /[?&]lang=pt\b/.test(location.search) ? 'pt' : 'en';
  if (current !== 'en') applyLang(current);

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.querySelectorAll('.lang-switch button').forEach(function (b) {
    b.addEventListener('click', function () {
      var next = b.dataset.l;
      if (next === current) return;
      current = next;
      try { history.replaceState(null, '', next === 'pt' ? '?lang=pt' : location.pathname); } catch (e) {}
      if (reduce) { applyLang(next); return; }
      document.body.classList.add('lang-swapping');
      setTimeout(function () {
        applyLang(next);
        document.body.classList.remove('lang-swapping');
      }, 160);
    });
  });

  // Entrada das seções
  var items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || reduce) {
    items.forEach(function (el) { el.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
    items.forEach(function (el) { io.observe(el); });
    // Plano B: se o navegador atrasar o IntersectionObserver (salto de rolagem), confere pela posição.
    var pending = false;
    var sweep = function () {
      pending = false;
      var vh = window.innerHeight;
      items.forEach(function (el) {
        if (el.classList.contains('in')) return;
        var r = el.getBoundingClientRect();
        if (r.top < vh * 0.92 && r.bottom > 0) { el.classList.add('in'); io.unobserve(el); }
      });
    };
    window.addEventListener('scroll', function () { if (!pending) { pending = true; requestAnimationFrame(sweep); } }, { passive: true });
    window.addEventListener('resize', sweep);
  }

  // Barra de XP (progresso de leitura), no estilo do HUD do jogo
  var xp = document.querySelector('.xp');
  var fill = document.querySelector('.xp-fill');
  function onScroll() {
    var h = document.documentElement;
    var max = h.scrollHeight - h.clientHeight;
    var p = max > 0 ? Math.min(1, Math.max(0, h.scrollTop / max)) : 0;
    fill.style.transform = 'scaleX(' + p.toFixed(4) + ')';
    xp.setAttribute('aria-valuenow', String(Math.round(p * 100)));
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Pinos do mapa <-> legenda
  var pins = document.querySelectorAll('.pin');
  var lis = document.querySelectorAll('.legend li');
  function focusPin(n, on) {
    document.querySelectorAll('[data-pin="' + n + '"]').forEach(function (el) { el.classList.toggle('on', on); });
  }
  pins.forEach(function (p) {
    var n = p.getAttribute('data-pin');
    p.addEventListener('mouseenter', function () { focusPin(n, true); });
    p.addEventListener('mouseleave', function () { focusPin(n, false); });
    p.addEventListener('focus', function () { focusPin(n, true); });
    p.addEventListener('blur', function () { focusPin(n, false); });
    p.addEventListener('click', function () {
      var li = document.querySelector('.legend li[data-pin="' + n + '"]');
      if (li) li.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'center' });
    });
  });
  lis.forEach(function (li) {
    var n = li.getAttribute('data-pin');
    li.addEventListener('mouseenter', function () { focusPin(n, true); });
    li.addEventListener('mouseleave', function () { focusPin(n, false); });
  });
})();
