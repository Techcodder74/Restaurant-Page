
const menusection= function(heading)
{     const sec=document.createElement("div");
      const sechead=document.createElement('h2');
      sechead.innerHTML=heading;
      sec.appendChild(sechead);
      const itemsection=document.createElement("div");
      itemsection.classList.add("itemSection");
      sec.append(itemsection);
      sec.classList.add("menuSec")
      function addtoHtml(content)
      {
        content.appendChild(sec);
      }
      function additemCard(i)

      {
        itemsection.append(i);
      }
      return {addtoHtml, additemCard};
}

export {menusection}