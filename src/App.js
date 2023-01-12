import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query'; // არ დაგავიწყდეთ ბიბლიოთეკის დაინსტალირება
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // საჭიროა ბიბლიოთეკის ინსტალაცია
import { Home } from './pages/Home';
import { Speakers} from './pages/Speakers';
import { Summits } from './pages/Summits';


const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/speakers' element={<Speakers/>}/>
          <Route path='/summits' element={<Summits/>}/>
        </Routes>
      </BrowserRouter>
     </QueryClientProvider>
    
  );
}

export default App;
