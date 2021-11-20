import React from "react";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const EditContact = props => {
	const { store, actions } = React.useContext(Context);
	const currentContact = store.contacts.find(contact => {
		return contact.id == props.match.params.id;
	});

	const [updatedContact, setupdatedContact] = React.useState({ ...currentContact });

	const updateContact = () => {
		actions.EditContact(updatedContact);
	};

	const handleChange = e => setupdatedContact({ ...updatedContact, [e.target.name]: e.target.value });

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">
					Editing: <strong>{currentContact.full_name}</strong>
				</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							className="form-control"
							placeholder="Full Name"
							onChange={handleChange}
							name="full_name"
							value={updatedContact.full_name}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							placeholder="Enter email"
							onChange={handleChange}
							name="email"
							value={updatedContact.email}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							className="form-control"
							placeholder="Enter phone"
							onChange={handleChange}
							name="phone"
							value={updatedContact.phone}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className="form-control"
							placeholder="Enter address"
							onChange={handleChange}
							name="address"
							value={updatedContact.address}
						/>
					</div>

					<button
						type="button"
						className="btn gghblue mt-5 form-control"
						onClick={() => {
							updateContact();
							props.history.push("/");
						}}>
						Update
					</button>

					<Link className="mt-3 w-100 text-center gghbluelink" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};

EditContact.propTypes = {
	match: PropTypes.object,
	history: PropTypes.object
};
