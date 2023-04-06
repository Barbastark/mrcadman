function throttle(fn, wait) {
        
  let time = Date.now()
  
  return (...args) => {
      if ((time + wait - Date.now()) < 0) {
          fn(...args)
          time = Date.now()
      }
  }
}

function parallax(el, speed) { 
  
    const pageTop = window.scrollY || 0
    const yPos = 0 - (pageTop * speed)
    
    el.style.transform = `translate(0, ${yPos}px)`
}

const siteHeader = document.querySelector("#home")
const siteHeaderContent = document.querySelector("#intro")

window.addEventListener("scroll", (e) => {
  parallax(siteHeader, -0.5)
  parallax(siteHeaderContent, 0.2)
})

