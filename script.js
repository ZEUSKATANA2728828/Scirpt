/* =============================================
   BLOX FRUITS SCRIPTS — script.js
   ============================================= */

// ─── BASE DE DADOS DOS SCRIPTS ───────────────────────────────────────────────
const SCRIPTS_DB = {

  "auto-farm": {
    name: "Auto Farm",
    icon: "⚔️",
    description: "Scripts para farm automático de mobs, experiência e itens no Blox Fruits.",
    scripts: [
      {
        id: "af01",
        name: "Hoho Hub — Universal Auto Farm",
        desc: "Hub completo com auto farm de qualquer ilha, suporte a todas as raças e auto stats.",
        explanation: "O Hoho Hub é um dos executores mais usados para Blox Fruits. Oferece interface gráfica completa, seleção de mob por nível, teleporte automático e sistema anti-AFK integrado. Compatível com a maioria das ilhas do jogo.",
        code: `-- Hoho Hub | Blox Fruits Auto Farm
-- Use por sua própria conta e risco

loadstring(game:HttpGet("https://raw.githubusercontent.com/acsu/hoho/main/loader.lua"))()
`
      },
      {
        id: "af02",
        name: "Zen Hub — Auto Farm v2",
        desc: "Auto farm com suporte a Sea 1, 2 e 3, auto haki e sistema de loot automático.",
        explanation: "O Zen Hub oferece uma interface limpa para selecionar a ilha de farm, nível de mob e ativar o haki automaticamente durante o combate. Inclui também sistema de coleta de drops e auto rejeição de itens comuns.",
        code: `-- Zen Hub | Blox Fruits
-- Cuidado: use apenas em contas alternativas

loadstring(game:HttpGet("https://raw.githubusercontent.com/ZenHub-BF/main/loader.lua"))()
`
      },
      {
        id: "af03",
        name: "Mango Hub — Auto Farm Raids",
        desc: "Focado em raids automáticas para farm de fragmentos e frutas lendárias.",
        explanation: "O Mango Hub é especializado em raids, automatizando a entrada, o combate e a coleta de recompensas. Ideal para jogadores que querem acumular fragmentos rapidamente sem interação manual.",
        code: `-- Mango Hub | Auto Raid Farm
-- Blox Fruits — Use com responsabilidade

loadstring(game:HttpGet("https://raw.githubusercontent.com/MangoHub/bloxfruits/main/main.lua"))()
`
      },
      {
        id: "af04",
        name: "Dark Hub — Auto Farm Boss",
        desc: "Farm automático de bosses com sistema de teleporte e respawn tracking.",
        explanation: "Automatiza o combate contra bosses principais do mapa, com detecção de respawn, teleporte automático ao local do boss e configuração de fruta para usar durante o combate.",
        code: `-- Dark Hub | Boss Auto Farm
-- Blox Fruits Script

getgenv().DarkHubKey = "FREE"
loadstring(game:HttpGet("https://raw.githubusercontent.com/DarkHubBF/loader/main/init.lua"))()
`
      },
      {
        id: "af05",
        name: "Remote Spy Auto Farm",
        desc: "Usa exploração de remotes para farm ultra-eficiente com mínimo lag.",
        explanation: "Script avançado que identifica os remotes do servidor para otimizar o caminho de farm, reduzindo lag e aumentando a eficiência por hora. Inclui whitelist de mobs por nível e raridade de drop.",
        code: `-- Remote Spy Auto Farm | Blox Fruits
-- Script avançado — Risco elevado de ban

local loaded = loadstring(game:HttpGet("https://pastebin.com/raw/BFRemoteFarm"))
if loaded then loaded() end
`
      },
      {
        id: "af06",
        name: "Blaze Hub — Auto Farm Sea 3",
        desc: "Especializado em Third Sea com suporte a todas as ilhas do mar 3.",
        explanation: "Desenvolvido especificamente para o Third Sea (Mar 3), o Blaze Hub traz suporte a todas as ilhas disponíveis nessa fase do jogo, incluindo Floating Turtle, Elim Pass e Great Tree.",
        code: `-- Blaze Hub | Third Sea Auto Farm
-- Blox Fruits 2024

loadstring(game:HttpGet("https://raw.githubusercontent.com/BlazeHubBF/main/script.lua"))()
`
      },
      {
        id: "af07",
        name: "Auto Farm + Auto Mastery",
        desc: "Farm automático combinado com evolução de maestria de frutas e espadas.",
        explanation: "Combina o farm de mobs com o treino de maestria, maximizando o progresso do personagem. Detecta automaticamente qual habilidade está próxima de evoluir e ajusta o farm para maximizar o XP de maestria.",
        code: `-- Auto Farm + Mastery Trainer
-- Blox Fruits All Sea

loadstring(game:HttpGet("https://raw.githubusercontent.com/MasteryFarm/bf/main/loader.lua"))()
`
      },
      {
        id: "af08",
        name: "Krnl Hub — Auto Farm Light",
        desc: "Versão leve para PCs mais fracos, sem interface gráfica pesada.",
        explanation: "Versão otimizada para dispositivos menos potentes. Sem UI elaborada, apenas comandos essenciais via chat ou teclas de atalho. Baixo consumo de memória e estável para sessões longas.",
        code: `-- Krnl Hub Light | Blox Fruits
-- Versão otimizada para PCs fracos

loadstring(game:HttpGet("https://raw.githubusercontent.com/KrnlHubLight/bf/main/main.lua"))()
`
      },
      {
        id: "af09",
        name: "Auto Farm + Auto Quest",
        desc: "Pega missões automaticamente e faz o farm para completá-las.",
        explanation: "Script completo que gerencia o ciclo de missões: pega a quest mais adequada ao seu nível, faz o farm dos mobs necessários, entrega a missão e recomeça o ciclo automaticamente.",
        code: `-- Auto Farm + Auto Quest | Blox Fruits

loadstring(game:HttpGet("https://raw.githubusercontent.com/AutoQuestBF/main/loader.lua"))()
`
      },
      {
        id: "af10",
        name: "Speed Farm — Anti-Lag Build",
        desc: "Farm veloz com técnicas anti-lag para servidores cheios.",
        explanation: "Otimiza o ping e reduz delays de animação para aumentar o DPS efetivo durante o farm. Ideal para servidores com muitos jogadores onde o lag pode interferir no farm convencional.",
        code: `-- Speed Farm Anti-Lag | Blox Fruits

loadstring(game:HttpGet("https://raw.githubusercontent.com/SpeedFarmBF/main/script.lua"))()
`
      },
      {
        id: "af11",
        name: "Auto Devil Fruit Farm",
        desc: "Farm específico para spawn de frutas do diabo no mapa.",
        explanation: "Monitora os locais de spawn de frutas do diabo no servidor, teleporta automaticamente quando uma fruta aparece e a coleta antes de outros jogadores.",
        code: `-- Auto Devil Fruit Finder | Blox Fruits

loadstring(game:HttpGet("https://raw.githubusercontent.com/FruitFinderBF/main/init.lua"))()
`
      },
      {
        id: "af12",
        name: "Night Hub — Auto Sea Events",
        desc: "Participa automaticamente de eventos do mapa como Kitsune, Terror.",
        explanation: "Detecta e participa automaticamente de eventos especiais no mapa, como o Terrorshark, Kitsune e outros eventos temporários, maximizando a obtenção de recompensas exclusivas.",
        code: `-- Night Hub | Sea Events Auto
-- Blox Fruits

loadstring(game:HttpGet("https://raw.githubusercontent.com/NightHubBF/main/loader.lua"))()
`
      },
      {
        id: "af13",
        name: "Auto Farm com Teleport Preciso",
        desc: "Sistema de teleporte preciso para evitar cair no mar durante o farm.",
        explanation: "Resolve o problema clássico de scripts que fazem o personagem cair no mar. Usa cálculo de coordenadas para garantir que o teleporte sempre land em terra firme.",
        code: `-- Precise Teleport Auto Farm | Blox Fruits

loadstring(game:HttpGet("https://raw.githubusercontent.com/PreciseFarmBF/main/script.lua"))()
`
      },
      {
        id: "af14",
        name: "Omega Hub — Multi Farm",
        desc: "Permite configurar múltiplos objetivos de farm em sequência.",
        explanation: "O Omega Hub introduz um sistema de fila de farm: você define uma lista de objetivos (mobs, bosses, missões) e o script os executa em sequência automaticamente, perfeito para sessões longas.",
        code: `-- Omega Hub | Multi-Target Farm
-- Blox Fruits 2024

loadstring(game:HttpGet("https://raw.githubusercontent.com/OmegaHubBF/main/loader.lua"))()
`
      },
      {
        id: "af15",
        name: "Auto Farm Second Sea Completo",
        desc: "Cobertura total do Second Sea com suporte a Swan, Jeremy e outros.",
        explanation: "Cobre todas as ilhas e missões do Second Sea. Inclui suporte a mobs especiais como os da Ilha Gravestone e Factory, além de bosses exclusivos do segundo mar.",
        code: `-- Second Sea Complete Farm | Blox Fruits

loadstring(game:HttpGet("https://raw.githubusercontent.com/SecondSeaBF/main/init.lua"))()
`
      },
      {
        id: "af16",
        name: "Crystal Hub — Anti-Ban Measures",
        desc: "Farm com técnicas de anti-ban como delay humanizado e movimentação aleatória.",
        explanation: "Implementa comportamentos humanizados para reduzir a chance de detecção, como delays variáveis entre ações, movimentação não-linear e pausas aleatórias, tornando o comportamento do bot menos previsível.",
        code: `-- Crystal Hub | Anti-Ban Farm
-- Blox Fruits — Medidas anti-detecção

loadstring(game:HttpGet("https://raw.githubusercontent.com/CrystalHubBF/main/loader.lua"))()
`
      },
      {
        id: "af17",
        name: "Auto Farm + Auto Upgrade Stats",
        desc: "Farm e distribui pontos de atributo automaticamente conforme sobe de nível.",
        explanation: "Integra o farm de XP com a distribuição automática de pontos de status. Você define o build desejado (Melee, Defense, Sword, Gun, Fruit) e o script distribui os pontos conforme o personagem sobe de nível.",
        code: `-- Auto Farm + Auto Stats | Blox Fruits

loadstring(game:HttpGet("https://raw.githubusercontent.com/AutoStatsBF/main/script.lua"))()
`
      }
    ]
  },

  "auto-bounty": {
    name: "Auto Bounty",
    icon: "💰",
    description: "Scripts para farmar bounty (recompensa) e aumentar o nível de reputação automaticamente.",
    scripts: [
      {
        id: "ab01",
        name: "Bounty Hunter Hub — PvP Auto",
        desc: "Caça jogadores com bounty baixo automaticamente para acumular recompensa.",
        explanation: "Automatiza a caça de jogadores com menor bounty no servidor. Detecta alvos, teleporta até eles e inicia o combate automaticamente. Inclui filtro para evitar atacar jogadores de alto nível.",
        code: `-- Bounty Hunter Hub | Blox Fruits
-- PvP Auto Kill — Use com responsabilidade

loadstring(game:HttpGet("https://raw.githubusercontent.com/BountyHubBF/main/loader.lua"))()
`
      },
      {
        id: "ab02",
        name: "Honor Farm — Bounty Grind",
        desc: "Foca em matar NPCs PvP para ganhar bounty de forma mais segura.",
        explanation: "Ao invés de atacar jogadores reais (o que pode gerar contra-ataques), este script foca em objetivos que concedem bounty através de NPCs de missão, como guarda-costas de chefes e mobs especiais de bounty.",
        code: `-- Honor Farm | Safe Bounty Grind
-- Blox Fruits

loadstring(game:HttpGet("https://raw.githubusercontent.com/HonorFarmBF/main/main.lua"))()
`
      },
      {
        id: "ab03",
        name: "Auto Bounty + Auto Escape",
        desc: "Ganha bounty e foge automaticamente quando detecta jogadores hostis.",
        explanation: "Script inteligente que monitora o radar do jogo. Quando detecta aproximação de jogadores hostis, ativa o sistema de fuga automática, priorizando a sobrevivência sobre o combate.",
        code: `-- Auto Bounty + Escape System | Blox Fruits

loadstring(game:HttpGet("https://raw.githubusercontent.com/BountyEscapeBF/main/script.lua"))()
`
      },
      {
        id: "ab04",
        name: "Sea King Bounty Farm",
        desc: "Mata Sea Kings repetidamente para ganho rápido de bounty.",
        explanation: "Os Sea Kings (criaturas do mar) são uma excelente fonte de bounty. Este script automatiza a caça a essas criaturas no mar aberto, com detecção de spawn e combate otimizado.",
        code: `-- Sea King Bounty Farm | Blox Fruits

loadstring(game:HttpGet("https://raw.githubusercontent.com/SeaKingBF/main/loader.lua"))()
`
      },
      {
        id: "ab05",
        name: "Phantom Hub — Bounty Leaper",
        desc: "Usa teleporte para pular entre servidores e encontrar alvos de bounty.",
        explanation: "Implementa um sistema de busca de servidores para encontrar jogadores com bounty adequado. Teleporta para o servidor mais vantajoso e inicia o farm automaticamente.",
        code: `-- Phantom Hub | Bounty Leaper
-- Blox Fruits 2024

loadstring(game:HttpGet("https://raw.githubusercontent.com/PhantomHubBF/main/init.lua"))()
`
      },
      {
        id: "ab06",
        name: "Auto Bounty Eventos",
        desc: "Ganha bounty participando de eventos de servidor automaticamente.",
        explanation: "Participa de eventos especiais do servidor que concedem bounty como recompensa, como torneios e missões especiais de temporada.",
        code: `-- Auto Bounty Events | Blox Fruits

loadstring(game:HttpGet("https://raw.githubusercontent.com/EventBountyBF/main/loader.lua"))()
`
      },
      {
        id: "ab07",
        name: "Viper Hub — Kill Steal Bounty",
        desc: "Sistema de kill steal para pegar o último golpe em combates alheios.",
        explanation: "Script avançado que monitora combates de outros jogadores e intervém no momento certo para dar o golpe final, garantindo a recompensa de bounty com mínimo esforço.",
        code: `-- Viper Hub | Kill Steal System
-- Blox Fruits — Alto risco de ban

loadstring(game:HttpGet("https://raw.githubusercontent.com/ViperHubBF/main/script.lua"))()
`
      },
      {
        id: "ab08",
        name: "Auto Bounty Noob Island",
        desc: "Farm em ilhas iniciais para acumular bounty de forma consistente.",
        explanation: "Usa as ilhas de nível baixo para farm consistente de bounty, aproveitando a alta densidade de mobs e a facilidade de combate para acumular recompensa de forma estável.",
        code: `-- Auto Bounty Starter Islands | Blox Fruits

loadstring(game:HttpGet("https://raw.githubusercontent.com/StarterBountyBF/main/main.lua"))()
`
      },
      {
        id: "ab09",
        name: "Turbo Bounty — Speed Kills",
        desc: "Maximiza kills por minuto para aumentar o bounty o mais rápido possível.",
        explanation: "Otimiza cada aspecto do combate para maximizar o número de mortes por minuto. Usa combos de frutas mais rápidos e rotas otimizadas para reduzir o tempo entre cada kill.",
        code: `-- Turbo Bounty | Speed Kill System
-- Blox Fruits

loadstring(game:HttpGet("https://raw.githubusercontent.com/TurboBountyBF/main/loader.lua"))()
`
      },
      {
        id: "ab10",
        name: "BountyBot — AFK Bounty Farm",
        desc: "Farm de bounty totalmente AFK com reconexão automática.",
        explanation: "Script projetado para funcionar sem supervisão. Inclui reconexão automática ao servidor, reinício do farm após updates do jogo e logs de progresso.",
        code: `-- BountyBot | AFK Farm + Auto Reconnect
-- Blox Fruits

loadstring(game:HttpGet("https://raw.githubusercontent.com/BountyBotBF/main/script.lua"))()
`
      },
      {
        id: "ab11",
        name: "Raid Bounty Farm",
        desc: "Ganha bounty completando raids automaticamente.",
        explanation: "Participa de raids e utiliza as recompensas de bounty concedidas pela conclusão para acumular reputação rapidamente.",
        code: `-- Raid Bounty Farm | Blox Fruits

loadstring(game:HttpGet("https://raw.githubusercontent.com/RaidBountyBF/main/init.lua"))()
`
      },
      {
        id: "ab12",
        name: "Void Hub — Infinite Bounty Loop",
        desc: "Loop infinito de ganho de bounty com troca automática de servidor.",
        explanation: "Cria um loop infinito: faz farm de bounty, quando o servidor fica vazio ou hostil, muda para outro servidor e continua o farm sem interrupção.",
        code: `-- Void Hub | Infinite Bounty Loop
-- Blox Fruits 2024

loadstring(game:HttpGet("https://raw.githubusercontent.com/VoidHubBF/main/loader.lua"))()
`
      },
      {
        id: "ab13",
        name: "Lancer Hub — Bounty + Mastery",
        desc: "Acumula bounty e maestria simultaneamente.",
        explanation: "Combina o farm de bounty com o treino de maestria de armas e frutas, otimizando o progresso geral do personagem em uma única sessão.",
        code: `-- Lancer Hub | Bounty + Mastery
-- Blox Fruits

loadstring(game:HttpGet("https://raw.githubusercontent.com/LancerHubBF/main/main.lua"))()
`
      },
      {
        id: "ab14",
        name: "Eclipse Hub — Smart Bounty",
        desc: "Escolhe automaticamente o método mais eficiente de farm de bounty.",
        explanation: "Script inteligente que analisa o estado atual do servidor e seleciona automaticamente a melhor estratégia de bounty disponível: PvP, mobs ou eventos.",
        code: `-- Eclipse Hub | Smart Bounty System
-- Blox Fruits

loadstring(game:HttpGet("https://raw.githubusercontent.com/EclipseHubBF/main/loader.lua"))()
`
      },
      {
        id: "ab15",
        name: "Auto Bounty First Sea",
        desc: "Otimizado especificamente para o First Sea, ideal para iniciantes.",
        explanation: "Perfeito para jogadores que estão começando no First Sea. Otimiza o farm de bounty nas ilhas iniciais e intermediárias sem precisar de alto nível ou equipamentos avançados.",
        code: `-- Auto Bounty First Sea | Blox Fruits
-- Otimizado para iniciantes

loadstring(game:HttpGet("https://raw.githubusercontent.com/FirstSeaBounty/main/loader.lua"))()
`
      },
      {
        id: "ab16",
        name: "Nightmare Hub — PvP Assist",
        desc: "Auxilia no PvP automático para farm de bounty de alto valor.",
        explanation: "Usa combinações avançadas de habilidades para dominar combates PvP automaticamente, focando em alvos com bounty mais alto para maximizar o ganho por kill.",
        code: `-- Nightmare Hub | PvP Assist
-- Blox Fruits — Risco de ban elevado em PvP

loadstring(game:HttpGet("https://raw.githubusercontent.com/NightmareHubBF/main/script.lua"))()
`
      }
    ]
  },

  "auto-farm-kaitun": {
    name: "Auto Farm Kaitun",
    icon: "🌊",
    description: "Scripts especializados para farm na área do Kaitun e ilhas de alto nível no Third Sea.",
    scripts: [
      {
        id: "ak01",
        name: "Kaitun Ultra Farm",
        desc: "Farm otimizado para os mobs do Kaitun com máxima eficiência de XP.",
        explanation: "Script especializado para a área do Kaitun no Third Sea. Otimiza o caminho entre os grupos de mobs, usa habilidades de AoE para limpar grupos rápido e gerencia a cooldown de habilidades com precisão.",
        code: `-- Kaitun Ultra Farm | Blox Fruits Third Sea
-- Otimizado para máximo XP/hora

loadstring(game:HttpGet("https://raw.githubusercontent.com/KaitunFarm/ultra/main/loader.lua"))()
`
      },
      {
        id: "ak02",
        name: "Kaitun Auto Quest Loop",
        desc: "Loop automático de missões no Kaitun com entrega e coleta contínua.",
        explanation: "Automatiza o ciclo completo de missões na área do Kaitun: coleta a quest, faz o farm dos mobs necessários, entrega e repete. Inclui gerenciamento de vida e teleporte de emergência.",
        code: `-- Kaitun Quest Loop | Blox Fruits
-- Auto Farm + Auto Quest Third Sea

loadstring(game:HttpGet("https://raw.githubusercontent.com/KaitunQuestBF/main/main.lua"))()
`
      },
      {
        id: "ak03",
        name: "Kaitun Boss Farm",
        desc: "Farm do boss exclusivo do Kaitun com reset de respawn automático.",
        explanation: "Foca no boss da área do Kaitun, monitorando o tempo de respawn e retornando automaticamente quando ele reaparece. Maximiza os drops exclusivos desse boss.",
        code: `-- Kaitun Boss Auto Farm | Blox Fruits

loadstring(game:HttpGet("https://raw.githubusercontent.com/KaitunBoss/farm/main/script.lua"))()
`
      },
      {
        id: "ak04",
        name: "Kaitun Speed Route",
        desc: "Rota otimizada pelos grupos de mobs do Kaitun para máxima velocidade.",
        explanation: "Utiliza análise de posicionamento de mobs para criar a rota m
