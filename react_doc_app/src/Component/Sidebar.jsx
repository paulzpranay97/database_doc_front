

// DATABASE DOC========================================================================>>>>>

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Sidebar.css';

const Sidebar= ({ isSidebarOpen, onHamburgerClick}) => {
   
    const [activeSubList, setActiveSubList] = useState(null);
    const [activeSubSubList, setActiveSubSubList] = useState(null);
  
    const toggleSubList = (index) => {
      setActiveSubList(activeSubList === index ? null : index);
    };
  
    const toggleSubSubList = (index) => {
      setActiveSubSubList(activeSubSubList === index ? null : index);
    };

    const [data, setData] = useState([]);

    useEffect(() => {
      axios.get('https://docback-j3tg.onrender.com/api-database/templates') 
        .then((response) => setData(response.data))
        .catch((error) => console.error('Error fetching data:', error));
    }, []);

    
  return (
    
    <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
    <nav className='menu_container'>
      
    <ul className='main_list'>
  { data.map((template, index) => (
    <li key={index}>
      <a href={`#${template.title}`}>
        {template.title}
      </a>
      {template.chapters.map((chapter,index) => (
        <li key={index}>
          <a href={`#${chapter.title1}`}>{chapter.title1}</a>
        </li>
      ))}
    </li>
  ))}
</ul>

    </nav>
  </div>
  )
}

export default Sidebar;