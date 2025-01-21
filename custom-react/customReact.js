function customRender(reactElement, container) {

    /* const domElement = 
    document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)
    container.appendChild(domElement)
    */
    // Create a DOM element based on the `type` property
    const domElement = document.createElement(reactElement.type);

    // Set the inner HTML of the DOM element
    domElement.innerHTML = reactElement.children;

    // Iterate over the properties and set attributes
    for (const prop in reactElement.props) {
        if (prop === 'children') continue; // Skip the `children` property
        domElement.setAttribute(prop, reactElement.props[prop]);
    }

    // Append the DOM element to the container
    container.appendChild(domElement);
}

// React-like element object
const reactElement = {
    type: 'a', // Element type (e.g., 'a' for anchor)
    props: {
        href: 'https://google.com', // Link destination
        target: '_blank' // Open link in a new tab
    },
    children: 'Click me to visit Google' // Inner text
};

// Get the container element
const mainContainer = document.querySelector('#root');

// Render the React-like element into the container
customRender(reactElement, mainContainer);
