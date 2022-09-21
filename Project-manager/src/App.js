import ProductPage from "./components/ProductPage"
import ProductDescription from "./components/ProductDescription";
import ProductEdit from "./components/ProductEdit";

import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/product/edit/:id" element={<ProductEdit/>}/>
        <Route path="/product/:id" element={<ProductDescription/>}/>
        <Route path="/" element= {<ProductPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
