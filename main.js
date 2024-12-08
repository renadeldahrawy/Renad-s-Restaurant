function changeNavBarColor() {
    const navBar = document.querySelector('nav');
    const navlist = document.querySelector('li');
    if (navBar.style.backgroundColor === 'black') {
        navBar.style.backgroundColor = 'gray';
        navlist.style.color='black';
        
    }
    else{
        navBar.style.backgroundColor = 'black';
    }
}

function displayAlert() {
    Swal.fire({
        title: "Do you want to contact us?",
        text: "+200123456",
        icon: "question"
      });
}



