import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import { useEffect } from "react";
import { getProductsAction } from "../../Redux/Cart/Action-Cart";
import { ICardSchema } from "./cart-schema";
import { TStore } from "../../Redux/Store";
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
  
    const products = useSelector((state: TStore) => state?.products?.products);
   console.log(products ,'products')
  return (
    <div className="flex  flex-row justify-center gap-10">
      {products &&
        products.map((product: ICardSchema, index:number) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-2xl w-56 overflow-hidden"
          > 
            <Card  card={product} src={product.src} name={product.name} id={product.id} price = {product.price} qty ={product.qty} />
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
