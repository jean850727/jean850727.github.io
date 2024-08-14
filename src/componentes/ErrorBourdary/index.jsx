import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Actualiza el estado para que la próxima renderización muestre la interfaz alternativa
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Puedes registrar el error en un servicio de registro de errores
    console.error("Error caught by Error Boundary: ", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Puedes renderizar cualquier interfaz alternativa
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      // Actualiza el estado para que la próxima renderización muestre la interfaz alternativa
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      // Puedes registrar el error en un servicio de registro de errores
      console.error("Error caught by Error Boundary: ", error, errorInfo);
    }
  
    render() {
      if (this.state.hasError) {
        // Puedes renderizar cualquier interfaz alternativa
        return <h1>Something went wrong.</h1>;
      }
  
      return this.props.children; 
    }
  }
export default ErrorBoundary;
