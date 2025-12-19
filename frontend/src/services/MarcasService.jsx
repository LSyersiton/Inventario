class MarcasServices{
    static async postMarca(marca){
        try {
            const response = await fetch("http://localhost:3000/agregar_marcas", {
                method: "POST",
                headers: {
                    "content-type": "application/json",

                },
                body: JSON.stringify(marca),
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');   
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error adding marca:', error);
            throw error;
        }
    }
}

export default MarcasServices;