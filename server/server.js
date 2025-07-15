const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const connection = require('./database');
const { error } = require('console');

app.use(cors());
app.use(express.json());

app.post('/api/value', (req, res) => {
    const {productId, productName, expirationDate, manufactureDate, manufacturer } = req.body;
    const query = 
    `INSERT INTO products(productId, productName, expirationDate, manufactureDate, manufacturer) 
    VALUES (?, ?, ?, ?, ?)`;

    const values = [productId, productName, expirationDate, manufactureDate, manufacturer];
    connection.query(query, values, (err, result) => {
      if(err){
        console.error(err);
        return res.status(500).json({ message: 'Database insertion failed' });
      }
    res.json({ message: 'Product inserted successfully', insertedId: result.insertId })
  })
})


app.get('/api/codes', (req, res) => {
  const sql = 'SELECT * FROM products';
  connection.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching data:', err);
      res.status(500).json({ error: 'Database query failed' });
      return;
    }
    res.json(results);
  });
});

app.delete('/api/value/:productId', (req, res) => {
  const {productId} = req.params;
  const sql = 'DELETE FROM products WHERE productId= ?';
  
  connection.query(sql, [productId], (err, result) => {
    if(err){
      console.error(err);
      res.status(500).json({ error: 'Database deletion failed' });
      return;
    }
    
    // row does not exist
    if (result.affectedRows === 0) {
      res.status(404).json({ message: 'Product not found' });
      return;
    }

    res.json({message: "Product deleted successfully."})
  })
})

app.get('/api/value/:productId', (req, res) => {
  const {productId} = req.params;
  const sql = `SELECT * FROM products WHERE productId= ?`

  connection.query(sql, [productId], (err, result) => {
    if(err){
      console.error(err);
      res.status(500).json({error: 'Failed getting product'})
      return;
    }

    if(result.length === 0){
      res.status(404).json({error: 'Product does not exist.'})
    return;
    }

    res.status(200).json(result[0]);
  })
})

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});