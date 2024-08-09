const showMenu = (toogleID, navId) =>{
    const toggle = document.getElementById(toogleID), nav = document.getElementById(navId)
    if (toggle && nav) {
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}

showMenu('navToggle','navMenu')

const navLink = document.querySelectorAll('.navLink')
function linkAction(){
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')
    
    
    const navMenu = document.getElementById('navMenu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))


const button = document.getElementById('recButton');
button.addEventListener('click', function(){
    const myInput = document.querySelectorAll('.recInput');
    alert("Pesan Rekomendasi Telah Dikirimkan!")
    

    const recommendationSection = document.getElementById('recContainer');
    const newRecommendationDiv = document.createElement('div');
    newRecommendationDiv.classList.add('recData');
    const newRecommendationTextDiv = document.createElement('div');
    newRecommendationTextDiv.classList.add('recText');
    const newRecommendationTextSpan = document.createElement('span');
    newRecommendationTextSpan.classList.add('recText');
    
    const textareaInput = document.getElementById('textarea').value;
    console.log(textareaInput)
    newRecommendationTextSpan.textContent = textareaInput;

    newRecommendationTextDiv.appendChild(newRecommendationTextSpan);
    newRecommendationDiv.appendChild(newRecommendationTextDiv);
    recommendationSection.appendChild(newRecommendationDiv);

    myInput.forEach(function(input) {
        input.value = "";
    });
})

const sections = document.querySelectorAll('section[id]')
const scrollActive = () =>{
    const scrollDown = window.scrollY
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
                sectionTop = current.offsetTop - 58,
                sectionId = current.getAttribute('id'),
                sectionsClass = document.querySelector('.navMenu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active')
        }else{
            sectionsClass.classList.remove('active')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)
