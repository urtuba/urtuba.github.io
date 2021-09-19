const dropdown = document.getElementById('dropdown-menu')

const showDropdownMenu = () => {
    if (dropdown.style.display == 'block') {
        dropdown.style.display = 'none'
        return
    }
    dropdown.style.display = 'block'

    window.onresize = () => {
        if (innerWidth > 700) {
            dropdown.style.display = 'none'
        }
    }
}