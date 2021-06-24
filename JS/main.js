let menuBtn=document.querySelector("#menu-btn")
 let mobileMenu=document.querySelector("#mobile-menu")
 let closeBtn=document.querySelector("#close")
let mobileMenuItems=document.querySelectorAll(".mobile-menu-item")

menuBtn.addEventListener("click",menu)

 function menu(){
   mobileMenu.style.display="block"
 }
 closeBtn.addEventListener("click",close)
 function close(){
mobileMenu.style.display="none"
 }


 
   
  for (let index = 0; index < mobileMenuItems.length; index++) {
    mobileMenuItems[index].addEventListener("click",function(){
      mobileMenu.style.display="none"
    })
    
  }
/*$("#menu-btn,#close").click(function(){
  $("#mobile-menu").toggle()
})

 /* let heroSection = document.querySelector("#hero-section")
  let heroSectionHeight = heroSection.clientHeight;
 
  let header = document.querySelector("#header")
 
 document.addEventListener("scroll",function(){
   if(document.documentElement.scrollTop > heroSectionHeight){
if(!header.classList.contains("solid-header")){
  header.classList.add("solid-header")
}else {
  if(header.classList.contains("solid-header")){
    header.classList.remove("solid-header")
  }
}
   }
 })*/
 $(document).scroll(function(){
   let header=$("#header")
   if($(this).scrollTop() > $("#hero-section").height()){

    if(!header.hasClass("solid-header")){
      header.addClass("solid-header")
    }else{
      if(header.hasClass("solid-header")){
        header.removeClass("solid-header")
      }
    }
   }
 })
 var myMap = L.map("map",{
   center:[43.272310133776344, 19.997941569313323],
   zoom:170
 })
 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);
var myIcon=L.icon({
  iconUrl:'img/marker-icon.png'

})
var marker=L.marker([43.272310133776344, 19.997941569313323],{
  icon:myIcon
}
  ).addTo(myMap)
  

marker.bindPopup("We are here!")
marker.on("click",function(){
  alert("mahmut")
})
