import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchIcon from '@material-ui/icons/Search'
import './App.css'
import ImageBlock from './Components/ImageBlock';


// //MgrFA-yZt06OA5eqHrWJZHqVQ6c0xYsi1XlTMvI3f-c


const App = () => {
  const [data, setData] = useState(null);
  const [searchWord, setSearchWord] = useState('');

  useEffect(() => {
    if (!searchWord) return;

    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.unsplash.com/search/photos?query=${searchWord}`, {
          headers: {
            Authorization: 'Client-ID MgrFA-yZt06OA5eqHrWJZHqVQ6c0xYsi1XlTMvI3f-c' 
          }
        });
        setData(response.data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching data from Unsplash API', error);
      }
    };

    fetchData();
  }, [searchWord]);

  const handleSearch = (event) => {
    setSearchWord(event.target.value);
  };

  return (

    <div>
        <div className='search-wrapper'>
        
        <input type='text' value={searchWord} id='search' placeholder='Search Photos' onChange={handleSearch}></input><div style={{float:'right',marginTop:'10px'}}><button id='button' onClick={handleSearch}><SearchIcon/></button></div></div>
        <div className='image-card-wrapper'style={{width:'100%'}}>
          {data && data.results.map((photo) => (
            <ImageBlock key={photo.id} src={photo.urls.small} alt={photo.alt_description} />
          ))}
          
        
        </div>
        
    </div>
    // <div>
    //   <input type="text" value={searchWord} onChange={handleSearch} placeholder="Search Photos" />
    //   {data && data.results.map((photo) => (
    //     <img key={photo.id} src={photo.urls.small} alt={photo.alt_description} />
    //   ))}
    // </div>
  );
};

export default App;
