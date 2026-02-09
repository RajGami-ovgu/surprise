// Personalize
const HER_NAME = "Ankita"; // <-- change this
document.getElementById("herName").textContent = HER_NAME;
document.getElementById("herName2").textContent = HER_NAME;

// Navigation
const screens = [...document.querySelectorAll(".screen")];
const navBtns = [...document.querySelectorAll(".navBtn")];
const go = (name) => {
  screens.forEach(s => s.classList.toggle("active", s.dataset.screen === name));
  navBtns.forEach(b => b.classList.toggle("active", b.dataset.nav === name));
};
document.querySelectorAll("[data-go]").forEach(btn=>{
  btn.addEventListener("click", ()=> go(btn.dataset.go));
});
document.querySelectorAll("[data-back]").forEach(btn=>{
  btn.addEventListener("click", ()=> go("home"));
});
navBtns.forEach(b => b.addEventListener("click", ()=> go(b.dataset.nav)));

// Compliment machine
const complimentEl = document.getElementById("compliment");
const sparkBtn = document.getElementById("sparkBtn");

const compliments = [
  "You make ordinary days feel like something special.",
  "I’m so horny thinking about seeing you later.",
  "तुझी मिठी म्हणजे माझं safe place आहे.",
  "You’re sweeter than chocolate and more addictive than cheesecake.",
  "હું તને બહુ પ્રેમ કરું છું.",
  "I'd love kissing down your body.",
  "You’re my favorite Instagram algorithm accident.",
  "Your kisses should honestly be illegal. Too addictive.",
  "I love waking up and seeing you next to me.",
  "I want to make you stay naked all day for me to use whenever I want.",
  "तुझ्यावर खूप प्रेम करतो.",
  "તું મારી addiction છે.",
  "Every night sleeping next to you feels unreal.",
  "I love the...sounds...you make when I lick it.",
  "You’re my person. Always.",
  "તારી સાથે હોવું એ જ મારી happiness છે.",
  "I love how perfectly you fit into my arms.",
  "तुझी kiss म्हणजे माझी weakness आहे.",
  "Out of millions of profiles, I somehow found the one that owns my heart.",
  "I’m going to drain every last drop of cum out of you later.",
  "You make even boring grocery shopping feel like a date.",
  "तुझ्यासोबत असताना सगळं perfect वाटतं.",
  "Your kisses are my favorite therapy.",
  "तू माझं सगळं काही आहेस ❤️",
  "તારી સાથે જીવન perfect લાગે છે."

];


function popConfetti(count=16){
  for(let i=0;i<count;i++){
    const el = document.createElement("div");
    el.textContent = Math.random() < 0.7 ? "❤" : "✨";
    el.style.position = "fixed";
    el.style.left = (Math.random()*100) + "vw";
    el.style.top = "82vh";
    el.style.fontSize = (16 + Math.random()*26) + "px";
    el.style.opacity = "1";
    el.style.zIndex = "9999";
    el.style.transition = "transform 1.25s ease, opacity 1.25s ease";
    document.body.appendChild(el);

    requestAnimationFrame(() => {
      el.style.transform = `translateY(-${260 + Math.random()*380}px) rotate(${Math.random()*220-110}deg)`;
      el.style.opacity = "0";
    });

    setTimeout(()=>el.remove(), 1300);
  }
}

let complimentIndex = 0;
let typing = false;

function typeText(element, text, speed = 15) {
  element.textContent = "";
  let i = 0;
  typing = true;

  const interval = setInterval(() => {
    element.textContent += text.charAt(i);
    i++;

    if (i >= text.length) {
      clearInterval(interval);
      typing = false;
    }
  }, speed);
}

document.getElementById("genBtn").addEventListener("click", () => {
  if (typing) return; // prevent spam clicking during typing

  const text = compliments[complimentIndex];
  typeText(complimentEl, text);
  popConfetti(20);

  complimentIndex = (complimentIndex + 1) % compliments.length;

});


