const express = require('express');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public')); // Serve QR image & text

// Example API endpoint to simulate updating QR and pair-code
app.get('/generate', (req, res) => {
  // 🧪 1. Simulate QR Code image (You must use real QR buffer here)
  const sampleQRBuffer = fs.readFileSync('./example/qr.png'); // Replace with your generated QR
  fs.writeFileSync('./public/qr.png', sampleQRBuffer);

  // 🧪 2. Simulate Pair Code
  const pairingCode = 'ABCD-EFGH-IJKL'; // Replace with real code from bot
  fs.writeFileSync('./public/pair-code.txt', pairingCode);

  res.send('✅ QR and Pair Code Updated!');
});

app.listen(PORT, () => {
  console.log(`🌐 Server running on http://localhost:${PORT}`);
});
