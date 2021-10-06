
// Cuando se haga click en el avatar del modal, se abre un file dialog para cambiar el avatar
const accountModalAvatar = document.querySelector('.accountModalAvatar')
const changeAvatarBtn = document.querySelector('#changeAvatar')

accountModalAvatar.addEventListener('click', function () {
    changeAvatarBtn.click()
})



// Cuando se haga click en el boton 'Editar' del modal, se activan los inputs que estaban desactivados
const editUserBtn = document.querySelector('#editUserBtn')

// crea un array con todos los elementos que tengan la clase 'accountModalInput'
const refs = [...document.querySelectorAll('.accountModalInput')];

// cuando se hace click en el boton 'Editar' ...
editUserBtn.addEventListener('click', function () {
    // ... Ejecuto esto
    console.log(refs)
    refs.forEach(input => {
        input.removeAttribute('disabled')
    })
    accountModalAvatar.scrollIntoView()
    refs[0].focus()
})