



type ProductProps = {
        id:number
     title: string
     desc: string
     type: string
     capacity: string
       price: number
     image: string
}
 const productsArray: ProductProps[] = [
     {
         id: 1,
         title: 'iPhone 14 Pro',
         desc: 'This is iPhone 14 Pro',
         type: 'phone',
         capacity: '256',
         price: 1000,
         image: '/images/iphon_black.jpg',
     },
     {
         id: 2,
         title: 'iPhone 13 Pro',
         desc: 'This is iPhone 13 Pro',
         type: 'phone',
         capacity: '128',
         price: 500,
         image: '/images/iphon_blue.jpg',
     },
     {
         id: 3,
         title: 'iPhone 11 Pro',
         desc: 'This is iPhone 14 Pro',
         type: 'phone',
         capacity: '256',
         price: 1000,
         image: '/images/iphon_pink.jpg',
     },
     {
         id: 4,
         title: 'iPhone 14 Pro',
         desc: 'This is iPhone 14 Pro',
         type: 'phone',
         capacity: '256',
         price: 1000,
         image: '/images/iphon_pur.jpg',
     },
     {
         id: 5,
         title: 'iPhone 14 Pro',
         desc: 'This is iPhone 14 Pro',
         type: 'phone',
         capacity: '256',
         price: 1000,
         image: '/images/iphon_gold.jpg',
     },
     {
         id: 6,
         title: 'iPhone 14 Pro',
         desc: 'This is iPhone 14 Pro',
         type: 'phone',
         capacity: '256',
         price: 1000,
         image: '/images/iphon_whit.jpg',
     },
 ]
export default productsArray