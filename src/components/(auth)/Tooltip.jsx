import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@radix-ui/react-tooltip";

export default function TooltipCustom({element, text}) {
  return (
    <TooltipProvider delayDuration={10}>
      <Tooltip>
        <TooltipTrigger>{element}</TooltipTrigger>
        <TooltipContent>
          <p className="text-[12px]">{text}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
