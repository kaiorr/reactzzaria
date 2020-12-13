import React, {Component} from 'react'

class App extends Component {
  state = {
    products: []
  }

  hancleClick = (e) => {
    e.preventDefault()
    const result = {}
    this.setState({
      products: result
    })
  }

  render() {
    const { hasError } = this.props

    return (
      <div className="App">
        <header className="App-header">
          {hasError && <h1>Deu Problema</h1> }
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Buscar Produtos
          </a>

          {this.state.products.map((product) => {
            <div key={product}> {product} </div>
          })}

        </header>
      </div>
    );
  }
}
export default App
