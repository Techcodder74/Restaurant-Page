
import "./style.css"
import home from "./home.js"
import {menu} from "./menu.js"
import contact from "./contact.js"
const topButton=document.querySelector("#Top")
const content=document.getElementById("content")


topButton.addEventListener("click",(e)=>
{
    if (e.target.id === "Home") {
      content.className='';
           content.classList.add('Home');
        home.render(content)
        

  }
  else if(e.target.id==="Menu")
  {  
     content.className='';
  try  {  menu.render(content);}
  catch(r){
   console.log("Error in rendering")
  }
   
  }
  else if(e.target.id==="Contacts")
  {   content.className='';
      contact.render(content)
  }
})
content.classList.add('Home');
home.render(content)