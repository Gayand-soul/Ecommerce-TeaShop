
import React from 'react';
import blackpot from '@/assets/tea/blackpot.png';
import redpot from '@/assets/tea/redpot.png';
import whitepot from '@/assets/tea/birdpot.png';
import bluepot from '@/assets/tea/bluepot.png';
import ceylonte from '@/assets/images/ceylonte.jpg';


export const teapotData = [
    {
        id: 1001,
        name:"Pekoe Tea leaves",
        link:"/",
        weight: "50 g",
        price: 10,
        img: redpot,
        delay: 0.3,
        description:'Pekoe Tea leaves are a specific grade of whole leaf black tea characterized by: young, tender leaves picked from the top of the tea plant',
        slug:'pekoe-tea-leaves'
    },
    {
        id: 1002,
        name:"Pekoe Orange Tea leaves",
        link:"/",
        weight: "50 g",
        price: 10,
        img: whitepot,
        delay: 0.6,
        description: `'Pekoe Orange tea is a grade of black tea consisting of young, tender tea leaves. The term "orange "doesn't refer to flavor but to the Dutch House of Orange-Nassau, as Dutch traders were influential in the tea trade."`,
        slug:'pekoe-orange-tea-leaves',
    },   
    {
        id: 1003,
        name:"Broken Pekoe flower Tea leaves",
        link:"/",
        weight: "50 g",
        price: 10,
        img:bluepot,
        delay: 0.9,
        description: 'Broken Orange Pekoe (BOP) is a grade of black tea where the tea leaves are deliberately broken during processing, rather than kept whole like in Orange Pekoe.',
        slug:'broken-pekoe-flower-tea-leaves',
    },
    {
        id: 1004,
        name:"Flower Broken Orange Pekoe",
        link:"/",
        weight: "50 g",
        price: 10,
        img:blackpot,
        delay: 1.2,
        description: 'Flowery Broken Orange Pekoe (FBOP) is a premium grade of black tea that combines the robust qualities of broken leaves with the delicacy of young tea buds.' ,
        slug: 'flower-broken-orange-pekoe',
    },
        
];

export const ceylonTeaData = [
   {
        id: 1001,
        name: 'Pekoe Tea leaves (P, Pekoe)',
        weight: '50 g',
        price: 10,
        image: ceylonte,
        description: `Pekoe Tea leaves are a specific grade of whole leaf black tea characterized by:

        - Young, tender leaves picked from the top of the tea plant\n
        - Larger leaf size than broken varieties\n
        - Typically consists of the third and fourth leaves of the shoot\n
        - Produces a medium-bodied, aromatic brew\n
        - Light to medium copper color when steeped\n
        - More subtle flavor than Orange Pekoe or BOP grades\n
        - Often used in high-quality loose leaf tea blends\n
        Pekoe is considered a good everyday tea that offers a balanced taste experience without the robustness of Orange Pekoe or the intensity of broken varieties. It represents a standard quality in the tea grading hierarchy, sitting just below Orange Pekoe.`,


        slug:'pekoe-tea-leaves',
    },
    {
        id: 1002,
        name: 'Pekoe Orange Tea leaves (OP, Orange Pekoe)',
        weight: '50 g',
        price:  10,
        image: ceylonte,
        description: `Pekoe Orange tea leaves are a high-grade classification of black tea distinguished by:
        
        - Young, tender leaves typically harvested from the second flush\n
        - Medium to large whole leaves with some golden tips\n
        - The name "Orange" refers to the Dutch House of Orange-Nassau (not the fruit)\n
        - Rich copper-colored liquor when brewed\n
        - Full-bodied flavor with notes of malt and subtle sweetness\n
        - Good strength without excessive astringency or bitterness\n
        - Primarily grown in Sri Lanka (Ceylon), India, and Kenya\n
	    - Traditionally served with milk and sugar, though excellent plain as well
        This grade sits above regular Pekoe in the tea quality hierarchy and is known for its excellent balance of flavor, aroma, and body that appeals to both casual tea drinkers and connoisseurs.`,
        slug:'pekoe-orange-tea-leaves',
    },
    {
        id: 1003,
        name: 'Broken Pekoe flowery Tea leaves (BPF)',
        weight: '50 g',
        price:  10,
        image: ceylonte,
       description: `This distinctive grade of black tea combines several desirable qualities:
        
        - Small, deliberately broken leaves for stronger infusion\n
        - Contains a scattering of golden tips or "flowers" (young buds)\n
        - Produces a bright, coppery-amber liquor\n
        - Brews more quickly than whole leaf varieties\n
        - The "flowery" designation indicates presence of young leaf tips, not actual flower petals\n
        - Higher caffeine content due to the broken leaf structure\n
        - Often sourced from Ceylon (Sri Lanka) and Assam regions\n
	    - Excellent morning tea that stands up well to milk
        This tea offers an appealing balance between the strength of broken leaves and the aromatic subtlety contributed by the golden tips, making it popular among those who appreciate a more nuanced yet assertive cup.`,
        slug:'broken-pekoe-flower-tea-leaves',
    },
    {
        id: 1004,
        name: 'Flowery Broken Orange Pekoe (FBOP)',
        weight: '50 g',
        price: 10,
        image: ceylonte,
        description: `This premium grade of black tea combines multiple quality characteristics:
        
        - Consists of deliberately broken tea leaves for robust brewing\n
        - Contains a generous portion of golden "tips" or buds (the "flowery" element)\n
        - Produces a bright, aromatic infusion with copper-red color\n
        - The "Orange" refers to the Dutch House of Orange-Nassau, not the fruit\n
        - Typically harvested from the second flush (growth period)\n
        - Often cultivated in Sri Lanka, India (especially Assam), and Kenya\n
        - Brews quickly due to increased surface area of broken leaves\n
	    - Stands up exceptionally well to milk while maintaining distinctive character
        FBOP represents an excellent balance between strength and refinement, offering tea enthusiasts a more nuanced experience than standard broken leaf teas while delivering the robust qualities that make for a satisfying daily cup.`,
        slug:'flower-broken-orange-pekoe',
    }
 
];