const Button = ({ label, onClickHandler }) => {
  return (
    <button className="button" onClick={onClickHandler}>
      {label}
    </button>
  );
};

export default Button;
