import { useParams, Link } from 'react-router-dom';
import categories from '../mockdata/categories.json'
import { useState, useEffect } from 'react';

function ItemListContainer() {
    const params = useParams()
    const [selectedCategory, setSelectedCategory] = useState();

    useEffect(() => {
        const id = params.id;
        const filterCategory = categories.filter(category => category.id == id).pop();

        if (filterCategory) {
            setSelectedCategory(filterCategory);
        } else {
            setSelectedCategory(undefined)
        }
    }, [params])

    if (!selectedCategory) {
        return <h1>Selecciona una categoria</h1>
    }

    return (
        <div>
            <h1>{selectedCategory.name}</h1>
            <div className='d-flex'>
                {selectedCategory.items.map(item => (
                    <div 
                        className='border border-solid d-flex flex-column p-5 m-2 align-items-center justify-content-center' 
                        style={{width: '25%'}} 
                        key={"item_" + item.id}
                    >
                        <img src={item.image} width={75} />
                        {item.name}
                        ${item.price}
                        <Link to={`/item/${item.id}`}>Ver publicacion</Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ItemListContainer;