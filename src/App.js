import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component.jsx";
import {Switch, Route} from 'react-router-dom'

// const HatsPage = () => (
//     <div>
//         <h1>HATS PAGE</h1>
//     </div>
// )
//
// const JacketsPage = () => (
//     <div>
//         <h1>JACKETS PAGE</h1>
//     </div>
// )
//
// const SneakersPage = () => (
//     <div>
//         <h1>SNEAKERS PAGE</h1>
//     </div>
// )
//
// const MensPage = () => (
//     <div>
//         <h1>MENS PAGE</h1>
//     </div>
// )
function App() {
  return (
    <div className="App">
        <Switch>
        <Route exact path={'/'} component={HomePage}/>
        <Route exact path={'/shop'} component={ShopPage}/>
        {/*<Route exact path={'/jackets'} component={JacketsPage}/>*/}
        {/*<Route exact path={'/sneakers'} component={SneakersPage}/>*/}
        {/*<Route exact path={'/mens'} component={MensPage}/>*/}
        </Switch>
    </div>
  );
}

export default App;
