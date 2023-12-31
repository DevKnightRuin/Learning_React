import { ReactNode } from "react";

interface Props{
    children: ReactNode;
    color: string;
    //setMyVar: Dispatch<SetStateAction<boolean>>;
    onClick: () => void;
}


export default function Button({children, color, onClick}: Props){
return (
    <div>
        <button onClick={onClick}  className={"btn btn-" + color}> {children} </button>
    </div>
    )
}