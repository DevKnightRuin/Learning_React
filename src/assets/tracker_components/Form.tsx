import { DataInfo } from "../Utilities/interfaceTypes";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface Props {
	onSubmitProp: (data: DataInfo) => void;
}
const schema = z.object({
	name: z.string({ invalid_type_error: "The item requires a name" }).min(2),
	cost: z.number().min(0.01),
	info: z
		.string({ invalid_type_error: "Information about this item is required" })
		.min(3),
	category: z.string(),
});

type ItemData = z.infer<typeof schema>;

//using React-Hook-Forms
const Form = ({ onSubmitProp }: Props) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ItemData>({
		resolver: zodResolver(schema),
	});

	const onSubmit: SubmitHandler<ItemData> = (data) => {
		console.log("Form info: " + data.name);
		const tempData: DataInfo = {
			itemName: data.name,
			cost: data.cost,
			Category: data.category,
			info: data.info,
		};
		console.log("state info: " + tempData);
		onSubmitProp(tempData);
	};

	return (
		<>
			<form onSubmit={handleSubmit((data) => onSubmit(data))}>
				{/* <form onSubmit={(data) => console.log(data)}> */}
				<div className="mb-3">
					<label
						htmlFor="firstname"
						className="form-label"
					>
						Product Name
						<input
							{...register("name")}
							className="form-control"
							type="text"
							id="name"
						/>
						{errors.name && <p>{errors.name.message}</p>}
					</label>
				</div>
				<div className="mb-3">
					<label
						htmlFor="lastname"
						className="form-label"
					>
						Product Description
						<input
							{...register("info")}
							className="form-control"
							type="text"
							id="lastname"
						/>
						{errors.info && <p>{errors.info.message}</p>}
					</label>
				</div>
				<div className="mb-3">
					<label
						htmlFor="cost"
						className="form-label"
					>
						<input
							{...register("cost", { valueAsNumber: true })}
							type="number"
							id="Cost"
							className="form-control"
						/>
						{errors.cost && <p>{errors.cost.message}</p>}
					</label>
				</div>
				<div className="mb-3">
					<label
						htmlFor="category"
						className="form-control"
					>
						Category
						<select
							{...register("category")}
							id="category"
							defaultValue="Food"
							className="form-control"
						>
							<option value={"Entertainment"}>Entertainment</option>
							<option value={"Food"}>Food</option>
						</select>
					</label>
				</div>

				<button
					className="btn btn-primary"
					type="submit"
				>
					Submit
				</button>
			</form>
		</>
	);
};

export default Form;

// useRef implementation

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
