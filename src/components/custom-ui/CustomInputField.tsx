'use client'
import React from "react"
import { Input as ShadcnInput } from "@/components/ui/input"  
import { Button } from "@/components/ui/button" 
import { FiEye, FiEyeOff } from "react-icons/fi" 
import { cn } from "@/lib/utils"

interface CustomInputFieldProps extends React.ComponentProps<"input"> {
  isPassword?: boolean
  className?: string
  icon?: React.ReactNode 
  width?: string 
  ariaLabel?: string 
}

const CustomInputField = React.forwardRef<HTMLInputElement, CustomInputFieldProps>(
  ({ className, type, isPassword = false, icon, value = "", onChange, width = "w-full", ariaLabel, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false)
    const inputType = isPassword && !showPassword ? "password" : "text"

    const handleTogglePassword = () => {
      setShowPassword((prev) => !prev)
    }

    // Check if onChange is provided, otherwise log an error or make the field read-only.
    if (value !== undefined && onChange === undefined) {
      console.error("You provided a `value` prop to the input without an `onChange` handler, making it a read-only field.");
    }

    return (
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            {icon}
          </div>
        )}
        <ShadcnInput
          id={props.id}
          type={inputType}
          value={value}
          onChange={onChange} // Make sure onChange is passed down properly
          placeholder={props.placeholder}
          aria-label={ariaLabel}
          className={cn(
            "flex h-9 rounded-md border border-input bg-transparent px-3 py-1 text-base border-gray-200 shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-black  disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            icon ? "pl-10" : "pl-3", 
            width,
            className
          )}
          ref={ref}
          {...props}
        />
        {isPassword && (
          <Button
            type="button"
            onClick={handleTogglePassword}
            className="absolute right-3 top-1/2 bg-none shadow-none  transform -translate-y-1/2 p-1 text-gray-500"
          >
            {showPassword ? <FiEyeOff /> : <FiEye />}
          </Button>
        )}
      </div>
    )
  }
)

CustomInputField.displayName = "Input"

export default CustomInputField
