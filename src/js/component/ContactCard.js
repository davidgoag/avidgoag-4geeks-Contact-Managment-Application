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
						src="https://www.kindpng.com/picc/m/136-1369892_avatar-people-person-business-user-man-character-avatar.png"
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
