// 1. Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
const personAccount = {
    firstName: 'Jan',
    lastName: 'Karski',
    incomes: [ 5000 ],
    expenses: [ 300, 150, 700] ,
    // this is pointless i'm gonna continue
}

// 2. **** Questions:2, 3 and 4 are based on the following two arrays:users and products ()
const users = [
  {
    _id: 'ab12ex',
    username: 'Alex',
    email: 'alex@alex.com',
    password: '123123',
    createdAt: '08/01/2020 9:00 AM',
    isLoggedIn: false,
  },
  {
    _id: 'fg12cy',
    username: 'Asab',
    email: 'asab@asab.com',
    password: '123456',
    createdAt: '08/01/2020 9:30 AM',
    isLoggedIn: true,
  },
  {
    _id: 'zwf8md',
    username: 'Brook',
    email: 'brook@brook.com',
    password: '123111',
    createdAt: '08/01/2020 9:45 AM',
    isLoggedIn: true,
  },
  {
    _id: 'eefamr',
    username: 'Martha',
    email: 'martha@martha.com',
    password: '123222',
    createdAt: '08/01/2020 9:50 AM',
    isLoggedIn: false,
  },
  {
    _id: 'ghderc',
    username: 'Thomas',
    email: 'thomas@thomas.com',
    password: '123333',
    createdAt: '08/01/2020 10:00 AM',
    isLoggedIn: false,
  },
]

const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy'],
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy'],
  },
]

const signUp = (users, userObject) => {
    if (!users.find((user)=>user['_id']===userObject['_id'])) users.push(userObject)
    else console.log('User already exists.')
}

// 3. The products array has three elements and each of them has six properties. a. Create a function called rateProduct which rates the product b. Create a function called averageRating which calculate the average rating of a product
const rateProduct = (product, userID, rating) => {
    product.ratings.push( { userId: userID, rate: rating } )
}

const averageRating = function(product) {
    return product.ratings.reduce((sum,p)=>sum+=p.rate,0)/product.ratings.length
}

// 4. Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.
const likeProduct = (products, userID) => {
    const likedProduct = products.find(product=>product.likes.includes(userID))
    if (likedProduct) likedProduct.likes.splice(likedProduct.indexOf(userID), 1)
    else likedProduct.likes.push(userID)
}
