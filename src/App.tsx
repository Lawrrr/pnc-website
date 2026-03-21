import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';

const App = () => {

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <AboutUs />
      </main>
      <Footer />
    </div>
  )
}

export default App
