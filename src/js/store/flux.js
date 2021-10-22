const getState = ({ getStore, setStore }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			contacts: []
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			getContacts: () => {
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/davidgoag")
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
				fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(contact)
				})
					.then(response => {
						if (response.ok) {
							fetch("https://assets.breatheco.de/apis/fake/contact/agenda/davidgoag")
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
				fetch(`https://assets.breatheco.de/apis/fake/contact/${contactID}`, { method: "DELETE" })
					.then(response => {
						if (response.ok) {
							fetch("https://assets.breatheco.de/apis/fake/contact/agenda/davidgoag")
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
				fetch(`https://assets.breatheco.de/apis/fake/contact/${contact.id}`, {
					method: "PUT",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(contact)
				})
					.then(response => {
						if (response.ok) {
							fetch("https://assets.breatheco.de/apis/fake/contact/agenda/davidgoag")
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
