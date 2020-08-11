import React from "react";
import "./Item.css";

function Item({ data, removeItem, incQty, decQty }) {
	return (
		<tr>
			<td>
				<div className="item-name">
					<img src={data.img_url} alt="40*40" />
					<span>{data.name}</span>
					<button className="delete" onClick={() => removeItem(data.id)}>
						X
					</button>
				</div>
			</td>
			<td>
				<div className="item-qty">
					<button onClick={() => decQty(data.id)}>-</button>
					{data.qty}
					<button onClick={() => incQty(data.id)}>+</button>
				</div>
			</td>
			<td>
				<div className="item-price">${data.price * (1 - data.discount / 100)}</div>
			</td>
		</tr>
	);
}

export default Item;
