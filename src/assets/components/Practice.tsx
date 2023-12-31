//component to practice data manipulation

import { InputHTMLAttributes, ReactNode, useState } from "react"



//expandandable text componenent
const Practice = () => {


const [toggle, setToggle] = useState(false)
const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium repudiandae cumque doloremque? Asperiores dolores architecto nemo voluptates adipisci quaerat, reprehenderit distinctio vel totam autem similique animi assumenda necessitatibus molestiae dolorem."

    return (
        <>
            {toggle && <p>{text}</p>}
            {toggle && <button type="button" className="btn btn-primary" onClick={() => setToggle(false)}>Less</button>}
            {!toggle && <p>{text.substring(0, 25)}</p>}
            {!toggle && <button type="button" className="btn btn-primary" onClick={() => setToggle(true)}>More</button>}
        </>
    )
}


const Practice2 = () => {
    
    const [data, setData] = useState(['apple', 'banana', 'carrot'])
    const [source, setSource] = useState("")
    const [modified, setModified] = useState("")

    //add string to array
    function onAdd(){
        console.log("value: " + source)
        setData([...data, source])
    }
    //modify source to the changed value
    function onModify(){
        if(source && modified)
        setData(data.map(val => 
            val === source ? modified : val
       
        ))
        else
            console.log("inputs not valid")
    }

    //remove string from the array
    function remove(){
        setData(data.filter((val) => val !== source))
        console.log(data)
    }

    function getData(){
        console.log(data)
    }
    
    return (
        <>
        <div>
        <input type="text" value={source} onChange={e => setSource(e.target.value)} id="sourceadd" />
            <button onClick={onAdd}>add data</button>
        </div>
        <div>
            <input type="text" value={modified} onChange={e => setModified(e.target.value)} name="modify" id="" />
            <button onClick={onModify}>modify data</button>
        </div>
        <div>
            <button onClick={remove} >remove data</button>
            <button onClick={getData}> Show data in console</button>
        </div>
        </>
    )//end return
}

export{Practice, Practice2}