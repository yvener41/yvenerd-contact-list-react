import React from "react";

// this componenet will take props to populate eact contact p tag
const ContactCard = () => {
     return (
         <>
              <div>
                   <div className="contact">
                    <img />
                    <div className="contact-info">
                        <p className="contact-name">Yvener</p>
                            <p className="contact-phone">7869170589</p>
                            <p className="contact-address">11011 NW 12ct</p>
                            <p className="contact-email">dutervilyvener41@gmail.com</p> 
                    </div>
                   </div>
              </div>
         </>
     );
}

export default ContactCard;