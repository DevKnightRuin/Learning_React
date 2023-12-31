import React, { FormEvent, useRef } from 'react'
import { DataInfo } from '../Utilities/interfaceTypes'


//causes default state in app comopnent to return to default initiation
interface Props{
    onSubmitHandler: (item: DataInfo) => void
}

const Form = ({onSubmitHandler}: Props) => {
    const nameRef = useRef<HTMLInputElement>(null)
    const costRef = useRef<HTMLInputElement>(null)
    const categoryRef = useRef<HTMLSelectElement>(null)
    const infoRef = useRef<HTMLInputElement>(null)
    
    const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault
    let temp: DataInfo = {
        itemName: "",
        cost: 0,
        Category: "",
        info: ""
    }
       
    temp.itemName =nameRef.current?.value || ""
    if(costRef.current)
        temp.cost = parseInt(costRef.current.value)
    temp.info = infoRef.current?.value || ""
    temp.Category = categoryRef.current?.value || "Not Categorized"
    console.log(temp)
    onSubmitHandler(temp)

}

  return (
    <>
        {/* <form> */}
        <form onSubmit={handleOnSubmit}>
            <div className='mb-3'>
            <label htmlFor="itemName" className="form-label">Item Name
                <input id='itemName' ref={nameRef} className="form-control" type='text' />
                </label>
                </div>
                <div className='mb-3'>    
            <label htmlFor="cost">Cost
                <input id='cost' ref={costRef} type="number" className="form-control" />
                </label>
                </div>
                <div className='mb-3'> 
            <label htmlFor="info" className="form-label">Description
                <input id='info' ref={infoRef} type="text" className="form-control" />
                </label>
                </div>
                <div className='mb-3'> 
            <label htmlFor="category" className="form-control">Category
                <select id="category" ref={categoryRef}  defaultValue="Food" className="form-control">
                    <option value={"Entertainment"}>Entertainment</option>
                    <option value={"Food"}>Food</option>
                </select>
                </label>
                </div>
                <div className='mb-3'> 
                {/* <button onClick={handleOnSubmit} type='button'>Submit</button> */}
                <button type='submit'>Submit</button> 
                </div>
        </form>
    </>
  )
}

export default Form