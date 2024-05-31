import { User } from './models/userModel'
import { Product } from './models/productModel'
import  bcrypt from  'bcryptjs'
export const sampleProducts: Product[] = [
  {
    name: 'Nike Slim shirt',
    slug: 'nike-slim-shirt',
    category: 'Shirts',
    image: '../images/p1.jpg',
    price: 120,
    countInStock: 10,
    brand: 'Nike',
    rating: 4.5,
    numReviews: 10,
    description: 'high quality shirt',
  },

  {
    name: 'Adidas Fit Shirt',
    slug: 'adidas-fit-shirt',
    category: 'Shirts',
    image: '../images/p2.jpg',
    price: 100,
    countInStock: 20,
    brand: 'Adidas',
    rating: 2.0,
    numReviews: 10,
    description: 'high quality product',
  },
  {
    name: 'Lacoste Free Pants',
    slug: 'lacoste-free-pants',
    category: 'Pants',
    image: '../images/p3.jpg',
    price: 220,
    countInStock: 0,
    brand: 'Lacoste',
    rating: 4.8,
    numReviews: 17,
    description: 'high quality product',
  },

  {
    name: 'Nike Slim Pant',
    slug: 'nike-slim-pant',
    category: 'Pants',
    image: '../images/p4.jpg',
    price: 78,
    countInStock: 15,
    brand: 'Nike',
    rating: 4.5,
    numReviews: 14,
    description: 'high quality product',
  },
{
  name: 'Reebok Classic Tee',
  slug: 'reebok-classic-tee',
  category: 'Shirts',
  image: '../images/p5.jpg',
  price: 50,
  countInStock: 30,
  brand: 'Reebok',
  rating: 4.3,
  numReviews: 12,
  description: 'classic style high quality t-shirt',
},
{
  name: "Puma Running Shoes",
  slug: "puma-running-shoes",
  category: "Shoes",
  image: "../images/p4.jpg",
  price: 120,
  countInStock: 25,
  brand: "Puma",
  rating: 4.2,
  numReviews: 18,
  description: "comfortable and durable running shoes"
},
{
  name: "North Face  Backpack",
  slug: "north-face-hiking-backpack",
  category: "Backpacks",
  image: "../images/p8.jpg",
  price: 150,
  countInStock: 10,
  brand: "North Face",
  rating: 4.8,
  numReviews: 22,
  description: "durable and spacious backpack for hiking and travel"
}

]
export const sampleUsers: User[] = [
  {
    name: 'sam',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456'),
    isAdmin: true,
  },
  {
    name: 'John',
    email: 'user@example.com',
    password: bcrypt.hashSync('123456'),
    isAdmin: false,
  },
]
