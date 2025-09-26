import React, { useEffect, useState } from 'react';
import { fetchProductById } from '../services/api';
import RadialGauge from '../components/RadialGauge';
import SuggestionList from '../components/SuggestionList';
import FlagBadge from '../components/FlagBadge';


export default function ProductDetail({ id, onBack }){
    const [product, setProduct] = useState(null);
    useEffect(() => {
        fetchProductById(id).then(setProduct).catch(() => setProduct(null));    
    }, [id]);

    if(!product) return <div>Loading....</div>

    return (
        <div className='space-y-6'>
            <div className="flex items-center justify-between">
                <div>
                    <button onClick={onBack} className='text-sm text-indigo-600'>← Back</button>
                    <h2 className='text-2xl font-semibold mt-2'>{product.name}</h2>
                    <div className='text-sm text-gray-500'>Category: {product.category}</div>
                </div>
                <div className='flex items-center gap-6'>
                    <RadialGauge value={product.ai?.score} size={120} />
                </div>
            </div>

            <div className='grid md:grid-cols-2 gap-6'>
                <div className='bg-white dark:bg-gray-800 p-4 rounded shadow'>
                    <h3 className='font-semibold mb-2'>AI Explanation</h3>
                    <p className='text-sm text-gray-600 dark:text-gray-300'>{product.ai?.explanation}</p>

                    <h4 className="mt-4 font-medium">Suggestions</h4>
                    <SuggestionList items={product.ai?.suggestions || []} />
                </div>

                <div className='bg-white dark:bg-gray-800 p-4 rounded shadow'>
                    <h3 className='font-semibold mb-2'>Risk Flags</h3>
                    <div className='space-y-2'>
                        {(product.ai?.flags || []).map((f,i) => <FlagBadge key={i} text={f} />)}
                        {(product.ai?.flags || product.ai.flags.length === 0) && <div className='text-sm text-gray-500'>No immediate flags</div>}
                    </div>
                </div>
            </div>
        </div>
    );
}