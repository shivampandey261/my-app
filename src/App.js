import React, { useState } from 'react';

const AddMenuItem = () => {
  const [starter, setStarter] = useState({ name: '', price: '', image: '' });
  const [main, setMain] = useState({ name: '', price: '', image: '' });
  const [dessert, setDessert] = useState({ name: '', price: '', image: '' });

  const handleChange = (e, category) => {
    const { name, value } = e.target;
    if (category === 'starter') {
      setStarter({ ...starter, [name]: value });
    } else if (category === 'main') {
      setMain({ ...main, [name]: value });
    } else if (category === 'dessert') {
      setDessert({ ...dessert, [name]: value });
    }
  };

  const handleSubmit = (e, category) => {
    e.preventDefault();
    const newMenuItem = category === 'starter' ? starter : category === 'main' ? main : dessert;
    
    console.log(`Menu Item Added to ${category}:`, newMenuItem);

    // TODO: Add code to send newMenuItem to your backend

    if (category === 'starter') {
      setStarter({ name: '', price: '', image: '' });
    } else if (category === 'main') {
      setMain({ name: '', price: '', image: '' });
    } else if (category === 'dessert') {
      setDessert({ name: '', price: '', image: '' });
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Add Menu Items</h1>
      
      {/* Starter Form */}
      <section style={styles.section}>
        <h2 style={styles.sectionHeader}>Add Starter</h2>
        <form onSubmit={(e) => handleSubmit(e, 'starter')} style={styles.form}>
          <div style={styles.formGroup}>
            <label htmlFor="starterName" style={styles.label}>Dish Name</label>
            <input
              type="text"
              id="starterName"
              name="name"
              value={starter.name}
              onChange={(e) => handleChange(e, 'starter')}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="starterPrice" style={styles.label}>Price ($)</label>
            <input
              type="number"
              id="starterPrice"
              name="price"
              value={starter.price}
              onChange={(e) => handleChange(e, 'starter')}
              style={styles.input}
              step="0.01"
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="starterImage" style={styles.label}>Image URL</label>
            <input
              type="url"
              id="starterImage"
              name="image"
              value={starter.image}
              onChange={(e) => handleChange(e, 'starter')}
              style={styles.input}
            />
          </div>
          <button type="submit" style={styles.button}>Add Starter</button>
        </form>
      </section>

      {/* Main Course Form */}
      <section style={styles.section}>
        <h2 style={styles.sectionHeader}>Add Main Course</h2>
        <form onSubmit={(e) => handleSubmit(e, 'main')} style={styles.form}>
          <div style={styles.formGroup}>
            <label htmlFor="mainName" style={styles.label}>Dish Name</label>
            <input
              type="text"
              id="mainName"
              name="name"
              value={main.name}
              onChange={(e) => handleChange(e, 'main')}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="mainPrice" style={styles.label}>Price ($)</label>
            <input
              type="number"
              id="mainPrice"
              name="price"
              value={main.price}
              onChange={(e) => handleChange(e, 'main')}
              style={styles.input}
              step="0.01"
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="mainImage" style={styles.label}>Image URL</label>
            <input
              type="url"
              id="mainImage"
              name="image"
              value={main.image}
              onChange={(e) => handleChange(e, 'main')}
              style={styles.input}
            />
          </div>
          <button type="submit" style={styles.button}>Add Main Course</button>
        </form>
      </section>

      {/* Dessert Form */}
      <section style={styles.section}>
        <h2 style={styles.sectionHeader}>Add Dessert</h2>
        <form onSubmit={(e) => handleSubmit(e, 'dessert')} style={styles.form}>
          <div style={styles.formGroup}>
            <label htmlFor="dessertName" style={styles.label}>Dish Name</label>
            <input
              type="text"
              id="dessertName"
              name="name"
              value={dessert.name}
              onChange={(e) => handleChange(e, 'dessert')}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="dessertPrice" style={styles.label}>Price ($)</label>
            <input
              type="number"
              id="dessertPrice"
              name="price"
              value={dessert.price}
              onChange={(e) => handleChange(e, 'dessert')}
              style={styles.input}
              step="0.01"
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="dessertImage" style={styles.label}>Image URL</label>
            <input
              type="url"
              id="dessertImage"
              name="image"
              value={dessert.image}
              onChange={(e) => handleChange(e, 'dessert')}
              style={styles.input}
            />
          </div>
          <button type="submit" style={styles.button}>Add Dessert</button>
        </form>
      </section>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#fff',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
  },
  header: {
    textAlign: 'center',
    fontSize: '2rem',
    color: '#333',
    marginBottom: '20px',
  },
  section: {
    marginBottom: '40px',
  },
  sectionHeader: {
    fontSize: '1.5rem',
    color: '#4CAF50',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '20px',
  },
  label: {
    fontWeight: 'bold',
    marginBottom: '5px',
    display: 'block',
    color: '#333',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginTop: '5px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '1rem',
  },
  button: {
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '1.2rem',
    cursor: 'pointer',
    textAlign: 'center',
  },
};

export default AddMenuItem;
