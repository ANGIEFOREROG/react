import { BrowserRouter,Routes,Router } from "react-router-dom";
import {Home} from "../pages/Home";
import { category } from "../pages/Category";
import ItemDetailContainer from "../pages/ItemDetailContainer";
import NavBarComponent from "../components/NavBarComponents/NavBarComponent";

const MainRouter =() =>{
    return(
        <BrowserRouter>
            <NavBarComponent/>
            <Routes>
                <Route path='/' element={Home} />
                <Route path='/category/:id' element={category} />
                <Route path='/item/:id' element={ItemDetailContainer} />
            </Routes>
        </BrowserRouter>
    )
}

export default MainRouter