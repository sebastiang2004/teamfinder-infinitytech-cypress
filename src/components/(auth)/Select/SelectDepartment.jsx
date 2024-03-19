import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.jsx";
import {useAtom} from "jotai";
import {selectedValueAtom} from "@/store/index.js";

export default function SelectDepartment({items}) {

  const [value, setValue] = useAtom(selectedValueAtom);


  return (
    <Select value={value} onValueChange={setValue}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select"/>
      </SelectTrigger>
      <SelectContent>
        {items?.map(function (item) {
          return (
            <SelectItem key={item._id} value={item._id}>{item.name}</SelectItem>
          )
        })}
        {items?.length === 0 ? "There is no department created." : ""}
      </SelectContent>
    </Select>
  )
}
