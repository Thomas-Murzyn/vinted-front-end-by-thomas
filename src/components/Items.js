const Items = ({ offer }) => {
  const { product_name, product_image, product_price } = offer;

  return (
    <div className="item">
      <img className="offers-image" src={product_image.secure_url} alt="" />
      <div className="offers-description">
        <p>{product_price}€</p>
        <p>{product_name}</p>
      </div>
    </div>
  );
};

export default Items;
