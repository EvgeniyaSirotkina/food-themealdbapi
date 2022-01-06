import React, { useState } from 'react';

const Search = (props) => {
    const [ value, setValue ] = useState('');
    const { filterFunc = Function.prototype } = props;

    const handleKey = (event) => {
        if (event.key === 'Enter') {
            handleSubmit();
        }
    }

    const handleInput = (event) => {
        setValue(event.target.value)
    }

    const handleSubmit = () => {
        filterFunc(value);
    }

    return (
        <>
            <div className='nav-wrapper search row'>
                <div className='input-field '>
                    <input 
                        id='search' 
                        type='search' 
                        name='search'
                        value={value}
                        onChange={handleInput}
                        onKeyDown={handleKey}
                    />
                    <label className='label-icon' for='search'><i className='material-icons'>search</i></label>
                    <button className='btn search-btn deep-purple accent-1' onClick={handleSubmit}>Search</button>
                </div>
            </div>
        </>          
    );
}

export default Search;