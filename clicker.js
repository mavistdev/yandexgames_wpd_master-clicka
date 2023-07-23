const clickButton = document.getElementById('clickButton');
const clickCountSpan = document.getElementById('clickCount');
const totalClickSpan = document.getElementById('totalClicks');
const clickCostSpan = document.getElementById('clickCost');
const clickUpgradeSpan = document.getElementById('clickUpgrade');
const upgradeButton = document.getElementById('upgradeButton');
const clickTimer = document.getElementById('StartTimer')
const adgetmoney = document.getElementById('adba')

let clickCount = 0;
let clickUpgrade = 0;
let clickCost = 1;
let totalClicks = 0;

function updateClickCount() {
    clickCountSpan.textContent = clickCount;
}


function updateMavCode(){
	totalClickSpan.textContent = totalClicks;
	clickCostSpan.textContent = clickCost;
}

function handleClick() {
	totalClicks++;
    clickCount += 1 + clickUpgrade;
    updateClickCount();
    updateMavCode();
}

function updateClickUpgrade() {
    const upgradeCost = 100 * (clickUpgrade + 1);
    if (clickCount >= upgradeCost) {
        clickCount -= upgradeCost;
        clickUpgrade++;
        clickCost++;
        updateMavCode()
        updateClickCount();
        clickUpgradeSpan.textContent = clickUpgrade;
    }
}

var base = 60;
var clocktimer, dateObj, dh, dm, ds, ms;
var readout = '';
var h = 1,
  m = 1,
  tm = 1,
  s = 0,
  ts = 0,
  ms = 0,
  init = 0;

//функция для очистки поля
function ClearСlock() {
  clearTimeout(clocktimer);
  h = 1;
  m = 1;
  tm = 1;
  s = 0;
  ts = 0;
  ms = 0;
  init = 0;
  readout = '00:00:00';
  document.MyForm.stopwatch.value = readout;
}

//функция для старта секундомера
function StartTIME() {
  var cdateObj = new Date();
  var t = (cdateObj.getTime() - dateObj.getTime()) - (s * 1000);
  if (t > 999) {
    s++;
  }
  if (s >= (m * base)) {
    ts = 0;
    m++;
  } else {
    ts = parseInt((ms / 100) + s);
    if (ts >= base) {
      ts = ts - ((m - 1) * base);
    }
  }
  if (m > (h * base)) {
    tm = 1;
    h++;
  } else {
    tm = parseInt((ms / 100) + m);
    if (tm >= base) {
      tm = tm - ((h - 1) * base);
    }
  }
  ms = Math.round(t / 10);
  if (ms > 99) {
    ms = 0;
  }
  if (ms == 0) {
    ms = '00';
  }
  if (ms > 0 && ms <= 9) {
    ms = '0' + ms;
  }
  if (ts > 0) {
    ds = ts;
    if (ts < 10) {
      ds = '0' + ts;
    }
  } else {
    ds = '00';
  }
  dm = tm - 1;
  if (dm > 0) {
    if (dm < 10) {
      dm = '0' + dm;
    }
  } else {
    dm = '00';
  }
  dh = h - 1;
  if (dh > 0) {
    if (dh < 10) {
      dh = '0' + dh;
    }
  } else {
    dh = '00';
  }
  readout = dh + ':' + dm + ':' + ds;
  document.MyForm.stopwatch.value = readout;
  clocktimer = setTimeout("StartTIME()", 1);
}

//Функция запуска и остановки
function StartStop() {
  if (init == 0) {
    ClearСlock();
    dateObj = new Date();
    StartTIME();
    init = 1;
  } else {
    clearTimeout(clocktimer);
    init = 0;
  }
}

// function startupyandex(){
// YaGames.init().then(ysdk => {
//         console.log('Yandex SDK initialized');
//         window.ysdk = ysdk;
//     });
// let ysdk;
// function initGame(params) {
//   YaGames.init(params).then(_sdk => {
//     ysdk = _sdk;

//     ysdk.features.LoadingAPI?.ready(); // Показываем SDK, что игра загрузилась и можно начинать играть
//   })
//   .catch(console.error);
// }

// function reward200(){
// 	clickCount +=10000;
// 	ysdk.adv.showRewardedVideo({
//     callbacks: {
//         onOpen: () => {
//           clickCount -=10;
//         },
//         onRewarded: () => {
//           clickCount +=200;
//         },
//         onClose: () => {
//           clickCount += 0;
//         }, 
//         onError: (e) => {
//           console.log('Error while open video ad:', e);
//         }
//     }
// })}

// }

clickButton.addEventListener('click', handleClick);
upgradeButton.addEventListener('click', updateClickUpgrade);
clickTimer.addEventListener('click', StartStop);
// adgetmoney.addEventListener('click', reward200);
