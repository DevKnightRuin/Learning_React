import { ReactNode } from "react"

interface Props{
    children: ReactNode;
    onClick: () => void
}
function Alert({onClick, children}:Props){

    return(
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
                {children}
            <button type="button" onClick={onClick} className="btn-close" data-dismiss="alert" aria-label="Close"></button>
        </div>
    )
}

export default Alert