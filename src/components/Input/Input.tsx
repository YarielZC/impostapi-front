import { useState } from "react";
import { IconExclamationCircle, IconEye, IconEyeOff, type ReactNode } from "@tabler/icons-react";
import './Input.css'
import { cn } from '../../lib/utils';
import type { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';

type typeType = 'text' | 'password' | string
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type errorType = string | FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined
export default function Input({className, inputClassName, ref, label, error, placeholder, inputIcon, type, ...props}: {className?: string, inputClassName?: string, ref: React.Ref<HTMLInputElement> | undefined, label?: string, error?: errorType, placeholder?: string, inputIcon?: ReactNode, type: typeType}) {

  const [showPass, setShowPass] = useState<boolean>(false)

  const handleShowPassClick = () => setShowPass(!showPass)

  return (
    <div className={`flex flex-col gap-1 relative ${className}`}>
      {label && <label className='text-white ml-0.5'>{label}</label>}

      <div className='text-[var(--text-input-color)] absolute top-9 left-2'>
        {inputIcon}
      </div>

      {type == 'password' && <button type='button' className='border-none outline-none bg-none cursor-pointer flex justify-center items-center text-[var(--text-input-color)] absolute left-[calc(100%-2.5rem)] top-9' onClick={handleShowPassClick}>
        {showPass ? <IconEyeOff /> : <IconEye />}
      </button>}

      <input 
        className={cn(
          `py-2 pl-4 rounded-xl text-[var(--secondary-text-color)] placeholder-[var(--text-input-color)] bg-[var(--dark-mode-input-color)] border-[1px] outline-none ${inputClassName}`,
          error && `border-[var(--error-message-color)]`,
          !error && `border-[var(--text-input-color)]`,
          inputIcon && 'pl-9'
        )} 
        type={showPass ? 'text' : type}
        ref={ref}
        placeholder={placeholder}
        {...props}/>

      <span className='flex items-center mt-2 gap-1.5 font-semibold text-sm text-[var(--error-message-color)]'>
        {error ? <IconExclamationCircle size={16}/> : ''}
        {error ? error.toString() : ''}
      </span>
    </div>
  )
}