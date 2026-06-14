// =====================
// 📚 经济学关键词库
// =====================
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

// =====================
// 🤖 AI兜底函数（新增）
// =====================
async function askAI(message){

    const prompt = `
あなたは経済学の先生です。
以下の経済用語や質問を、大学生にもわかるように簡単な日本語で説明してください。

用語・質問：${message}

条件：
- 簡潔
- わかりやすい
- 専門用語はできるだけ避ける
`;

    const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer YOUR_API_KEY"
        },
        body: JSON.stringify({
            model: "gpt-4o-mini",
            messages: [
                { role: "system", content: "You are an economics teacher." },
                { role: "user", content: prompt }
            ]
        })
    });

    const data = await res.json();
    return data.choices[0].message.content;
}

// =====================
// 🔍 搜索函数（已集成AI）
// =====================
async function searchWord(){

    const word = document.getElementById("searchInput").value.trim();
    const resultBox = document.getElementById("resultBox");

    const data = keywords[word];

    if(!word){
        resultBox.innerHTML = `<p>キーワードを入力してください</p>`;
        return;
    }

    // =====================
    // ✔ 命中词典（原功能不变）
    // =====================
    if(data){
        resultBox.innerHTML = `
            <h2>${word}</h2>
            <p><b>意味：</b>${data.definition}</p>
            <p><b>例：</b>${data.example}</p>
            <p><b>関連：</b>${data.related}</p>
        `;
        return;
    }

    // =====================
    // 🤖 AI兜底模式（新增）
    // =====================
    resultBox.innerHTML = `<p>AIが回答中...</p>`;

    try{
        const aiAnswer = await askAI(word);

        resultBox.innerHTML = `
            <h2>${word}</h2>
            <p><b>🤖 AI説明：</b></p>
            <p>${aiAnswer}</p>
        `;

    }catch(e){
        resultBox.innerHTML = `<p>AI取得に失敗しました</p>`;
    }
}

// =====================
// ⚡ 快速搜索（原功能保留）
// =====================
function quickSearch(word){
    document.getElementById("searchInput").value = word;
    searchWord();
}

// =====================
// ⌨️ Enter键搜索
// =====================
document.getElementById("searchInput").addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        searchWord();
    }
});
