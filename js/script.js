
document.addEventListener('DOMContentLoaded',function(){
    interSectionFunc('welcomeSection');
}
);

function interSectionFunc(section){
    const Section = document.getElementById(section);

    const Observer = new IntersectionObserver(function(entries){
        entries.forEach(view =>{
            if(view.isIntersecting){
                Section.style.opacity = 1;
            }else{
                Section.style.opacity = 0;
            }
        })
    },{
        root : null,
        rootMargin : '0px',
        threshold: 0.3
    });
    Observer.observe(Section);
}
// admin navbar
 // Menu Toggle Script
 document.getElementById("menu-toggle").addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById("sidebar-wrapper").classList.toggle("toggled");
  });


// end of about observer logic

function applyActive(){
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
}
function showSection(section){
        // Array of all section IDs
        const sections = ['dashboard','certificate','info','adminDashboard','users','settings','profile'];
    
    // Hide all sections
    sections.forEach(sec => {
        const element = document.getElementById(sec);
        if (element) {
            element.style.display = 'none';
        } else {
            console.error(`Element with id ${sec} not found.`);
        }
    });
    
    // Show the selected section
    const selectedSection = document.getElementById(section);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    } else {
        console.error(`Element with id ${section} not found.`);
    }
}

function setActive(element){
    const nav_link = document.querySelectorAll('.nav-link');
    nav_link.forEach(nav => {
        nav.classList.remove('active')
    })
   element.classList.add('active');
}

// user dummy datas
function fetchUserData() {
    return {
      firstName: 'John',
      lastName: 'Doe',
      localGov: 'Some LGA',
      village: 'Some Village',
      email: 'john.doe@example.com',
      gender: 'Male',
      avatar: 'assets/images/fish.jpg'
    };
  }

  function displayUserInfo() {
    const userData = fetchUserData();

    document.getElementById('info-firstName').textContent = userData.firstName;
    document.getElementById('info-lastName').textContent = userData.lastName;
    document.getElementById('info-localGov').textContent = userData.localGov;
    document.getElementById('info-village').textContent = userData.village;
    document.getElementById('info-email').textContent = userData.email;
    document.getElementById('info-gender').textContent = userData.gender;
    document.getElementById('info-avatar').src = userData.avatar;

    showSection('info');
  }