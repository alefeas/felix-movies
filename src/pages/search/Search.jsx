import { useState, useEffect } from 'react';
import * as React from 'react';
import { firestoreFetchCategory } from '../../fetch/firestoreFetch.js';
import { MediaList } from '../../components/mediaList/MediaList.jsx';
import { Loader } from '../../components/loader/Loader.jsx';

export const Search = () => {
    const [data, setData] = useState([])
    const [wordEntered, setWordEntered] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    
    useEffect(() => {
        firestoreFetchCategory()
        .then(res => setData(res))
        .catch(err => console.log(err))
    }, [])

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = data.filter((value) => {
        return value.title.toLowerCase().includes(searchWord.toLowerCase());
        });
        if (searchWord === "") {
        setFilteredData(data);
        } else {
        setFilteredData(newFilter);
        }
    };

    return (
        <>
        {
            data.length !== 0 || filteredData.length !== 0?
            <>
            <div className='inputSearchContainer'>
            <input maxLength={25} className='inputSearch' type='text' placeholder='Search...' onChange={handleFilter} />
            </div>
            {
            filteredData.length !== 0 || wordEntered === "" ?
            <div className='searchList'>
            {
                wordEntered !== '' ? 
                <MediaList media={filteredData}/>
                : <MediaList media={data}/>                    
            }
            </div>
            : 
            <div className='noResults'>
                <span>No results found for "{wordEntered}"</span>
            </div>
            }
            </> 
        : <Loader/>
        }
        </>
    )
}