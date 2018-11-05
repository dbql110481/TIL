// 1. <input> 태그 안의 값을 잡는다.
const button = document.querySelector("#js-button");
const inputArea = document.querySelector('#js-input');

button.addEventListener('click', () => {
    const inputValue = document.querySelector('#js-input').value;
    pushToDOM(inputValue);
});

inputArea.addEventListener('keyup', (e) => {
    const inputValue = document.querySelector('#js-input').value;
    if(e.which === 13) {
        pushToDOM(inputValue);
    }
});
// 2. API를 활용하여 data를 ''받는다. 그리고 가공한다.
const API_KEY = 'AatUVKRsGXN822Pgw3iOGllFulq9Nbh7'
let keyword = 'dogs';
const URL = `api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${API_KEY}`

// 3. GIF 파일들을 index.html 에 밀어 넣는다.
const pushToDOM = (data) => {
   const resultArea = document.querySelector('#result-area');
   resultArea.innerHTML = data;
};