export default function EditMemberAbilitiesForm(){
  return(
    <form>
      <p className="custom-label">Name</p>
      <input type="text" className="custom-input"/>
      <p className="custom-label">Role</p>
      <input type="text" className="custom-input"/>
      <p className="custom-label">Email</p>
      <input type="text" className="custom-input"/>
      <p className="custom-label">Abilities</p>
      <input type="text" className="custom-input"/>
      <p className="custom-label">Departments</p>
      <input type="text" className="custom-input"/>
      {/*ABILITATI fiecare*/}
      {/*- selecteaza abilitatea(cred)*/}
      {/*- nivelul (1,2,3,4,5)*/}
      {/*- experienta (...)*/}
    </form>
  )
}
