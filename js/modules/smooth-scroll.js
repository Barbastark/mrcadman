// 
// 
// function useSmoothScroll(useHash = false) {
// 
//   const linkRef = null
//   const targetRef = null
// 
//   function smoothScroll(el, scrollBy = 20) {
//           
//     let scrollTop = window.scrollY        
//     let scrollTo = el.getBoundingClientRect().top - ( -scrollTop )
//             
//     function scroll() {
//         
//       scrollTop += scrollBy
//       window.scrollTo(0, scrollTop) 
//                   
//       if (scrollTop >= scrollTo) {
//           clearInterval(intervalId)
//       }
//     }
//       
//     const intervalId = setInterval(scroll, 1)
//   }
// 
//   function init(e) {
//       
//     const hash = link.hash 
//     
//     if (hash) {
//         
//         e.preventDefault();
//         smoothScroll(targetRef.current)
//         
//         if(useHash) {
//             window.location.hash = hash;
//         }
//     }
//   }
// 
//   return [ linkRef, targetRef ]
// }
// 
// // Make sure this.hash has a value before overriding default behavior
// function scroll() {
//   const intervalId = setInterval(scroll, 1)      
//   scrollTop += scrollBy
//   window.scrollTo(0, scrollTop) 
//               
//   if (scrollTop >= scrollTo) {
//       clearInterval(intervalId)
//   }
// }
// 
// function smoothScroll(e, scrollBy = 20) {
//   console.log(e.target)
//   if (this.hash !== "") {
//     // Prevent default anchor click behavior
//     e.preventDefault();
//   
//     // Store hash
//     const hash = this.hash;
//   
//     scroll();
//     // Add hash (#) to URL when done scrolling (default click behavior)
//     window.location.hash = hash;
//     
//   }
// }
// 
// const links = document.querySelectorAll('.sitenav-menu__link');
// 
// for (const link of links) {
//   link.addEventListener('click', (e) => {
//     smoothScroll(e)
//   });
// }