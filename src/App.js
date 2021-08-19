import Header from "./components/layout/Header";
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import ProductList from "./components/pages/productList/ProductList";
import ProductDetail from "./components/pages/ProductDetail";
import Home from "./components/pages/Home";
import Cart from "./components/pages/cart/Cart";
import { createTheme, ThemeProvider } from "@material-ui/core";
import Footer from "./components/layout/footer/Footer";
import { ToastContainer } from 'react-toastify';


const theme = createTheme({
  palette: {
    primary: {
      main: '#fcb83b'
    },
    secondary: {
      main: '#242424'
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer 
        position="top-right"
        autoClose={1000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Router>
          <Header />
          <Switch>
            <Route exact path='/'>
                <Home />
            </Route>
            <Route exact path='/cart'>
                <Cart />
            </Route>
            <Route exact path='/list'>
                <ProductList />
            </Route>
            <Route exact path='/product/:id'>
                <ProductDetail />
            </Route>
          
          </Switch>
         
          <Footer />

      </Router>
    </ThemeProvider>
  );
}

export default App;
