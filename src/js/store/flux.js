const getState = ({ getStore, setStore }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			contacts: [],
			URL_API: "https://3000-blue-roadrunner-tii35uec.ws-us18.gitpod.io/contact"
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			getContacts: () => {
				fetch(`${getStore().URL_API}/all`)
					.then(response => {
						if (response.ok) {
							return response.json();
						} else {
							return new Error("Error fetching the API info");
						}
					})
					.then(data => setStore({ contacts: data }))
					.catch(error => console.error(error));
			},

			addContact: contact => {
				fetch(`${getStore().URL_API}`, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(contact)
				})
					.then(response => {
						if (response.ok) {
							fetch(`${getStore().URL_API}/all`)
								.then(response => {
									if (response.ok) {
										return response.json();
									} else {
										return new Error("Error fetching the API info");
									}
								})
								.then(data => setStore({ contacts: data }))
								.catch(error => console.error(error));
						}
					})
					.catch(error => console.log("Error", error));
			},

			deleteContact: contactID => {
				fetch(`${getStore().URL_API}/${contactID}`, { method: "DELETE" })
					.then(response => {
						if (response.ok) {
							fetch(`${getStore().URL_API}/all`)
								.then(response => {
									if (response.ok) {
										return response.json();
									} else {
										return new Error("Error fetching the API info");
									}
								})
								.then(data => setStore({ contacts: data }))
								.catch(error => console.error(error));
						}
					})
					.catch(error => console.log("Error", error));
			},

			EditContact: contact => {
				fetch(`${getStore().URL_API}/${contact.id}`, {
					method: "PUT",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(contact)
				})
					.then(response => {
						if (response.ok) {
							fetch(`${getStore().URL_API}/all`)
								.then(response => {
									if (response.ok) {
										return response.json();
									} else {
										return new Error("Error fetching the API info");
									}
								})
								.then(data => setStore({ contacts: data }))
								.catch(error => console.error(error));
						}
					})
					.catch(error => console.log("Error", error));
			}
		}
	};
};

export default getState;
