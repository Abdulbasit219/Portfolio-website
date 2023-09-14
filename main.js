//for Navbar
const mobile_navbar = document.querySelector('.icon');
const navbar = document.querySelector('.nav-items');
const toggle = () => {
    navbar.classList.toggle('active');
    mobile_navbar.classList.toggle('active');
}
mobile_navbar.addEventListener('click', () => toggle())


// for Download Resume
const DownloadResume = () => {
    const filePath = 'Abdul Basit resume.pdf';
    const a = document.createElement('a');
    a.href = filePath;
    a.download = 'resume.pdf';
    a.click();
}

