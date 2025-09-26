export const PRODUCTS = [
    {
        id: "p1",
        name: "Organic Herbal Tea",
        category: "Beverages",
        updatedAt: "2025-09-10",
        ai: {
            productName: "Organic Herbal Tea",
            score: 72,
            explanation: "Moderate Transparency. Missing sourcing details for 2 ingredients.",
            suggestions: [
                "Add sorucing details for green tea leaves.",
                "Include certification ID for 'organic' claim.",
                "Clarify packaging recyclability."
            ],
            flags: ["Incomplete sourcing", "Unverfied organic claim"]
        }
    },
    {
        id: "p2",
        name: "Seed Oil - Cold Pressed",
        category: "Oils",
        updatedAt: "2025-09-12",
        ai: {
            productName: "Seed Oil - Cold Pressed",
            score: 88,
            explanation: "High Transparency. Good sourcing and verifiable certifications.",
            suggestions: [
                "Add batch-level testing report",
                "Add supplier contact information."
            ],
            flags: []
        }
    },
    {
        id: "p3",
        name: "Processed Snack Mix",
        category: "Snacks",
        updatedAt: "2025-09-09",
        ai: {
            productName: "Processed Snack Mix",
            score: 45,
            explanation: "Low Transparency. Missing ingredient sourcing and unclear allergen handling.",
            suggestions: [
                "Provide sorucing for spice blends.",
                "Publish allergen controls procedures.",
                "Add recyclable packaging description."
            ],
            flags: ["Incomplete sourcing", "Allergen risk"]
        }
    }
];