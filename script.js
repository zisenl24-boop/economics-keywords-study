const graph = {
  "GDP": { def:"国内生产总值，是经济总量指标", links:["CPI","インフレ","消費"] },
  "CPI": { def:"物价指数，用于衡量通胀", links:["インフレ","GDP"] },
  "インフレ": { def:"物价持续上涨现象", links:["CPI","金融政策"] },
  "失業率": { def:"失业人口比例", links:["GDP"] },
  "金融政策": { def:"央行调控经济手段", links:["金利"] },
  "金利": { def:"利率水平", links:["投資"] },
  "投資": { def:"资本投入行为", links:["GDP"] },
  "消費": { def:"消费行为", links:["GDP"] },
  "貿易": { def:"国家间交易", links:["為替"] },
  "為替": { def:"货币兑换比率", links:["貿易"] }
};

// 🔍 搜索
function searchWord(w){
  const word = w || document.getElementById("searchInput").value;
  const box = document.getElementById("resultBox");

  const key = Object.keys(graph).find(k=>k===word||word.includes(k));

  if(!key){
    box.innerHTML="見つかりません";
    return;
  }

  const d = graph[key];

  box.innerHTML=`
    <h3>${key}</h3>
    <p>${d.def}</p>
    <button onclick="openGraph('${key}')">ネットワーク</button>
  `;
}

function quickSearch(w){
  document.getElementById("searchInput").value=w;
  searchWord(w);
}

// 🧠 graph
function openGraph(center){
  const box=document.getElementById("graph");
  const d=graph[center];

  let html=`<div class="net-center">${center}</div><div class="net-wrap">`;

  d.links.forEach(l=>{
    html+=`<div class="net-node" onclick="searchWord('${l}')">${l}</div>`;
  });

  html+="</div>";
  box.innerHTML=html;
}

// ⭐ favorites
function addFavorite(w){
  let f=JSON.parse(localStorage.getItem("fav")||"[]");
  if(!f.includes(w)) f.push(w);
  localStorage.setItem("fav",JSON.stringify(f));
  renderFav();
}

function renderFav(){
  let f=JSON.parse(localStorage.getItem("fav")||"[]");
  document.getElementById("favorites").innerHTML=
    f.map(x=>`<li>${x}</li>`).join("");
}

// 📜 history
function addHistory(w){
  let h=JSON.parse(localStorage.getItem("his")||"[]");
  h.unshift(w);
  localStorage.setItem("his",JSON.stringify(h));
  renderHis();
}

function renderHis(){
  let h=JSON.parse(localStorage.getItem("his")||"[]");
  document.getElementById("historyList").innerHTML=
    h.map(x=>`<li>${x}</li>`).join("");
}

function clearHistory(){
  localStorage.removeItem("his");
  renderHis();
}

// 💬 AI聊天（修复版）
let chatHistory = [];

function addMsg(role,text){
  const box=document.getElementById("chatBox");
  const div=document.createElement("div");
  div.className="msg "+role;

  const b=document.createElement("div");
  b.className="bubble";
  b.innerHTML=text;

  div.appendChild(b);
  box.appendChild(div);
  box.scrollTop=box.scrollHeight;
}

function sendChat(){
  const input=document.getElementById("chatInput");
  const text=input.value.trim();
  if(!text)return;

  addMsg("user",text);
  input.value="";

  setTimeout(()=>{

    let reply = null;

    // 🧠 精准匹配
    for(let k in graph){
      if(text.includes(k)){
        reply = `
          <b>${k}</b><br><br>
          ${graph[k].def}<br><br>
          👉 関連：${graph[k].links.join("、")}
        `;
        break;
      }
    }

    // 🧠 fallback（关键修复）
    if(!reply){
      if(text.includes("とは")){
        reply="この用語をもう少し具体的に入力してください（例：GDPとは）";
      }
      else if(text.includes("経済")){
        reply="経済はGDP・物価・雇用などから構成されます";
      }
      else{
        reply="もう少し具体的に質問してください（例：GDPとは、インフレとは）";
      }
    }

    addMsg("bot",reply);

  },600);
}

// init
document.addEventListener("DOMContentLoaded",()=>{
  renderFav();
  renderHis();

  document.getElementById("chatInput")
  .addEventListener("keydown",e=>{
    if(e.key==="Enter")sendChat();
  });
});
