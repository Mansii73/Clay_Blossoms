import React from 'react';
import Link from 'next/link';

const products = [
  {
    id: 1,
    name: 'Clay Blossom Vase',
    description: 'Handmade clay vase with floral design.',
    price: 25,
    image: '/images/vase1.jpg',
  },
  {
    id: 2,
    name: 'Blossom Pot',
    description: 'Beautiful pot for your indoor plants.',
    price: 18,
    image: '/images/pot1.jpg',
  },
  // Add more products as needed
];

const BrowsePage = () => {
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: 20 }}>
      <h2 style={{ marginBottom: 24 }}>Browse Products</h2>
      {products.map((product) => (
        <Link
          key={product.id}
          href={`/browse-product/${product.id}`}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              border: '1px solid #eee',
              borderRadius: 12,
              marginBottom: 28,
              background: '#fff',
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              overflow: 'hidden',
              minHeight: 220,
              cursor: 'pointer',
              transition: 'box-shadow 0.2s',
            }}
          >
            <div style={{ flex: '0 0 320px', height: 220, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#f9f9f9' }}>
              <img
                src={product.image}
                alt={product.name}
                style={{ width: '100%', height: 170, objectFit: 'cover', objectPosition: 'center', borderRadius: 8 }}
              />
              <span style={{
                display: 'inline-block',
                background: 'linear-gradient(90deg, #ffb347 0%, #ffcc33 100%)',
                color: '#222',
                fontWeight: 'bold',
                fontSize: 18,
                padding: '8px 24px',
                borderRadius: 20,
                marginTop: 10,
                boxShadow: '0 1px 4px rgba(255,204,51,0.15)',
                minWidth: 90,
                textAlign: 'center'
              }}>
                ₹{product.price}
              </span>
            </div>
            <div style={{ flex: 1, padding: '32px 32px 32px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h3 style={{ margin: 0, fontSize: 24 }}>{product.name}</h3>
              <p style={{ margin: '12px 0', color: '#555' }}>{product.description}</p>
              <div>
                <button
                  style={{
                    padding: '10px 24px',
                    marginRight: 16,
                    background: 'linear-gradient(90deg, #007bff 0%, #00c6ff 100%)',
                    color: '#fff',
                    border: 'none',
                    borderRadius: 6,
                    fontWeight: 600,
                    fontSize: 16,
                    cursor: 'pointer',
                    boxShadow: '0 2px 8px rgba(0,123,255,0.10)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    transition: 'background 0.2s',
                  }}
                  onClick={e => { e.stopPropagation(); /* Add to cart logic here */ }}
                >
                  <span style={{ fontSize: 20, fontWeight: 'bold' }}>+</span> Add to Cart
                </button>
                <button
                  style={{
                    padding: '10px 24px',
                    background: 'linear-gradient(90deg, #ff512f 0%, #dd2476 100%)',
                    color: '#fff',
                    border: 'none',
                    borderRadius: 6,
                    fontWeight: 600,
                    fontSize: 16,
                    cursor: 'pointer',
                    boxShadow: '0 2px 8px rgba(221,36,118,0.10)',
                    transition: 'background 0.2s',
                  }}
                  onClick={e => { e.stopPropagation(); /* Buy now logic here */ }}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BrowsePage;