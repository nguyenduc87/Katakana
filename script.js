const questions = [
    { question: "a đọc là gì?", choices: ["ア", "エ", "ケ", "ソ"], answer: "ア", hiragana: "あ", userAnswer: null },
    { question: "i đọc là gì?", choices: ["キ", "シ", "イ", "セ"], answer: "イ", hiragana: "い", userAnswer: null },
    { question: "u đọc là gì?", choices: ["エ", "ウ", "オ", "ネ"], answer: "ウ", hiragana: "う", userAnswer: null },
    { question: "e đọc là gì?", choices: ["ア", "ケ", "エ", "リ"], answer: "エ", hiragana: "え", userAnswer: null },
    { question: "o đọc là gì?", choices: ["オ", "ツ", "テ", "ヌ"], answer: "オ", hiragana: "お", userAnswer: null },

    { question: "ka đọc là gì?", choices: ["カ", "メ", "ヌ", "ニ"], answer: "カ", hiragana: "か", userAnswer: null },
    { question: "ki đọc là gì?", choices: ["サ", "キ", "ノ", "レ"], answer: "キ", hiragana: "き", userAnswer: null },
    { question: "ku đọc là gì?", choices: ["ケ", "ス", "ク", "ミ"], answer: "ク", hiragana: "く", userAnswer: null },
    { question: "ke đọc là gì?", choices: ["ア", "エ", "ケ", "ソ"], answer: "ケ", hiragana: "け", userAnswer: null },
    { question: "ko đọc là gì?", choices: ["コ", "チ", "ネ", "ヲ"], answer: "コ", hiragana: "こ", userAnswer: null },

    { question: "sa đọc là gì?", choices: ["セ", "ツ", "サ", "ヌ"], answer: "サ", hiragana: "さ", userAnswer: null },
    { question: "shi đọc là gì?", choices: ["シ", "マ", "ツ", "ラ"], answer: "シ", hiragana: "し", userAnswer: null },
    { question: "su đọc là gì?", choices: ["ス", "ヌ", "エ", "ホ"], answer: "ス", hiragana: "す", userAnswer: null },
    { question: "se đọc là gì?", choices: ["セ", "ロ", "タ", "ネ"], answer: "セ", hiragana: "せ", userAnswer: null },
    { question: "so đọc là gì?", choices: ["ソ", "ア", "ン", "ム"], answer: "ソ", hiragana: "そ", userAnswer: null },

    { question: "ta đọc là gì?", choices: ["メ", "タ", "ハ", "ノ"], answer: "タ", hiragana: "た", userAnswer: null },
    { question: "chi đọc là gì?", choices: ["ヨ", "チ", "ウ", "リ"], answer: "チ", hiragana: "ち", userAnswer: null },
    { question: "tsu đọc là gì?", choices: ["ツ", "シ", "ナ", "ク"], answer: "ツ", hiragana: "つ", userAnswer: null },
    { question: "te đọc là gì?", choices: ["テ", "ホ", "シ", "ミ"], answer: "テ", hiragana: "て", userAnswer: null },
    { question: "to đọc là gì?", choices: ["ト", "レ", "ケ", "ヌ"], answer: "ト", hiragana: "と", userAnswer: null },

    { question: "na đọc là gì?", choices: ["ナ", "ヌ", "ル", "モ"], answer: "ナ", hiragana: "な", userAnswer: null },
    { question: "ni đọc là gì?", choices: ["ニ", "フ", "ヘ", "ラ"], answer: "ニ", hiragana: "に", userAnswer: null },
    { question: "nu đọc là gì?", choices: ["セ", "ヌ", "ス", "コ"], answer: "ヌ", hiragana: "ぬ", userAnswer: null },
    { question: "ne đọc là gì?", choices: ["ネ", "ハ", "ム", "エ"], answer: "ネ", hiragana: "ね", userAnswer: null },
    { question: "no đọc là gì?", choices: ["ノ", "ワ", "マ", "ケ"], answer: "ノ", hiragana: "の", userAnswer: null },

    { question: "ha đọc là gì?", choices: ["ハ", "ミ", "エ", "ス"], answer: "ハ", hiragana: "は", userAnswer: null },
    { question: "hi đọc là gì?", choices: ["キ", "ヒ", "ネ", "ヨ"], answer: "ヒ", hiragana: "ひ", userAnswer: null },
    { question: "fu đọc là gì?", choices: ["フ", "ツ", "セ", "リ"], answer: "フ", hiragana: "ふ", userAnswer: null },
    { question: "he đọc là gì?", choices: ["メ", "ヘ", "ソ", "タ"], answer: "ヘ", hiragana: "へ", userAnswer: null },
    { question: "ho đọc là gì?", choices: ["ホ", "ヌ", "ユ", "カ"], answer: "ホ", hiragana: "ほ", userAnswer: null },

    { question: "ma đọc là gì?", choices: ["ミ", "ム", "メ", "マ"], answer: "マ", hiragana: "ま", userAnswer: null },
    { question: "mi đọc là gì?", choices: ["ミ", "モ", "ヲ", "シ"], answer: "ミ", hiragana: "み", userAnswer: null },
    { question: "mu đọc là gì?", choices: ["ム", "ヨ", "ハ", "ト"], answer: "ム", hiragana: "む", userAnswer: null },
    { question: "me đọc là gì?", choices: ["テ", "ネ", "メ", "ナ"], answer: "メ", hiragana: "め", userAnswer: null },
    { question: "mo đọc là gì?", choices: ["モ", "ア", "ス", "ヒ"], answer: "モ", hiragana: "も", userAnswer: null },

    { question: "ya đọc là gì?", choices: ["コ", "ヤ", "ヨ", "エ"], answer: "ヤ", hiragana: "や", userAnswer: null },
    { question: "yu đọc là gì?", choices: ["ユ", "ナ", "ヌ", "ル"], answer: "ユ", hiragana: "ゆ", userAnswer: null },
    { question: "yo đọc là gì?", choices: ["ヨ", "ウ", "ワ", "リ"], answer: "ヨ", hiragana: "よ", userAnswer: null },

    { question: "ra đọc là gì?", choices: ["カ", "ラ", "ル", "ロ"], answer: "ラ", hiragana: "ら", userAnswer: null },
    { question: "ri đọc là gì?", choices: ["リ", "ミ", "サ", "シ"], answer: "リ", hiragana: "り", userAnswer: null },
    { question: "ru đọc là gì?", choices: ["ル", "ス", "エ", "ホ"], answer: "ル", hiragana: "る", userAnswer: null },
    { question: "re đọc là gì?", choices: ["レ", "ナ", "オ", "キ"], answer: "レ", hiragana: "れ", userAnswer: null },
    { question: "ro đọc là gì?", choices: ["ロ", "ク", "ヌ", "マ"], answer: "ロ", hiragana: "ろ", userAnswer: null },

    { question: "wa đọc là gì?", choices: ["ワ", "ラ", "ヲ", "ニ"], answer: "ワ", hiragana: "わ", userAnswer: null },
    { question: "wo đọc là gì?", choices: ["ヲ", "ヘ", "ホ", "テ"], answer: "ヲ", hiragana: "を", userAnswer: null },
    { question: "n đọc là gì?", choices: ["ソ", "ネ", "ノ", "ン"], answer: "ン", hiragana: "ん", userAnswer: null },
    // Âm đục
    { question: "ga đọc là gì?", choices: ["ガ", "カ", "ザ", "ダ"], answer: "ガ", hiragana: "が", userAnswer: null },
    { question: "gi đọc là gì?", choices: ["ジ", "ギ", "ビ", "ピ"], answer: "ギ", hiragana: "ぎ", userAnswer: null },
    { question: "gu đọc là gì?", choices: ["グ", "ク", "ブ", "ヅ"], answer: "グ", hiragana: "ぐ", userAnswer: null },
    { question: "ge đọc là gì?", choices: ["ゲ", "ケ", "セ", "ベ"], answer: "ゲ", hiragana: "げ", userAnswer: null },
    { question: "go đọc là gì?", choices: ["ゴ", "コ", "ソ", "ド"], answer: "ゴ", hiragana: "ご", userAnswer: null },

    { question: "za đọc là gì?", choices: ["ザ", "サ", "ダ", "バ"], answer: "ザ", hiragana: "ざ", userAnswer: null },
    { question: "ji đọc là gì?", choices: ["ジ", "チ", "ギ", "ビ"], answer: "ジ", hiragana: "じ", userAnswer: null },
    { question: "zu đọc là gì?", choices: ["ズ", "ツ", "ブ", "グ"], answer: "ズ", hiragana: "ず", userAnswer: null },
    { question: "ze đọc là gì?", choices: ["ゼ", "セ", "デ", "ベ"], answer: "ゼ", hiragana: "ぜ", userAnswer: null },
    { question: "zo đọc là gì?", choices: ["ゾ", "ソ", "ド", "ボ"], answer: "ゾ", hiragana: "ぞ", userAnswer: null },

    { question: "da đọc là gì?", choices: ["ダ", "ザ", "ガ", "バ"], answer: "ダ", hiragana: "だ", userAnswer: null },
    { question: "ji (ぢ) đọc là gì?", choices: ["ヂ", "ジ", "ギ", "ビ"], answer: "ヂ", hiragana: "ぢ", userAnswer: null },
    { question: "zu (づ) đọc là gì?", choices: ["ヅ", "ズ", "ブ", "グ"], answer: "ヅ", hiragana: "づ", userAnswer: null },
    { question: "de đọc là gì?", choices: ["デ", "ゼ", "ベ", "ゲ"], answer: "デ", hiragana: "で", userAnswer: null },
    { question: "do đọc là gì?", choices: ["ド", "ゾ", "ボ", "ゴ"], answer: "ド", hiragana: "ど", userAnswer: null },

    { question: "ba đọc là gì?", choices: ["バ", "パ", "ハ", "マ"], answer: "バ", hiragana: "ば", userAnswer: null },
    { question: "bi đọc là gì?", choices: ["ビ", "ピ", "ヒ", "ミ"], answer: "ビ", hiragana: "び", userAnswer: null },
    { question: "bu đọc là gì?", choices: ["ブ", "プ", "フ", "ム"], answer: "ブ", hiragana: "ぶ", userAnswer: null },
    { question: "be đọc là gì?", choices: ["ベ", "ペ", "ヘ", "メ"], answer: "ベ", hiragana: "べ", userAnswer: null },
    { question: "bo đọc là gì?", choices: ["ボ", "ポ", "ホ", "モ"], answer: "ボ", hiragana: "ぼ", userAnswer: null },

    { question: "pa đọc là gì?", choices: ["パ", "バ", "ハ", "マ"], answer: "パ", hiragana: "ぱ", userAnswer: null },
    { question: "pi đọc là gì?", choices: ["ピ", "ビ", "ヒ", "ミ"], answer: "ピ", hiragana: "ぴ", userAnswer: null },
    { question: "pu đọc là gì?", choices: ["プ", "ブ", "フ", "ム"], answer: "プ", hiragana: "ぷ", userAnswer: null },
    { question: "pe đọc là gì?", choices: ["ペ", "ベ", "ヘ", "メ"], answer: "ペ", hiragana: "ぺ", userAnswer: null },
    { question: "po đọc là gì?", choices: ["ポ", "ボ", "ホ", "モ"], answer: "ポ", hiragana: "ぽ", userAnswer: null },

    // Âm ghép
    { question: "kya đọc là gì?", choices: ["キャ", "キョ", "キュ", "カ"], answer: "キャ", hiragana: "きゃ", userAnswer: null },
    { question: "kyu đọc là gì?", choices: ["キュ", "キャ", "キョ", "ケ"], answer: "キュ", hiragana: "きゅ", userAnswer: null },
    { question: "kyo đọc là gì?", choices: ["キョ", "キュ", "キャ", "コ"], answer: "キョ", hiragana: "きょ", userAnswer: null },

    { question: "sha đọc là gì?", choices: ["シャ", "シュ", "ショ", "サ"], answer: "シャ", hiragana: "しゃ", userAnswer: null },
    { question: "shu đọc là gì?", choices: ["シュ", "ショ", "シャ", "ス"], answer: "シュ", hiragana: "しゅ", userAnswer: null },
    { question: "sho đọc là gì?", choices: ["ショ", "シャ", "シュ", "ソ"], answer: "ショ", hiragana: "しょ", userAnswer: null },

    { question: "cha đọc là gì?", choices: ["チャ", "チョ", "チュ", "ツ"], answer: "チャ", hiragana: "ちゃ", userAnswer: null },
    { question: "chu đọc là gì?", choices: ["チュ", "チャ", "チョ", "テ"], answer: "チュ", hiragana: "ちゅ", userAnswer: null },
    { question: "cho đọc là gì?", choices: ["チョ", "チャ", "チュ", "ト"], answer: "チョ", hiragana: "ちょ", userAnswer: null },

    { question: "nya đọc là gì?", choices: ["ニャ", "ニュ", "ニョ", "ネ"], answer: "ニャ", hiragana: "にゃ", userAnswer: null },
    { question: "nyu đọc là gì?", choices: ["ニュ", "ニャ", "ニョ", "ヌ"], answer: "ニュ", hiragana: "にゅ", userAnswer: null },
    { question: "nyo đọc là gì?", choices: ["ニョ", "ニュ", "ニャ", "ノ"], answer: "ニョ", hiragana: "にょ", userAnswer: null },

    { question: "hya đọc là gì?", choices: ["ヒャ", "ヒュ", "ヒョ", "ハ"], answer: "ヒャ", hiragana: "ひゃ", userAnswer: null },
    { question: "hyu đọc là gì?", choices: ["ヒュ", "ヒャ", "ヒョ", "ヒ"], answer: "ヒュ", hiragana: "ひゅ", userAnswer: null },
    { question: "hyo đọc là gì?", choices: ["ヒョ", "ヒュ", "ヒャ", "ホ"], answer: "ヒョ", hiragana: "ひょ", userAnswer: null },

    { question: "mya đọc là gì?", choices: ["ミャ", "ミュ", "ミョ", "マ"], answer: "ミャ", hiragana: "みゃ", userAnswer: null },
    { question: "myu đọc là gì?", choices: ["ミュ", "ミャ", "ミョ", "ム"], answer: "ミュ", hiragana: "みゅ", userAnswer: null },
    { question: "myo đọc là gì?", choices: ["ミョ", "ミュ", "ミャ", "モ"], answer: "ミョ", hiragana: "みょ", userAnswer: null },

    { question: "rya đọc là gì?", choices: ["リャ", "リュ", "リョ", "ラ"], answer: "リャ", hiragana: "りゃ", userAnswer: null },
    { question: "ryu đọc là gì?", choices: ["リュ", "リャ", "リョ", "ル"], answer: "リュ", hiragana: "りゅ", userAnswer: null },
    { question: "ryo đọc là gì?", choices: ["リョ", "リュ", "リャ", "ロ"], answer: "リョ", hiragana: "りょ", userAnswer: null },

    { question: "gya đọc là gì?", choices: ["ギャ", "ギュ", "ギョ", "ガ"], answer: "ギャ", hiragana: "ぎゃ", userAnswer: null },
    { question: "gyu đọc là gì?", choices: ["ギュ", "ギョ", "ギャ", "グ"], answer: "ギュ", hiragana: "ぎゅ", userAnswer: null },
    { question: "gyo đọc là gì?", choices: ["ギョ", "ギュ", "ギャ", "ゴ"], answer: "ギョ", hiragana: "ぎょ", userAnswer: null },

    { question: "bya đọc là gì?", choices: ["ビャ", "ビュ", "ビョ", "バ"], answer: "ビャ", hiragana: "びゃ", userAnswer: null },
    { question: "byu đọc là gì?", choices: ["ビュ", "ビョ", "ビャ", "ブ"], answer: "ビュ", hiragana: "びゅ", userAnswer: null },
    { question: "byo đọc là gì?", choices: ["ビョ", "ビュ", "ビャ", "ボ"], answer: "ビョ", hiragana: "びょ", userAnswer: null },

    { question: "pya đọc là gì?", choices: ["ピャ", "ピュ", "ピョ", "パ"], answer: "ピャ", hiragana: "ぴゃ", userAnswer: null },
    { question: "pyu đọc là gì?", choices: ["ピュ", "ピョ", "ピャ", "プ"], answer: "ピュ", hiragana: "ぴゅ", userAnswer: null },
    { question: "pyo đọc là gì?", choices: ["ピョ", "ピュ", "ピャ", "ポ"], answer: "ピョ", hiragana: "ぴょ", userAnswer: null },
];


