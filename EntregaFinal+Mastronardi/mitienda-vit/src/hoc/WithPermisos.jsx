export const WithPermisos = (WrappedComponent, permitId) => (props) => {
      
    const permisosDelUsuario = [1, 5, 7]; 
  
    switch (permisosDelUsuario.includes(permitId)) {
      case true:
        return <WrappedComponent {...props} />;
      case false:
        return <h1> No tienes permisos para ver este contenido </h1>;
    }
  };
  