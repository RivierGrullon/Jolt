export function render (element, container) {
    const DOM = element.type == "TEXT_ELEMENT"  ? document.createTextNode("") : document.createElement(element.type);

    element.props.children.forEach(child => {
        render(child, DOM);
    });

    const isProperty = key => key !== "children";
    Object.keys(element.props)
        .filter(isProperty)
        .forEach( name => {
            DOM[name] = element.props[name];
        })

    container.appendChild(DOM);
}