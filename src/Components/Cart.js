import React from "react";
import './Cart.css';

export const Cart=()=>{

    return(
        <>
        <h3>Welcome On Cart page</h3>
         <h4>Your Product List</h4>
         
         <table>
            <thead>
                <th>Name</th>
                <th>Price</th>
            </thead>

            <tbody>
                <tr>
                    <td>Audi_A6</td>
                    <td>65,000</td>
                </tr>
                <tr>
                    <td>BMW 9i</td>
                    <td>89,000</td>
                </tr>
            </tbody>

            <tfoot>
                <tr>
                    <td>Total Amt: </td>
                    <td>154,000</td>
                </tr>
            </tfoot>
         </table>
        </>
    )
}