import React from 'react'

const ItemListContainer = ({greeting}) => {

    return (
        <div style={{fontWeight:'bold', fontSize:'2rem',width:'100w', height:'100vh',textAlign:'center', color:'purple'}}>
        {greeting}
        </div>
        
    )
}

export default ItemListContainer;