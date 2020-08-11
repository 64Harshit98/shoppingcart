import React, { useState } from "react";

import "./App.css";

import items from "./data";
import ItemList from "./components/ItemList/ItemList";
import Summary from "./components/Summary/Summary";

function App() {
	const [list, setList] = useState(items);
	const removeItem = (id) => {
		const newList = list.filter((item) => item.id !== id);
		setList(newList);
	};
	const incQty = (id) => {
		const newList = list.map((item) => {
			if (item.id === id) {
				const updatedItem = {
					...item,
					qty: item.qty + 1,
				};
				return updatedItem;
			}
			return item;
		});
		setList(newList);
	};
	const decQty = (id) => {
		const newList = list.map((item) => {
			if (item.id === id) {
				const updatedItem = {
					...item,
					qty: item.qty - 1,
				};
				return updatedItem;
			}
			return item;
		});
		setList(newList);
	};
	return (
		<div className="App">
			<div className="top">
				<h1> Order Summary </h1>
				<hr />
			</div>
			<div className="item-list">
				<ItemList items={list} remove={removeItem} inc={incQty} dec={decQty} />
			</div>
			<div className="bill-summary">
				<Summary items={list} />
			</div>
		</div>
	);
}

export default App;
