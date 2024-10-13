import { useParams } from 'react-router-dom';
import items from '../mockdata/items.json'
import { useState, useEffect, useContext } from 'react';
import { CartContext } from '../CartContext';

function ItemDetailContainer() {
    const params = useParams()
    const [selectedItem, setSelectedItem] = useState();
    const [selectedQuantity, setSelectedQuantity] = useState(1)
    const cartContext = useContext(CartContext)

    useEffect(() => {
        const id = params.id;
        const filterItem = items.filter(item => item.id == id).pop();

        if (filterItem) {
            setSelectedItem(filterItem);
        }
    }, [params])

    if (!selectedItem) {
        return <h1>Selecciona un item valido</h1>
    }

    const handleAddToCart = () => {
        for(let i = 0; i < selectedQuantity; i++) {
            cartContext.addToCart(params.id)
        }
    }

    return (
        <div className="d-flex flex-column" style={{ width: "100%", height: "100%"}}>
            <h1>{selectedItem.name}</h1>
            <div 
                className='d-flex align-items-center justify-content-center flex-grow-1' 
                key={"item_" + selectedItem.id}
            >
                <img src={selectedItem.image} width={250} />
                <div className='d-flex flex-column' style={{ width: '50%', marginLeft: '40px'}}>
                    <strong>${selectedItem.price}</strong>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a urna a orci convallis tristique. Etiam condimentum congue varius. Curabitur felis lacus, tempor id lorem sagittis, consequat mollis massa. Praesent hendrerit sem vel velit ultrices, sed eleifend ante facilisis. Nullam et libero nec ipsum sagittis vulputate vitae non diam
                    </p>
                    <div className='d-flex align-items-center mb-4'>
                        <p className='my-0'>Cantidad</p>
                        <input 
                            style={{ marginLeft: 15 }} 
                            type='number' 
                            min={1} 
                            defaultValue={selectedQuantity}
                            onChange={(e) => setSelectedQuantity(e.target.value)}
                        />
                    </div>
                    <button 
                        className='btn btn-primary'
                        onClick={handleAddToCart}
                    >
                        Comprar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ItemDetailContainer;