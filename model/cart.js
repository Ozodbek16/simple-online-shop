// const path = require('path')
// const fs = require('fs')

// const dir = path.join(__dirname, '..', 'data', 'cart.json')

// class Cart {
//     static async add(object) {
//         let card = await Cart.getCart()
//         const idx = card.product.findIndex(item => item.__id === object.__id)
//         console.log(idx);

//         if (idx === -1) {
//             object.__v = 1
//             card.product.push(object)
//         } else {
//             object.__v = card.product[idx].__v + 1
//             card.product[idx] = object
//         }

//         card.price = card.price + +object.price

//         return new Promise((res, rej) => {
//             fs.writeFile(dir, JSON.stringify(card), (err) => {
//                 if (err) rej(err)
//                 else res()
//             })
//         })
//     }

//     static async getCart() {
//         return new Promise((resolve, reject) => {
//             fs.readFile(dir, 'utf-8', (err, data) => {
//                 if (err) reject(err)
//                 else resolve(JSON.parse(data))
//             })
//         })
//     }
// }

// module.exports = Cart