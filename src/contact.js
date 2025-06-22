


const contact=(function(){
   
   const div=document.createElement("div");
   div.innerHTML=`
    <h2>📞 Contact Us</h2>
    <p>We’re always happy to hear from you! Whether it’s a question, a booking, or just to say hello, feel free to reach out.</p>
    
    <div class="contactDetails">
      <p><strong>📍 Address:</strong><br>ABC Restaurant, Foodie Street, New Town – 134003</p>
      <p><strong>🕒 Opening Hours:</strong><br>Monday – Sunday: 11:00 AM to 11:00 PM<br>(Closed on the first Monday of every month)</p>
      <p><strong>📞 Phone:</strong> +91 99999 43210</p>
      <p><strong>✉️ Email:</strong> hello@abcrestaurant.in</p>
    </div>
    
    <p class="note">Need help or want to leave feedback? We’re just a message away!</p>
  `;


    const render=(content)=>{
        content.innerHTML="";
       content.appendChild(div);
    }

    return {render}
})()


export default contact;