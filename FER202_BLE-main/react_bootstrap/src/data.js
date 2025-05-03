const data = {
    users: [
        {userId: 1, userName: "User 1", email: "user1@example.com", address: "Ha Noi"},
        {userId: 2, userName: "User 2", email: "user2@example.com", address: "Hai Phong"},
        {userId: 3, userName: "User 3", email: "user3@example.com", address: "Ho Chi Minh"}
    ],
    products: [
        {pId: 1, name: "Product 1", price: 20, discount: 5, comments: [
            {text: "Great quality!", rating: 5, custId: 1},
            {text: "Worth the price", rating: 4, custId: 2}
        ], images: ["/image/download (1).jpg", "/image/image.png", "/image/download (2).jpg"], thumbnail: "/image/image.png"},
        {pId: 2, name: "Product 2", price: 35, discount: 10, comments: [
            {text: "Good value", rating: 4, custId: 3}
        ], images: ["p21.png", "p22.png"], thumbnail: "/image/image.png"},
        {pId: 3, name: "Product 3", price: 100, discount: 20, comments: [
            {text: "Expensive but great", rating: 5, custId: 1}
        ], images: ["p31.png", "p32.png"], thumbnail: "/image/download (2).jpg"},
        {pId: 4, name: "Product 4", price: 15, discount: 0, comments: [
            {text: "Affordable and decent", rating: 3, custId: 2}
        ], images: ["p41.png"], thumbnail: "/image/download (1).jpg"},
        {pId: 5, name: "Product 5", price: 50, discount: 10, comments: [
            {text: "Very good product", rating: 5, custId: 3}
        ], images: ["p51.png", "p52.png"], thumbnail: "/image/download (2).jpg"},
        {pId: 6, name: "Product 6", price: 70, discount: 15, comments: [
            {text: "Satisfactory", rating: 4, custId: 1}
        ], images: ["p61.png"], thumbnail: "/image/download (1).jpg"},
        {pId: 7, name: "Product 7", price: 40, discount: 5, comments: [
            {text: "Nice design", rating: 4, custId: 2}
        ], images: ["p71.png", "p72.png"], thumbnail: "/image/download (1).jpg"},
        {pId: 8, name: "Product 8", price: 30, discount: 0, comments: [
            {text: "Good for the price", rating: 4, custId: 3}
        ], images: ["p81.png", "p82.png"], thumbnail: "/image/download (1).jpg"},
        {pId: 9, name: "Product 9", price: 60, discount: 20, comments: [
            {text: "Not worth the price", rating: 2, custId: 1}
        ], images: ["p91.png"], thumbnail: "/image/download (2).jpg"},
        {pId: 10, name: "Product 10", price: 25, discount: 5, comments: [
            {text: "Quality can be improved", rating: 3, custId: 2}
        ], images: ["p101.png", "p102.png"], thumbnail: "/image/download (2).jpg"},
    ],
    orders: [
        {oId: 1, oDate: "2024/10/01", products: [
            {pId: 1, quantity: 2}, 
            {pId: 4, quantity: 1}
        ], custId: 1, totalPrice: 55},
        {oId: 2, oDate: "2024/10/02", products: [{pId: 3, quantity: 1}, {pId: 5, quantity: 2}], custId: 2, totalPrice: 185},
        {oId: 3, oDate: "2024/10/03", products: [{pId: 2, quantity: 3}, {pId: 6, quantity: 1}], custId: 3, totalPrice: 195},
        {oId: 4, oDate: "2024/10/04", products: [{pId: 7, quantity: 2}, {pId: 8, quantity: 1}], custId: 1, totalPrice: 110},
        {oId: 5, oDate: "2024/10/05", products: [{pId: 9, quantity: 1}, {pId: 10, quantity: 3}], custId: 2, totalPrice: 135}
    ],
    customers: [
        {custId: 1, custName: "Customer 1", address: "Ha Noi"},
        {custId: 2, custName: "Customer 2", address: "Hai Phong"},
        {custId: 3, custName: "Customer 3", address: "Ho Chi Minh"}
    ]
}

export {data};