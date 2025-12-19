class ProductServices {
  getAllProducts = async () => {
  try {
    const response = await fetch("http://localhost:3000");
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  };
  addProduct = async (product) => {
    const formData = new FormData();

    formData.append('nombre', product.nombre);
    formData.append('precio', product.precio);
    formData.append('stock', product.stock);
    formData.append('idMarca', product.idMarca);
    formData.append('idTipoProducto', product.idTipoProducto);
    formData.append('imagen', product.imagen[0]);
    formData.append('descripcion', product.descripcion);
    try {
      const response = await fetch("http://localhost:3000/agregar_producto", {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
        console.error('Error adding product:', error);
        throw error;
      }
  }
}

export default new ProductServices();