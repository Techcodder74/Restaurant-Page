import pizza from "./images/pizza.png"
import pasta from "./images/pasta.png"
import choco from "./images/chocoCake.png"

const itemcard=function(heading, image, pp)
{
          const img= document.createElement("img");
          img.src=image;
          img.classList.add("itemImg")
          const div=document.createElement("div");
          div.classList.add("itemCard");
          div.innerHTML=`<h3 >${heading}</h3>`;
         
          const para=document.createElement("p");
          para.innerHTML=pp;
          const imgPara=document.createElement("div");
          imgPara.classList.add("imgPara");
          imgPara.appendChild(img)
          imgPara.appendChild(para)

           div.appendChild(imgPara);
          return div;}

const  home=(function(){
   const homesection=document.createElement("div")
   homesection.innerHTML="<h1>Welcome to ABC restaurant</h1>   <p>Delicious meals. Cozy vibes. Unforgettable memories.</p>"
   

   const aboutUs=document.createElement('div');
   aboutUs.innerHTML='<h3 class="hh">About us</h3> <p>ABC Restaurant has been serving authentic flavors since 1999. We pride ourselves on using fresh, local ingredients and family recipes passed down through generations.</p>';
    aboutUs.id = 'aboutUs';

    const specialSection=document.createElement('div');
    specialSection.innerHTML='<h3 class="hh">Our Speciality</h3>';
    const special=document.createElement("div");
    special.classList.add("homeItems")
    special.classList.add("menuSec");
    special.appendChild(itemcard("White Sauce Pasta", pasta, "Creamy, dreamy, and drowning in rich white sauce—your comfort bowl awaits."));
    special.appendChild(itemcard("Choco Lava Cake", choco,"Break the shell and let warm chocolate ooze into your heart." ));
    special.appendChild(itemcard("Pizza", pizza,"fired perfection topped with gooey cheese and endless crave."));
    specialSection.appendChild(special);
     


     const render=(content)=>{
        content.innerHTML="";
        content.appendChild(homesection);
        homesection.style.marginBottom="80px";
        content.appendChild(aboutUs);
        content.appendChild(specialSection);
     }

       return {render}

})()

export default home;