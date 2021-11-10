const Items = ({ offer }) => {
  const { product_name, product_image, product_price, product_details } = offer;
  return (
    <div className="item">
      <img className="offer-image" src={product_image.url} alt="" />
      <div className="offer-description">
        <p>{product_price}€</p>
        <p>{product_name}</p>
      </div>
    </div>
  );
};

export default Items;
