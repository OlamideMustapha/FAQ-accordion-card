const accordions = document.querySelectorAll (".accordion__item")
const accordionContent = document.querySelector (".accordion__item-text")


Array.from (accordions).forEach (accordion => {
  accordion.addEventListener ("click", (_) => {
    const element  = accordion,
          isActive = element.classList.contains ("activate");
  
    if (isActive) {
      element.classList.remove ("activate")
      element.classList.add ("deactivate")
    } 
    else {
      element.classList.remove ("deactivate")
      element.classList.add ("activate")
    }
  }, false)

})