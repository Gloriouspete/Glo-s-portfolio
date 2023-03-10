let content,about,boutme;
boutme = document.querySelector('.boutme');

content = document.querySelector('.ncontent');

about = document.querySelector('#nabout');

about.addEventListener("click",() =>{
    boutme.style.display="block"
    content.style.display="none";
    about.classList.add("agg");
    about.textContent="X";
    var mafor = document.querySelector('.agg');
about.addEventListener("click", () =>{
    boutme.style.display="none";
    content.style.display="block";
    about.textContent="About Me";
    about.classList.remove("agg");
})
});
