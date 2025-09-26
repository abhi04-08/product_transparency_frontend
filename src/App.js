import React, {useState, useEffect} from 'react';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import ProductDetail from './pages/Productdetail';
import NewProduct from './pages/NewProduct';
import { fetchProducts } from './services/api';

export default function App() {
  const [route, setRoute] = useState({ name: "dashboard", params: {} });
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    fetchProducts().then(setProducts).catch(err => console.error(err));
  }, []);

  function openDetail(id) {
    setRoute({ name: "detail", params: {id} });
  }

  function openNew() {
    setRoute({ name: "new" , params: {} });
  }

  function goHome() {
    setRoute({ name: "dashboard", params: {} });
  }

  let Page = null;
  if (route.name === "dashboard"){
    Page = <Dashboard products={products} onOpen={openDetail} onNew={openNew}/>;
  }
  else if (route.name === "detail"){
    Page = <ProductDetail id={route.params.id} onBack={goHome}/>;
  }
  else if(route.name === "new"){
    Page = <NewProduct onDone={goHome}/>
  }

  return(
    <Layout>
      {Page}
    </Layout>
  );
}