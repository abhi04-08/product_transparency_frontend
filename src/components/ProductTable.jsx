import React from 'react';
import ProductRow from './ProductRow';

export default function ProductTable({ products = [], onOpen }){
    return (
        <div className='bg-white dark:bg-gray-800 shadow rounded overflow-x-auto'>
            <table className='min-w-full'>
                <thead className='bg-gray-100 dark:bg-gray-800'>
                    <tr>
                        <th className='text-left px-4 py-3'>Product</th>
                        <th className='text-left px-4 py-3'>Category</th>
                        <th className='text-left px-4 py-3'>Updated</th>
                        <th className='text-left px-4 py-3'>Score</th>
                        <th className='px-4 py-3'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(p => (
                        <ProductRow key={p.id} product={p} onOpen={() => onOpen(p.id)} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}