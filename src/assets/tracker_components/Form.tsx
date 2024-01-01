import React from "react";
import { DataInfo } from "../Utilities/interfaceTypes";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormData {
	firstname: string;
	lastname: string;
}

interface Props {
	onSubmitProp: (data: DataInfo) => void;
}

//using React-Hook-Forms
const Form = ({ onSubmitProp }: Props) => {
	const { register, handleSubmit } = useForm<IFormData>();
	const onSubmit: SubmitHandler<IFormData> = (data) => {
		const tempData: DataInfo = {
			itemName: data.firstname,
			cost: 12,
			Category: "Something is better",
			info: data.lastname,
		};
		console.log(data);
		onSubmitProp(tempData);
	};
	// const handleOnSubmit = (data: IFormData) => {
	// 	const tempData: DataInfo = {
	// 		itemName: data.firstname,
	// 		cost: 12,
	// 		Category: "Something is better",
	// 		info: data.lastname,
	// 	};
	// 	console.log(data);
	// 	onSubmit(tempData);
	// };

	return (
		<>
			<form onSubmit={handleSubmit((data) => onSubmit(data))}>
				<label htmlFor="firstname">
					First Name
					<input
						{...register("firstname")}
						type="text"
						name="firstname"
						id="firstname"
					/>
				</label>
				<label htmlFor="lastname">
					Last Name
					<input
						{...register("lastname")}
						type="text"
						name="lastname"
						id="lastname"
					/>
				</label>
				<button
					className="btn btn-primary"
					type="submit"
				></button>
			</form>
		</>
	);
};

export default Form;

// useRef implimentation

// interface Props {
// 	onSubmitHandler: (item: DataInfo) => void;
// }

// const Form = ({ onSubmitHandler }: Props) => {
// 	const nameRef = useRef<HTMLInputElement>(null);
// 	const costRef = useRef<HTMLInputElement>(null);
// 	const categoryRef = useRef<HTMLSelectElement>(null);
// 	const infoRef = useRef<HTMLInputElement>(null);

// 	const handleOnSubmit = (e: FormEvent) => {
// 		e.preventDefault();
// 		const temp: DataInfo = {
// 			itemName: "",
// 			cost: 0,
// 			Category: "",
// 			info: "",
// 		};

// 		temp.itemName = nameRef.current?.value || "";
// 		if (costRef.current) {
// 			temp.cost = parseInt(costRef.current.value);
// 		}
// 		temp.info = infoRef.current?.value || "";
// 		temp.Category = categoryRef.current?.value || "Not Categorized";
// 		console.log(temp);
// 		onSubmitHandler(temp);
// 	};

// 	return (
// 		<>
// 			{/* <form> */}
// 			<form onSubmit={handleOnSubmit}>
// 				<div className="mb-3">
// 					<label
// 						htmlFor="itemName"
// 						className="form-label"
// 					>
// 						Item Name
// 						<input
// 							id="itemName"
// 							ref={nameRef}
// 							className="form-control"
// 							type="text"
// 						/>
// 					</label>
// 				</div>
// 				<div className="mb-3">
// 					<label htmlFor="cost">
// 						Cost
// 						<input
// 							id="cost"
// 							ref={costRef}
// 							type="number"
// 							className="form-control"
// 						/>
// 					</label>
// 				</div>
// 				<div className="mb-3">
// 					<label
// 						htmlFor="info"
// 						className="form-label"
// 					>
// 						Description
// 						<input
// 							id="info"
// 							ref={infoRef}
// 							type="text"
// 							className="form-control"
// 						/>
// 					</label>
// 				</div>
// 				<div className="mb-3">
// 					<label
// 						htmlFor="category"
// 						className="form-control"
// 					>
// 						Category
// 						<select
// 							id="category"
// 							ref={categoryRef}
// 							defaultValue="Food"
// 							className="form-control"
// 						>
// 							<option value={"Entertainment"}>Entertainment</option>
// 							<option value={"Food"}>Food</option>
// 						</select>
// 					</label>
// 				</div>
// 				<div className="mb-3">
// 					{/* <button onClick={handleOnSubmit} type='button'>Submit</button> */}
// 					<button type="submit">Submit</button>
// 				</div>
// 			</form>
// 		</>
// 	);
// };

// export default Form;
