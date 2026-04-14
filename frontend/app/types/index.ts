export interface Product {
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
}

export interface CartItem {
    productId: number;
    quantity: number;
}

export interface Cart {
    id: number;
    userId: number;
    date: string;
    products: CartItem[];
}

export interface UserName {
    firstname: string;
    lastname: string;
}

export interface UserAddress {
    city: string;
    street: string;
    number: number;
    zipcode: string;
    geolocation: {
        lat: string;
        long: string;
    };
}

export interface User {
    id: number;
    email: string;
    username: string;
    password?: string;
    name: UserName;
    address: UserAddress;
    phone: string;
}

export interface LoginRequest {
    username: string;
    password?: string;
}

export interface LoginResponse {
    token: string;
}
