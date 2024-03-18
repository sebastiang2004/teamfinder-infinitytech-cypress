import SelectCustom from "@/components/Select.jsx";

export default function EditAbilityForm() {
  return (
    <form className="w-full">
      <p className="custom-label">my abilities: pe pagina / modalul user ului acolo va aparea</p>
      <p className="custom-label">Abilitatea</p>
      <div className="mt-5">
        <SelectCustom/>
      </div>
      <p className="custom-label">Selecteaza nivelul</p>
      <div className="mt-5">
        <SelectCustom/>
      </div>
      <p className="custom-label">Experienta</p>
      <div className="mt-5">
        <SelectCustom/>
      </div>
    </form>
  )
}
