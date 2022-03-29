// import {NewComponent} from "./NewComponent";

type BodyType = {
    title: string
}


export const Body = (props: BodyType) => {
    return (
        <div>{props.title}
        {/*<NewComponent students={students}/>*/}
        </div>
    )
}