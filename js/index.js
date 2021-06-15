let searchCategory=document.getElementById("search_category");
let searchInput=document.getElementById("search_input");
let btnSearch=document.getElementById("btn_search");

searchCategory.addEventListener("click", function(){
    this.style.border="solid #D44814 2px";
});

searchCategory.addEventListener("blur", function(){
    this.style.border="none";
});

btnSearch.addEventListener("focus", function(){
    this.style.border="solid #D44814 2px";
});

btnSearch.addEventListener("blur", function(){
    this.style.border="none";
});
// searchInput.addEventListener("click",function(){
//     searchCategory.style.border="solid #D44814 2px";
//     this.style.border="solid #D44814 2px";
// })