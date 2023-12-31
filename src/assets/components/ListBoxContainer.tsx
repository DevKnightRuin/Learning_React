//redners all the logic for the data fields
import { useState } from "react";
import ListBoxDataFields from "./ListBoxDataFields";

export default function ListBoxContainer(){

    //State and Properties
    const [dataArr, setDataArr] = useState(
        [
            {debt: 0, apr: 0, monthlyInterest: 0},
            {debt: 0, apr: 0, monthlyInterest: 0}
        ]
    )
    

    //Methods
    function handleAddData(){
        // setDataArr(prevData => {prevData, {debt: 0, apr: 0, monthlyInterest: 0}})
        setDataArr((dataArr) => [
            ...dataArr,
            {debt: 0, apr: 0, monthlyInterest: 0},
          ]);
        }



    //Render
    return(
        <div className="List-Group col-4">
            <button className="btn btn-primary" onClick={handleAddData}></button>
            {dataArr.map(() => <ListBoxDataFields />)}
        </div>
    )
}