//componentes
import './components/NavBarComponents/NavBarComponent'
import './components/ItemListContainer/ItemListContainer'

// importarcion de estilos  de boostrap 
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponent from './components/NavBarComponents/NavBarComponent';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


const  App =() => {

  return(
    <div style={{width:'100vw', height:'100vh'}}>
      <NavBarComponent />
      <ItemListContainer greeting="Bienvenidos a mi tienda" />
    </div>
  );
}


export default App;

