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
					.then(data => setStore(data))
					.catch(error => console.error(error));
			}
		}
	};
};

export default getState;
