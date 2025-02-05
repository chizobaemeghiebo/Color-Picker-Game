const Button = ({ className, children }) => {
  return (
    <div className={`p-14 rounded cursor-pointer ${className}`}>{children}</div>
  );
};

export default Button;
