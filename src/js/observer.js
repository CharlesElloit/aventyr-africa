const header = document.querySelector("header")
const sectionOne = document.querySelector(".banner")

const sectionOneOptions = {
  rootMargin: "-200px 0px 0px 0px"
}

const sectionOneObserver = new IntersectionObserver(function(
  entries,
  sectionOneObserver
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      header.classList.add(".header-onScroll")
    } else {
      header.classList.remove(".header-onScroll")
    }
  })
},
sectionOneOptions)

sectionOneObserver.observe(sectionOne)
