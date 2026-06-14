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
  ,

  "デフレ": {
    definition: "物価が継続的に下落する現象。",
    example: "商品の価格が長期間下がり続ける。",
    related: "インフレ、需要"
  },

  "景気循環": {
    definition: "景気が拡大と後退を繰り返す現象。",
    example: "好景気と不景気が交互に訪れる。",
    related: "GDP、失業率"
  },

  "金利": {
    definition: "お金を借りる際の利息の割合。",
    example: "住宅ローン金利。",
    related: "金融政策、日本銀行"
  },

  "金融政策": {
    definition: "中央銀行が景気や物価を調整する政策。",
    example: "利上げや利下げ。",
    related: "金利、日本銀行"
  },

  "日本銀行": {
    definition: "日本の中央銀行。",
    example: "金融政策を実施する。",
    related: "金利、金融政策"
  },

  "財政政策": {
    definition: "政府支出や税制を通じた経済政策。",
    example: "公共事業の拡大。",
    related: "租税、政府支出"
  },

  "消費税": {
    definition: "商品やサービス購入時に課される税金。",
    example: "日本では10％。",
    related: "租税、財政政策"
  },

  "所得税": {
    definition: "所得に応じて課される税金。",
    example: "給与所得への課税。",
    related: "租税"
  },

  "法人税": {
    definition: "企業の利益に課される税金。",
    example: "企業収益への課税。",
    related: "租税、企業"
  },

  "国債": {
    definition: "政府が発行する債券。",
    example: "公共支出の財源。",
    related: "財政赤字"
  },

  "財政赤字": {
    definition: "政府支出が税収を上回る状態。",
    example: "歳出超過。",
    related: "国債"
  },

  "円高": {
    definition: "円の価値が上昇すること。",
    example: "1ドル100円から90円になる。",
    related: "為替レート"
  },

  "円安": {
    definition: "円の価値が下落すること。",
    example: "1ドル100円から150円になる。",
    related: "為替レート"
  },

  "為替レート": {
    definition: "異なる通貨の交換比率。",
    example: "1ドル＝150円。",
    related: "円高、円安"
  },

  "輸出": {
    definition: "国内の商品を海外へ販売すること。",
    example: "自動車輸出。",
    related: "貿易"
  },

  "輸入": {
    definition: "海外の商品を国内へ購入すること。",
    example: "原油輸入。",
    related: "貿易"
  },

  "関税": {
    definition: "輸入品に課される税金。",
    example: "保護貿易政策。",
    related: "輸入、自由貿易"
  },

  "自由貿易": {
    definition: "貿易障壁を減らして行う国際取引。",
    example: "FTAの締結。",
    related: "関税"
  },

  "需要": {
    definition: "商品を購入したいという欲求。",
    example: "人気商品の需要増加。",
    related: "供給"
  },

  "供給": {
    definition: "商品を市場へ提供すること。",
    example: "生産量の増加。",
    related: "需要"
  },

  "市場均衡": {
    definition: "需要と供給が一致する状態。",
    example: "均衡価格の成立。",
    related: "需要、供給"
  },

  "独占": {
    definition: "一企業が市場を支配する状態。",
    example: "競争相手が存在しない。",
    related: "市場"
  },

  "寡占": {
    definition: "少数企業が市場を支配する状態。",
    example: "携帯電話市場。",
    related: "独占"
  },

  "機会費用": {
    definition: "ある選択によって失う最大の利益。",
    example: "勉強時間とアルバイト時間。",
    related: "選択"
  },

  "価格弾力性": {
    definition: "価格変化に対する需要変化の割合。",
    example: "ぜいたく品は弾力性が高い。",
    related: "需要"
  },

  "株式": {
    definition: "企業の所有権を表す証券。",
    example: "株式投資。",
    related: "株式会社"
  },

  "株価": {
    definition: "株式の市場価格。",
    example: "企業業績で変動する。",
    related: "株式"
  },

  "配当": {
    definition: "企業が株主へ分配する利益。",
    example: "配当金。",
    related: "株式"
  },

  "利益": {
    definition: "売上から費用を引いた金額。",
    example: "企業の収益。",
    related: "売上高"
  },

  "売上高": {
    definition: "企業が商品販売で得た収入。",
    example: "年間売上高。",
    related: "利益"
  },

  "固定費": {
    definition: "生産量に関係なく発生する費用。",
    example: "家賃。",
    related: "コスト"
  },

  "変動費": {
    definition: "生産量に応じて変化する費用。",
    example: "原材料費。",
    related: "コスト"
  },

  "スタートアップ": {
    definition: "新しい技術や事業を展開する新興企業。",
    example: "AI企業。",
    related: "ベンチャー企業"
  },

  "ESG": {
    definition: "環境・社会・ガバナンスを重視する考え方。",
    example: "ESG投資。",
    related: "CSR"
  },

  "DX": {
    definition: "デジタル技術による業務改革。",
    example: "オンライン化。",
    related: "イノベーション"
  },

  "GNP": {
    definition: "国民総生産。国民が生産した財・サービスの総価値。",
    example: "海外での生産活動も含まれる。",
    related: "GDP"
  },

  "PPI": {
    definition: "生産者物価指数。企業間取引価格の変化を示す指標。",
    example: "原材料価格の上昇を反映する。",
    related: "CPI、インフレ"
  },

  "好景気": {
    definition: "経済活動が活発な状態。",
    example: "企業収益や雇用が増加する。",
    related: "不景気、GDP"
  },

  "不景気": {
    definition: "経済活動が停滞している状態。",
    example: "企業収益や消費が減少する。",
    related: "失業率、景気"
  },

  "完全雇用": {
    definition: "働く意思のある人がほぼ全員働ける状態。",
    example: "失業率が非常に低い。",
    related: "失業率"
  },

  "経済成長率": {
    definition: "経済規模がどれだけ成長したかを示す割合。",
    example: "前年比3％成長。",
    related: "GDP"
  },

  "実質GDP": {
    definition: "物価変動の影響を除いたGDP。",
    example: "経済成長の実態を把握できる。",
    related: "名目GDP"
  },

  "名目GDP": {
    definition: "物価変動を含めて計算したGDP。",
    example: "現在価格で算出される。",
    related: "実質GDP"
  },

  "生産性": {
    definition: "投入した資源に対する成果の割合。",
    example: "労働生産性の向上。",
    related: "経済成長"
  },

  "量的緩和": {
    definition: "中央銀行が市場へ大量の資金を供給する政策。",
    example: "景気刺激策として実施される。",
    related: "金融政策"
  },

  "利上げ": {
    definition: "政策金利を引き上げること。",
    example: "インフレ抑制に利用される。",
    related: "金利"
  },

  "利下げ": {
    definition: "政策金利を引き下げること。",
    example: "景気刺激に利用される。",
    related: "金利"
  },

  "マネーサプライ": {
    definition: "市場に流通するお金の総量。",
    example: "中央銀行が管理する。",
    related: "金融政策"
  },

  "政府支出": {
    definition: "政府が行う公共サービスや事業への支出。",
    example: "公共事業費。",
    related: "財政政策"
  },

  "補助金": {
    definition: "政府が特定の活動を支援するために支給する資金。",
    example: "農業補助金。",
    related: "財政政策"
  },

  "貿易収支": {
    definition: "輸出額と輸入額の差額。",
    example: "黒字または赤字となる。",
    related: "輸出、輸入"
  },

  "経常収支": {
    definition: "貿易や投資収益を含む国際収支。",
    example: "日本は黒字国であることが多い。",
    related: "貿易収支"
  },

  "FTA": {
    definition: "自由貿易協定。",
    example: "加盟国間の関税を削減する。",
    related: "自由貿易"
  },

  "WTO": {
    definition: "世界貿易機関。",
    example: "国際貿易ルールを管理する。",
    related: "自由貿易"
  },

  "グローバル化": {
    definition: "国境を越えた経済活動の拡大。",
    example: "多国籍企業の増加。",
    related: "国際貿易"
  },

  "比較優位": {
    definition: "他国より効率よく生産できる分野に特化する考え方。",
    example: "国際分業の基礎理論。",
    related: "国際分業"
  },

  "需要曲線": {
    definition: "価格と需要量の関係を示す曲線。",
    example: "価格が上がると需要は減少する。",
    related: "需要"
  },

  "供給曲線": {
    definition: "価格と供給量の関係を示す曲線。",
    example: "価格が上がると供給は増加する。",
    related: "供給"
  },

  "均衡価格": {
    definition: "需要と供給が一致する価格。",
    example: "市場均衡で成立する。",
    related: "市場均衡"
  },

  "消費者余剰": {
    definition: "消費者が得る利益の大きさ。",
    example: "安く購入できた時に生じる。",
    related: "需要"
  },

  "生産者余剰": {
    definition: "生産者が得る利益の大きさ。",
    example: "高く販売できた時に生じる。",
    related: "供給"
  },

  "代替財": {
    definition: "互いに代わりとして利用できる商品。",
    example: "コーヒーと紅茶。",
    related: "需要"
  },

  "補完財": {
    definition: "一緒に利用される商品。",
    example: "スマホと充電器。",
    related: "需要"
  },

  "市場失敗": {
    definition: "市場メカニズムだけでは効率的な結果が得られない状態。",
    example: "環境汚染問題。",
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
