class TipoProductoService {
    static async postTipoProducto(tipoProducto) {
        try{
            const response = await fetch("http://localhost:3000/agregarTipo_producto", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(tipoProducto), 
            });
            if (!response.ok){
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('error adding tipoProducto:', error);
            throw error;
        }
    }
}

export default TipoProductoService;