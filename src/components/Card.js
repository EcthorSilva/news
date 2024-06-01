import React from "react";

const Card = () => {
   return (
      <main className="container pt-0 d-flex align-content-center flex-column">
         <div class="card d-flex flex-row">
            <img src="https://i7.imageban.ru/out/2022/10/11/be2f26c26781603b4d076c63585fd015.jpg" class="card-img-left" alt="..." />
            <div class="card-body">
               <h6 class="card-title">WW2: Bunker Simulator – Build 14120299 + 2 DLCs</h6>
               <div class="pt-3 pb-3">
                  <a href="#" class="btn btn-primary me-2">Ver</a>
                  <a href="#" class="btn btn-outline-primary">Download</a>
               </div>
               <p class="text-muted mb-0">024-04-24T22:00:19+03:00</p>
            </div>
         </div>
         <hr />
      </main>
   );
};

export default Card;