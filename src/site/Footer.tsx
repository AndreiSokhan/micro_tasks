
type PropsFooterType={
   titleForFooter:string
}

export const Footer = (props:PropsFooterType) => {
   return (
      <footer>{props.titleForFooter}</footer>
   )
 }