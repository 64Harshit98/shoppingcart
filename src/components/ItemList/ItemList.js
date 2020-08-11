import React from "react";
import "./ItemList.css";
import Item from "../Item/Item";

function ItemList({ items, remove, inc, dec }) {
	return (
		<table>
			<tbody>
				<tr>
					<td className="fields">Items({items.length})</td>
					<td className="fields">Qty</td>
					<td className="fields">Price</td>
				</tr>
				{items.map((item) => (
					<Item key={item.id} data={item} removeItem={remove} incQty={inc} decQty={dec} />
				))}
			</tbody>
		</table>
	);
}

export default ItemList;
