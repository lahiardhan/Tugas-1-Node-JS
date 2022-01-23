const express = require('express');
const app = express();
const port = 8080;
const DataSiswa = require('./DataSiswa');

app.get('/', (req, res) => {
   res.send(
      'Selamat Datang di Data Center Siswa Indonesia'
   );
});


app.use('/DataSiswa', DataSiswa);

app.listen(port, () => {
   console.log(`Server berjalan di port ${port}`);
});