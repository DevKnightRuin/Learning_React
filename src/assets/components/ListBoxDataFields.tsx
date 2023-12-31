import { useState } from "react"

interface Props{
    // onChange?: () => void;
    debt: number
    apr: number
    total: number
}


export default function ListBoxDataFields(){

    let [data, setData] = useState({
        debt: 0, apr: 0, total: 0
    })

     
    function total():number{
        let apr:number = parseFloat(data.apr.toString()) / 100
        let interest:number = data.debt * Number(apr)
        return Number(interest) + Number(data.debt)
    }



        //this stuff does not work correctly if you don't enter a decimal value, need to force 2 decimal places if none is present
        //probably some other wonky stuff going on as well
    function onValueChange(event: any){
        setData(prevData => {
            return{
                ...prevData,
                [event.target.name]: event.target.value,
                total: total()
            }
        })
        console.log("updated : " + data.total)
    }

    return(
        <div className="list-group-items d-flex flex-row ">
            <input type="number" name="debt" onChange={onValueChange} value={data.debt}></input>
            <input type="number" name="apr" onChange={onValueChange} value={data.apr}></input>
            <input type="number" value={data.total} ></input>
        </div>
    )
}