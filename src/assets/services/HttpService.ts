import apiClient, { CanceledError } from "./apiClient";

interface Entity {
	id: number;
}

export class HttpService {
	endpoint: string;

	constructor(endpoint: string) {
		this.endpoint = endpoint;
	}
	getAll<T>() {
		const controller = new AbortController();
		const request = apiClient.get<T[]>(this.endpoint + "/", {
			signal: controller.signal,
		});
		return { request, cancel: () => controller.abort() };
	}
	add<T>(entity: T) {
		return apiClient.post(this.endpoint + "/", entity);
	}
	delete<T extends Entity>(entity: T) {
		return apiClient.delete(this.endpoint + "/" + entity.id);
	}
	update<T>(id: number, updatedEntity: T) {
		return apiClient.patch(this.endpoint + "/" + id, updatedEntity);
	}
}

export { CanceledError };
const createHttpService = (endpoint: string) => new HttpService(endpoint);
export default createHttpService;
