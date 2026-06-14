const graph = {
  "GDP": { def:"国内生产总值指标", links:["CPI","インフレ","消費"] },
  "CPI": { def:"物价指数", links:["インフレ","GDP"] },
  "インフレ": { def:"物价上升", links:["CPI","金融政策"] },
  "デフレ": { def:"物价下降", links:["インフレ"] },
  "失業率": { def:"失业比例", links:["GDP"] },
  "金融政策": { def:"央行调控", links:["金利"] },
  "金利": { def:"利率", links:["投資"] },
  "投資": { def:"投资行为", links:["GDP"] },
  "消費": { def:"消费行为", links:["GDP"] },
  "貿易": { def:"国际贸易", links:["為替"] },
  "為替": { def:"汇率", links:["貿易"] },
  "景気": { def:"经济状态", links:["GDP"] }
};

// 🔍 search
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

// ⭐ fav
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

// 💬 chat AI
let chatHistory=[];

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

    let reply="もう少し具体的に教えてください";

    for(let k in graph){
      if(text.includes(k)){
        reply=graph[k].def;
        break;
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
