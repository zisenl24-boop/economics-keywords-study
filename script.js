
const keywords = {
  "ミクロ経済学": {
    definition: "個々の家計や企業の行動を分析する経済学の分野。",
    example: "需要と供給の理論、価格決定など。",
    related: "マクロ経済学、需要、供給"
  },

  "マクロ経済学": {
    definition: "経済全体の動きを分析する経済学の分野。",
    example: "GDP、インフレ、失業率など。",
    related: "GDP、CPI、金融政策"
  },

  "GDP": {
    definition: "国内総生産。一定期間に生産された財・サービスの総価値。",
    example: "経済規模を測る最も重要な指標。",
    related: "GNP、成長率"
  },

  "CPI": {
    definition: "消費者物価指数。物価の変化を示す指標。",
    example: "インフレ率の計算に使用される。",
    related: "インフレ"
  },

  "インフレ": {
    definition: "物価が継続的に上昇する現象。",
    example: "物の値段が上がる状態。",
    related: "CPI、デフレ"
  },

  "デフレ": {
    definition: "物価が継続的に下落する現象。",
    example: "景気悪化と関連する。",
    related: "インフレ"
  },

  "失業率": {
    definition: "労働力人口のうち失業者の割合。",
    example: "景気判断の重要指標。",
    related: "雇用"
  },

  "需要": {
    definition: "消費者が購入したい財の量。",
    example: "価格が下がると増える。",
    related: "供給"
  },

  "供給": {
    definition: "生産者が市場に提供する財の量。",
    example: "価格が上がると増える。",
    related: "需要"
  },

  "市場": {
    definition: "財やサービスが取引される場所。",
    example: "競争市場など。",
    related: "価格"
  },

  "価格": {
    definition: "財の交換価値。",
    example: "需要と供給で決定される。",
    related: "市場"
  },

  "金利": {
    definition: "資金の貸借に対する利子率。",
    example: "中央銀行が操作する重要指標。",
    related: "金融政策"
  },

  "金融政策": {
    definition: "中央銀行による金利や通貨供給の調整。",
    example: "利上げ・利下げ。",
    related: "中央銀行"
  },

  "財政政策": {
    definition: "政府による税や支出の調整。",
    example: "減税や公共投資。",
    related: "政府"
  },

  "為替": {
    definition: "通貨の交換比率。",
    example: "円高・円安。",
    related: "外貨"
  },

  "円安": {
    definition: "円の価値が下がる状態。",
    example: "輸入品価格が上昇。",
    related: "為替"
  },

  "円高": {
    definition: "円の価値が上がる状態。",
    example: "輸入が安くなる。",
    related: "為替"
  },

  "貿易": {
    definition: "国際間の商品・サービス交換。",
    example: "輸出と輸入。",
    related: "国際経済"
  },

  "輸出": {
    definition: "国内から国外へ商品を売ること。",
    example: "自動車輸出など。",
    related: "貿易"
  },

  "輸入": {
    definition: "国外から商品を買うこと。",
    example: "エネルギー輸入など。",
    related: "貿易"
  },

  "労働市場": {
    definition: "労働の需要と供給が成立する市場。",
    example: "雇用状況分析。",
    related: "失業率"
  },

  "賃金": {
    definition: "労働の対価。",
    example: "最低賃金制度など。",
    related: "労働"
  },

  "最低賃金": {
    definition: "法律で定められた最低給与。",
    example: "政府が設定。",
    related: "賃金"
  },

  "インセンティブ": {
    definition: "行動を変える動機づけ。",
    example: "ボーナス制度。",
    related: "行動経済学"
  },

  "機会費用": {
    definition: "選択により失われる最大の利益。",
    example: "時間の使い方。",
    related: "意思決定"
  },

  "効用": {
    definition: "消費者の満足度。",
    example: "消費理論の基本概念。",
    related: "限界効用"
  },

  "限界効用": {
    definition: "追加的に得られる満足度。",
    example: "経済学の重要概念。",
    related: "効用"
  },

  "生産性": {
    definition: "投入に対する産出の効率。",
    example: "労働生産性など。",
    related: "成長"
  },

  "投資": {
    definition: "将来の利益のための支出。",
    example: "設備投資など。",
    related: "資本"
  },

  "貯蓄": {
    definition: "消費されずに残る所得。",
    example: "銀行預金など。",
    related: "所得"
  },

  "所得": {
    definition: "個人や企業の収入。",
    example: "給与収入など。",
    related: "賃金"
  },

  "通貨": {
    definition: "交換手段としての貨幣。",
    example: "円・ドル。",
    related: "金融"
  },

  "貨幣": {
    definition: "価値交換・保存の手段。",
    example: "現金や預金。",
    related: "通貨"
  },

  "中央銀行": {
    definition: "金融政策を行う国家機関。",
    example: "日本銀行など。",
    related: "金融政策"
  },

  "日本銀行": {
    definition: "日本の中央銀行。",
    example: "金利操作を実施。",
    related: "中央銀行"
  },

  "景気": {
    definition: "経済活動の全体的状態。",
    example: "景気拡大・後退。",
    related: "GDP"
  },

  "景気循環": {
    definition: "経済の拡大と縮小の繰り返し。",
    example: "ビジネスサイクル。",
    related: "景気"
  },

  "公共財": {
    definition: "非競合・非排除の財。",
    example: "国防など。",
    related: "市場失敗"
  },

  "外部性": {
    definition: "市場外の影響。",
    example: "環境汚染。",
    related: "市場失敗"
  },

  "市場失敗": {
    definition: "市場が効率的に機能しない状態。",
    example: "独占など。",
    related: "政府介入"
  }
};
const newsCases = {
  "GDP": [
    {
      title: "日本のGDP成長率発表",
      summary: "政府や統計機関がGDP成長率を発表すると、景気が拡大しているのか、減速しているのかを判断する材料になる。",
      point: "GDPは景気全体を見る代表的な指標。"
    },
    {
      title: "米国GDP速報値と金融市場",
      summary: "米国のGDP速報値が市場予想を上回ると、株価・為替・金利に影響することがある。",
      point: "大国のGDPは世界経済にも影響しやすい。"
    },
    {
      title: "中国GDPと国際貿易",
      summary: "中国のGDP成長が鈍化すると、輸出入や資源価格を通じて他国の経済にも影響が出る場合がある。",
      point: "GDPは国内だけでなく国際経済の分析にも使われる。"
    }
  ],
  "CPI": [
    {
      title: "消費者物価指数の上昇",
      summary: "CPIが上昇すると、食品・電気代・日用品などの価格上昇を通じて家計負担が大きくなる。",
      point: "CPIは生活コストの変化を見る指標。"
    },
    {
      title: "米国CPIと利上げ観測",
      summary: "米国CPIが高い水準だと、中央銀行が利上げを続けるのではないかという見方が強まることがある。",
      point: "CPIは金融政策の判断材料になる。"
    },
    {
      title: "エネルギー価格とCPI",
      summary: "原油や電気料金の上昇はCPIを押し上げ、インフレ率にも影響を与える。",
      point: "CPIの中身を見ることも重要。"
    }
  ],
  "インフレ": [
    {
      title: "物価上昇と家計への影響",
      summary: "インフレが続くと、同じ金額で買えるものが少なくなり、実質的な購買力が下がる。",
      point: "インフレは日常生活に直接関係する。"
    },
    {
      title: "中央銀行の金融引き締め",
      summary: "インフレを抑えるために、中央銀行が金利を引き上げる政策を取ることがある。",
      point: "インフレと金利は深く関係している。"
    },
    {
      title: "円安と輸入物価",
      summary: "円安になると輸入品の価格が上がり、国内の物価上昇につながる場合がある。",
      point: "為替もインフレの要因になる。"
    }
  ],
  "失業率": [
    {
      title: "景気後退と失業率の上昇",
      summary: "景気が悪化すると企業が採用を減らし、失業率が上がることがある。",
      point: "失業率は景気の悪化を示すサインになる。"
    },
    {
      title: "若年層の雇用問題",
      summary: "若者の失業率が高い場合、教育・就職支援・産業構造の問題として議論されることが多い。",
      point: "年齢別に見ると雇用問題がより具体的に分かる。"
    },
    {
      title: "完全失業率と政府の雇用政策",
      summary: "政府は失業率を見ながら、職業訓練や雇用支援などの政策を検討する。",
      point: "失業率は政策判断にも使われる。"
    }
  ]
};

