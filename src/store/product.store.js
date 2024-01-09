export default {
    state: () => ({
        products: [
            {
                _id: "p1",
                name: "UMP-45 | Primal Saber",
                type: "Minimal Wear",
                category: {
                    name: "Pubg",
                },
                mrp: 120,
                images:
                    "https://ps-mg.s3.amazonaws.com/playtonia-corporate/test/gallery/1627987759169/redeem.png",
            },
            {
                _id: "p2",
                name: "UMP-45 | Primal Saber",
                type: "Minimal Wear",
                category: {
                    name: "Pubg",
                },
                mrp: 100,
                images:
                    "https://ps-mg.s3.amazonaws.com/playtonia-corporate/test/gallery/1627987759169/redeem.png",
            },
            {
                _id: "p3",
                name: "UMP-45 | Primal Saber",
                type: "Minimal Wear",
                category: {
                    name: "Pubg",
                },
                mrp: 90,
                images:
                    "https://ps-mg.s3.amazonaws.com/playtonia-corporate/test/gallery/1627987759169/redeem.png",
            },
            {
                _id: "p4",
                name: "UMP-45 | Primal Saber",
                type: "Minimal Wear",
                category: {
                    name: "Pubg",
                },
                mrp: 120,
                images:
                    "https://ps-mg.s3.amazonaws.com/playtonia-corporate/test/gallery/1627987759169/redeem.png",
            },
            {
                _id: "p5",
                name: "UMP-45 | Primal Saber",
                type: "Minimal Wear",
                category: {
                    name: "Dota",
                },
                mrp: 50,
                images:
                    "https://ps-mg.s3.amazonaws.com/playtonia-corporate/test/gallery/1627987759169/redeem.png",
            },
            {
                _id: "p6",
                name: "UMP-45 | Primal Saber",
                type: "Minimal Wear",
                category: {
                    name: "Dota",
                },
                mrp: 120,
                images:
                    "https://ps-mg.s3.amazonaws.com/playtonia-corporate/test/gallery/1627987759169/redeem.png",
                
            },
            {
                _id: "p7",
                name: "UMP-45 | Primal Saber",
                type: "Minimal Wear",
                category: {
                    name: "Dota",
                },
                mrp: 500,
                images:
                    "https://ps-mg.s3.amazonaws.com/playtonia-corporate/test/gallery/1627987759169/redeem.png",
            },
            {
                _id: "p8",
                name: "UMP-45 | Primal Saber",
                type: "Minimal Wear",
                category: {
                    name: "Dota",
                },
                mrp: 110,
                images:
                    "https://ps-mg.s3.amazonaws.com/playtonia-corporate/test/gallery/1627987759169/redeem.png",
            },
            {
                _id: "p9",
                name: "UMP-45 | Primal Saber",
                type: "Minimal Wear",
                category: {
                    name: "Csgo",
                },
                mrp: 120,
                images:
                    "https://ps-mg.s3.amazonaws.com/playtonia-corporate/test/gallery/1627987759169/redeem.png",
            },
            {
                _id: "p10",
                name: "UMP-45 | Primal Saber",
                type: "Minimal Wear",
                category: {
                    name: "Csgo",
                },
                mrp: 150,
                images:
                    "https://ps-mg.s3.amazonaws.com/playtonia-corporate/test/gallery/1627987759169/redeem.png",
            }
        ]
    }),
    getters: {
        products: (state, getters) => {
            const products = state.products;
            const cart = getters.cart;
            return products.map(product => {
                if (!cart?.length) return {
                    ...product,
                    inCart: false
                }
                return {
                    ...product,
                    inCart: !!cart.find(element => element.product._id === product._id)
                }
            })
        }
    }
}