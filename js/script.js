document.addEventListener('DOMContentLoaded', function(){
    const welcomeSection = document.getElementById('welcomeSection');

    const Observer = new IntersectionObserver(function(section){
        section.forEach(view =>{
            if(view.isIntersecting){
                welcomeSection.style.opacity = 1;
            }else{
                welcomeSection.style.opacity = 0;
            }
        })
    },{
        root : null,
        rootMargin : '0px',
        threshold: 0.3
    })
    Observer.observe(welcomeSection);
})
// end of about observer logic

function showSection(section) {
    ['dashboard','certificate','info'].forEach(sec => {
        document.getElementById(sec).style.display = 'none';
    });
    
    document.getElementById(section).style.display = 'block';
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