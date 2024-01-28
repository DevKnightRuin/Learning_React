import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

interface User {
	Name: string;
	Type: string;
}

const App_FetchingData = () => {
	const [data, setData] = useState<User[]>([]);

	useEffect(() => {
		axios
			.get("https://ogmons.cyclic.app/api/pokemon")
			.then((res) => console.log(res));
	}, []);

	return <h1>App_FetchingData</h1>;
};

export default App_FetchingData;
