import ProductCard from './ProductCard'

function ProductsSection({ products }) {
  const availableProducts = products.filter((product) => product.stock > 0)

  return (
    <section className="products-section" id="products" aria-labelledby="products-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Available products</p>
          <h2 id="products-title">Ready for your cart</h2>
        </div>
        <p className="product-count" aria-live="polite">
          {availableProducts.length} products available
        </p>
      </div>

      {availableProducts.length > 0 ? (
        <div className="products-grid" aria-live="polite">
          {availableProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="empty-state">No products are currently available.</p>
      )}
    </section>
  )
}

export default ProductsSection
