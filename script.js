const keywords = {
  "GDP": {
    definition: "国内総生産。一定期間内に生産された財・サービスの総価値。",
    example: "日本の経済規模を示す指標。",
    related: "CPI、インフレ"
  },

  "CPI": {
    definition: "消費者物価指数。物価水準の変化を示す指標。",
    example: "インフレ率の計算に使われる。",
    related: "インフレ、生活コスト"
  },

  "インフレ": {
    definition: "物価が継続的に上昇する現象。",
    example: "パンの値段が毎年上がる。",
    related: "CPI、金融政策"
  },

  "失業率": {
    definition: "労働人口のうち失業者の割合。",
    example: "景気判断の重要指標。",
    related: "GDP、景気"
  }
};

function searchWord(wordInput){
    const word = wordInput || document.getElementById("searchInput").value;
    const data = keywords[word];

    const resultBox = document.getElementById("resultBox");

    if(!data){
        resultBox.innerHTML = `<p class="notfound">見つかりませんでした</p>`;
        return;
    }

    resultBox.innerHTML = `
        <h2 class="keyword-title">${word}</h2>

        <div class="section-title">📖 定義</div>
        <p>${data.definition}</p>

        <div class="section-title">💡 例</div>
        <p>${data.example}</p>

        <div class="section-title">🔗 関連</div>
        <div>
            ${data.related.split("、").map(r =>
                `<span class="related-tag">${r}</span>`
            ).join("")}
        </div>

        <button class="favorite-btn" onclick="addFavorite('${word}')">
            ⭐ お気に入り
        </button>
    `;
}

function quickSearch(word){
    document.getElementById("searchInput").value = word;
    searchWord(word);
}

function addFavorite(word){
    let list = JSON.parse(localStorage.getItem("fav")) || [];

    if(!list.includes(word)){
        list.push(word);
    }

    localStorage.setItem("fav", JSON.stringify(list));
    renderFav();
}

function renderFav(){
    let list = JSON.parse(localStorage.getItem("fav")) || [];

    const favBox = document.getElementById("favorites");

    favBox.innerHTML = list.map(w =>
        `<li onclick="searchWord('${w}')">${w}</li>`
    ).join("");
}

renderFav();