const FAVORITE_KEY = "fav";
const HISTORY_KEY = "searchHistory";
const MAX_HISTORY_COUNT = 10;

function getStorageList(key){
    try{
        return JSON.parse(localStorage.getItem(key)) || [];
    }catch(e){
        return [];
    }
}

function setStorageList(key, list){
    localStorage.setItem(key, JSON.stringify(list));
}

function escapeHTML(text){
    return String(text).replace(/[&<>'"]/g, function(char){
        return {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            "'": "&#039;",
            '"': "&quot;"
        }[char];
    });
}

function findKeyword(input){
    const word = String(input || "").trim();

    if(keywords[word]){
        return word;
    }

    const matchedWord = Object.keys(keywords).find(key =>
        key.toLowerCase() === word.toLowerCase()
    );

    return matchedWord || word;
}


function createNewsSearchUrl(word, title){
    const query = encodeURIComponent(`${word} ${title}`);
    return `https://news.google.com/search?q=${query}&hl=ja&gl=JP&ceid=JP:ja`;
}

function renderNewsCases(word){
    const cases = newsCases[word] || [];

    if(cases.length === 0){
        return `
            <div class="news-section">
                <div class="section-title">📰 ニュース事例</div>
                <p class="empty-text">このキーワードのニュース事例はまだ登録されていません。</p>
            </div>
        `;
    }

    return `
        <div class="news-section">
            <div class="section-title">📰 ニュース事例</div>
            <p class="news-lead">このキーワードが実際のニュースでどのように使われるかを確認できます。</p>

            <div class="news-grid">
                ${cases.map(item => `
                    <div class="news-card">
                        <h3>${escapeHTML(item.title)}</h3>
                        <p>${escapeHTML(item.summary)}</p>
                        <div class="news-point">学習ポイント：${escapeHTML(item.point)}</div>
                        <a class="news-link" href="${createNewsSearchUrl(word, item.title)}" target="_blank" rel="noopener noreferrer">
                            関連ニュースを探す
                        </a>
                    </div>
                `).join("")}
            </div>

            <a class="latest-news-link" href="${createNewsSearchUrl(word, "")}" target="_blank" rel="noopener noreferrer">
                「${escapeHTML(word)}」の最新ニュースをまとめて見る
            </a>
        </div>
    `;
}

