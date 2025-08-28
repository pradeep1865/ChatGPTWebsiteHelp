document.getElementById('product-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const product = {
    name: document.getElementById('name').value,
    price: document.getElementById('price').value,
    description: document.getElementById('description').value,
    imageUrl: document.getElementById('imageUrl').value,
  };
  try {
    const res = await fetch('/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product),
    });
    if (res.ok) {
      document.getElementById('status').textContent = 'Product added!';
      e.target.reset();
    } else {
      const err = await res.json();
      document.getElementById('status').textContent = 'Error: ' + err.error;
    }
  } catch (err) {
    document.getElementById('status').textContent = 'Network error';
  }
});
