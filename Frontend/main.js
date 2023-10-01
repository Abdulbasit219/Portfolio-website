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


const FirstName = document.querySelector('.first-name');
const LastName = document.querySelector('.last-name');
const Email = document.querySelector('.emails');
const Message = document.querySelector('.messages');

document.getElementById('submit-btn').addEventListener('click', async () => {

    if( FirstName.value == '' || LastName.value == '' || Email.value == '' || Message.value == '' ){
        alert("All fields are required")
    }
    const data = {
                F_name: FirstName.value,
                L_name: LastName.value,
                Email: Email.value,
                Message: Message.value
                }

    try{
        const res = await fetch('https://portfolio-website-api.vercel.app/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const result = await res.json();
        console.log(result);
    }catch(e){
        console.log(e);
    }
})
