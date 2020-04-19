document.addEventListener("DOMContentLoaded", function(){

  const toggleDarkMode = document.querySelector('.js-toggle-dark-mode')
  const cssFile = document.querySelector('[rel="stylesheet"]')
  const originalCssRef = cssFile.getAttribute('href')
  const darkModeCssRef = originalCssRef.replace('just-the-docs.css', 'dark-mode-preview.css')
  const lightModeCssRef = originalCssRef.replace('dark-mode-preview.css', 'just-the-docs.css')
  const buttonCopy = ['Light Side', 'Dark Mode']
  const updateButtonText = function(toggleDarkMode) {
    toggleDarkMode.textContent === buttonCopy[0] ?
      toggleDarkMode.textContent = buttonCopy[1] :
      toggleDarkMode.textContent = buttonCopy[0]
  }
  if (window.localStorage.getItem('cpwgio_theme')==='Dark'){
    toggleDarkMode.textContent = buttonCopy[0]
  }

  jtd.addEvent(toggleDarkMode, 'click', function(){
    if (window.localStorage.getItem('cpwgio_theme')==='Light'){
      cssFile.setAttribute('href', darkModeCssRef)
      window.localStorage.setItem('cpwgio_theme', 'Dark')
      updateButtonText(toggleDarkMode)
    } else {
      cssFile.setAttribute('href', lightModeCssRef)
      updateButtonText(toggleDarkMode)
      window.localStorage.setItem('cpwgio_theme', 'Light')
    }
  })
})
