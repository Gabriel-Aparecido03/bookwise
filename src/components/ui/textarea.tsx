import { TextareaHTMLAttributes, forwardRef } from "react";

const Textarea = forwardRef< HTMLTextAreaElement ,TextareaHTMLAttributes<HTMLTextAreaElement>>(({ className,...props}, ref) => {
  return (
    <div className={`flex flex-col border items-center justify-between border-solid p-1 border-gray-500 rounded-md ${className}`}>
      <textarea rows={10} maxLength={450} className="text-sm placeholder:text-gray-400 w-full resize-none bg-transparent border-none flex-1 outline-none" ref={ref} {...props }/>
      <span className="flex justify-end w-full text-gray-400 text-sm">
        {props.value?.toString().length ?? 0} / 450
      </span>
    </div>
  )
})

Textarea.displayName = 'Textarea'

export { Textarea }