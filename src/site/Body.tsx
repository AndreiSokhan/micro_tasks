// import {NewComponent} from "./NewComponent";

type BodeType = {
    title: string
}


export const Body = (props: BodeType) => {
    return (
        <div>{props.title}
        {/*<NewComponent students={students}/>*/}
        </div>
    )
}