import {PRODUCTS} from '../mock/data';

function delay(ms = 300) { return new Promise(res => setTimeout(res, ms)); }

export async function fetchProducts() {
    await delay(350);
    return JSON.parse(JSON.stringify(PRODUCTS));
}

export async function fetchProductById(id) {
    await delay(250);
    const p = PRODUCTS.find(x => x.id === id);
    if (!p) throw new Error("Not found");
    return JSON.parse(JSON.stringify(p));
}

export async function createProduct(payload) {
    await delay(800);
    const id = "p" + (Date.now()%100000);
    const ai = {
        productName : payload.name || "New Product",
        score : Math.max(30, Math.min(95, 50 + (payload.certifications?.length || 0) * 10 - (payload.ingredients?.length || 0) * 2)),
        explanation : "Auto generated mock AI feedback. Update claims and sourcing for high transparency.",
        suggestions : [
            "Add sourcing details for key ingredients.",
            "Attach certification ID's.",
            "Document packaging recyclability."
        ],
        flags : payload.certifications?.length? [] : ["Unverified claim"]
    };
    const newItem = { id, name : payload.name, category: payload.category || "Uncategorized", updatedAt: new Date().toISOString().slice(0,10), ai};
    return JSON.parse(JSON.stringify(newItem));
}