const projects = [
    {
        id: 1,
        category: "JavaScript",
        title: "Menu Project",
        img: "./images/menu-project.JPG",
        liveLink: "",
    },
    {
        id: 2,
        category: "JavaScript",
        title: "color fliper",
        img: "./images/color-fliper.jpg",
        liveLink: "",
    },
    {
        id: 3,
        category: "JavaScript",
        title: "Countdown Project",
        img: "./images/countdown.JPG",
        liveLink: "",
    },
    {
        id: 4,
        category: "JavaScript",
        title: "Counter Project",
        img: "./images/counter.JPG",
        liveLink: "",
    },
    {
        id: 5,
        category: "JavaScript",
        title: "FAQ Section",
        img: "./images/faq-section.JPG",
        liveLink: "",
    },
    {
        id: 6,
        category: "JavaScript",
        title: "Grocery Bud",
        img: "./images/grocery-bud.JPG",
        liveLink: "",
    },
    {
        id: 7,
        category: "JavaScript",
        title: "Lorem Ipsum Generator",
        img: "./images/lorem-ipsum.JPG",
        liveLink: "",
    },
    {
        id: 8,
        category: "JavaScript",
        title: "Model Box",
        img: "./images/model.JPG",
        liveLink: "",
    },
    {
        id: 9,
        category: "JavaScript",
        title: "Reviews Project",
        img: "./images/reviews.JPG",
        liveLink: "",
    },
    {
        id: 10,
        category: "JavaScript",
        title: "Scroll Project",
        img: "./images/scroll-project.JPG",
        liveLink: "",
    },
    {
        id: 11,
        category: "JavaScript",
        title: "Slider",
        img: "./images/slider.JPG",
        liveLink: "",
    },
    {
        id: 12,
        category: "Bootstrap",
        title: "Patrix Clone Websites",
        img: "./images/patrix-clone.JPG",
        liveLink: "",
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

    // back to top
    const backToTopButton = document.getElementById("back-to-top-btn");

    if (window.pageYOffset > 100) {
        // Show the button
        backToTopButton.style.display = "flex";
      } else {
        // Hide the button
        backToTopButton.style.display = "none";
    }
    
    backToTopButton.addEventListener("click", () => {
        // Scroll to the top of the page
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
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
                        <i class="fa-solid fa-arrow-right"></i>
                    </div>
                </div>`;
    })
    displayProjects = displayProjects.join('')
    container.innerHTML = displayProjects;

        // Hide project when more than 6
    const projectCon = document.querySelectorAll('.project-con')

    for (let i = 0; i < projectCon.length; i++) {
        if (i >= 6) {
            projectCon[i].classList.add('hide-project');

            const moreBtn = document.querySelector('.more-btn')
            const hideBtn = document.querySelector('.hide-btn')

            moreBtn.addEventListener('click', function(){
                projectCon[i].classList.remove('hide-project');
                hideBtn.classList.remove('hide-project');
                moreBtn.classList.add('hide-project');
            })

            hideBtn.addEventListener('click', function(){
                projectCon[i].classList.add('hide-project');
                hideBtn.classList.add('hide-project');
                moreBtn.classList.remove('hide-project');
            })
        }
      }
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

{/* Contact Form */}

const contactForm = document.getElementById('contact-form'),
      firstName = document.getElementById('firstName'),
      lastName = document.getElementById('lastName'),
      contactEmail = document.getElementById('email'),
      projectName = document.getElementById('project-name'),
      alart = document.getElementById('alart'),
      projectDesc = document.getElementById('project-desc');

const sendEmail = (e) => {
    e.preventDefault()

    // Check if the field has a value
    if(firstName.value === '' || lastName.value === '' || contactEmail.value === '' || projectName.value === '' || projectDesc.value === ''){
        // Add or remove color
        alart.classList.remove('color-green')
        alart.classList.add('color-red')
        // show message
        alart.textContent = 'Write all the input field'
    }
    else{
        // serviceID - templateID - #form - publicKey
        emailjs.sendForm('service_egl1w0r', 'template_xmh6y7g', '#contact-form', '05m8FYB7ZhMJXpB1h')
            .then(() =>{
                // Show message and color
                alart.classList.remove('color-red')
                alart.classList.add('color-green')

                 // show message
                alart.textContent = 'Message Sent'

                // Remove message after 5 second
                setTimeout(() =>{
                    alart.textContent = ''
                }, 5000)
               
            }, (error) =>{
                alert(`OOPS SOMETHING FAILED....`, error)
            })

            // Clear Input field
            firstName.value = ''
            lastName.value = ''
            contactEmail.value = ''
            projectName.value = ''
            projectDesc.value = ''
    }

}
contactForm.addEventListener('submit', sendEmail);