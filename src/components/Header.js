import React from 'react';

function Header() {
   return (
      <header className="py-3 mb-3 border-bottom">
         <div className="container-fluid d-grid gap-3 align-items-center">
            <div className="d-flex align-items-center">
               <form className="w-100 me-3" role="search">
                  <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
               </form>

               <a href="https://fitgirl-repacks.site/donations/" target="_blank" className="text-dark text-decoration-none">
                  <img  about='blank' className='rounded-circle' src="https://i1.sndcdn.com/artworks-d8IEGpJtVDjlQ76b-wfBUFA-t500x500.jpg" alt="" width="40" height="40"/>
               </a>
            </div>
         </div>
      </header>
   );
}

export default Header;