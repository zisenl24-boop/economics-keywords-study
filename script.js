alert("script loaded");
const keywords = {
    "GDP": {
        definition: "国内総生産。一定期間に国内で生産された財・サービスの総価値。",
        example: "日本のGDPは世界有数の規模を持つ。",
        related: ["CPI","景気","投資"]
    },

    "CPI": {
        definition: "消費者物価指数。物価の変化を測る指標。",
        example: "インフレ率の算出に利用される。",
        related: ["インフレ","GDP"]
    },

    "インフレ": {
        definition: "物価が継続的に上昇する現象。",
        example: "食品価格の上昇など。",
        related: ["CPI","金融政策"]
    },

    "金融政策": {
        definition: "中央銀行による金利や通貨供給の調整。",
        example: "日本銀行の利上げ。",
        related: ["インフレ","金利"]
    },

    "円安": {
        definition: "円の価値が下がる状態。",
        example: "輸入価格が上昇する。",
        related: ["為替","輸入","輸出"]
    }
};

const newsCases = {
    "GDP":[
        {
            title:"日本GDP成長率",
            summary:"日本の経済成長率に関する報道。",
            point:"GDPは経済規模を測る代表的指標。"
        }
    ],

    "インフレ":[
        {
            title:"物価上昇が続く",
            summary:"食品やエネルギー価格が上昇。",
            point:"インフレは家計へ影響を与える。"
        }
    ],

    "円安":[
        {
            title:"円安進行",
            summary:"ドル高による円安傾向。",
            point:"輸入価格が上昇しやすい。"
        }
    ]
};
});

renderFav();
renderHistory();
const FAVORITE_KEY = "favorites";
const HISTORY_KEY = "history";

function searchWord(inputWord){

    const input =
        document.getElementById("searchInput");

    const word =
        inputWord || input.value.trim();

    const data =
        keywords[word];

    const resultBox =
        document.getElementById("resultBox");

    if(!data){

        resultBox.innerHTML =
        `<p class="notfound">キーワードが見つかりません</p>`;

        return;
    }

    saveHistory(word);

    resultBox.innerHTML = `
        <h2 class="keyword-title">${word}</h2>

        <div class="section-title">
            定義
        </div>

        <p>${data.definition}</p>

        <div class="section-title">
            例
        </div>

        <p>${data.example}</p>

        <div class="section-title">
            関連キーワード
        </div>

        <div>
            ${data.related.map(item =>
                `<span class="related-tag"
                onclick="quickSearch('${item}')">
                ${item}
                </span>`
            ).join("")}
        </div>

        ${renderNews(word)}

        <br>

        <button onclick="addFavorite('${word}')">
            ⭐ お気に入り
        </button>
    `;
}
function quickSearch(word){

    document.getElementById("searchInput").value = word;

    searchWord(word);
}

function renderNews(word){

    const list = newsCases[word];

    if(!list){
        return "";
    }

    return `
    <div class="news-section">

        <div class="section-title">
            ニュース事例
        </div>

        <div class="news-grid">

        ${list.map(news => `
            <div class="news-card">

                <h3>${news.title}</h3>

                <p>${news.summary}</p>

                <div class="news-point">
                    ${news.point}
                </div>

            </div>
        `).join("")}

        </div>

    </div>
    `;
}
function addFavorite(word){

    let list =
        JSON.parse(
            localStorage.getItem(FAVORITE_KEY)
        ) || [];

    if(!list.includes(word)){
        list.push(word);
    }

    localStorage.setItem(
        FAVORITE_KEY,
        JSON.stringify(list)
    );

    renderFavorites();
}

function renderFavorites(){

    const list =
        JSON.parse(
            localStorage.getItem(FAVORITE_KEY)
        ) || [];

    const box =
        document.getElementById("favorites");

    box.innerHTML =
        list.map(item =>
            `<li>${item}</li>`
        ).join("");
}
function saveHistory(word){

    let history =
        JSON.parse(
            localStorage.getItem(HISTORY_KEY)
        ) || [];

    history.unshift(word);

    history =
        [...new Set(history)];

    history =
        history.slice(0,10);

    localStorage.setItem(
        HISTORY_KEY,
        JSON.stringify(history)
    );

    renderHistory();
}

function renderHistory(){

    const history =
        JSON.parse(
            localStorage.getItem(HISTORY_KEY)
        ) || [];

    document.getElementById("historyList").innerHTML =
        history.map(item =>
            `<li>${item}</li>`
        ).join("");
}

document
.getElementById("searchInput")
.addEventListener("keydown",function(e){

    if(e.key==="Enter"){
        searchWord();
    }

});

renderFavorites();
renderHistory();
