const quotes = [
    {
        quotes: "인생은 거울과 같으니, 비친 것을 밖에서 들여다 보기 보다 먼저 자신의 내면을 살펴야 한다.",
        author: "월리 '페이머스' 아모스",
    },
    {
       quotes: "실천이 말보다 낫다.",
       author: "벤자민 프랭클린",
    },
    {
       quotes: "행동의 가치는 그 행동을 끝까지 이루는 데 있다.",
       author: "칭기즈칸",
    },
    {
       quotes: "목표에 도달했을 때 돌아서지 마라.",
       author: "퍼블릴리어스 사이러스",
    },
    {
       quotes: "운명은 우연이 아닌, 선택이다. 기다리는 것이 아니라, 성취하는 것이다.",
       author: "윌리엄 제닝스 브라이언",
    },
    {
       quotes: "무엇을 하든 제대로 하라. 건성으로 말고 철저히 하라. 일의 근본을 살피라. 내가 보기엔 무엇이든 절반만 한 것이나 절반만 결코 한 것도 아는 것도 아니기 때문이다. 아니, 종종 오도하기에 때문에 더 나쁘다.",
       author: "체스터필드 경",
    },
    {
       quotes: "기회는 없어지지 않는다. 당신이 놓친 것은 다른 사람이 잡는다.",
        author:"작자 미상",
    },
    {
       quotes: "행복은 성취의 기쁨과 창조적 노력이 주는 쾌감 속에 있다.",
        author:"프랭클린 D. 루스벨트",
    },
    {
       quotes: "쉽게 빠져나가는 방법은 없다. 있었다면 그 방법을 썼을 거다. 정말이지, 그런 방법은 내가 가장 좋아하는 것 중 하나일 거다!",
       author: "오프라 윈프리",
    },
    {
       quotes: "오늘 할 수 있는 일을 내일로 미루지 마라.",
       author: "벤자민 프랭클린",
    },
    {
       quotes: "위대한 업적은 대개 커다란 위험을 감수한 결과이다.",
       author: "헤로도토스",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");


// console.log(quotes[Math.floor(Math.random() * 10)]); 

//math.random = 0 - 1까지의 숫자들을 랜덤으로 보여줌
// math.random = 0.9876543 이런식으로 나오는데 10을 1,2,3,4의 값을 받을수있다.

//하지만우리가 사용하기 편리하게 소숫점값을 없애주고 싶은데 그럴때쓰는것이 3가지 있다.
//1.round = 값을 반올림해서 보여줌
//2.ceil = 수의 최대치의 값을 보여줌 ex) 1.1 = 2 1.00001 = 2
//3.floor = 수의 최저치의 값을 보여줌 ex) 1.9 = 1 1.9999 = 1

//이렇게 사용하면 안좋은 점 이 코드로드 우리가 가지고있는 리스트가 10개여야만 사용할수있다.
//array의 길이를 자동으로 알아서 그 수의 맞게 랜덤이 설정되도록하는것이 좋다!
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quotes;
author.innerText = todayQuote.author;
