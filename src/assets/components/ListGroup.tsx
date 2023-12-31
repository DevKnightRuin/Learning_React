import { useState } from "react"

interface Props{
    heading: string,
    items: string[],
    onSelectItem: (item: string) => void,
}


function ListGroup({heading, items, onSelectItem}: Props){

    const [activeIndex, setActive] = useState(-1)
    

    return(
        <div>
            <h3>{heading}</h3>
            <ul className="list-group">
                {items.map((item, index) => 
                    (<li 
                        className={activeIndex === index ? "list-group-item active" : "list-group-item"} 
                        key={index} 
                        onClick={() => {
                            setActive(index)
                            onSelectItem(item)
                        }
                    }> 
                        {item} 
                    </li>))
                }
            </ul>

        </div>
    )

}

export default ListGroup