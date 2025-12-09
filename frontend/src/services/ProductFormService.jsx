class ProductFormService {
    static async getProductFormData() {
        try {
            const response = await fetch("http://localhost:3000/agregar_producto");
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            return data;
        }
        catch (error) {
            console.error('Error fetching product form data:', error);
            throw error;
        }
    };
}
export default ProductFormService;