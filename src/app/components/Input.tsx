import { forwardRef } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = '', ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-semibold text-[#1E1E1E] mb-2">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`
            w-full px-4 py-3 rounded-lg border 
            ${error ? 'border-[#C62828] focus:ring-[#C62828]' : 'border-gray-300 focus:ring-[#F4A300] focus:border-[#F4A300]'} 
            bg-white text-[#1E1E1E] 
            focus:outline-none focus:ring-2 
            transition-all
            ${className}
          `}
          {...props}
        />
        {error && (
          <p className="mt-1 text-sm text-[#C62828]">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
