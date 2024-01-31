import { useState, useEffect } from "react";
import apiClient, { CanceledError } from "./assets/Utilities/apiClient";

interface User {
	name: string;
	id: number;
}

const App_FetchingData = () => {
	const [users, setUsers] = useState<User[]>([]);
	const [error, setError] = useState<string>("");
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const controller = new AbortController();
		setIsLoading(true);
		apiClient
			.get<User[]>("/users", {
				signal: controller.signal,
			}) //we add the controller in the config section of the function
			.then((res) => {
				setUsers(res.data); //response from the fetch and store into state
				setIsLoading(false);
			}) //set is loading to false, use .finally when not testing
			.catch((err) => {
				if (err instanceof CanceledError) return; //if the error is from a canceled error from the controller, just return so we don't display canceled on the screen
				setError(err.message); //catch any errors and store it in state
				setIsLoading(false); //set is loading to false, use .finally when not testing
			});
		// .finally(() => setIsLoading(false)); // ------  This does not show properly when using strict mode
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

	//functions
	function addUser() {
		const newUser = { id: 0, name: "Pinochio" };
		apiClient
			.post("https://jsonplaceholder.typicode.com/users/", newUser)
			.then((res) => setUsers([...users, res.data]))
			.catch((err) => {
				setError(err.message);
			});
	}

	function deleteUser(user: User) {
		const originalUsers = [...users];
		setUsers(users.filter((u) => u.id !== user.id));
		apiClient
			.delete("https://jsonplaceholder.typicode.com/users/" + user.id)
			.catch((err) => {
				setUsers(originalUsers);
				setError(err.message);
			});
	}

	function updateUser(user: User) {
		const originalUsers = [...users];
		const updatedUser = { ...user, name: user.name + "!" };
		setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));
		apiClient
			.patch(
				"https://jsonplaceholder.typicode.com/users/" + user.id,
				updateUser
			)
			.catch((err) => {
				setError(err.message);
				setUsers(originalUsers);
			});
	}

	function UID() {
		return Math.floor(Math.random() * 298374);
	}

	return (
		<>
			<h1>App_FetchingData</h1>
			{error && <p className="text-danger">{error}</p>}
			{isLoading && <div className="spinner-border"></div>}
			<button
				className="btn btn-primary m-2"
				onClick={addUser}
			>
				Add User
			</button>
			{users.map((user) => (
				<ul
					key={UID()}
					className="list-group"
				>
					<li
						key={user.id}
						className="list-group-item d-flex justify-content-between"
					>
						{user.name}
						<div>
							<button
								className="btn btn-outline-danger mx-1"
								onClick={() => updateUser(user)}
							>
								Modify
							</button>
							<button
								className="btn btn-outline-danger mx-1"
								onClick={() => deleteUser(user)}
							>
								Delete
							</button>
						</div>
					</li>
				</ul>
			))}
		</>
	);
};

export default App_FetchingData;
