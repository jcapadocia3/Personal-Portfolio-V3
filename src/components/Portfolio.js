import React, { useState } from 'react';
import Nav from './Nav';
import Footer from './Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Work from './pages/Work/Work';
import Contact from './pages/Contact/Contact';

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Work') {
      return <Work />;
    }
    else return <Contact />
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      <Footer currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}

// import React from 'react';

// export default function Portfolio() {
//     console.log('Your site works!');
  
//     return (
//       <div>
//           <h1>Hello world!</h1>
//       </div>
//     );
//   }
