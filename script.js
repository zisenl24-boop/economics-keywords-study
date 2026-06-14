const keywords = {

    "GDP": {
        definition: "国内総生産。一定期間内に国内で生産された財・サービスの付加価値の総額。",
        example: "日本経済の規模を示す代表的な指標。",
        related: "CPI、インフレ"
    },

    "CPI": {
        definition: "消費者物価指数。消費者が購入する商品やサービスの価格変動を示す指標。",
        example: "食品やガソリン価格の上昇はCPIに反映される。",
        related: "インフレ、GDP"
    },

    "インフレ": {
        definition: "物価が継続的に上昇する現象。",
        example: "近年の日本では食品価格の上昇が話題となった。",
        related: "CPI、GDP"
    },

    "デフレ": {
        definition: "物価が継続的に下落する現象。",
        example: "日本は長年デフレに悩まされてきた。",
        related: "CPI"
    },

    "為替レート": {
        definition: "異なる国の通貨を交換する際の比率。",
        example: "1ドル＝150円は為替レートの一例。",
        related: "円安、円高"
    },

    "円安": {
        definition: "円の価値が外国通貨に対して下がること。",
        example: "円安になると輸出企業に有利とされる。",
        related: "為替レート、輸出"
    },

    "円高": {
        definition: "円の価値が外国通貨に対して上がること。",
        example: "円高になると輸入品が安くなる。",
        related: "為替レート、輸入"
    },

    "WTO": {
        definition: "世界貿易機関。国際貿易のルールを定める機関。",
        example: "加盟国間の貿易問題を調整する。",
        related: "FTA、関税"
    },

    "FTA": {
        definition: "自由貿易協定。加盟国間の関税を引き下げる協定。",
        example: "日本は多くの国とFTAを締結している。",
        related: "WTO、EPA"
    },

    "比較優位": {
        definition: "他国より低い機会費用で生産できる財に特化する考え方。",
        example: "国際分業の理論的根拠となる。",
        related: "貿易、FTA"
    }

};

};function searchKeyword() {

    const input =
        document.getElementById("searchInput").value;

    loadKeyword(input);

}function loadKeyword(word) {

    const result =
        document.getElementById("result");

    const item =
        keywords[word];

    if (!item) {

        result.innerHTML =
        `
        <div class="notfound">
            用語が見つかりません
        </div>
        `;

        return;
    }

    result.innerHTML =
    `
    <div class="card">

        <h2 class="keyword-title">
            ${word}
        </h2>

        <h3 class="section-title">
            定義
        </h3>

        <p>
            ${item.definition}
        </p>

    </div>
    `;
}
