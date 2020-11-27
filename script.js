// Modell

let whichSite = 0;
let playerHP = 100;
let playerXP = 0;
let xpEarned = 0;
let playerDamageBonus = 0;
let playerLevel = 1;
let playerGold = 100;
let goldWon = 0;
let playerCritBonus = 0;
let playerDodgeBonus = 0;
let XPneeded = 100;

let winOrLose = '';

let damageDisplay = 10; 

// npc
let npcHP = 100;
let npcLevel = 1;
let npcDamageBonus = 0;
let npcCritBonus = 0;
let npcDodgeBonus = 0;

// battle variabler
let maxPlayerHP;
let playerBattleHP;
let playerHPBar = 100;
let npcColorGreen = 255;
let npcColorRed = 0;

let maxNpcHP;
let npcBattleHP;
let npcHPBar = 100;
let playerColorGreen = 255;
let playerColorRed = 0;

let playerCritLog = '';
let playerDodgeLog = '';
let playerDamageLog = '';

let npcCritLog = '';
let npcDodgeLog = '';
let npcDamageLog = '';

let XP;
let Gold;

// Tournament variabler

const champions = [
    {name: 'Balder',stats: [2, 220, 3, 2, 2]},
    {name: 'Balder',stats: [5, 520, 9, 5, 7]},
    {name: 'Balder',stats: [2, 220, 3, 2, 2]},
    {name: 'Balder',stats: [5, 520, 9, 5, 7]},
    {name: 'Balder',stats: [2, 220, 3, 2, 2]},
    {name: 'Balder',stats: [5, 520, 9, 5, 7]},
    {name: 'Balder',stats: [2, 220, 3, 2, 2]},
    {name: 'Balder',stats: [5, 520, 9, 5, 7]},
];


// Store
const storeItems = [
    {item: 'name1', price: 100, type: 'health', look: 'hei', value: 10, inStock: true},
    {item: 'name2', price: 200, type: 'damage', look: 'hallo', inStock: true},
    {item: 'name3', price: 300, type: 'health', look: 'ollah', inStock: true},
    {item: 'name4', price: 400, type: 'critical', look: 'elloh', inStock: true},
    {item: 'name5', price: 500, type: 'health', look: 'hey', inStock: true},
    {item: 'name6', price: 600, type: 'dodge', look: 'hoy', inStock: true}
    ];


// Controller


// Damage Kalkulasjoner
function calcPlayerDamage() {
    damage = (5 + Math.floor(Math.random() * 10) + playerDamageBonus) * playerLevel;
    return damage;
}
function calcNpcDamage() {
    damage = (5 + Math.floor(Math.random() * 10) + npcDamageBonus) * npcLevel;
    return damage;
}
function calcChampionDamage(i) {
    damage = (5 + Math.floor(Math.random() * 10) + champions[i].stats[2]) * champions[i].stats[0];
    return damage;
}
function calcChampionDisplayDamage(i) {
    damageDisplay = (10 + champions[i].stats[2]) * champions[i].stats[0];
    return damageDisplay;
}


// Andre Kalkulasjoner
function calcPlayerGold(status) {
    Gold = (4 + Math.floor(Math.random()*8)) * npcLevel;
    if (status) {playerGold += Gold;}
    else {Gold = 0;
    playerGold += Gold;} 
}
function calcPlayerXP(status) {
    XP = (1 + Math.floor(Math.random()*10)) * npcLevel;
    if (status) {playerXP += XP;}
    else {XP /= 2;
    playerXP += XP;}
    levelUp(playerXP);
}
function levelUp(playerXP) {
    XPneeded = playerLevel * 100
    if (playerXP >= XPneeded) {
        playerXP = 0 + (playerXP - XPneeded);
        playerLevel += 1;
        XPNeeded = playerLevel * 100;
    }
}
// xp = mathrandom og alt det der += playerXP
// playerXP += XP;

