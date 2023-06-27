import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: `# Titolo H1
## Sotto-titolo H2
Questo è un [collegamento](https://it.wikipedia.org/wiki/Markdown).

Del codice in linea: \`console.log('Hello, world!');\`

\`\`\`javascript
// Blocco di codice
function sum(a, b) {
  return a + b;
}
\`\`\`

- Elemento di lista 1
- Elemento di lista 2
- Elemento di lista 3

> Questo è un blockquote.

![Immagine di esempio](https://i.imgur.com/AD3MbBi.jpeg)

**Testo in grassetto**`,
    };
  }

  handleTextareaChange = (event) => {
    this.setState({ markdown: event.target.value });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className='container'>
            <div className='row'>
              <div className='col'>
                <textarea
                  id='editor'
                  className='input'
                  onChange={this.handleTextareaChange}
                  value={this.state.markdown}
                  cols='30'
                  rows='10'
                ></textarea>
              </div>
              <div className='col'>
                <ReactMarkdown id='preview'>{this.state.markdown}</ReactMarkdown>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
