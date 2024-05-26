const getState = ({setStore,getStore, getActions}) => {
    return {
        store: {
            contact: {
                full_name:"",
                email:"",
                agenda_slug: "yvener_agenda",
                address:"",
                phone:"",
            },
            listOfContacts: []
        },
        actions: {
            getContacts: ()=>{
                fetch("https://playground.4geeks.com/contact/agendas/yvenerd/contacts",{
                    method: "GET",
                    headers:{"Content-Type":"application/json"}
                }).then((response)=> response.json()).then((data)=>setStore({listOfContacts: data})).catch((error)=>console.log(error))
            },
            handleChange: (event)=>{
                const store = getStore();
                setStore({contact: {...store.contact, [event.target.name]: event.target.value} }) 
                console.log(store.contact)
            },
            handleSubmit: (event)=>{
                event.preventDefault();
                const store = getStore();
                if(store.contact){fetch(`https://playground.4geeks.com/contact/agendas/yvenerd/contacts/${contactId}`,{
                    method: "POST",
                    headers:{"Content-Type":"application/json"},
                    body: JSON.stringify(store.contact)
                }).then((response)=>response.json()).then((data)=>console.log(data)).catch((error)=>console.log(error))}
                setStore({
                    contact: {
                        full_name:"",
                        email:"",
                        agenda_slug: "yvener_agenda",
                        address:"",
                        phone:"",
                            }
                })
            },
            deleteContact: (id)=>{
                fetch(`https://playground.4geeks.com/contact/agendas/yvenerd/contacts/${contactId}`,{
                    method: "DELETE",
                }).then((response)=> response.json()).then((data)=>console.log(data)).catch((error)=>console.log(error))
            }
        }
    }
}

export default getState;