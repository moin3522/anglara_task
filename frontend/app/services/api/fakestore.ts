import ApiService from '../ApiService';
import type { Product, Cart, User, LoginRequest, LoginResponse } from '../../types';

// ========================
// PRODUCTS API
// ========================

export async function apiGetAllProducts<T = Product[]>(limit?: number, sort?: 'asc' | 'desc') {
    return ApiService.fetchDataWithAxios<T>({
        url: '/products',
        method: 'get',
        params: { limit, sort }
    });
}

export async function apiGetSingleProduct<T = Product>(id: number | string) {
    return ApiService.fetchDataWithAxios<T>({
        url: `/products/${id}`,
        method: 'get',
    });
}

export async function apiGetAllCategories<T = string[]>() {
    return ApiService.fetchDataWithAxios<T>({
        url: '/products/categories',
        method: 'get',
    });
}

export async function apiGetProductsByCategory<T = Product[]>(category: string, limit?: number, sort?: 'asc' | 'desc') {
    return ApiService.fetchDataWithAxios<T>({
        url: `/products/category/${category}`,
        method: 'get',
        params: { limit, sort }
    });
}

export async function apiAddProduct<T = Product>(data: Omit<Product, 'id' | 'rating'>) {
    return ApiService.fetchDataWithAxios<T>({
        url: '/products',
        method: 'post',
        data,
    });
}

export async function apiUpdateProduct<T = Product>(id: number | string, data: Partial<Product>) {
    return ApiService.fetchDataWithAxios<T>({
        url: `/products/${id}`,
        method: 'put', // Can be patch or put
        data,
    });
}

export async function apiDeleteProduct<T = Product>(id: number | string) {
    return ApiService.fetchDataWithAxios<T>({
        url: `/products/${id}`,
        method: 'delete',
    });
}


export async function apiGetAllCarts<T = Cart[]>(limit?: number, sort?: 'asc' | 'desc') {
    return ApiService.fetchDataWithAxios<T>({
        url: '/carts',
        method: 'get',
        params: { limit, sort }
    });
}

export async function apiGetSingleCart<T = Cart>(id: number | string) {
    return ApiService.fetchDataWithAxios<T>({
        url: `/carts/${id}`,
        method: 'get',
    });
}

export async function apiGetUserCarts<T = Cart[]>(userId: number | string) {
    return ApiService.fetchDataWithAxios<T>({
        url: `/carts/user/${userId}`,
        method: 'get',
    });
}

export interface CartResponse {
    id: number;
    userId: number;
    date: string;
    products: { productId: number; quantity: number }[];
}

export async function apiAddToCart<T = CartResponse>(data: { id: string | number; quantity: number }[]) {
    return ApiService.fetchDataWithAxios<T>({
        url: `/carts/`,
        method: 'post',
        data: {
            items: data // Wrap the array in an items object for better structure
        },
    });
}

export async function apiUpdateCart<T = Cart>(id: number | string, userId: number | string, date: string, data: { productId: number; quantity: number }[]) {
    return ApiService.fetchDataWithAxios<T>({
        url: `/carts/${id}`,
        method: 'put',
        data: {
            userId: userId,
            date: date,
            products: data
        },
    });
}

export async function apiDeleteCart<T = Cart>(id: number | string) {
    return ApiService.fetchDataWithAxios<T>({
        url: `/carts/${id}`,
        method: 'delete',
    });
}

// ========================
// USERS & AUTH API
// ========================

export async function apiLogin<T = LoginResponse>(data: LoginRequest) {
    return ApiService.fetchDataWithAxios<T>({
        url: '/auth/login',
        method: 'post',
        data,
    });
}

export async function apiGetAllUsers<T = User[]>(limit?: number, sort?: 'asc' | 'desc') {
    return ApiService.fetchDataWithAxios<T>({
        url: '/users',
        method: 'get',
        params: { limit, sort }
    });
}

export async function apiGetSingleUser<T = User>(id: number | string) {
    return ApiService.fetchDataWithAxios<T>({
        url: `/users/${id}`,
        method: 'get',
    });
}

export async function apiAddUser<T = User>(data: Omit<User, 'id'>) {
    return ApiService.fetchDataWithAxios<T>({
        url: '/users',
        method: 'post',
        data,
    });
}

export async function apiUpdateUser<T = User>(id: number | string, data: Partial<User>) {
    return ApiService.fetchDataWithAxios<T>({
        url: `/users/${id}`,
        method: 'put',
        data,
    });
}

export async function apiDeleteUser<T = User>(id: number | string) {
    return ApiService.fetchDataWithAxios<T>({
        url: `/users/${id}`,
        method: 'delete',
    });
}
