type PropsStydentsType = {
   students: Array<StydentPropsType>
}

type StydentPropsType = {
   id: number
   name: string
   age: number
}

export const Stydents = (props: PropsStydentsType) => {
   return (
      <>
         <ul>
            {props.students.map((el,) => {
               return (
                  <li key={el.id}>
                     <span>{el.name} </span>
                     <span>{el.age}</span>
                  </li>
               )
            })}
         </ul>
      </>
   )

}