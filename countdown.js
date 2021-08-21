// 要素を取得
//const year = document.getElementById('year');
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const CstStartTime = new Date(`October 9 2021 09:10:00`);

// カウントダウンの関数
function updateCountdown() {
  // 現在の時刻情報を取得する
  const currentTime = new Date();
  // 現在の時間と新年の時間の差を計算する（ミリ秒単位）
  const diff = CstStartTime - currentTime;

  // 現在から新年までの日数を計算
  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  // 時間を計算
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  // 分を計算
  const m = Math.floor(diff / 1000 / 60) % 60;
  // 秒を計算
  const s = Math.floor(diff / 1000) % 60;

  // 取得した時間をDOMに追加
  days.innerText = d;
  hours.innerText = h < 10 ? '0' + h : h;
  minutes.innerText = m < 10 ? '0' + m : m;
  seconds.innerText = s < 10 ? '0' + s : s;
}

// ページロード時に関数を実行
updateCountdown();
// 1秒ごとに関数を実行
setInterval(updateCountdown, 1000);