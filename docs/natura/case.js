/* Case GaYa: idioma (EN/PT), demos ao vivo e entrada das seções. O texto em inglês já vem no HTML. */
(function () {
  'use strict';
  var COPY = {
 "en": {
  "meta.title": "GaYa · Multi-brand design system | Gabriel Moreira",
  "meta.desc": "Case study: leading GaYa, the multi-brand design system for Natura &Co. Three-tier tokens, WCAG 2.2, AI in the workflow, plus a rebuilt Storybook and a navigable app.",
  "x_sb": "Storybook",
  "x_pr": "Prototype",
  "x_port": "Portfolio",
  "h1": "Design System · Multi-brand · 2024",
  "h2": "Multi-brand<br>design system",
  "h3": "One system for the brands of the Natura &amp;Co Group, across web, iOS and Android.",
  "cta1": "Open the Storybook",
  "cta2": "Try the SimpleApp",
  "m1": "Role",
  "m1v": "Design System Lead",
  "m2": "Scope",
  "m2v": "Web, iOS and Android",
  "m3": "Context",
  "m3v": "Contractor through a partner company, one year, leading a lean team",
  "m4": "This version",
  "m4v": "Components rebuilt in 2026",
  "note.tag": "About this case",
  "note.p": "<strong>An independent, authorial adaptation.</strong> Years have passed and I no longer work there, so this is a rebuild for portfolio use: generic themes, a few components, no real brand data or third-party material, and details changed on purpose (radii, specs). It is not the delivered result. It shows what I learned, what I would improve and how I work day to day.",
  "c.e": "Context",
  "c.h": "A great name, and a lot to rebuild",
  "c.l": "I joined in 2024 to lead the design system team. GaYa already had a name, an homage to the tree planted at the company's headquarters, but the foundation still carried the legacy of Adobe XD, a tool Adobe discontinued years ago.",
  "c1h": "Legacy to migrate",
  "c1p": "Components and styles came from Adobe XD, now discontinued, and had to be rebuilt as a real system in Figma, not just moved.",
  "c2h": "Dozens of themes in one file",
  "c2p": "Each squad and business unit had its own light and dark themes. Every change risked breaking something somewhere else.",
  "c3h": "No shared language",
  "c3p": "Design and code named things differently, so handoff was slow and each platform drifted on its own.",
  "c4h": "A name that had to become a product",
  "c4p": "The goal was to turn GaYa into a system teams actually trust and contribute to.",
  "callout": "Part of the job was firefighting: stabilize first, then scale.",
  "n.e": "Results",
  "n.h": "What the system delivered",
  "n1": "~144%",
  "n1p": "ROI by the end of the year, from reuse, fewer remakes and no need to hire more external specialists.",
  "n2": "150+",
  "n2p": "components, built in the months after connecting Figma to AI.",
  "n3": "200+",
  "n3p": "design tokens in three tiers, synced from Figma Variables to the React repositories.",
  "n4": "-40%",
  "n4p": "accessibility bugs after recalibrating the whole color system to WCAG 2.2 AA/AAA.",
  "n5": "30%",
  "n5p": "more efficient from design to code.",
  "n6": "25%",
  "n6p": "less time spent on handoff.",
  "n7": "~40%",
  "n7p": "faster prototyping with the LogoType, Preview Themes and SimpleApp libraries.",
  "n.f": "Measured internally during my contract. Rounded, without baselines.",
  "p.e": "How I led it",
  "p.h": "From stabilizing to scaling",
  "p.l": "Each stage unlocked the next one.",
  "p1h": "Audit and stabilize",
  "p1p": "Mapped what existed, cleaned the main Figma file folder by folder and stopped the breakages.",
  "p2h": "Rebuild the foundations",
  "p2p": "Semantic study of the system and a three-tier token architecture with multi-brand theming. The squad lead feared a major breaking change, and rightly so, but we rolled it out step by step and it worked.",
  "p3h": "Organize the libraries",
  "p3p": "Core, team components, templates and utilities split into clear libraries, with changelog and release notes.",
  "p4h": "Bring AI into the workflow",
  "p4p": "Connected Figma to LLMs and Cursor for documentation, code scaffolding and icons.",
  "p5h": "Open the governance",
  "p5p": "A distributed contribution model so squads could extend the system without waiting on the core team.",
  "t.e": "Tokens",
  "t.h": "Three tiers, one codebase, many brands",
  "t.l": "Primitives hold raw values, semantic tokens give them a role and change with theme and mode, component tokens are local decisions. A brand is a mapping of tier 2, not a copy of the system. Try it:",
  "l.theme": "Theme",
  "l.mode": "Mode",
  "l.light": "Light",
  "l.dark": "Dark",
  "tt1": "1 · Primitive",
  "tt1p": "Raw values. No meaning.",
  "tt2": "2 · Semantic",
  "tt2p": "A role. This tier swaps per theme and mode.",
  "tt3": "3 · Component",
  "tt3p": "Local decisions that read from tier 2.",
  "d.e": "In Figma",
  "d.h": "Libraries, organized",
  "d.l": "Core components by family, team components, patterns and templates. Figma Variables carry the tokens that sync to React. Details are blurred or removed on purpose.",
  "d.cap1": "Core components, grouped by family: buttons, inputs, navigation, layout and feedback.",
  "d.cap2": "App mobile templates: login, home, showcase, notification and order. The base for the SimpleApp library.",
  "a.e": "AI in the process",
  "a.h": "Figma connected to Claude and Cursor",
  "a.l": "I connected Figma to LLMs through MCP, with Claude and Cursor AI. About three months after proposing it, the team was shipping components at a different pace. People reviewed every delivery.",
  "a1h": "Documentation",
  "a1p": "Usage and anatomy drafted from the Figma component, then reviewed.",
  "a2h": "Code scaffolding",
  "a2p": "A first React version generated from tokens and variants, then reviewed.",
  "a3h": "Icons",
  "a3p": "Icon sets generated and normalized to the grid, then curated by hand.",
  "a4h": "Shorter handoff",
  "a4p": "Design and code share names and structure, which is where the time savings came from.",
  "w.e": "Accessibility",
  "w.h": "Color, recalibrated to WCAG 2.2",
  "w.l": "Together with the branding team, I recalibrated the color system so text and interface pairs pass AA, and AAA where possible. The semantic tier owns the pairs, so the fix reached every brand at once.",
  "g.e": "DesignOps and governance",
  "g.h": "A core team that is not the bottleneck",
  "g1h": "Distributed contribution",
  "g1p": "Squads propose and build components under the same rules, with the core team as reviewer.",
  "g2h": "Versioning and changelog",
  "g2p": "Every release explained, so teams know what changed and why.",
  "g3h": "Visual QA",
  "g3p": "Storybook as the source of truth, with visual checks before publishing.",
  "g4h": "Cross-functional squads",
  "g4p": "Design, Engineering, QA and Product working from the same backlog.",
  "ld.e": "Leadership",
  "ld.h": "A lean team, and a great experience",
  "ld.l": "I was a contractor through a partner company, hired for this service for one year. It is not a tech company, which made it more interesting.",
  "ld1h": "Meetings and talks",
  "ld1p": "Many alignments and talks along the way, to keep design, engineering and product on the same page.",
  "ld2h": "Teaching AI to the team",
  "ld2p": "I taught the team to use AI in the workflow, with Cursor AI for development. Engineering supported the idea from the start.",
  "ld3h": "Results",
  "ld3p": "The support turned into results: the numbers above came from this way of working.",
  "ld.c": "It was a great experience. Learnings, mistakes and wins are all part of the process.",
  "td.e": "Today",
  "td.h": "The same project, in 2026",
  "td.l": "Between 2024 and now, Claude Code got much better and I customized my own setup even more. This is how I would mix what I did then with what I can do today: more performance, same care.",
  "td1h": "Components from the spec",
  "td1p": "Claude Code or Codex generating components, tests and stories from Figma tokens and variants, with people reviewing.",
  "td2h": "Tokens as a pipeline",
  "td2p": "Figma Variables to code in a repeatable script, instead of syncing by hand.",
  "td3h": "Docs and QA in sync",
  "td3p": "Documentation, stories and visual checks generated and updated with every change.",
  "td4h": "Less time, a smaller team",
  "td4p": "The same scope in less time and probably with an even smaller team, focused on decisions and review.",
  "td.c": "AI does the heavy lifting. People own the decisions.",
  "lr.e": "Learnings",
  "lr.h": "Don't cling to legacy",
  "lr.l": "What gave the most headaches was holding on to a legacy project. We could not use AI freely or start something fresh, for fear of breaking it.",
  "lr1h": "Build new when the base is weak",
  "lr1p": "Some projects have a solid structure. But a legacy that was not well built or organized is more likely to break than a new build is.",
  "lr2h": "Not a seven-headed beast anymore",
  "lr2p": "A design system is no longer built the old way. Companies need to be open to evolving.",
  "lr3h": "AI is today, not the future",
  "lr3p": "Projects will get even more robust, almost a snap of the fingers. This is my view as a design engineer, mixing design and code, specialized in AI engineering.",
  "lr.c": "Want to work together or talk mentoring? Get in touch.",
  "lr.b": "Talk to me",
  "b.e": "Explore",
  "b.h": "Try the system, rebuilt",
  "b.l": "A smaller set to show how I worked: tokens, three generic themes, light and dark, and 17 components you can try.",
  "x.sb.h": "Storybook GaYa",
  "x.sb.p": "Foundations plus 17 components with live controls, a usage snippet and the tokens each one reads. Switch theme and mode to see tier 2 remap.",
  "x.sb.c": "Open the Storybook",
  "x.pt.h": "SimpleApp",
  "x.pt.p": "A small navigable app built with the components: login, home, showcase, bag and notification. Swap theme and mode live.",
  "x.pt.c": "Try the SimpleApp",
  "x.new": "New",
  "o.e": "The original",
  "o.h": "Where the official one stands today",
  "o.l": "The coded Storybook is now maintained by other teams. What you see below is its current state, not the version I delivered: components have been changed since I left, and the documentation site I helped build is no longer available to me. Package names and details are blurred.",
  "o.cap": "Current state of the coded components Storybook, maintained by other teams.",
  "o.link": "Open the current Storybook",
  "s.e": "Stack",
  "s.h": "What it was built with",
  "end.e": "Next step",
  "end.h": "Want to talk about this project?",
  "end.p": "I can walk you through the decisions and how AI changed the workflow. I am also open to working together or mentoring.",
  "end.c1": "Talk to me",
  "end.c2": "See other projects",
  "end.l1": "GaYa Design System · 2024 · components rebuilt in 2026",
  "end.l2": "© 2026 Gabriel Moreira",
  "alt.lib": "Overview of the Figma core components page, organized by family",
  "alt.tpl": "Five mobile app templates in Figma: login, home, showcase, notification and order",
  "alt.old": "Current state of the coded components Storybook, with details blurred"
 },
 "pt": {
  "meta.title": "GaYa · Design system multimarca | Gabriel Moreira",
  "meta.desc": "Case: a liderança do GaYa, o design system multimarca da Natura &Co. Tokens em três camadas, WCAG 2.2, IA no fluxo, com Storybook recriado e app navegável.",
  "x_sb": "Storybook",
  "x_pr": "Protótipo",
  "x_port": "Portfólio",
  "h1": "Design System · Multimarca · 2024",
  "h2": "Design system<br>multimarca",
  "h3": "Um só sistema para as marcas do Grupo Natura &amp;Co, na web, no iOS e no Android.",
  "cta1": "Abrir o Storybook",
  "cta2": "Testar o SimpleApp",
  "m1": "Papel",
  "m1v": "Líder de Design System",
  "m2": "Escopo",
  "m2v": "Web, iOS e Android",
  "m3": "Contexto",
  "m3v": "Contractor por uma empresa parceira, por um ano, liderando um time enxuto",
  "m4": "Esta versão",
  "m4v": "Componentes recriados em 2026",
  "note.tag": "Sobre este case",
  "note.p": "<strong>Uma adaptação independente e autoral.</strong> Passaram-se anos e eu não trabalho mais lá, então esta é uma recriação para uso em portfólio: temas genéricos, poucos componentes, nenhum dado real de marca ou material de terceiros, e detalhes alterados de propósito (raios, specs). Não é o resultado entregue. Mostra o que aprendi, o que melhoraria e como eu trabalho no dia a dia.",
  "c.e": "Contexto",
  "c.h": "Um ótimo nome e muito para reconstruir",
  "c.l": "Entrei em 2024 para liderar o time do design system. O GaYa já tinha nome, uma homenagem à árvore plantada na sede da empresa, mas a base ainda carregava o legado do Adobe XD, ferramenta que a Adobe descontinuou há alguns anos.",
  "c1h": "Legado para migrar",
  "c1p": "Componentes e estilos vinham do Adobe XD, hoje descontinuado, e precisavam ser reconstruídos como um sistema de verdade no Figma, não só migrados.",
  "c2h": "Dezenas de temas em um arquivo",
  "c2p": "Cada squad e unidade de negócio tinha seus temas claro e escuro. Toda mudança corria o risco de quebrar algo em outro lugar.",
  "c3h": "Sem linguagem compartilhada",
  "c3p": "Design e código nomeavam as coisas de forma diferente, então o handoff era lento e cada plataforma andava por conta própria.",
  "c4h": "Um nome que precisava virar produto",
  "c4p": "O objetivo era transformar o GaYa em um sistema em que os times realmente confiam e contribuem.",
  "callout": "Parte do trabalho era apagar incêndio: estabilizar primeiro, escalar depois.",
  "n.e": "Resultados",
  "n.h": "O que o sistema entregou",
  "n1": "~144%",
  "n1p": "de ROI até o fim do ano, vindo de reuso, menos retrabalho e da dispensa de contratar mais especialistas externos.",
  "n2": "150+",
  "n2p": "componentes, construídos nos meses seguintes à conexão do Figma com IA.",
  "n3": "200+",
  "n3p": "design tokens em três camadas, sincronizados das Figma Variables para os repositórios React.",
  "n4": "-40%",
  "n4p": "de bugs de acessibilidade após recalibrar todo o sistema de cores para WCAG 2.2 AA/AAA.",
  "n5": "30%",
  "n5p": "mais eficiência do design ao código.",
  "n6": "25%",
  "n6p": "menos tempo gasto em handoff.",
  "n7": "~40%",
  "n7p": "mais velocidade de prototipação com as bibliotecas LogoType, Preview Themes e SimpleApp.",
  "n.f": "Medidos internamente durante o meu contrato. Arredondados, sem as bases de cálculo.",
  "p.e": "Como conduzi",
  "p.h": "De estabilizar a escalar",
  "p.l": "Cada etapa destravou a seguinte.",
  "p1h": "Auditar e estabilizar",
  "p1p": "Mapeei o que existia, limpei o arquivo principal do Figma pasta por pasta e parei as quebras.",
  "p2h": "Reconstruir as fundações",
  "p2p": "Estudo semântico do sistema e uma arquitetura de tokens em três camadas com theming multimarca. O líder da squad tinha medo de uma grande breaking change, com razão, mas a entrega foi feita por etapas e deu certo.",
  "p3h": "Organizar as bibliotecas",
  "p3p": "Core, componentes de time, templates e utilitários separados em bibliotecas claras, com changelog e notas de release.",
  "p4h": "Trazer IA para o fluxo",
  "p4p": "Conectei o Figma a LLMs e ao Cursor para documentação, scaffolding de código e ícones.",
  "p5h": "Abrir a governança",
  "p5p": "Um modelo de contribuição distribuído para os squads estenderem o sistema sem esperar o time core.",
  "t.e": "Tokens",
  "t.h": "Três camadas, um código, várias marcas",
  "t.l": "Primitivos guardam valores brutos, tokens semânticos dão um papel e mudam com tema e modo, tokens de componente são decisões locais. Uma marca é um mapeamento da camada 2, não uma cópia do sistema. Teste:",
  "l.theme": "Tema",
  "l.mode": "Modo",
  "l.light": "Claro",
  "l.dark": "Escuro",
  "tt1": "1 · Primitivo",
  "tt1p": "Valores brutos. Sem significado.",
  "tt2": "2 · Semântico",
  "tt2p": "Um papel. Esta camada troca por tema e modo.",
  "tt3": "3 · Componente",
  "tt3p": "Decisões locais que leem da camada 2.",
  "d.e": "No Figma",
  "d.h": "Bibliotecas, organizadas",
  "d.l": "Componentes core por família, componentes de time, patterns e templates. As Figma Variables carregam os tokens que sincronizam com o React. Detalhes borrados ou removidos de propósito.",
  "d.cap1": "Componentes core, agrupados por família: botões, inputs, navegação, layout e feedback.",
  "d.cap2": "Templates de app mobile: login, home, vitrine, notificação e pedido. A base da biblioteca SimpleApp.",
  "a.e": "IA no processo",
  "a.h": "Figma conectado ao Claude e ao Cursor",
  "a.l": "Conectei o Figma a LLMs via MCP, com o Claude e o Cursor AI. Cerca de três meses depois da proposta, o time entregava componentes em outro ritmo. Pessoas revisavam cada entrega.",
  "a1h": "Documentação",
  "a1p": "Uso e anatomia rascunhados a partir do componente no Figma, depois revisados.",
  "a2h": "Scaffolding de código",
  "a2p": "Uma primeira versão React gerada a partir de tokens e variantes, depois revisada.",
  "a3h": "Ícones",
  "a3p": "Sets de ícones gerados e normalizados na grade, depois curados à mão.",
  "a4h": "Handoff mais curto",
  "a4p": "Design e código compartilham nomes e estrutura, e daí veio a economia de tempo.",
  "w.e": "Acessibilidade",
  "w.h": "Cor, recalibrada para a WCAG 2.2",
  "w.l": "Junto com o time de branding, recalibrei o sistema de cores para os pares de texto e interface passarem em AA, e AAA quando possível. A camada semântica é dona dos pares, então a correção chegou a todas as marcas de uma vez.",
  "g.e": "DesignOps e governança",
  "g.h": "Um time core que não é o gargalo",
  "g1h": "Contribuição distribuída",
  "g1p": "Squads propõem e constroem componentes sob as mesmas regras, com o time core revisando.",
  "g2h": "Versionamento e changelog",
  "g2p": "Cada release explicada, para os times saberem o que mudou e por quê.",
  "g3h": "QA visual",
  "g3p": "O Storybook como fonte da verdade, com checagens visuais antes de publicar.",
  "g4h": "Squads multidisciplinares",
  "g4p": "Design, Engenharia, QA e Produto trabalhando no mesmo backlog.",
  "ld.e": "Liderança",
  "ld.h": "Um time enxuto e uma ótima experiência",
  "ld.l": "Fui contractor por uma empresa parceira, contratado para este serviço por um ano. Não é uma empresa de tecnologia, o que tornou tudo mais interessante.",
  "ld1h": "Reuniões e palestras",
  "ld1p": "Muitos alinhamentos e palestras no caminho, para manter design, engenharia e produto na mesma página.",
  "ld2h": "Ensinando IA ao time",
  "ld2p": "Ensinei o time a usar IA no fluxo, com o Cursor AI no desenvolvimento. A engenharia apoiou a ideia desde o início.",
  "ld3h": "Resultados",
  "ld3p": "O apoio virou resultado: os números acima vieram desse jeito de trabalhar.",
  "ld.c": "Foi uma experiência muito bacana. Aprendizados, erros e acertos fazem parte do processo.",
  "td.e": "Hoje",
  "td.h": "O mesmo projeto, em 2026",
  "td.l": "De 2024 para cá, o Claude Code melhorou muito e eu personalizei ainda mais o meu setup. É assim que eu misturaria o que fiz na época com o que dá para fazer hoje: mais performance, o mesmo cuidado.",
  "td1h": "Componentes a partir da spec",
  "td1p": "Claude Code ou Codex gerando componentes, testes e stories a partir dos tokens e variantes do Figma, com pessoas revisando.",
  "td2h": "Tokens como pipeline",
  "td2p": "Das Figma Variables ao código em um script repetível, em vez de sincronizar à mão.",
  "td3h": "Docs e QA em sincronia",
  "td3p": "Documentação, stories e checagens visuais geradas e atualizadas a cada mudança.",
  "td4h": "Menos tempo, time menor",
  "td4p": "O mesmo escopo em menos tempo e provavelmente com um time ainda menor, focado em decisão e revisão.",
  "td.c": "A IA faz o trabalho pesado. As pessoas são donas das decisões.",
  "lr.e": "Aprendizados",
  "lr.h": "Não se apegue ao legado",
  "lr.l": "O que mais deu dor de cabeça foi se prender a um projeto legado. Não tínhamos autonomia para usar IA com liberdade nem para criar algo do zero, por medo de quebrar.",
  "lr1h": "Crie do zero quando a base é fraca",
  "lr1p": "Alguns projetos têm uma estrutura bacana. Mas um legado mal construído ou mal organizado tem mais chance de quebrar do que uma construção do zero.",
  "lr2h": "Não é mais um bicho de sete cabeças",
  "lr2p": "Um design system não se constrói mais à moda antiga. As empresas precisam estar abertas à evolução.",
  "lr3h": "IA é o hoje, não o futuro",
  "lr3p": "Os projetos vão ficar ainda mais robustos, quase um estalar de dedos. Esta é a minha visão como design engineer, misturando design e código, com foco em engenharia de IA.",
  "lr.c": "Quer trabalhar junto ou conversar sobre mentoria? Entre em contato.",
  "lr.b": "Fale comigo",
  "b.e": "Explore",
  "b.h": "Teste o sistema, recriado",
  "b.l": "Um conjunto menor para mostrar como eu trabalhava: tokens, três temas genéricos, claro e escuro, e 17 componentes para você testar.",
  "x.sb.h": "Storybook GaYa",
  "x.sb.p": "Fundamentos e 17 componentes com controles ao vivo, um snippet de uso e os tokens que cada um lê. Troque tema e modo para ver a camada 2 se remapear.",
  "x.sb.c": "Abrir o Storybook",
  "x.pt.h": "SimpleApp",
  "x.pt.p": "Um app pequeno e navegável feito com os componentes: login, home, vitrine, sacola e notificação. Troque tema e modo ao vivo.",
  "x.pt.c": "Testar o SimpleApp",
  "x.new": "Novo",
  "o.e": "O original",
  "o.h": "Como o oficial está hoje",
  "o.l": "O Storybook dos componentes codados hoje é mantido por outros times. O que você vê abaixo é o estado atual, não a versão que entreguei: os componentes foram alterados depois da minha saída, e o site de documentação que ajudei a construir não está mais acessível para mim. Nomes de pacotes e detalhes estão borrados.",
  "o.cap": "Estado atual do Storybook dos componentes codados, mantido por outros times.",
  "o.link": "Abrir o Storybook atual",
  "s.e": "Stack",
  "s.h": "Com o que foi construído",
  "end.e": "Próximo passo",
  "end.h": "Quer conversar sobre este projeto?",
  "end.p": "Posso contar as decisões e como a IA mudou o fluxo. Também estou aberto a trabalhar junto ou a mentorias.",
  "end.c1": "Fale comigo",
  "end.c2": "Ver outros projetos",
  "end.l1": "GaYa Design System · 2024 · componentes recriados em 2026",
  "end.l2": "© 2026 Gabriel Moreira",
  "alt.lib": "Visão geral da página de componentes core no Figma, organizada por família",
  "alt.tpl": "Cinco templates de app mobile no Figma: login, home, vitrine, notificação e pedido",
  "alt.old": "Estado atual do Storybook dos componentes codados, com detalhes borrados"
 }
};
  var current = /[?&]lang=pt\b/.test(location.search) ? 'pt' : 'en';

  // ---------- Demos ao vivo (componentes GaYa) ----------
  var G = window.GY, C = G.c, I = G.icon;
  function scr(name, lang) {
    var pt = lang === 'pt';
    var L = function (a, b) { return pt ? b : a; };
    var bar = '<div class="gy-appbar">' + C.iconButton({ icon: 'menu' }) + '<h3>' + L('Title page', 'Título') + '</h3>' + C.iconButton({ icon: 'bag', count: '9' }) + '</div>';
    var nav = C.bottomNav({ active: 0 });
    if (name === 'login') return '<div class="ls-login"><b class="ls-logo" role="img" aria-label="GaYa"></b>' + C.textField({ label: L('Username (*)', 'Usuário (*)'), placeholder: L('Type your username', 'Digite seu usuário'), icon: 'user' }) + C.textField({ label: L('Password (*)', 'Senha (*)'), placeholder: L('Type your password', 'Digite sua senha'), icon: 'lock', password: true }) + C.checkbox({ label: L('Remember me', 'Lembrar senha'), checked: true }) + C.button({ label: L('Sign in', 'Acessar'), variant: 'filled', size: 'md', block: true }) + C.button({ label: L('Create account', 'Cadastrar'), variant: 'outline', size: 'md', block: true }) + '</div>';
    if (name === 'home') return bar + C.tabs({ labels: 'Label|Label|Label', active: 0 }) + '<div class="ls-pad"><b>' + L('Products', 'Produtos') + '</b>' + C.card({ title: L('News', 'Notícia'), text: L('The ideal space to share what matters.', 'O espaço ideal para compartilhar o que importa.') }) + C.alert({ kind: 'info', title: L('Heads up', 'Aviso'), text: L('New cycle available.', 'Novo ciclo disponível.') }) + '</div><div class="ls-fill"></div>' + nav;
    if (name === 'showcase') return bar + C.tabs({ labels: 'Label|Label|Label', active: 1 }) + '<div class="ls-pad"><div class="ls-row"><b>' + L('Select the cycle', 'Selecione o ciclo') + '</b>' + C.badge({ label: L('Available', 'Disponível'), soft: true }) + '</div>' + C.select({ label: '', placeholder: L('Filter', 'Filtrar') }) + '<div class="ls-chips">' + C.chip({ label: 'Chip', selected: true }) + C.chip({ label: 'Chip', selected: false }) + C.chip({ label: 'Chip', selected: false }) + '</div>' + C.card({ title: L('Product A', 'Produto A'), text: '99,90' }) + '</div><div class="ls-fill"></div>' + nav;
    return '<div class="gy-appbar"><h3 style="text-align:left;padding-left:8px">' + L('Bag', 'Sacola') + '</h3>' + C.iconButton({ icon: 'bag', count: '2' }) + '</div><div class="ls-pad"><div class="ls-pts">' + L('Available points', 'Pontuação disponível') + '<b>100 pts</b></div><div class="ls-prod"><i>' + I('image') + '</i><div><b>' + L('Product with up to two lines', 'Produto com até duas linhas') + '</b><span>R$ 99,90</span>' + C.counter({ value: 1 }) + '</div></div><div class="ls-prod"><i>' + I('image') + '</i><div><b>' + L('Another product', 'Outro produto') + '</b><span>R$ 49,90</span>' + C.counter({ value: 2 }) + '</div></div>' + C.button({ label: L('Confirm order', 'Confirmar pedido'), variant: 'filled', size: 'lg', block: true }) + '</div>';
  }
  function paintPhones() {
    document.querySelectorAll('.lphone').forEach(function (el) { el.innerHTML = '<div class="ls-in">' + scr(el.dataset.screen, current) + '</div>'; });
  }
  function paintLive() {
    var lc = document.getElementById('live-comps');
    if (!lc) return;
    var pt = current === 'pt';
    lc.innerHTML = '<div class="lc-row">' + C.button({ label: pt ? 'Confirmar' : 'Confirm', variant: 'filled', size: 'md' }) + C.button({ label: pt ? 'Voltar' : 'Back', variant: 'outline', size: 'md' }) + C.button({ label: 'Text', variant: 'text', size: 'md' }) + C.button({ label: 'Disabled', variant: 'filled', size: 'md', disabled: true }) + '</div>' +
      '<div class="lc-row">' + C.chip({ label: 'Chip', selected: true }) + C.chip({ label: 'Chip', selected: false }) + C.badge({ label: pt ? 'Disponível' : 'Available' }) + C.badge({ label: 'Soft', soft: true }) + C.switch({ label: pt ? 'Notificações' : 'Notifications', on: true }) + C.checkbox({ label: pt ? 'Lembrar' : 'Remember', checked: true }) + '</div>' +
      '<div class="lc-row lc-cols">' + C.textField({ label: pt ? 'Usuário' : 'Username', placeholder: pt ? 'Digite seu usuário' : 'Type your username', icon: 'user' }) + C.alert({ kind: 'success', title: pt ? 'Tudo certo' : 'All set', text: pt ? 'Pedido confirmado.' : 'Order confirmed.' }) + '</div>';
    document.querySelectorAll('#live-comps .gy-chip').forEach(function (b) { b.addEventListener('click', function () { b.setAttribute('aria-pressed', b.getAttribute('aria-pressed') !== 'true'); }); });
    var stack = document.getElementById('xc-stack');
    if (stack) stack.innerHTML = C.chip({ label: 'Chip label', selected: true }) + C.textField({ label: pt ? 'Usuário' : 'Username', placeholder: '...', icon: 'user' }) + C.button({ label: pt ? 'Confirmar' : 'Confirm', variant: 'filled', size: 'md', block: true });
  }
  function seg(id, attr) {
    var live = document.getElementById('live');
    document.querySelectorAll('#' + id + ' button').forEach(function (b) { b.addEventListener('click', function () { live.dataset[attr] = b.dataset.v; document.querySelectorAll('#' + id + ' button').forEach(function (o) { o.setAttribute('aria-pressed', o === b ? 'true' : 'false'); }); }); });
  }
  seg('live-themes', 'theme'); seg('live-modes', 'mode');
  // Contraste (valores calculados)
  function lum(h) { var c = [1, 3, 5].map(function (i) { var v = parseInt(h.substr(i, 2), 16) / 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); }); return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]; }
  function ratio(a, b) { var x = lum(a), y = lum(b), hi = Math.max(x, y), lo = Math.min(x, y); return (hi + 0.05) / (lo + 0.05); }
  var PAIRS = [['#0f4a3a', '#ffffff', 'Theme 1 · light'], ['#b34a0a', '#ffffff', 'Theme 2 · light'], ['#b01062', '#ffffff', 'Theme 3 · light'], ['#8fd0b4', '#06241c', 'Theme 1 · dark'], ['#f5b27a', '#3a1a06', 'Theme 2 · dark'], ['#f39ac0', '#3d0a26', 'Theme 3 · dark']];
  var ct = document.getElementById('contrast');
  if (ct) ct.innerHTML = PAIRS.map(function (p) { var r = ratio(p[0], p[1]); return '<div class="cp"><i style="background:' + p[0] + ';color:' + p[1] + '">Aa</i><b>' + r.toFixed(1) + ':1</b><span>' + p[2] + '</span><em>' + (r >= 7 ? 'AAA' : r >= 4.5 ? 'AA' : '—') + '</em></div>'; }).join('');


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
    paintPhones(); paintLive();
    document.querySelectorAll('[data-i18n-label]').forEach(function (el) {
      var v = dict[el.getAttribute('data-i18n-label')];
      if (v !== undefined) el.setAttribute('aria-label', v);
    });
    document.querySelectorAll('.lang-switch button').forEach(function (b) {
      b.setAttribute('aria-pressed', b.dataset.l === lang ? 'true' : 'false');
    });
    // Storybook e protótipo abrem no mesmo idioma.
    document.querySelectorAll('a[data-lang-href]').forEach(function (a) {
      a.setAttribute('href', a.getAttribute('data-lang-href') + (lang === 'pt' ? '?lang=pt' : ''));
    });
    // Mantém o idioma ao voltar para o portfólio.
    document.querySelectorAll('a[data-home]').forEach(function (a) {
      var hash = a.getAttribute('href').indexOf('#projects') > -1 ? '#projects' : '';
      a.setAttribute('href', '../' + (lang === 'pt' ? '?lang=pt' : '') + hash);
    });
  }



  paintPhones(); paintLive();
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

  // Wireframe <-> UI final
  document.querySelectorAll('.flow').forEach(function (flow) {
    flow.querySelectorAll('.seg button').forEach(function (b) {
      b.addEventListener('click', function () {
        flow.dataset.mode = b.dataset.mode;
        flow.querySelectorAll('.seg button').forEach(function (o) {
          o.setAttribute('aria-pressed', o === b ? 'true' : 'false');
        });
      });
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
  }
})();
