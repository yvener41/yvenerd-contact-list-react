const getState = ({ getStore, getActions, setStore }) => {
	return {
		   //Added
		store: {
			contacts: [	]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			// changeColor: (index, color) => {
			// 	//get the store
			// 	const store = getStore();

			// 	//we have to loop the entire demo array to look for the respective index
			// 	//and change its color
			// 	const demo = store.demo.map((elm, i) => {
			// 		if (i === index) elm.background = color;
			// 		return elm;
			// 	});

			// 	//reset the global store
			// 	setStore({ demo: demo });
			// }
                     //Added
			//Get single agenda
			loadAgendaContacts: async () => {
                 const response = await fetch("https://playground.4geeks.com/contact/agendas/yvenerd/contacts");
				 if (!response.ok){
					throw new Error(response.status, response.statusText)
				 }
				 const data = await response.json();
			    setStore = ({contacts: data.contacts});
			},
			// will need functions to
			//Post new contacts through the API
			//Put (updated) contacts through thr API
			//Delete contacts through the API
		}
	};
};

export default getState;
