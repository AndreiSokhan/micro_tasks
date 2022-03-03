type BodeType = {
    title: string
}


export const Body = (props: BodeType) => {
    return (
        <div>{props.title} </div>
    )
}