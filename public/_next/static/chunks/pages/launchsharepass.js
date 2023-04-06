

const areas = document.querySelectorAll(".text-area2");

const observer = new IntersectionObserver(entries => {
    
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting);

        const id = entry.target.getAttribute('id');
        
        if (entry.isIntersecting) {  
            document.querySelector('a[href="#'+ id +'"]').classList.toggle("active-link");
        } else {
            document.querySelector('a[href="#'+ id +'"]').classList.remove("active-link");
        }
    
    });
});

areas.forEach(area => {
    observer.observe(area); 
});