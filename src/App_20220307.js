import logo from './logo.svg';
import './App.css';

function App() {
  const urlProduk = 'http://localhost:5000/ListProduk'

  return (
    <Router>
      <div className="container">
        <h1>Sistem Distribusi</h1>
        <Header title='Master Produk' onAdd={() => setShowAddProduk(!showAddProduk)} showAdd={showAddProduk} />
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                {showAddProduk && <AddProduk onAdd={addItemProduk} /> }
                {
                  ListProduk.length > 0 
                  ? (<Produk ListProduk={ListProduk} onDelete={deleteProduk} />) 
                  : ('Tidak ada data Produk')
                }
              </>
            } 
          />
          <Route path="/about" element={<About />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
