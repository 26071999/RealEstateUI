import React, { useState } from 'react'
import './SearchBar.scss';
import search_icon from '../../assets/search.png'

export const SearchBar = () => {
    const types = ['buy','rent'];
   const [query,setQuery] = useState({
    type:'buy',
    location:'',
    minPrice:0,
    maxPrice:0
   });

   const switchType = (val)=>{
    setQuery((prev)=> ({...prev,type:val}))
   }
  return (
    <div className='searchBar'>
        <div className="type">
            {types && types.map((type)=>
                (<button key={type} onClick={()=> switchType(type)}
                 className={query.type === type ? 'active':''}
                >{type}</button>)
            )}
          
        </div>

        <form>
            <input type="text" name='location' placeholder='City Location' />
            <input type="number" name='minPrice' min={0} max={100000000} placeholder='Min Price' />
            <input type="number" name='maxPrice' min={0} max={100000000} placeholder='Max Price' />
            <button><img src={search_icon} alt="search" /></button>
        </form>
    </div>
  )
}
