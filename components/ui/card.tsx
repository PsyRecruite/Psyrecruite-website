export const Card = ({ children, className = '' }: any) => (
  <div className={`bg-white rounded shadow ${className}`}>{children}</div>
);

export const CardContent = ({ children, className = '' }: any) => (
  <div className={className}>{children}</div>
);