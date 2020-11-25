// Modell

let whichSite = 0;
// player
let playerHP = 100;
let playerXP = 0;
let playerDamageBonus = 5;
let playerLevel = 1;
let playerGold = 0;
let playerBonusCrit = 0;
let playerDodgeBonus = 0;

let damageDisplay = (10 + playerDamageBonus) * playerLevel; 

// npc
let npcDamage = 0;
let npcHP = 100;
let npcLevel = 1;
let npcDamageBonus = 0;
let npcCritBonus = 0;
let npcDodgeBonus = 0;



// Controller

function calcPlayerDamage() {
    damage = (5 + Math.floor(Math.random() * 10) + playerDamageBonus) * playerLevel;
    return damage;
}
function calcNpcDamage() {
    damage = (5 + Math.floor(Math.random() * 10) + npcDamageBonus) * npcLevel;
}

function calcPlayerMoney() {
    Gold = (4 + Math.floor(Math.random()*8)) * npcLevel;
    playerGold += Gold; 
}

function calcPlayerXP() {
    XP = (1 + Math.floor(Math.random()*10)) * npcLevel;
    playerXP += XP; 
}

// xp = mathrandom og alt det der += playerXP
// playerXP += XP;

function changeSite(siteNumber) {
    whichSite = siteNumber;
    show();
}

function playerDodgeChance() {
    let dodge = (1 + Math.floor(Math.random() * 100) + playerDodgeBonus);
        return (dodge > 90);
}
function npcDodgeChance(){
    let dodge = (1 + Math.floor(Math.random() * 100) + npcDodgeBonus);
        return (dodge > 90);
}

function playerCritChance() {
 let critChance= (1+ Math.floor(Math.random()*100) +  playerBonusCrit);
 return (critChance())

 function npcCritChance() {
 let critChance = (1+  math.floor(Math.random()* 100) + npcBonusCrit); return (critChance());
 
}
 function critChance(min, max) {
        return Math.floor(math.random() * 100) + bonusPlayerCrit(max > min + 1) + min;
    }
function npcCritChance() {
let critChance = (min, max) => {
    return Math.floor(math.ranodm() * 100) + npcCritBonus (max > min + 1) + min;
}


function liveshareStatus() {
    let dritt = 'dritt';
    let liveshare = dritt;
    if (liveshare != dritt);
    return false;
}


function playerAttack() {
    damage = calcPlayerDamage();
    playerCritChance() ? damage = 2 : damage;
    npcDodgeChance() ? damage = 0 : damage;
    if (npcHP <= damage) {
        npcHP = 0;
    }
    else {
    npcHP -= damage;
    }
}
function npcAttack() {
    damage = calcPlayerDamage();
    npcCritChance() ? damage = 2 : damage;
    playerDodgeChance() ? damage = 0 : damage;
}