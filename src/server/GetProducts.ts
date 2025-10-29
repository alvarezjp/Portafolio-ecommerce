
const URL_API = 'https://dummyjson.com/products/category'

export const getCategoryProduct = async <T>(endpoint:string):Promise<T> => {
    try{
        const response = await fetch (`${URL_API}/${endpoint}`);    
        
        if (!response.ok){
            throw new Error (`Error al obtener productos de la categoria ${endpoint}`)
        }

        const data:T = await response.json();
        return data;
    } catch(error){
        console.log('El error por catch es el: ',error)
        throw error;
    }
}