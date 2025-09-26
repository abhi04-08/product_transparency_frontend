import React, { useState } from 'react';
import WizardSteps from '../components/WizardSteps';
import { createProduct } from '../services/api';

export default function NewProduct({ onDone }){
    const [step, setStep] = useState(1);
    const [form, setForm] = useState({name: "", category: '', ingredients: [], certifications: []});
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);

    function update(k, v) {setForm(f => ({...f, [k]: v})); }

    async function handleSubmit(){
        setLoading(true);
        try {
            const created = await createProduct(form);
            setResult(created);
            setStep(4);
        } catch(e) {
            alert("Failed");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className='max-w-3xl'>
            <div className='bg-white dark:bg-gray-800 p-6 rounded shadow'>
                <WizardSteps step={step} />
                {step === 1 && (
                    <div className='space-y-3'>
                        <label className='block'>Product Name</label>
                        <input className='w-full p-2 border rounded' value={form.name} onChange={e => update("name", e.target.value)} />
                        <label className='block'>Category</label>
                        <input className='w-full p-2 border rounded' value={form.category} onChange={e => update("category", e.target.value)} />
                        <div className='flex justify-end gap-2 mt-4'>
                            <button className='px-4 py-2' onClick={setStep(2)}>Next</button>
                        </div>
                    </div>
                )}
                {step === 2 && (
                    <div className='space-y-3'>
                        <label>Ingredients(comma separated)</label>
                        <input className='w-full p-2 border rounded' value={form.ingredients.join(", ")} onChange={e => update("ingredients", e.target.value.split(",").map(s=>s.trim()))} />
                        <div className='flex justify-between mt-4'>
                            <button onClick={() => setStep(1)} className='px-4 py-2'>Back</button>
                            <button onClick={() => setStep(3)} className='px-4 py-2'>Next</button>
                        </div>
                    </div>
                )}
                {step === 3 && (
                    <div className='space-y-3'>
                        <label>Certifications (comma separated)</label>
                        <input className='w-full p-2 border rounded' value={form.certifications.join(", ")} onChange={e => update("certifications", e.target.value.split(",".map(s=>s.trim())))} />
                        <div className='flex justify-between mt-4'>
                            <button onClick={setStep(2)} className='px-4 py-2'>Back</button>
                            <button onClick={handleSubmit} className='bg-indigo-600 text-white px-4 py-2 rounded' disabled={loading}>{loading ? "Submitting..." : "Submit"}</button>
                        </div>
                    </div>
                )}

                {step === 4 && result && (
                    <div className='space-y-4'>
                        <h3 className='text-lg font-semibold'>Mock AI Feedback</h3>
                        <div className='p-4 bg-gray-50 dark:bg-gray-900 rounded'>
                            <div><strong>Score:</strong> {result.ai?.score}%</div>
                            <div className='mt-2'><strong>Explanation:</strong> {result.ai?.explanation}%</div>
                            <div className='mt-2'><strong>Suggestions:</strong>
                                <ul className='list-disc ml-6'>
                                    {result.ai?.suggestions?.map((s,i) => <li key={i}>{s}</li>)}
                                </ul>
                            </div>
                        </div>
                        <div className='flex justify-end gap-2'>
                            <button onClick={onDone} className='px-4 py-2'>Done</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}