import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const ContactCard = props => {
	const [state, setState] = useState({
		//initialize state here
	});

	const contact = props.contact;

	return (
		<li className="list-group-item">
			<div className="row w-100 d-flex align-items-center">
				<div className="col-12 col-sm-6 col-md-3 px-0">
					<img
						src="https://images.unsplash.com/photo-1567336273898-ebbf9eb3c3bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1164&q=80"
						alt="Someone's photo"
						className="rounded-circle mx-auto d-block img-fluid p-5"
					/>
				</div>
				<div className="col-12 col-sm-6 col-md-9 text-left text-sm-left d-flex flex-column">
					<div className="float-right">
						<Link to={`/edit/${contact.id}`}>
							<button className="btn">
								<i className="fas fa-pencil-alt mr-3 icongghblue" />
							</button>
						</Link>
						<button className="btn" onClick={() => props.onDelete()}>
							<i className="fas fa-trash-alt icongghblue" />
						</button>
					</div>

					<label className="name lead">
						<h1>{contact.full_name}</h1>
					</label>
					<br />

					<div className="">
						<i className="fas fa-map-marker-alt pr-3 icongghblack" />
						<span className="text-muted">{contact.address}</span>
					</div>

					<br />
					<div className="">
						<i className="fa fa-phone icongghblack" />
						<span className="text-muted small">{contact.phone}</span>
					</div>
					<br />
					<div className="">
						<i className="fa fa-envelope icongghblack" />
						<span className="text-muted small text-truncate">{contact.email}</span>
					</div>
				</div>
			</div>
		</li>
	);
};

/**
 * Define the data-types for
 * your component's properties
 **/
ContactCard.propTypes = {
	history: PropTypes.object,
	onDelete: PropTypes.func,
	contact: PropTypes.object
};

/**
 * Define the default values for
 * your component's properties
 **/
ContactCard.defaultProps = {
	onDelete: null
};
