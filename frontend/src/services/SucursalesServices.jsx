class SucursalesServices {
  static async getSucursales() {
    try {
        const response = await fetch("http://localhost:3000/agregar_sucursales");
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching sucursales:', error);
        throw error;
    }
    }
    /*static async addSucursal(sucursal) {
        try {
            const response = await fetch("http://localhost:3000/agregar_sucursales", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(sucursal),
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error adding sucursal:', error);
            throw error;
        }
    }*/
}

export default SucursalesServices;