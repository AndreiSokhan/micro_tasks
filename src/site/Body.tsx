
type PropsBodyType={
   titleForBody:string
}

export const Body = (props:PropsBodyType) => {
   return (
      <body>{props.titleForBody}</body>
   )
}