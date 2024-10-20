
const ListOfProduct = () =>{
    return(
      
        <div className="listofproduct">
            <div className="card">
                
              <div className="heading">
                 <div>
                 <h3>Fresh Tomato</h3>
                    </div> 
                 <div>
                 <h3>Quantity</h3>
                 
                    </div>
                   
                </div>    
                    <div className="card-item">
                        <img className="img-card-item" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk09ptOL9k2Ng2ELK3Xl6NjdFWBvZDb6INUA&s"/>
                          <div>
                          <h4 className="cart-item-heading">BigBasket</h4>
                          <h4> 1kg | $22</h4>
                           </div> 
                         <button className="btn">BUY NOW</button>

                    </div>
                    <div className="card-item">
                        <img className="img-card-item" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk09ptOL9k2Ng2ELK3Xl6NjdFWBvZDb6INUA&s"/>
                           <div>
                           <h4 className="cart-item-heading1">JioMart</h4>
                           <h4> 1kg | $20</h4>
                       </div>
                        <button className="btn">BUY NOW</button>

                    </div>
             
             
              
            
            </div>
            </div>
    )
}
export default ListOfProduct;