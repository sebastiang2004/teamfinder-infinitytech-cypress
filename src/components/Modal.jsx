import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/(guest)/ui/dialog"

export default function Modal({title, subtitle, formElement}) {

  return (
    <Dialog>
      <DialogTrigger>
        {title}
      </DialogTrigger>
      <DialogContent className="min-w-[900px] p-14">
        <DialogHeader>
          <DialogTitle className="uppercase text-[16px]">{subtitle}</DialogTitle>
          <DialogDescription>
            {formElement}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
