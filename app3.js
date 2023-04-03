(() => {
    document.querySelector(".button").onclick = function () {
        document.querySelector(".button").style.display = "none";
        document.querySelector("#flower-wrap").style.display = "none";
        
        const head = document.getElementsByTagName('head')[0];
        let content = document.createElement("div");
        let styles = document.createElement("style");

        styles.innerHTML = '\
        .content {\
            position: absolute;\
            left: calc(42.5% - 100px);\
            top: calc(56% - 250px);\
            width: 400px;\
            height: 360px;\
            padding: 0px 10px;\
            border-radius: 20px;\
            display: flex;\
            align-items:center;\
            justify-content: center;\
            background-color: rgba(239, 144, 144, 0.6)\
        }\
        h1{\
            color: #d26484;\
            font-size: 26px;\
        }'

        content.innerHTML = '<h1 style="font-family: fantasy;" xlink:href="#partialPath" startOffset="12">Chúc thương sức khoẻ, luôn luôn vui vẻ và hạnh phúc.\
        Chúc Thương luôn thành công trong học tập và trên con đường Thương đã chọn.\
        Chúc Thương tất cả những điều tốt đẹp nhất. </h1>'

        head.appendChild(styles);
        content.classList.add('content');
        content.setAttribute('style', 'styles');
        document.getElementById('castle').appendChild(content);

    }
})();