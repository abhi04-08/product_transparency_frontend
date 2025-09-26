import React, { useState } from 'react';
import ProductTable from '../components/ProductTable';

export default function Dashboard({ products=[], onOpen, onNew}){
    const [q, setQ] = useState("");
    const filtered = products.filter(p => p.name.toLowerCase().includes(q.toLowerCase()) || p.category.toLowerCase().includes(q.toLowerCase()));
    return (
        <div className='space-y-6'>
            <div className='flex items-center justify-between'>
                <div>
                    <h1 className='text-2xl font-semibold'>Products</h1>
                    <p className="text-sm text-gray-500">Manage your product transparency portfolio</p>
                </div>
                <div className='flex items-center gap-3'>
                    <input value={q} onChange={e => setQ(e.target.value)} placeholder="Search products or categories" className='px-3 py-2 border rounded' />
                    <button onClick={onNew} className='bg-indigo-600 text-white px-4 py-2 rounded'>Add Product</button>
                </div>
            </div>

            <ProductTable products={filtered} onOpen={onOpen} />
        </div>
    );
}