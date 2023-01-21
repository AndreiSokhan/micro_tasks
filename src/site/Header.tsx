
type PropsHeaderType={
   title:string
}

export const Header = (props:PropsHeaderType) => {
   return (
      <header>{props.title}</header>
   )
}
