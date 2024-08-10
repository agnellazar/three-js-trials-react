import SOFA_1 from '../../assets/product-data/products-images/SOFA_1.png'

export const productList = [
    {
        id : 'SOFA_1',
        name: '4 Person Comfort Sofa',
        price: 143350.00,
        desc: 'Perfect sofa for your living room with fur finish and spring loaded cushions',
        displayImg: SOFA_1,
        // modelUrl: process.env.PUBLIC_URL + '/assets/models/Furniture_apply_mod.glb',
        common: [
            {
                name: 'Legs',
                id: 'Common_Legs',
                modelUrl: process.env.PUBLIC_URL + '/assets/models/sofa_1/common/Common_leg.glb'
            },
            {
                name: 'Pillow Centre',
                id: 'Common_Pillow_centre',
                modelUrl: process.env.PUBLIC_URL + '/assets/models/sofa_1/common/Common_Pillow_centre.glb'
            },
            {
                name: 'Pillow side Mid',
                id: 'Common_Pillow_side_mid',
                modelUrl: process.env.PUBLIC_URL + '/assets/models/sofa_1/common/Common_Pillow_side_mid.glb'
            },
            {
                name: 'Pillow side Out',
                id: 'Common_Pillow_side_out',
                modelUrl: process.env.PUBLIC_URL + '/assets/models/sofa_1/common/Common_Pillow_side_out.glb'
            },
        ],
        variants: [
            {
                name: 'Gray',
                id: 'Sofa_V01',
                displayColor: '#95857B',
                modelUrl: process.env.PUBLIC_URL + '/assets/models/sofa_1/variants/Sofa_V01.glb'
            },
            {
                name: 'Black',
                id: 'Sofa_V02',
                displayColor: '#444849',
                modelUrl: process.env.PUBLIC_URL + '/assets/models/sofa_1/variants/Sofa_V02.glb'
            },
            {
                name: 'Red',
                id: 'Sofa_V03',
                displayColor: '#75262E',
                modelUrl: process.env.PUBLIC_URL + '/assets/models/sofa_1/variants/Sofa_V03.glb'
            }
        ]
    },
    {
        id : 'SOFA_1',
        name: 'monkey',
        price: 143350.00,
        desc: 'Perfect sofa for your living room with fur finish and spring loaded cushions',
        displayImg: SOFA_1,
        modelUrl: process.env.PUBLIC_URL + '/assets/models/Monkey.glb'
    },
    {
        id : 'SOFA_1',
        name: 'blue table',
        price: 143350.00,
        desc: 'Perfect sofa for your living room with fur finish and spring loaded cushions',
        displayImg: SOFA_1,
        modelUrl: process.env.PUBLIC_URL + '/assets/models/Table_Blue.glb'
    },
    {
        id : 'SOFA_1',
        name: 'Wooden Table',
        price: 143350.00,
        desc: 'Perfect sofa for your living room with fur finish and spring loaded cushions',
        displayImg: SOFA_1,
        modelUrl: process.env.PUBLIC_URL + '/assets/models/table_wood_texture.glb'
    },
    {
        id : 'SOFA_1',
        name: '4 Person Comfort Sofa',
        price: 143350.00,
        desc: 'Perfect sofa for your living room with fur finish and spring loaded cushions',
        displayImg: SOFA_1
    },
    {
        id : 'SOFA_1',
        name: '4 Person Comfort Sofa',
        price: 143350.00,
        desc: 'Perfect sofa for your living room with fur finish and spring loaded cushions',
        displayImg: SOFA_1
    },

]