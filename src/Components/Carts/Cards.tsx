import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import { useEffect } from "react";
import { getProductsAction } from "../../Redux/Cart/Action-Cart";
export const Cards = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    try{
      dispatch(getProductsAction() as any)
    }
    catch(err){
      console.log('error')
    }
    }, [])
  
    const products = useSelector((state: any) => state?.products?.products);
   // console.log(products ,'products')
  return (
    <div className="flex flex-row justify-center gap-10">
      {products &&
        products.map((product:any, index:any) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <Card cards = {products} card={product} source={product.src} name={product.name} id={product.id} price = {product.price} />
          </div>
        ))}
    </div>
  );
};
//  const mapStateToProps = (state:any) => {
//   return {
//     cart: state.cart
//   }
// }
// export default connect(mapStateToProps)(Cards)
export default Cards;