sparkBtn.addEventListener("click", ()=> popConfetti(26));

// Quiz
const qNum = document.getElementById("qNum");
const qEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const quizNote = document.getElementById("quizNote");

const quiz = [
  {
    q: "What is my favorite hobby?",
    a: ["Missing you", "Sucking you", "Licking you", "All of the above"],
    correct: 3,
    win: "Correct. You know me too well. 😳"
  },
  {
    q: "What should we do for our date?",
    a: ["Netflix & Chill", "Cute walk + coffee", "Dinner + dessert", "YES."],
    correct: 3,
    win: "Perfect. The answer is: yes. ✅"
  },
  {
    q: "How much do I love you?",
    a: ["A lot", "More than a lot", "Infinity", "Infinity + 1"],
    correct: 3,
    win: "Infinity + 1 is scientifically accurate. 🧪"
  }
];

let qi = 0;

function renderQuiz(){
  qNum.textContent = String(qi+1);
  qEl.textContent = quiz[qi].q;
  answersEl.innerHTML = "";
  quizNote.textContent = "";
  quiz[qi].a.forEach((txt, idx)=>{
    const b = document.createElement("button");
    b.className = "answerBtn";
    b.textContent = txt;
    b.addEventListener("click", ()=>{
      if(idx === quiz[qi].correct){
        quizNote.textContent = quiz[qi].win;
        popConfetti(18);
        setTimeout(()=>{
          qi = Math.min(qi+1, quiz.length-1);
          if(qi === quiz.length-1){
            // last question stays
          }
          renderQuiz();
        }, 900);
      }else{
        quizNote.textContent = "Wrong. Try again (no pressure). 🙂";
      }
    });
    answersEl.appendChild(b);
  });
}
renderQuiz();

// Proposal (shy No button)
const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const answerLine = document.getElementById("answerLine");

noBtn.style.transition = "transform 0.12s ease-out";

noBtn.addEventListener("mousemove", () => {
  const x = Math.floor(Math.random() * 360) - 180; // wider jump
  const y = Math.floor(Math.random() * 240) - 120; // higher jump
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

noBtn.addEventListener("click", (e) => {
  e.preventDefault();
});


yesBtn.addEventListener("click", ()=>{
  answerLine.textContent = "YAY 💖 GOOD GIRL.";
  popConfetti(30);
});

// Postcard screen personalization
document.getElementById("herName3").textContent = HER_NAME;
document.querySelectorAll(".accentName").forEach(el => el.textContent = HER_NAME);

// Postcard open/close logic
const postcard = document.getElementById("postcard");
const openCardBtn = document.getElementById("openCardBtn");
const resetCardBtn = document.getElementById("resetCardBtn");

function openPostcard(){
  postcard.classList.add("open");
  postcard.classList.remove("pop");
  popConfetti(18);
  setTimeout(()=>postcard.classList.add("pop"), 220);
}
function resetPostcard(){
  postcard.classList.remove("open","pop");
}

postcard?.addEventListener("click", openPostcard);
openCardBtn?.addEventListener("click", openPostcard);
resetCardBtn?.addEventListener("click", resetPostcard);

// Love meter
const loveRange = document.getElementById("loveRange");
const loveMsg = document.getElementById("loveMsg");

function loveLine(v){
  if(v < 20) return "That’s illegal. Slide right. 😐";
  if(v < 50) return "Hmm… suspicious. 😒";
  if(v < 80) return "Acceptable. But I expected more. 😌";
  if(v < 99) return "Now we’re talking. 💖";
  return "100%! Congratulations, you unlocked: infinite hugs. 🧸";
}

loveRange?.addEventListener("input", (e)=>{
  const v = Number(e.target.value);
  loveMsg.textContent = `${v}% — ${loveLine(v)}`;
  if(v === 100) popConfetti(26);
});

