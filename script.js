// ============================
// 🧠 1. 知识图谱数据（升级版）
// ============================
const graph = {
  "GDP": {
    type: "macro",
    def: "国内生产总值，是一个国家经济活动总量的指标。",
    links: ["CPI", "インフレ", "失業率", "消費"],
    importance: 5
  },

  "CPI": {
    type: "macro",
    def: "消费者物价指数，用于衡量物价变化。",
    links: ["インフレ", "GDP", "物価"],
    importance: 4
  },

  "インフレ": {
    type: "macro",
    def: "物价持续上涨，货币购买力下降。",
    links: ["CPI", "金融政策", "物価"],
    importance: 5
  },

  "失業率": {
    type: "labor",
    def: "劳动力市场中失业人口比例。",
    links: ["GDP", "景気", "雇用"],
    importance: 3
  },

  "金融政策": {
    type: "finance",
    def: "中央银行通过利率等方式调控经济。",
    links: ["金利", "インフレ", "中央銀行"],
    importance: 4
  },

  "国際貿易": {
    type: "global",
    def: "国家之间的商品与服务交换。",
    links: ["輸出", "輸入", "為替"],
    importance: 4
  },

  "消費": {
    type: "macro",
    def: "家庭或个人购买商品和服务的行为。",
    links: ["GDP", "需要", "所得"],
    importance: 3
  }
};


// ============================
// 🔍 2. 搜索系统（升级版）
// ============================
function searchWord(wordInput) {
  const word = wordInput || document.getElementById("searchInput").value;
  const box = document.getElementById("resultBox");

  if (!word) return;

  addHistory(word);

  const key = Object.keys(graph).find(k =>
    k === word || word.includes(k)
  );

  if (!key) {
    const suggestions = Object.keys(graph)
      .filter(k => k.includes(word))
      .slice(0, 3);

    box.innerHTML = `
      <p class="notfound">見つかりませんでした</p>
      <p>おすすめ：</p>
      ${suggestions.map(s => `
        <button onclick="searchWord('${s}')">${s}</button>
      `).join("")}
    `;
    return;
  }

  const data = graph[key];

  box.innerHTML = `
    <h3>${key}</h3>
    <p><strong>意味：</strong>${data.def}</p>
    <p><strong>タイプ：</strong>${data.type}</p>

    <button onclick="openGraph('${key}')">🧠 ネットワークを見る</button>
    <button onclick="addFavorite('${key}')">⭐ お気に入り</button>
  `;
}


// ============================
// ⚡ 快速搜索
// ============================
function quickSearch(word) {
  document.getElementById("searchInput").value = word;
  searchWord(word);
}


// ============================
// 🧠 3. 知识图谱（真正升级版）
// ============================
function openGraph(center) {
  const box = document.getElementById("graph");

  const node = graph[center];
  if (!node) {
    box.innerHTML = "<p>データなし</p>";
    return;
  }

  let html = `
    <div class="net-center">${center}</div>
    <div class="net-wrap">
  `;

  node.links.forEach(link => {
    html += `
      <div class="net-node" onclick="searchWord('${link}')">
        ${link}
      </div>
    `;
  });

  html += `</div>`;

  box.innerHTML = html;
}


// ============================
// ⭐ 4. 收藏系统
// ============================
function addFavorite(word) {
  let fav = JSON.parse(localStorage.getItem("favorites")) || [];

  if (!fav.includes(word)) {
    fav.push(word);
  }

  localStorage.setItem("favorites", JSON.stringify(fav));
  renderFavorites();
}

function renderFavorites() {
  const fav = JSON.parse(localStorage.getItem("favorites")) || [];
  const box = document.getElementById("favorites");

  box.innerHTML = fav.map(f => `<li>⭐ ${f}</li>`).join("");
}


// ============================
// 📜 5. 搜索历史
// ============================
function addHistory(word) {
  let history = JSON.parse(localStorage.getItem("history")) || [];

  history.unshift(word);
  if (history.length > 10) history.pop();

  localStorage.setItem("history", JSON.stringify(history));
  renderHistory();
}

function renderHistory() {
  const history = JSON.parse(localStorage.getItem("history")) || [];
  const box = document.getElementById("historyList");

  box.innerHTML = history.map(h => `<li>🕒 ${h}</li>`).join("");
}

function clearHistory() {
  localStorage.removeItem("history");
  renderHistory();
}


// ============================
// 💬 6. 对话系统（升级版）
// ============================
let chatMemory = [];

function sendChat() {
  const input = document.getElementById("chatInput");
  const box = document.getElementById("chatBox");

  const text = input.value;
  if (!text) return;

  chatMemory.push(text);

  box.innerHTML += `<div class="user-msg">👤 ${text}</div>`;

  let reply = "すみません、まだ理解できません。";

  for (let key in graph) {
    if (text.includes(key)) {
      const data = graph[key];
      reply = `${data.def}（関連：${data.links.join("、")}）`;
      break;
    }
  }

  box.innerHTML += `<div class="bot-msg">🤖 ${reply}</div>`;

  input.value = "";
  box.scrollTop = box.scrollHeight;
}


// ============================
// 🧩 7. 初始化
// ============================
window.onload = function () {
  renderFavorites();
  renderHistory();
};
