buttons = [...document.querySelectorAll('.btn-container')];

buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        buttons.forEach(btn => {
            if(btn != e.target) {
                btn.classList.remove('active')
                btn.nextElementSibling.classList.add('hide')
            }
        })
        e.target.classList.toggle('active')
        e.target.nextElementSibling.classList.toggle('hide')
    })
});