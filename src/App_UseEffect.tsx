import React, { useState } from "react";
import ProductList from "./assets/useEffect_components/ProductList";

const App_UseEffect = () => {
	const [category, setCategory] = useState("");

	return (
		<>
			<div>App_UseEffect</div>
			<div className="mb-3">
				<label
					htmlFor="product"
					className="form-label"
				>
					<select
						id="product"
						className="form-select"
						onChange={(event) => setCategory(event.target.value)}
					>
						<option value={"Clothing"}>Clothing</option>
						<option value={"Household"}>Household</option>
					</select>
				</label>
			</div>
			<ProductList category={category} />
		</>
	);
};

export default App_UseEffect;
