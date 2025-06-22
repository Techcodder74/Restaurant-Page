import { itemCard } from "./utils/itemCard";
import { menusection } from "./utils/menuSection";
import { menuitems } from "./menuitems";


const menu=(function(){
     const head=document.createElement("h1");
     head.innerHTML="Menu Section";
     head.classList.add("menuhead");
 
   //   const starterSection=menusection("Starters");
   //   menuitems.starters.forEach(element => {
   //      starterSection.additemCard(itemCard(element));
   //   });

     let sections=[];
     menuitems.forEach((ele)=>
   {
        const SectionSpace=menusection(ele.heading);
        ele.items.forEach(aa=>{
              SectionSpace.additemCard(itemCard(aa));

        })

      sections.push(SectionSpace)

   })
    
    const render=(content)=>{
        content.innerHTML="";
        content.append(head);
      
       sections.forEach(ele=>{
         ele.addtoHtml(content);
       })
        
     }
   
      return {render};
})()
export {menu}