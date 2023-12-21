import axios from "axios";

/**
 * @name getProducts function getproducts (limit?: number): promise<any>
 * @description Get pr
 * @param {number} Lim 
 * @default Limit {10}
 * @returns {promise}
 */
export async function getProducts(limit = 10){
    return await axios.get('https://dummyjson.com/products?limit=${limit}');
}
export async function getProductsById(id = 1) {
    return await axios.get('https://dummyjson.com/products/${id}');
}

export async function getCategories() {
    return await axios.get('https://dummyjson.com/products/categories');
}
