import React, { Children } from "react"
import ReactDOM from "react-dom/client";
import Header from "./Component/Header"
import Slider from "./Component/Slider"
import Body from "./Component/Body"
import ListOfProduct from "./Component/ListOfProduct.js"
import List_1 from "./Component/List_1.js";
import List_2 from "./Component/List_2.js";
import List_3 from "./Component/List_3.js";
import Sign_In from "./Component/Sign_In.js";
import Sign_up from "./Component/Sign_up.js";


import { createBrowserRouter ,RouterProvider, Outlet} from "react-router-dom";
import Carousel from "./Component/Carousel.js";








const AppLayout = () =>{
    
    const items = [
        
        <div  className="slider1">slider1</div>,
        <div className="slider2">slider2</div>,
        <div className="slider3">slider3</div>,
        <div className="slider4">slider4</div>,
        <div className="slider5">slider5</div>,
        <div className="slider6"></div>
       
    ];
   
    return (
        <div className="app">
           
            <Header/>
            <Carousel items={items} autoplay={true} autoplayInterval={3000} />
            <Outlet/>
            
           </div>
    )
}
    
const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
             path:"/",
             element:<Body/>,
            },
            {
              path:"/fruits&vegitable",
              element:<List_3/>,
            },
            {
              path:"/dairyProduct",
              element:<List_1/>
            },
            {
             path:"/meat",
             element:<List_2/>
            }
            
            ,{
                 path:"/signup",
                 element:<Sign_up/>
            }
            
            ,
        ]
    }
])



const root= ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}/>);

