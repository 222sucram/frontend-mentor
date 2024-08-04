buttons = [...document.querySelectorAll('.btn-container')];
titles = [...document.querySelectorAll('.item-title')]
information = [...document.querySelectorAll('.card-info')]

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
            buttons.forEach(btn => {
                if(btn !== e.target) {
                    btn.classList.remove('active')
                    btn.nextElementSibling.classList.add('hide')
                }
            })
            e.target.classList.toggle('active')
            btn.nextElementSibling.classList.toggle('hide')
        }
    })
});

titles.forEach(title => {
    title.addEventListener('click', (e) => {
        button = e.target.nextElementSibling
        text = button.nextElementSibling

        buttons.forEach(btn => {
            btn.classList.remove('active')
        })
        information.forEach(txt => {
            txt.classList.add('hide')
        })
        button.classList.add('active')
        text.classList.remove('hide')
        
    })
})


// To do

// make desisng responsive to different screen sizes

// deploy on github pages