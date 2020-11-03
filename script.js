function onLoad() {
  const btn = document.querySelector('#navbutton')
  const nav = document.querySelector('.navigation')

  btn.addEventListener('click', function() {
    if( nav.classList.contains('open') ) {
      nav.classList.remove('open')
    }
    else {
      nav.classList.add('open')
    }
  } )
}

window.addEventListener( 'load' , onLoad )