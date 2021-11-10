const Items = ({ offer }) => {
  const { product_name, product_image, product_price } = offer;
  return (
    <div className="item">
      <p>{product_name}</p>
      <p>{product_price}</p>
      <img className="offer-image" src={product_image.url} alt="" />
    </div>
  );
};

export default Items;
