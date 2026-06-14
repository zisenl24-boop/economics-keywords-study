// ============================
// 🧠 1. 知识图谱数据库
// ============================
const graph = {
  "GDP": {
    type: "macro",
    def: "国内生产总值，是一个国家经济活动总量的指标。",
    links: ["CPI", "インフレ", "失業率", "消費"]
  },

  "CPI": {
    type: "macro",
    def: "消费者物价指数，用于衡量物价变化。",
    links: ["インフレ", "GDP", "物価"]
  },

  "インフレ": {
    type: "macro",
    def: "物价持续上涨，货币购买力下降。",
    links: ["CPI", "金融政策", "物価"]
  },

  "失業率": {
    type: "labor",
    def: "劳动力市场中失业人口比例。",
    links: ["GDP", "景気", "雇用"]
  },

  "金融政策": {
    type: "finance",
    def: "中央银行通过利率等方式调控经济。",
    links: ["金利", "インフレ", "中央銀行"]
  },

  "国際貿易": {
    type: "global",
    def: "国家之间的商品与服务交换。",
    links: ["輸出", "輸入", "為替"]
  },

  "消費": {
    type: "macro",
    def: "家庭或个人购买商品和服务的行为。",
    links: ["GDP", "所得", "需要"]
  }
};


// ============================
// 🔍 2. 搜索系统
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
      <p>見つかりませんでした</p>
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
    <p><b>意味：</b>${data.def}</p>
    <p><b>タイプ：</b>${data.type}</p>

    <button onclick="openGraph('${key}')">🧠 ネットワーク</button>
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
// 🧠 3. 知识图谱（核心）
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
// 📜 5. 历史记录
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
// 💬 6. ChatGPT风格对话系统
// ============================

// 添加消息
function addMessage(role, text) {
  const box = document.getElementById("chatBox");

  const div = document.createElement("div");
  div.className = `msg ${role}`;

  const bubble = document.createElement("div");
  bubble.className = "bubble";
  bubble.innerHTML = text;

  div.appendChild(bubble);
  box.appendChild(div);

  box.scrollTop = box.scrollHeight;
}


// loading动画
function showTyping() {
  const box = document.getElementById("chatBox");

  const div = document.createElement("div");
  div.className = "msg bot";
  div.id = "typing";

  div.innerHTML = `
    <div class="bubble typing">
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
    </div>
  `;

  box.appendChild(div);
  box.scrollTop = box.scrollHeight;
}

function removeTyping() {
  const t = document.getElementById("typing");
  if (t) t.remove();
}


// 主对话函数
function sendChat() {
  const input = document.getElementById("chatInput");
  const text = input.value.trim();
  if (!text) return;

  addMessage("user", text);
  input.value = "";

  showTyping();

  setTimeout(() => {
    removeTyping();

    let reply = "すみません、まだ理解できません。";

    for (let key in graph) {
      if (text.includes(key)) {
        const d = graph[key];
        reply = `<b>${key}</b><br>${d.def}<br><small>関連：${d.links.join("、")}</small>`;
        break;
      }
    }

    addMessage("bot", reply);
  }, 800);
}


// Enter发送
document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("chatInput");

  if (input) {
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") sendChat();
    });
  }

  renderFavorites();
  renderHistory();
});
