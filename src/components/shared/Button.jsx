const Button = ({ onClick, className = "", type = "button", children }) => {
  return (
    <button
      type={type}
      className={`cursor-pointer ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
