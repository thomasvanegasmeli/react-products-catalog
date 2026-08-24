const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
})

function ProductCard({ product }) {
  return (
    <article className="product-card">
      <span className="product-number">
        Product {String(product.id).padStart(2, '0')}
      </span>
      <h3>{product.name}</h3>
      <p className="product-price">{currencyFormatter.format(product.price)}</p>
      <span className="stock-label">{product.stock} units available</span>
    </article>
  )
}

export default ProductCard
