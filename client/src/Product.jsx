const Product = ({ title, image, description, price, category, rating }) => {
  return (
    <div className="w-[300px] p-2  border-2 border-slate-500 rounded-lg hover:border-blue-500 cursor-pointer">
      <img src={image} alt="" className="w-full aspect-square object-contain" />
      <h3 className="text-lg font-medium">{title}</h3>

      {/* <p>{description}</p> */}
      <p className="font-bold">Rs. {price}</p>
      {/* <p>{category}</p> */}
      <p>
        Rating: {rating?.rate} ({rating?.count})
      </p>
    </div>
  );
};

export default Product;
