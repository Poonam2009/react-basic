import React from 'react';
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


const reactElement = {
    type: 'a', // Element type (e.g., 'a' for anchor)
    props: {
        href: 'https://google.com', // Link destination
        target: '_blank' // Open link in a new tab
    },
    children: 'Click me to visit Google' // Inner text
};

function MyApp(){
    return(<div>
        <h1>My Custom App</h1>
    </div>)
}

const AnotherElement = (<a href='https://google.com' 
                target='_black'>Visit Google</a>);

const aReactElement = React.createElement('a', 
    {
    href: 'https://google.com', 
    target: '_blank'
    },
    'CLICK TO VISIT GOOGLE'
)

createRoot(document.getElementById('root')).render(
    <App />
)
