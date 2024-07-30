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
    
    btn.addEventListener('keyup', (e) => {
        if(e.code == 'Enter') {
            console.log(e.target)
            buttons.forEach(btn => {
                btn.classList.remove('active')
                btn.nextElementSibling.classList.add('hide')
            })
            e.target.classList.toggle('active')
            btn.nextElementSibling.classList.toggle('hide')
            

            // try set status of target
            // then loop thru all btns and deactivate
        }
    })
});