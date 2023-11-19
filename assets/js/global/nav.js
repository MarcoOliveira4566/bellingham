(function (){

    // Variables
  
    const body = document.querySelector('body')
    const nav = document.querySelector('nav')
    const abrirMenuMobile = nav.querySelector('button[name="abrirMenu"]')
    const menuMobile = nav.querySelector('div[name="menu"]')
  
    // ADICIONAR CLASSE AO SCROLLAR
  
    function adicionarClasse () {
      window.addEventListener('scroll', () => {
        const alturaPagina = window.scrollY
        if (alturaPagina < 10) nav.classList.remove('scroll')
        else nav.classList.add('scroll')
      })
    }
  
    // ABRIR MENU
    function abrirFecharMenuMobile () {
      abrirMenuMobile.addEventListener('click', () => {
        if (body.classList.contains('bloqueado')) body.classList.remove('bloqueado')
        else body.classList.add('bloqueado')
        if (abrirMenuMobile.classList.contains('ativo')) abrirMenuMobile.classList.remove('ativo')
        else abrirMenuMobile.classList.add('ativo')
        if (menuMobile.classList.contains('mostrar')) menuMobile.classList.remove('mostrar')
        else menuMobile.classList.add('mostrar')
      })
    }
  
    // Start
    adicionarClasse()
    abrirFecharMenuMobile()
  
  }())
  
  