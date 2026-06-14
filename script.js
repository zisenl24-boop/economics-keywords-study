// ========================
// 📚 1. 词库系统（扩展版）
// ========================
const keywords = {
  "GDP": {
    def: "国内生产总值。一个国家在一定时间内生产的所有最终产品和服务的总价值。",
    category: "マクロ経済",
    related: ["CPI", "インフレ", "失業率"]
  },

  "CPI": {
    def: "消费者物价指数，用来衡量物价水平变化。",
    category: "マクロ経済",
    related: ["インフレ", "物価"]
  },

  "インフレ": {
    def: "物价持续上升，货币购买力下降的现象。",
    category: "マクロ経済",
    related: ["CPI", "金融政策"]
  },

  "失業率": {
    def: "劳动人口中没有工作的比例。",
    category: "労働経済",
    related: ["GDP", "景気"]
  },

  "金融政策": {
    def: "中央银行通过利率等手段调控经济。",
    category: "金融",
    related: ["金利", "インフレ"]
  },

  "国際貿易": {
    def: "国家之间的商品与服务交换。",
    category: "国際経済",
    related: ["輸出", "輸入", "為替"]
  }
};


// ========================
// 🔍 2. 搜索功能
// ========================
function searchWord(keywordInput) {
  const input = keywordInput || document.getElementById("searchInput").value;
  const resultBox = document.getElementById("resultBox");

  if (!input) return;

  addHistory(input);

  const data = keywords[input];

  if (!data) {
    resultBox.innerHTML = `<p class="notfound">該当するキーワードが見つかりません</p>`;
    return;
  }

  resultBox.innerHTML = `
    <h3>${input}</h3>
    <p><strong>意味：</strong>${data.def}</p>
    <p><strong>カテゴリ：</strong>${data.category}</p>
    <p><strong>関連：</strong>${data.related.join("、")}</p>

    <button onclick="addFavorite('${input}')">⭐ お気に入り追加</button>
    <button onclick="showGraph('${input}')">🧠 関係図を見る</button>
  `;
}

// ========================
// ⚡ 快速搜索
// ========================
function quickSearch(word) {
  document.getElementById("searchInput").value = word;
  searchWord(word);
}


// ========================
// ⭐ 收藏系统
// ========================
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


// ========================
// 📜 搜索历史
// ========================
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


// ========================
// 🧠 3. 关系图系统（简易版）
// ========================
function showGraph(word) {
  const box = document.getElementById("graph");

  const data = keywords[word];

  if (!data) {
    box.innerHTML = "<p>関係データなし</p>";
    return;
  }

  let html = `
    <div class="graph-center">${word}</div>
    <div class="graph-links">
  `;

  data.related.forEach(r => {
    html += `<div class="graph-node" onclick="searchWord('${r}')">${r}</div>`;
  });

  html += `</div>`;

  box.innerHTML = html;
}


// ========================
// 💬 4. 对话系统（简易版）
// ========================
function sendChat() {
  const input = document.getElementById("chatInput");
  const chatBox = document.getElementById("chatBox");

  const text = input.value;
  if (!text) return;

  chatBox.innerHTML += `<div class="user-msg">👤 ${text}</div>`;

  let reply = "すみません、まだ理解できません。";

  for (let key in keywords) {
    if (text.includes(key)) {
      reply = keywords[key].def;
      break;
    }
  }

  chatBox.innerHTML += `<div class="bot-msg">🤖 ${reply}</div>`;

  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
}


// ========================
// 🧩 5. 初始化
// ========================
window.onload = function () {
  renderFavorites();
  renderHistory();
};
