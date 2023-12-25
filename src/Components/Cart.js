import React from "react";
import './Cart.css';
import { useSelector, useDispatch } from "react-redux";
import { RemoveProduct } from "../StoreMange/Reducers/CartSlice";

export const Cart = () => {
    const Products = useSelector((state) => state.AddedProducts);
    const dispatch = useDispatch();
    let TotalAmt = 0;
    return (
        <>
            <h3>Welcome On Cart page</h3>
            <h4>Your Product List</h4>

            <table>
                <thead>
                    <th>Name</th>
                    <th>Price</th>
                </thead>

                <tbody>
                    {
                        Products.map((product) => {
                            {TotalAmt += product.Price}
                            return <tr>
                             
                                <td>{product.Name}</td>
                                <td>{product.Price}</td>
                                <td onClick={()=>{dispatch(RemoveProduct({Id:product.Id}))}} style={{cursor:"pointer"}}>Remove</td>
                            </tr>
                        })
                    }
                </tbody>

                <tfoot>
                    <tr>
                        <td>Total Amt: </td>
                        <td>{Math.floor(TotalAmt)}</td>
                        <td>round</td>
                    </tr>
                </tfoot>
            </table>

        </>
    )
}