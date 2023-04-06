import { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { fetchFilters, selectAll, filtersChanged, filtersSearch } from './filter.slice';

import './ourCoffeeFilter.scss'

const OurCoffeeFilter = () => {

    const [text, setText] = useState('')
    
    const dispatch = useDispatch()    
    const filters = useSelector(selectAll)
    const {filterActive, term, filtersLoadingStatus} = useSelector(state => state.filters);

    useEffect(() => {
        dispatch(fetchFilters())
    }, [])

    const onChangeSearch = (e) => {
        const term = e.target.value;

        setText(term)
        dispatch(filtersSearch(term))
    }

    const buttons = filters.map(({ id, price, name, text }) => {
        
        const active = filterActive === name;
        const clazz = active ? 'btn-black' : 'btn-white';

        return (
            <button 
                onClick={() => dispatch(filtersChanged(name))}
                className={`ourCoffee__btn btn ${name} ${clazz}`}
                key={id}
                type='button'
            >
                {text}
            </button>
        )
    })
    return (
        <div className='ourCoffee__group'>

            <div className="ourCoffee__search">
                <div className="ourCoffee__text">Искать</div>
                <div>
                    <input 
                        className="ourCoffee__input" 
                        name='text' 
                        type="text" 
                        placeholder='начните печатать здесь...'
                        onChange={onChangeSearch}
                        value={text} />
                </div>
            </div>

            <div className="ourCoffee__filter">
                <div className="ourCoffee__label">Отфильтруйте товары</div>
                {buttons}
            </div>
            
        </div>
    )
     
}

export default OurCoffeeFilter;