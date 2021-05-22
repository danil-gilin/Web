import './App.css';
import { useState,useEffect } from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Header from "./components/header/header";
import MainContent from "./components/content/maincontent";



const goods = [
    {
        name: "кроссовки",
        model: "адидас"
    },
    {
        name: "кроссовки 1",
        model: "адидас"
    },
    {
        name: "кроссовки 2",
        model: "адидас"
    },
    {
        name: "кроссовки",
        model: "адидас"
    },
    {
        name: "кроссовки 1",
        model: "адидас"
    },
    {
        name: "кроссовки 2",
        model: "адидас"
    }

];

function App() {
    const [ inputValue, setInputValue] = useState('');
    const [ items, setItems] = useState([]);



    const [inputValueSearch, setValue]=useState('')

    const onItemsSearch=(e)=>{
        const { value } = e.target;
        setValue( value );

        const itemAfterFilter = goods.filter(({name})=>name.toLowerCase().includes(value.toLowerCase()));
        setItems(itemAfterFilter);
        console.log(itemAfterFilter);
    }

    useEffect(() => {
        setItems(goods);

    }, [])


  return (

    <div className="App">
        <Header
                onChangeValueUser={onItemsSearch}
                inputValueSearch={inputValueSearch}
        />
       
        <BrowserRouter>
            <Switch>
                <Route 
                     exact
                     path="/" 
                    render={ () => <MainContent arrayBlock={items} /> }
                />
            </Switch>
        </BrowserRouter>

    </div>
  );

}

export default App;
