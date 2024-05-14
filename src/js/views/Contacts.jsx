import React, { useContext, useEffect} from "react";
import ContactCard from "../component/ContactCard.jsx";
import { Context } from "../store/appContext.js";

const Contacts = () => {
    // const {store, actions} = useContext(Context);

    // useEffect(() => {
    //       actions.loadAgendaContacts();
    // }. [])

    console.log("From Contacts.jsx", store)
     return (
         <>
              <div>
                   <ContactCard />
                   <ContactCard />
              </div>
         </>
     );
}

export default Contacts;