// Hàm xáo trộn mảng theo thuật toán Fisher-Yates
function shuffleQuestions(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Gọi hàm này trước khi hiển thị câu hỏi
shuffleQuestions(questions);

let currentQuestion = 0;
let timer;
let timeRemaining = 7;
const feedback = document.getElementById("feedback");
const warning = document.getElementById("warning");

function loadQuestion() {
    document.querySelector(".quiz-container").style.opacity = 0;
    feedback.style.display = "none";
    setTimeout(() => {
        const question = questions[currentQuestion];
        document.getElementById("question").textContent = question.question;
        const choicesList = document.getElementById("choices");
        choicesList.innerHTML = '';

        // Tạo bản sao của mảng đáp án rồi xáo trộn
        let shuffledChoices = [...question.choices];
        shuffleQuestions(shuffledChoices);

        shuffledChoices.forEach(choice => {
            const li = document.createElement("li");
            li.textContent = choice;
            li.onclick = () => checkAnswer(choice, li);
            choicesList.appendChild(li);
        });

        timeRemaining = 5;
        document.getElementById("timer").textContent = timeRemaining;
        startTimer();

        document.getElementById("nextButton").style.display = "none";
        document.getElementById("submitButton").style.display = "none";
        warning.style.display = "none";

        document.querySelector(".quiz-container").style.opacity = 1;
    }, 300);
}

function startTimer() {
    timer = setInterval(() => {
        timeRemaining--;
        document.getElementById("timer").textContent = timeRemaining;

        if (timeRemaining <= 0) {
            clearInterval(timer);
            // Vô hiệu hóa tất cả các đáp án
            const choices = document.querySelectorAll("#choices li");
            choices.forEach(choice => {
                choice.onclick = null;
            });
            document.getElementById("nextButton").style.display = "inline-block";
            if (questions[currentQuestion].userAnswer === null) {
                warning.style.display = "block";
                return;
            }
        }
    }, 1000);
}

function checkAnswer(selected, liElement) {
    const question = questions[currentQuestion];
    const choices = document.querySelectorAll(".choices li");

    question.userAnswer = selected;
    choices.forEach(choice => {
        if (choice.textContent === question.answer) {
            choice.classList.add("correct");
        } else if (choice.textContent === selected) {
            choice.classList.add("incorrect");
        }
    });

    // choices.forEach(choice => {
    //     choice.onclick = null;
    // });

    clearInterval(timer);

    feedback.style.display = "block";
    feedback.innerHTML = `Phiên âm Hiragana: <strong>${question.hiragana}</strong>`;
    warning.style.display = "none";

    document.getElementById("nextButton").style.display = "inline-block";

    if (currentQuestion === questions.length - 1) {
        document.getElementById("nextButton").style.display = "none";
        document.getElementById("submitButton").style.display = "inline-block";
    }
}

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion();
    } else {
        document.getElementById("quizContainer").style.display = "none";
        document.getElementById("submitButton").style.display = "inline-block";
    }
}

function submitQuiz() {
    let correctAnswers = 0;
    let incorrectAnswers = 0;
    let unansweredQuestions = 0;

    questions.forEach(question => {
        if (question.userAnswer === question.answer) {
            correctAnswers++;
        } else if (question.userAnswer !== null) {
            incorrectAnswers++;
        } else {
            unansweredQuestions++;
        }
    });

    document.getElementById("totalQuestions").textContent = questions.length;
    document.getElementById("correctAnswers").textContent = correctAnswers;
    document.getElementById("incorrectAnswers").textContent = incorrectAnswers;
    document.getElementById("unansweredQuestions").textContent = unansweredQuestions;

    document.getElementById("nextButton").style.display = "none";
    document.getElementById("submitButton").style.display = "none";

    feedback.style.display = "none";
    document.getElementById("result").style.display = "block";
    document.getElementById("result").style.opacity = 1;
}

function restartQuiz() {
    questions.forEach(question => question.userAnswer = null);
    currentQuestion = 0;
    loadQuestion();
    document.getElementById("result").style.display = "none";
}

loadQuestion();
