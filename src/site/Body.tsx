type FooterType={
   titleForBody:string
}

export const Body = (props:FooterType) => {
   return(
      <div>{props.titleForBody}</div>
   )
}