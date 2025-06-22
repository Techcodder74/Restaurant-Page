

const itemCard=function(data)
{
       const dd=document.createElement("div")
       dd.innerHTML=`<h3>${data.heading}</h3><p>${data.para}</p><div class="price"><strong>$${data.price}</strong></div>`;
     dd.classList.add('itemCard');
     return dd;
}
export {itemCard}