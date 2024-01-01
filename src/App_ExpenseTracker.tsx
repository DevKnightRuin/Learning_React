import "./styles/index_ET.css";
import { useState } from "react";
import { DataInfo } from "./assets/Utilities/interfaceTypes";
import Form from "./assets/tracker_components/Form";
import Table from "./assets/tracker_components/Table";

function App_ExpenseTracker() {
	const [itemList, setItemList] = useState<DataInfo[]>([
		// {itemName: "test 1", cost: 178, Category: "Clothes", info: "testing data"},
		// {itemName: "test 2", cost: 278, Category: "Entertainment", info: "testing data"},
		// {itemName: "test 3", cost: 878, Category: "Clothes", info: "testing data"}
	]);

	const handleAddItem = (item: DataInfo) => {
		setItemList((prevData) => [...prevData, item]);
	};

	return (
		<>
			<Form onSubmitProp={handleAddItem} />
			<Table itemList={itemList} />
			{/* {itemList.map((val) => { return(
                <div key={val.cost}>
                    <span >{val.itemName} : {val.Category}</span>
                </div>
               )}
           )} */}
		</>
	);
}
export default App_ExpenseTracker;
