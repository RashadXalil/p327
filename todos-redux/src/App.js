import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ToDoFooter from './components/ToDoFooter/ToDoFooter';
import ToDoLists from './components/ToDoLists/ToDoLists';

function App() {
    return (
        <>
            <section className="todoapp">
                <Header />
                <ToDoLists />
                <ToDoFooter />
            </section>
            <Footer />
        </>

    );
}

export default App;
