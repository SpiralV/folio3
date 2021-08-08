const folioItems = document.querySelectorAll('.folioitem')
folioItems.forEach(folitem => {
    folitem.addEventListener('mouseover', () => {
        folitem.childNodes[1].classList.add('.img-darken')
    })
    folitem.addEventListener('mouseout', () => {
        folitem.childNodes[1].classList.remove('.img-darken')
    })
})