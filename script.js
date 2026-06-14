const keywords = {
    "GDP": {
        definition: "国内総生産。一定期間内に国内で生産された財・サービスの付加価値の総額。"
    }
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