function searchWord(wordInput){
    const input = document.getElementById("searchInput");
    const rawWord = wordInput || input.value;
    const word = findKeyword(rawWord);
    const data = keywords[word];
    const resultBox = document.getElementById("resultBox");

    if(!String(rawWord).trim()){
        resultBox.innerHTML = `<p class="notfound">キーワードを入力してください</p>`;
        return;
    }

    input.value = word;
    addHistory(word);

    if(!data){
        resultBox.innerHTML = `<p class="notfound">「${escapeHTML(word)}」は見つかりませんでした</p>`;
        return;
    }

    const favoriteList = getStorageList(FAVORITE_KEY);
    const isFavorite = favoriteList.includes(word);

    resultBox.innerHTML = `
        <h2 class="keyword-title">${escapeHTML(word)}</h2>

        <div class="section-title">📖 定義</div>
        <p>${escapeHTML(data.definition)}</p>

        <div class="section-title">💡 例</div>
        <p>${escapeHTML(data.example)}</p>

        <div class="section-title">🔗 関連</div>
        <div>
            ${data.related.split("、").map(r =>
                `<span class="related-tag">${escapeHTML(r)}</span>`
            ).join("")}
        </div>

        ${renderNewsCases(word)}

        <button class="favorite-btn" onclick="toggleFavorite('${escapeHTML(word)}')">
            ${isFavorite ? "★ お気に入り解除" : "⭐ お気に入りに追加"}
        </button>
    `;
}

function quickSearch(word){
    document.getElementById("searchInput").value = word;
    searchWord(word);
}

function addFavorite(word){
    let list = getStorageList(FAVORITE_KEY);

    if(!list.includes(word)){
        list.push(word);
    }

    setStorageList(FAVORITE_KEY, list);
    renderFav();
}

function removeFavorite(word){
    let list = getStorageList(FAVORITE_KEY);
    list = list.filter(item => item !== word);

    setStorageList(FAVORITE_KEY, list);
    renderFav();
}

function toggleFavorite(word){
    let list = getStorageList(FAVORITE_KEY);

    if(list.includes(word)){
        list = list.filter(item => item !== word);
    }else{
        list.push(word);
    }

    setStorageList(FAVORITE_KEY, list);
    renderFav();
    searchWord(word);
}

function renderFav(){
    const list = getStorageList(FAVORITE_KEY);
    const favBox = document.getElementById("favorites");

    if(!favBox){
        return;
    }

    if(list.length === 0){
        favBox.innerHTML = `<li class="empty-text">まだお気に入りはありません</li>`;
        return;
    }

    favBox.innerHTML = list.map(word => `
        <li class="saved-item">
            <span onclick="searchWord('${escapeHTML(word)}')">${escapeHTML(word)}</span>
            <button class="small-btn danger-btn" onclick="removeFavorite('${escapeHTML(word)}')">削除</button>
        </li>
    `).join("");
}

function addHistory(word){
    let history = getStorageList(HISTORY_KEY);

    history = history.filter(item => item.word !== word);
    history.unshift({
        word: word,
        time: new Date().toLocaleString("ja-JP")
    });
    history = history.slice(0, MAX_HISTORY_COUNT);

    setStorageList(HISTORY_KEY, history);
    renderHistory();
}

function renderHistory(){
    const historyBox = document.getElementById("historyList");
    const history = getStorageList(HISTORY_KEY);

    if(!historyBox){
        return;
    }

    if(history.length === 0){
        historyBox.innerHTML = `<li class="empty-text">まだ検索履歴はありません</li>`;
        return;
    }

    historyBox.innerHTML = history.map(item => `
        <li class="saved-item">
            <span onclick="searchWord('${escapeHTML(item.word)}')">${escapeHTML(item.word)}</span>
            <small>${escapeHTML(item.time)}</small>
        </li>
    `).join("");
}

function clearHistory(){
    localStorage.removeItem(HISTORY_KEY);
    renderHistory();
}

const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        searchWord();
    }
});

renderFav();
renderHistory();
