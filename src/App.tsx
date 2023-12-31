// import ListGroup from "./assets/componenets/ListGroup";
// import Message from "./assets/componenets/Message";
import { ReactNode, useState } from "react";
import Alert from "./assets/components/Alert";
import Button from "./assets/components/Button";
import ListBoxContainer from "./assets/components/ListBoxContainer";
import {Practice2} from "./assets/components/Practice";

function App(){

    const [alertvisible, setAlertVisible] = useState(false)

    // let itemsArr = ['bow', 'mace', 'hammer']
    // const handleClick = (item: string) => {console.log(item)}
    
    

    return(
        <>
            {/* <Message />
            <ListGroup heading='Weapon List' items={itemsArr} onSelectItem={handleClick} /> */}
                
            {/* {alertvisible && <Alert onClick={() => setAlertVisible(false)}>I'm Here!</Alert>}
            <Button children={<h1>button</h1>} color="secondary" onClick={() => setAlertVisible(true)} />
            <ListBoxContainer /> */}
            

            <Practice2 />
        </>
    )
}

export default App