import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  loading?: boolean;
  children: React.ReactNode;
}

export function Button({ 
  variant = 'primary', 
  loading = false, 
  disabled, 
  children, 
  className = '',
  ...props 
}: ButtonProps) {
  const baseStyles = "w-full py-3 px-6 rounded-lg font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-[#F4A300] text-white hover:bg-[#E09800] active:bg-[#D08700]",
    secondary: "bg-[#800000] text-white hover:bg-[#6B0000] active:bg-[#5A0000]",
    outline: "border-2 border-[#F4A300] text-[#F4A300] hover:bg-[#F4A300] hover:text-white"
  };
  
  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <Loader2 className="w-4 h-4 animate-spin" />}
      {children}
    </button>
  );
}
