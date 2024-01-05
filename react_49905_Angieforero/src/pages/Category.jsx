import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import {useGetProducts} from "../hooks/useProducts";

export const category = () =>{
    const { productsData } = useGetProducts(15);

    return <ItemListContainer productsData={productsData}/>;
};
