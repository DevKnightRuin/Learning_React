import createHttpService, { CanceledError } from "./HttpService";

export interface User {
	name: string;
	id: number;
}
export { CanceledError };
export default createHttpService("/users");
