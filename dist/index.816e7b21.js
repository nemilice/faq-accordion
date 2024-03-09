"use strict";
const mainContentEl = document.querySelector(".main-content");
mainContentEl.addEventListener("click", (e)=>{
    const carret = e.target.closest(".carret-icon");
    if (!carret) return;
    const closestQuestion = e.target.closest("article");
    closestQuestion.classList.toggle("active");
    carret.classList.toggle("active");
});

//# sourceMappingURL=index.816e7b21.js.map
