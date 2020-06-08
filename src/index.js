/* @jsx createElement */

function createElement(tagName, props, ...children) {
  console.log(children);
  const element = document.createElement(tagName);

  Object.entries(props || {}).forEach(([key, value]) => {
    element[key.toLowerCase()] = value;
  });

  children.flat().forEach((child) => {
    if (child instanceof Node) {
      element.appendChild(child);
      return;
    }
    element.appendChild(document.createTextNode(child));
  });

  return element;
}

function handleClickNumber(value) {
  count = value;
  render();
}

let count = 0;

function handleClick() {
  console.log('click!');
  count += 1;
  console.log(count);
  render();
}

function render() {
  const element = (
    <div id="hello" className="greetings">
      <p>Hello, World!!</p>
      <p>
        <button type="button" onClick={handleClick}>
          Click Me!
          (
          {count}
          )
        </button>
      </p>
      <p>
        {[1, 2, 3].map((i) => (
          <button type="button" onClick={() => handleClickNumber(i)}>
            { i }
          </button>
        ))}
      </p>
    </div>
  );

  document.getElementById('app').textContent = '';
  document.getElementById('app').appendChild(element);
}

render();
