import React
// ,{lazy,Suspense} 
from 'react';
// import ReactDom from "react-dom";
import {createRoot} from "react-dom/client";
import App from './App';
import {Provider} from "react-redux";
import store from './redux/store';
// import {loadable} from "https://cdn.jsdelivr.net/npm/loadable-component@1.0.0/index.min.js";
// const AppComponent = lazy(()=> <Provider store={store}><App/></Provider>);
//  const AppComponent =loadable(()=> <Provider store={store}><App/></Provider>);
const root = createRoot(document.getElementById("root"));
root.render(
     <React.StrictMode>
       <Provider store={store}><App/></Provider>
     </React.StrictMode>
         );
         
        //  <Suspense fallback={()=><span>Loading...</span>}>
        //       <AppComponent/>
        //  </Suspense> 


// ReactDom.render(
//     <React.StrictMode>
//        <Suspense fallback={()=><span>Loading...</span>}>
//             <AppComponent/>
//        </Suspense>
//     </React.StrictMode>
// , document.getElementById("root"));//`render method no longer use in react18
 