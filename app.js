const projects = [
    {
        id: 1,
        category: "JavaScript",
        title: "Menu Project",
        img: "./images/menu-project.JPG",
        desc: "I used JavaScript to categorize menu into different categories and display them according to their categories",
        liveLink: "",
        sourceCode: "",
    },
    {
        id: 2,
        category: "JavaScript",
        title: "color fliper",
        img: "./images/color-fliper.jpg",
        desc: "I used JavaScript to categorize menu into different categories and display them according to their categories",
        liveLink: "",
        sourceCode: "",
    },
    {
        id: 3,
        category: "JavaScript",
        title: "Countdown Project",
        img: "./images/countdown.JPG",
        desc: "I used JavaScript to categorize menu into different categories and display them according to their categories",
        liveLink: "",
        sourceCode: "",
    },
    {
        id: 4,
        category: "JavaScript",
        title: "Counter Project",
        img: "./images/counter.JPG",
        desc: "I used JavaScript to categorize menu into different categories and display them according to their categories",
        liveLink: "",
        sourceCode: "",
    },
    {
        id: 5,
        category: "JavaScript",
        title: "FAQ Section",
        img: "./images/faq-section.JPG",
        desc: "I used JavaScript to categorize menu into different categories and display them according to their categories",
        liveLink: "",
        sourceCode: "",
    },
    {
        id: 6,
        category: "JavaScript",
        title: "Grocery Bud",
        img: "./images/grocery-bud.JPG",
        desc: "I used JavaScript to categorize menu into different categories and display them according to their categories",
        liveLink: "",
        sourceCode: "",
    },
    {
        id: 7,
        category: "JavaScript",
        title: "Lorem Ipsum Generator",
        img: "./images/lorem-ipsum.JPG",
        desc: "I used JavaScript to categorize menu into different categories and display them according to their categories",
        liveLink: "",
        sourceCode: "",
    },
    {
        id: 8,
        category: "JavaScript",
        title: "Model Box",
        img: "./images/model.JPG",
        desc: "I used JavaScript to categorize menu into different categories and display them according to their categories",
        liveLink: "",
        sourceCode: "",
    },
    {
        id: 9,
        category: "JavaScript",
        title: "Reviews Project",
        img: "./images/reviews.JPG",
        desc: "I used JavaScript to categorize menu into different categories and display them according to their categories",
        liveLink: "",
        sourceCode: "",
    },
    {
        id: 10,
        category: "JavaScript",
        title: "Scroll Project",
        img: "./images/scroll-project.JPG",
        desc: "I used JavaScript to categorize menu into different categories and display them according to their categories",
        liveLink: "",
        sourceCode: "",
    },
    {
        id: 11,
        category: "JavaScript",
        title: "Slider",
        img: "./images/slider.JPG",
        desc: "I used JavaScript to categorize menu into different categories and display them according to their categories",
        liveLink: "",
        sourceCode: "",
    },
    {
        id: 12,
        category: "Bootstrap",
        title: "Patrix Clone Websites",
        img: "./images/patrix-clone.JPG",
        desc: "I used JavaScript to categorize menu into different categories and display them according to their categories",
        liveLink: "",
        sourceCode: "",
    },
]
let menuBtn = document.querySelector(".menuBtn")
let closeBtn = document.querySelector("#closeBtn")
let menu = document.querySelector(".nav-list")
const container = document.querySelector('.container')
const btnContainer = document.querySelector('.btn-container');

menuBtn.onclick = function(){
    menu.classList.toggle('active')
    closeBtn.classList.add('active')
    menuBtn.classList.add('active')
}

closeBtn.onclick = function(){
    menu.classList.remove('active')
    closeBtn.classList.remove('active')
    menuBtn.classList.remove('active')
}

// Fixed header
const navBar = document.getElementById('nav')

window.addEventListener('scroll', function(){
    const scrollHeight = window.pageYOffset;
    const navHeight = navBar.getBoundingClientRect().height;
    if(scrollHeight > navHeight){
        navBar.classList.add('fixed')
    }else{
        navBar.classList.remove('fixed')
    }
})

// Portfolio Fliter projects

// Load items
window.addEventListener('DOMContentLoaded', function(){
    displayProjects(projects);
    displayMenuBtn();
  })


function displayProjects(projects){
    let displayProjects = projects.map(function(project){
        return  `<div class="project-con">
                    <img src=${project.img} alt=${project.title}>
                    <div class="link-con">
                        <a href=${project.liveLink} class="live-link"><h1>${project.title}</h1></a>
                        <p class="desc">${project.desc}<p>
                        <a href=${project.sourceCode} class="github-link"><h2>Click here for source code</h2></a>
                    </div>
                </div>`;
    })
    displayProjects = displayProjects.join('')
    container.innerHTML = displayProjects;
  
}

function displayMenuBtn(){
    const categories = projects.reduce(function(values,item){
        if(!values.includes(item.category)){
            values.push(item.category)
          }
          return values
    },['all']);

    const categoryBtn = categories.map(function(category){
        return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`
    }).join('')
    btnContainer.innerHTML = categoryBtn;
      const filterBtns = document.querySelectorAll('.filter-btn');

     // filter items
    filterBtns.forEach(function(btn){
        btn.addEventListener('click', function(e){
        const category = e.currentTarget.dataset.id;
        console.log(category);
        const menuCategory = projects.filter(function(menuItem){
            if(menuItem.category === category){
              return menuItem
            }
          })
        if(category === 'all'){
            displayProjects(projects)
        }
        else{
            displayProjects(menuCategory)
        }
        })
    })


}