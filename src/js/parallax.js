import LocomotiveScroll from 'locomotive-scroll'

setTimeout(() => {
  const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    smartphone: { smooth: true },
    tablet: { smooth: true }
  })
}, 500)
