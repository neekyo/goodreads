import BookList from './components/BookList';
import Header from './components/Header';

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Book List</h1>
      <Header />
      <BookList />
    </div>
  );
}

export default App;