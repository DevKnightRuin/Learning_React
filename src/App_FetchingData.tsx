import React from "react";
import { useState, useEffect } from "react";
import axios, { AxiosError, CanceledError } from "axios";

interface User {
	name: string;
	id: number;
}

const App_FetchingData = () => {
	const [user, setUser] = useState<User[]>([]);
	const [error, setError] = useState<string>("");

	useEffect(() => {
		const controller = new AbortController();

		axios
			.get<User[]>("https://jsonplaceholder.typicode.com/users", {
				signal: controller.signal,
			}) //we add the controller in the config section of the function
			.then((res) => setUser(res.data)) //response from the fetch and store into state
			.catch((err) => {
				if (err instanceof CanceledError) return; //if the error is from a canceled error from the controller, just return so we don't display canceled on the screen
				setError(err.message);
			}); //catch any errors and store it in state

		return () => controller.abort(); //cleanup function to cancel the fetch request if this component unmounts
	}, []);

	//using async  useEffect can't use async directly, so we have to create a function on the inside that is asynchronous.
	//We also have to import AxiosError since React doesn't know what type that is
	// useEffect(() => {
	// 	try {
	// 		const fetchUsers = async () => {
	// 			const res = await axios.get<User[]>(
	// 				"https://jsonplaceholder.typicode.com/users"
	// 			);
	// 			setUser(res.data);
	// 		};
	// 	} catch (err) {
	// 		setError((err as AxiosError).message);
	// 	}
	// }, []);

	return (
		<>
			<h1>App_FetchingData</h1>
			{error && <p className="text-danger">{error}</p>}
			{user.map((user) => (
				<li key={user.id}>{user.name} </li>
			))}
		</>
	);
};

export default App_FetchingData;
