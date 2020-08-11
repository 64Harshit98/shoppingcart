import React from "react";
import "./Summary.css";

function Summary({ items }) {
	let price = 0;
	let disc = 0;
	let qty = 0;
	items.forEach((item) => {
		price += item.price * item.qty;
		disc += (item.qty * (item.price * item.discount)) / 100;
		qty += item.qty;
	});

	return (
		<>
			<div className="bill-container">
				<div className="title">Bill Summary</div>
				<div className="price">Price: ${price}</div>
				<div className="qty">Quantity: {qty} </div>
				<div className="disc">Discount: ${disc} </div>
			</div>
			<div className="total">Total: ${price - disc}</div>
		</>
	);
}

export default Summary;
