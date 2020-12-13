import { PureComponent } from 'react'

class ErrorBoundary extends PureComponent {
  state = { hasError: false }

  static getDerivedStateFromError(error) {
    console.log('error getDerivedStateFromError:', error.type, error.message)
    return { hasError: true }
  }

  componentDidCatch (error, info) {
    console.log('erro:', error)
    console.log('info:', info)
  }

  render() {
      return this.props.children(this.state.hasError)
  }
}

export default ErrorBoundary
