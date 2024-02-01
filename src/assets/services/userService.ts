import apiClient from "./apiClient";

export interface User {
	name: string;
	id: number;
}

export class UserService {
	getAllUsers() {
		const controller = new AbortController();
		const request = apiClient.get<User[]>("/users", {
			signal: controller.signal,
		});
		return { request, cancel: () => controller.abort() };
	}
}

export default new UserService();
