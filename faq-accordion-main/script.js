const [...buttons] = document.querySelectorAll('.btn')
const [...itemInfo] = document.querySelectorAll('.card-info')


// loop thru arr

buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        buttons.forEach(btn => {
            btn.src = 'assets/images/icon-plus.svg'
        })
        e.target.src = 'assets/images/icon-minus.svg'
        console.log(e.target.previousElementSibling)
    })
})

// attach event listen toggle class add/remove

// on toggle set all items to hide

// then set the clicked item to not hide

// 

