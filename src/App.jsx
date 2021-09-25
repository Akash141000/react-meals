import Main from "./components/Layout/Main";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App(){
    return(
        <>
        <Header></Header>
        <Main>
            <Meals/>
        </Main>  
        </>
    );
}

export default App;