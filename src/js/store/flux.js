const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
			
			},
			
			loadAgendaContacts: async () => {
				const response = await fetch('https://playground.4geeks.com/contact/agendas/yvenerd/contacts');
				if (!response.ok) {
					throw new Error(response.status, response.statusText)
				}
				const data = await response.json();
				setStore({contacts: data.contacts});
			}, 
			
			

			//Will need functions to: 
			// POST new contacts through the API 
			createNewContact: async (newContact) => {
				try {
					const response = await fetch('https://playground.4geeks.com/contact/agendas/yvenerd/contacts', {
						method: "POST",
						body: JSON.stringify(newContact),
						headers: {
							'Content-Type': 'application/json'
						}
					});
					if (!response.ok) {
						throw new Error(`${response.status}: ${response.statusText}`);
					}
					const data = await response.json();
					console.log("Successfully created!", data);
					return data; // Return the created contact data
				} catch (error) {
					console.error("Error creating contact:", error);
					throw error; // Rethrow the error for further handling
				}
			},
			saveNewContact:(newContact) => {
				const store = getStore();
				let revisedStore = [...store.contacts, newContact];
				getActions().createNewContact(newContact)
				setStore({contacts: revisedStore})
			},
			setNewContact:(name,address,phone,email) => {
				let newContact = {
					name:name,
					address:address, 
					phone:phone,
					email:email
				};
				getActions().saveNewContact(newContact)
			},
	
			updateContact: async (contactId, contactObject) => {
                try {
                    const response = await fetch(`https://playground.4geeks.com/contact/agendas/yvenerd/contacts/${contactId}`, {
                        method: 'PUT',
                        body: JSON.stringify(contactObject),
                        headers: {
                            'Content-Type': 'application/json',
                        }
                    });
                    if (!response.ok) {
                        throw new Error(`${response.status}: ${response.statusText}`);
                    }
                    const data = await response.json();
                    const store = getStore();
                    const updatedContacts = store.contacts.map(contact =>
                        contact.id === parseInt(contactId) ? data : contact
                    );
                    setStore({ contacts: updatedContacts });
                } catch (error) {
                    console.error('Error updating contact:', error);
                    throw error;
                }
            },
			
			// DELETE though the API
			deleteContact: async (contactId) => {
				const response = await fetch('https://playground.4geeks.com/contact/agendas/yvenerd/contacts/'+ contactId, {
					method: "DELETE",
				});
				if(!response.ok){
					throw new Error(response.status, response.statusText)
				}
				getActions().loadAgendaContacts();
			},
		}
	};
};

export default getState;
