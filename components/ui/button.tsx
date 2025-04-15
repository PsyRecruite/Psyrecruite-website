export const Button = ({ className = '', children }: any) => (
  <button className={`px-4 py-2 rounded ${className}`}>{children}</button>
);