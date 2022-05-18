// local reviews data
const reviews = [
  {
    id: 1,
    name: "Chestnut",
    hobby: "Hobby: Eating wallets",
    img:
      "./chestnut.jpg",
    text:
    "Bully sticks are my favorite treats. I have had many treats, but this was kind of different. When you bite into it, it crunches different. I could enjoy these all day.LOVE IT!",
  },
  {
    id: 2,
    name: "Steel",
    hobby: "Hobby: Being cute",
    img:
      "./xiaogougou.jpg",
    text:
      "They were different, had similar flavor to other dog cookies I have tried, but the texture was unique. They were crispy, wafery.",
  },
  {
    id: 3,
    name: "Archie",
    hobby: "Hobby: Playing with yarn",
    img:
      "./mengde.jpg",
    text:
      "Who doesn't love canned chicken (for cats ofc). I simply enjoyed it by itself. Good as a midnight snack. I wanted to eat more and more of it.",
  },

];


const img = document.getElementById('first-dog');
const author = document.getElementById('author');
const hobby = document.getElementById('hobby');
const info = document.getElementById('info');

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");


let currentItem = 0;

window.addEventListener('DOMContentLoaded', function(){
  showCutie();
})

function showCutie(){
  const item =reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  hobby.textContent = item.hobby;
  info.textContent = item.text;

}

nextBtn.addEventListener('click', function(){
  currentItem++;
  if(currentItem > reviews.length - 1){
    currentItem = 0;
  }
  showCutie();
});

prevBtn.addEventListener('click', function(){
  currentItem--;
  if(currentItem < 0){
    currentItem = reviews.length - 1;
  }
  showCutie();

});


randomBtn.addEventListener('click', function(){
  currentItem = Math.floor(Math.random() * reviews.length);
  showCutie();
});

