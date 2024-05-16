import React from "react";

// this componenet will take props to populate eact contact p tag
const ContactCard = ({name, address, phone, email}) => {
     return (
         <>
              <div>
                   <div className="contact">
                    <img src="https://xsgames.co/randomusers/avatar.php?g=pixel"/>
                    <div className="contact-info">
                        <p className="contact-name">{name}</p>
                            <p className="contact-phone">{address}</p>
                            <p className="contact-address">{phone}</p>
                            <p className="contact-email">{email}</p> 
                    </div>
                   </div>
              </div>
         </>
     );
}

export default ContactCard;