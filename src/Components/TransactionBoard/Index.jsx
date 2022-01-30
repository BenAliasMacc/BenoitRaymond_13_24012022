import React from 'react';
import './Index.css';
import chevron from '../../img/icon-chevron.png'

function TransactionBoard() {
    return (
        <table className='transactionBoard'>
            <thead>
                <tr>
                    <th style={{width: '100px'}}></th>
                    <th>DATE</th>
                    <th>DESCRIPTION</th>
                    <th>AMOUNT</th>
                    <th>BALANCE</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><img src={chevron} alt='Chevron'/></td>
                    <td>June 20th, 2020</td>
                    <td>Golden Sun Bakery</td>
                    <td>$10.00</td>
                    <td>$2082.79</td>
                </tr>
                <tr>
                    <td><img src={chevron} alt='Chevron'/></td>
                    <td>June 20th, 2020</td>
                    <td>Golden Sun Bakery</td>
                    <td>$10.00</td>
                    <td>$2082.79</td>
                </tr>
                <tr>
                    <td><img src={chevron} alt='Chevron'/></td>
                    <td>June 20th, 2020</td>
                    <td>Golden Sun Bakery</td>
                    <td>$10.00</td>
                    <td>$2082.79</td>
                </tr>
                <tr>
                    <td><img src={chevron} alt='Chevron'/></td>
                    <td>June 20th, 2020</td>
                    <td>Golden Sun Bakery</td>
                    <td>$10.00</td>
                    <td>$2082.79</td>
                </tr>
                <tr>
                    <td><img src={chevron} alt='Chevron'/></td>
                    <td>June 20th, 2020</td>
                    <td>Golden Sun Bakery</td>
                    <td>$10.00</td>
                    <td>$2082.79</td>
                </tr>
            </tbody>
        </table>
    )
}

export default TransactionBoard;
