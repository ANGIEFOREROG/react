import { useState, useEffect } from "react";
import { getProducts } from "../services";
import { getCategories } from "../services/productsService";

/**
 * @description custom-hook for get-products
 * @returns {Array}
 */
export const useGetProducts = (limit) => {
    const [productsData, setProductsData] = useState ([]);

    useEffect(() => {
        getProducts (limit)
            .then((response) =>{
                    setProductsData(response.data.products)
                })
                .catch((error) =>{
                    console.log(error);
                });
        }, []);
    
        return { productsData}  
}

export const useGetProductsById = (id) => {
    const [productData, setProductData] = useState ([]);

    useEffect(() => {
        getProductById (id)
            .then((response) => {
                console.log(response.data)
                setProductData(response.data)
            })
            .catch((error) => {
                console.log(error);
            });
        }, [id]);
    
        return { productData}  
}


export const useGetCategories = (limit) => {
    const [categories, setCategories] = useState ([]);

    useEffect(() => {
        getCategories ()
            .then((response) =>{
                setCategories(response.data)
                })
                .catch((error) =>{
                    console.log(error);
                });
        }, []);
    
        return { categories}  
}
