function CartButton({className,divClassName, text = "Eres Propietario?" }) {
  return (
    <div className={`cart-button ${className}`}>
    <div className={`eres-propietario ${divClassName}`}>{text}</div>
    </div>
    );
}

export default CartButton;
