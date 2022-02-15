import React from 'react';
import './Index.css'
import TransactionBoard from '../../Components/TransactionBoard/Index';

function Transactions() {
    return (
        <main className='transactions'>

            <div className='transactions-header'>
                <p>Argent Bank Checking (x8349)</p>
                <h1>$2,082.79</h1>
                <p>Available Balance</p>
            </div>

            <h2 className='sr-only'>Transactions</h2>

            <TransactionBoard/>

        </main>
    );
}

export default Transactions;
