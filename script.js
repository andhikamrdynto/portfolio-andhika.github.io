window.onscroll = function () {navbarScroll()};
window.onload =function () {navbarScroll()};

function navbarScroll() {
    var navbar = document.querySelector('.navbar');
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        navbar.classList.add('navbarscroll');
    } else {
        navbar.classList.remove('navbarscroll');
    }
}

function sendWa() {
    location.href = "whatsapp://send?text=Hello, Andhika&phone=+6287865334910";
}

function sendEmail() {
    var judulInput = document.getElementById("judul");
    var pesanInput = document.getElementById("pesan");
    if (judulInput.value !== "" || pesanInput.value !== "") {
        location.href = `mailto:andhikamardyanto47@gmail.com?subject=${judulInput.value}&body=${pesanInput.value}`
    } else {
        document.getElementById("alert").innerHTML = '<div class="alert alert-light alert-dismissible fade show" role="alert">'+
        'Isi form dibawah ini!'+
        '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>'+
        '</div>';
    }
}