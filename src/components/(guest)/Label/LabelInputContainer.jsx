import {cn} from "@/lib/utils.js";

export default function LabelInputContainer({
                                              // eslint-disable-next-line react/prop-types
                                              children,
                                              // eslint-disable-next-line react/prop-types
                                              className,
                                            }) {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
}
