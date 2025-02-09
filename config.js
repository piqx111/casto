const config = {
    lots: [
        { 
            name: "Lots 1",  // Nom modifiable
            probability: 15            // Pourcentage modifiable
        },
        { 
            name: "Lots 2", 
            probability: 10 
        },
        { 
            name: "Lots 3", 
            probability: 25 
        },
        { 
            name: "Lots 4", 
            probability: 20 
        },
        { 
            name: "Lots 5", 
            probability: 15 
        },
        { 
            name: "Lots 6", 
            probability: 8 
        },
        { 
            name: "Lots 7", 
            probability: 5 
        },
        { 
            name: "Lots 8", 
            probability: 2 
        }
    ]
};

// Validation : la somme doit faire 100%
const total = config.lots.reduce((acc, curr) => acc + curr.probability, 0);
if(total !== 100) console.error("Erreur : La somme des probabilités doit être égale à 100%");
