[index.html](https://github.com/user-attachments/files/28926376/index.html)
<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<title>Economics Keyword App</title>
<link rel="stylesheet" href="style.css">
</head>

<body>

<header>
    <h1>経済学キーワード辞典</h1>
    <p>GDP・インフレ・CPI・金融政策をわかりやすく学ぶ</p>
</header>

<div class="container">

<!-- 搜索区 -->
<div class="card">
    <h2>キーワード検索</h2>

    <input id="searchInput" placeholder="例：GDP、インフレ、CPI">
    <button onclick="searchWord()">検索</button>

    <div class="popular">
        <span onclick="quickSearch('GDP')">GDP</span>
        <span onclick="quickSearch('CPI')">CPI</span>
        <span onclick="quickSearch('インフレ')">インフレ</span>
        <span onclick="quickSearch('失業率')">失業率</span>
    </div>
</div>

<!-- 结果 -->
<div class="card" id="resultBox">
    <p class="notfound">検索結果がここに表示されます</p>
</div>

<!-- Concept Map -->
<div class="card">
    <h2>Concept Map</h2>

    <div class="concept-map">
        <div class="concept-card">GDP</div>
        <div class="concept-card">消費</div>
        <div class="concept-card">投資</div>
        <div class="concept-card">失業率</div>
        <div class="concept-card">CPI</div>
        <div class="concept-card">インフレ</div>
        <div class="concept-card">金融政策</div>
        <div class="concept-card">国際貿易</div>
    </div>
</div>

<!-- 分类 -->
<div class="card">
    <h2>カテゴリ</h2>

    <div class="category-grid">
        <div class="category-card">📈 マクロ経済</div>
        <div class="category-card">💰 金融</div>
        <div class="category-card">🌏 国際経済</div>
        <div class="category-card">🏭 ミクロ経済</div>
    </div>
</div>

<!-- 收藏 -->
<div class="card">
    <h2>お気に入り</h2>
    <ul id="favorites"></ul>
</div>

<!-- 搜索历史 -->
<div class="card">
    <h2>検索履歴</h2>
    <ul id="historyList"></ul>
    <button class="clear-btn" onclick="clearHistory()">履歴をクリア</button>
</div>

</div>

<script src="script.js"></script>
</body>
</html>
