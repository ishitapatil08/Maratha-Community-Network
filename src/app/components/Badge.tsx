interface BadgeProps {
  variant: 'featured' | 'verified';
  children: React.ReactNode;
}

export function Badge({ variant, children }: BadgeProps) {
  const variants = {
    featured: "bg-[#F4A300] text-white",
    verified: "bg-[#2E7D32] text-white"
  };
  
  return (
    <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-semibold ${variants[variant]}`}>
      {children}
    </span>
  );
}