function playerDodgeChance() {
    let dodge = (1 + Math.floor(Math.random() * 100) + playerDodgeBonus);
        return (dodge > 90);
}
function npcDodgeChance(){
    let dodge = (1 + Math.floor(Math.random() * 100) + npcDodgeBonus);
        return (dodge > 95);
}
function playerCritChance() {
    let critChance= (1+ Math.floor(Math.random()*100)
     +  playerCritBonus);
      return (critChance > 95);
}
    function npcCritChance() {
    let critChance= (1+  Math.floor(Math.random()* 100) 
    + npcCritBonus); 
    return(critChance >90);
}
    

//    }
//     function critChance (min, max) {
//            return Math.floor(math.random() * 100) + bonusPlayerCrit(max > min + 1) + min;
//        }
//    function npcCritChance() {
//    let critChance = (min, max) => {
//        return Math.floor(math.ranodm() * 100) + npcCritBonus (max > min + 1) + min;
//    }
function calcNpcStats() {
    npcLevel = playerLevel;
    npcHP = math.Floor((Math.random() + 1) * npcLevel);
    // kalkuler resten av statsene
}


// Battle Funksjoner
function startBattle(number) {
    calcNpcStats();
    playerBattleHP = playerHP;
    maxPlayerHP = playerHP; 
    maxNpcHP = npcHP;
    changeSite(number);
}

function playerAttack() {
    resetLog();
    let damage = calcPlayerDamage();
    playerCritChance() ? (damage *= 2, npcCritLog = 'Critical Strike') : damage;
    npcDodgeChance() ? (damage = 0, npcDodgeLog = 'Dodge') : damage;
    npcDodgeLog ? npcCritLog = '': npcCritLog;
    if (npcBattleHP <= damage) {
        npcBattleHP = 0;
        npcHPBar = 0;
        winOrLose = 'Winner';
        calcPlayerGold(true);
        calcPlayerXP(true);
        changeSite(4);
    }
    else {
    npcBattleHP -= damage;
    npcHPBar = npcBattleHP/maxNpcHP * 100;
    npcHPBar >= 50 ? npcColorGreen = 255 : npcColorGreen = Math.floor(npcHPBar * 5.1);
    npcHPBar <= 50 ? npcColorRed = 255 : npcColorRed = Math.floor((npcHPBar-50) * 5.1);
    
    npcDamageLog = damage;

    show();
    setTimeout(npcAttack, 500);
    }
}

function npcAttack() {
    resetLog();
    let damage = calcNpcDamage();
    npcCritChance() ? (damage *= 2, playerCritLog = 'Critical Strike') : damage;
    playerDodgeChance() ? (damage = 0, playerDodgeLog = 'Dodge') : damage;
    playerDodgeLog ? playerCritLog = '': playerCritLog;
    if (playerBattleHP <= damage) {
        playerBattleHP = 0;
        playerHPBar = 0;
        winOrLose = 'Looser';
        calcPlayerGold(false);
        calcPlayerXP(false);
        changeSite(4);
    }
    else {
        playerBattleHP -= damage;
        playerHPBar = playerBattleHP/maxPlayerHP * 100;
        playerHPBar >= 50 ? playerColorGreen = 255 : playerColorGreen = Math.floor(playerHPBar * 5.1);
        playerHPBar <= 50 ? playerColorRed = 255 : playerColorRed = Math.floor((playerHPBar-50) * 5.1);

        playerDamageLog = damage;
        show();
    }
}

function resetLog() {
    playerCritLog = '';
    playerDodgeLog = '';
    playerDamageLog = '';

    npcCritLog = '';
    npcDodgeLog = '';
    npcDamageLog = '';
}

function purchaseItem(i) {
    if (storeItems[i].price > playerGold) {
        //display not enough money
    }
    else {
        if (storeItems[i].type == 'health') {
            playerHP += storeItems[i].value;
        }
        if (storeItems[i].type == 'damage') {
            playerDamageBonus += storeItems[i].value;
        }
        if (storeItems[i].type == 'dodge') {
            playerDodgeBonus += storeItems[i].value;
        }
        playerGold -= storeItems[i].price;
        storeItems[i].inStock = false;
    }
    openStore();
}
function changeSite(siteNumber) {
    whichSite = siteNumber;
    show();
}


// Aggresjonsfunksjon
function liveshareStatus() {
    let dritt = 'dritt';
    let liveshare = dritt;
    if (liveshare != dritt);
    return false;
}