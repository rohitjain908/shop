import Header  from './components/Header';
import Products  from './components/Products';
import { Route,Switch,Redirect, BrowserRouter } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <BrowserRouter>
      <>
        <Header/>
        <Switch>
          <Route exact path="/" component={Products}/>
          <Route exact path="/productdetail/:id" component={ProductDetail}/>
          <Redirect to="/"/>
        </Switch>
      </>
    </BrowserRouter>
  );
}

export default App;
