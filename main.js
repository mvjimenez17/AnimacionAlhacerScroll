const images = document.querySelectorAll('.hero__figure');
console.log(images);

function triggerAnimation(entries){
    entries.forEach(entry =>{
        const image = entry.target.querySelector('img');
        image.classList.toggle('unset', entry.isIntersecting);
      
    })

}

const option  = {
    root: null,
    rootMargin: "0px" ,
    threshold: 0

}

const observer = new IntersectionObserver(triggerAnimation, option);

images.forEach(image =>{
    observer.observe(image);
})