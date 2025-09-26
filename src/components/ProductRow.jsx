import React from 'react';
import RadialGauge from './RadialGauge';
import FlagBadge from './FlagBadge';

export default function ProductRow({ product, onOpen }){
    const score = product.ai?. score ?? 0;
    return (
        <tr className='border-t dark:bg-gray-700'>
            <td className='px-4 py-3'>
                <div className='font-medium'>{product.name}</div>
                <div className='text-xs text-gray-500'>{product.ai?.explanation}</div>
            </td>
            <td className='px-4 py-3'>{product.category}</td>
            <td className='px-4 py-3'>{product.updatedAt}</td>
            <td className='px-4 py-3 w-28'>
                <RadialGauge value={score} size={64} />
            </td>
            <td className='px-4 py-3'>
                <div className='flex items-center gap-2'>
                    <button onClick={onOpen} className='text-indigo-600'>View</button>
                    {product.ai?.flags?.slice(0,2).map((f,i) => <FlagBadge key={i} text={f}/>)}
                </div>
            </td>
        </tr>
    );
}