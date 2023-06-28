var navLink = document.querySelectorAll('.nav-link');
var homePage = document.getElementById('home');
var aboutPage = document.getElementById('about');
var portfolioPage = document.getElementById('portfolio');
var skillsPage = document.getElementById('skills');
var contactPage = document.getElementById('contact');

const scrollNavbar = () => {
    if (document.documentElement.scrollTop > 0){
        document.querySelector(".navbar").classList.add("navbarscroll");
    }else{
        document.querySelector(".navbar").classList.remove("navbarscroll");
    }

    if (document.documentElement.scrollTop < homePage.offsetHeight - 100){
        navLink[0].classList.add("active");
    }else{
        navLink[0].classList.remove("active");
    }

    if (document.documentElement.scrollTop < aboutPage.offsetHeight + aboutPage.offsetTop - 100 && document.documentElement.scrollTop > aboutPage.offsetTop - 100){
        navLink[1].classList.add("active");
    }else{
        navLink[1].classList.remove("active");
    }

    if (document.documentElement.scrollTop < portfolioPage.offsetHeight + portfolioPage.offsetTop - 100 && document.documentElement.scrollTop > portfolioPage.offsetTop - 100){
        navLink[2].classList.add("active");
    }else{
        navLink[2].classList.remove("active");
    }

    if (document.documentElement.scrollTop < skillsPage.offsetHeight + skillsPage.offsetTop - 100 && document.documentElement.scrollTop > skillsPage.offsetTop - 100){
        navLink[3].classList.add("active");
    }else{
        navLink[3].classList.remove("active");
    }

    if (document.documentElement.scrollTop < contactPage.offsetHeight + contactPage.offsetTop - 100 && document.documentElement.scrollTop > contactPage.offsetTop - 100){
        navLink[4].classList.add("active");
    }else{
        navLink[4].classList.remove("active");
    }
}

const btnEmail = () => {
    let judulEmail = document.getElementById('judulemail');
    let pesanEmail = document.getElementById('pesanemail');
    const invalid = document.querySelectorAll('#invalid');
    if(!judulEmail.value == "" || !pesanEmail.value == ""){
        location.href = `mailto:andhikamardyanto34@gmail.com?subject=${judulEmail.value}&body=${pesanEmail.value}`;
        judulEmail.classList.remove('border-danger');
        pesanEmail.classList.remove('border-danger');
        invalid[0].innerHTML = "";
        invalid[1].innerHTML = "";
    }else{
        judulEmail.classList.add('border-danger');
        pesanEmail.classList.add('border-danger');
        invalid[0].innerHTML = "Your title is still empty";
        invalid[1].innerHTML = "Your message is still empty";
    }
}

window.onscroll = function() {scrollNavbar()};
window.onload = () => {scrollNavbar()};

function day() {
    const days = ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'];
    let dateDay = new Date().getDay();
    return days[dateDay];
}

function month() {
    const months = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];
    let dateMonth = new Date().getMonth();
    return months[dateMonth];
}





