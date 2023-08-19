const quote = [
  {
    coment: "-미래는 내일이면 더 나을 것이다.-",
    author: " Dan Quayle",
  },
  {
    coment: "-미래는 예전의 미래가 아니다.-",
    author: " Yogi Berra",
  },
  {
    coment: "-일 분 전만큼 먼 시간은 없다.-",
    author: " Jim Bishop",
  },
];
const coment = document.querySelector(".coment");
const author = document.querySelector(".author");
coment.innerHTML = quote[Math.floor(Math.random() * quote.length)].coment;
author.innerHTML = quote[Math.floor(Math.random() * quote.length)].author;
