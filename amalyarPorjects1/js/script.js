// Arrray of Objects
let info = [
    {
        id: 1,
        name: "Abdulhadi Safi",
        job: "Web Developer",
        text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci numquam impedit debitis, laudantium illo quas sed quos omnis, enim deleniti quia doloremque dignissimos eos quaerat libero! Alias a nihil  deleniti ",
        img: 'img/pic1.jpg'
    },

    {

        id: 2,
        name: "mujjeburahman",
        job: "Sofware Enginner",
        text: " Lorem ipsum  sit amet consectetur adipisicing elit. Adipisci numquam impedit debitis, laudantium illo quas sed quos omnis, enim deleniti quia doloremque dignissimos eos quaerat libero! Alias a nihil  deleniti ",
        img: 'img/pic2.jpg'
    },

    {

        id: 3,
        name: "Khan Ahmad",
        job: "IT Network",
        text: " Lorem ipsum dolor  amet consectetur adipisicing elit. Adipisci numquam impedit debitis, laudantium illo quas sed quos omnis, enim deleniti quia doloremque dignissimos eos quaerat libero! Alias a nihil  deleniti ",
        img: 'img/pic3.jpg'
    },

    {

        id: 4,
        name: "javad Safi",
        job: " programmer",
        text: " Lorem  dolor sit amet consectetur adipisicing elit. Adipisci numquam impedit debitis, laudantium illo quas sed quos omnis, enim deleniti quia doloremque dignissimos eos quaerat libero! Alias a nihil  deleniti ",
        img: 'img/pic4.jpg'
    }
];

// console.log(info[0].job)

// Target
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let personName = document.querySelector('.name');
let job = document.querySelector('.job');
let text = document.querySelector('.text');
let img = document.querySelector('.img');


// Person Num

let personNum = 0;
window.addEventListener("load", function(){
    showInfo(personNum);
});

next.addEventListener("click", function(){
    personNum++;
    if(personNum >= info.length) {
        personNum = 0;
    }
    showInfo(personNum);
});

prev.addEventListener("click", function(){
    personNum--;
    if(personNum < 0) {
        personNum = info.length - 1;
    }
    showInfo(personNum);
});

// setInterval(function(){
//     personNum++;
//     if(personNum >= info.length) {
//         personNum = 0;
//     }
//     showInfo(personNum);
// },2000);




//Function
function showInfo(person){
personName.innerText = info[person].name;
job.innerText= info[person].job;
text.innerText = info[person].text;
img.src = info[person].img;

}