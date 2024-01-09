import React, { useEffect } from "react";
import { useState } from "react";

const ProductList = ({ category }: { category: string }) => {
	const [product, setProduct] = useState<string[]>([]);

	useEffect(() => {
		console.log("fetching products in ", category);
		setProduct(["Clothing", "Household"]);
	}, [category]);
	// dependency array at the end of the useEffect hook will allow the hook only to execute after that item changes.
	//it will run once no matter what.  You can use an empty [] if it isn't dependent on anything

	return <div>Product List</div>;
};

export default ProductList;
