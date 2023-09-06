
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logol from "../Component/logol.png"
import './Navbar.css';
import './popup.css';

const Navbar = ({ onHamburgerClick }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sdata, setSdata] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://docback-j3tg.onrender.com/api-database/search?query=${searchQuery}`);
        setSdata(response.data);
        setIsPopupOpen(true);
      } catch (error) {
        console.error('Error searching:', error);
      }
    };

    if (searchQuery.trim() !== '') {
      fetchData();
    } else {
      // Clear results if search query is empty
      setSdata([]);
      setIsPopupOpen(false);
    }
  }, [searchQuery]);

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className='navbar'>
      <img src={logol} alt="err" />

      <form className='search'>
        <input
          type="text"
          placeholder='Search here . . .'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </form>
      <div className="hamburger" onClick={onHamburgerClick}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      {isPopupOpen && (
        <div className="popup">
          <div className="popup-content">
            <span className="close-btn" onClick={closePopup}>&times;</span>
            <ul>
           
              {sdata.chapters.map((chapter, index) => (
                <li key={index}><a onClick={closePopup} href={`#${chapter.title1}`}>{chapter.title1}</a></li>
              ))}
              
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;








// import React, { useState } from 'react';
// import axios from 'axios'; // Import Axios
// import logol from "../Component/logol.png"
// import './Navbar.css';
// import './popup.css';

// const Navbar = ({ onHamburgerClick}) => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [sdata, setSdata]=useState([])
//   const [isPopupOpen, setIsPopupOpen] = useState(false);

//   const handleSearch = async () => {
//     try {
//       const response = await axios.get(`http://localhost:3000/api/search?query=${searchQuery}`);
//       // console.log(response.data);
//       // onSearch(response.data);
//       setSdata(response.data);
//       setIsPopupOpen(true);
//     } catch (error) {
//       console.error('Error searching:', error);
//     }
//   };

//   const closePopup = () => {
//     setIsPopupOpen(false);
//   };



  
//   return (
//     <div className='navbar'>
//       <img src={logol} alt="err" />
     
//       <form className='search'>
//         <input
//           type="text"
//           placeholder='Search here . . .'
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//         <button type="button" onClick={handleSearch}>
//           Search
//         </button>
//       </form>
//       <div className="hamburger" onClick={onHamburgerClick}>
//         <div className="bar"></div>
//         <div className="bar"></div>
//         <div className="bar"></div>
//       </div>

      // {isPopupOpen && (
      //   <div className="popup">
      //     <div className="popup-content">
      //       <span className="close-btn" onClick={closePopup}>&times;</span>
      //       <ul>
      //         {/* Display titles from chapters */}
      //         {sdata.chapters.map((chapter, index) => (
      //           <li key={index}><a onClick={closePopup} href={`#${chapter.title1}`}>{chapter.title1}</a></li>
      //         ))}
      //         {/* Display titles from sections */}
      //         {sdata.sections.map((section, index) => (
      //           <li key={index}><a onClick={closePopup} href={`#${section.title2}`}>{section.title2}</a></li>
      //         ))}
      //         {/* Display titles from subSections */}
      //         {sdata.subSections.map((subSection, index) => (
      //           <li key={index}><a onClick={closePopup} href={`#${subSection.title3}`}>{subSection.title3}</a></li>
      //         ))}
      //       </ul>
      //     </div>
      //   </div>
      // )}
    // </div>
    
//   )
// }

// export default Navbar;