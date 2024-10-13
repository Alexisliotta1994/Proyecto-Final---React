import products from '../mockdata/items.json'
import { useContext } from 'react';
import { CartContext } from '../CartContext';

function Checkout() {
    const cartContext = useContext(CartContext)

    const gettotal = () => {
        let total = 0;

        for(let i = 0; i < cartContext.products.length; i++) {
            const item = products.find(p => p.id == cartContext.products[i]);
            
            total += item.price
        }

        return total
    }
    return (
        <div>
            <h1>Checkout</h1>
            <div className='d-flex flex-column align-items-center' >
                {cartContext.products.map((productId, i) => {
                    const item = products.find(p => p.id == productId); 

                    return (
                        <div key={i} className='mb-4 border p-4 d-flex align-items-center justify-content' style={{ maxWidth: 550 }}>
                            <img src={item.image} width={200} height={200}/>
                            <div className='d-flex flex-column justify-content-start mx-2'>
                                <p><strong>{item.name}</strong></p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a urna a orci convallis tristique.
                                </p>
                                <p><strong>${item.price}</strong></p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='mt-4 d-flex flex-column align-items-center'>
                <h2>Total: <strong>${gettotal()}</strong></h2>
                <button 
                    className='btn btn-primary btn-lg btn-block my-4' 
                    style={{ width: 200 }}
                    onClick={() => alert("Pagaste!")}
                >
                    Pagar
                </button>
            </div>
        </div>
    )
}

export default Checkout;