import Header from './components/Header'
import Hero from './components/Hero'
import ProductsSection from './components/ProductsSection'
import Footer from './components/Footer'
import products from './data/products'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main id="home">
        <Hero />
        <ProductsSection products={products} />
      </main>
      <Footer />
    </>
  )
}

export default App
