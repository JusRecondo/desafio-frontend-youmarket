const API_UL = 'https://jsonplaceholder.typicode.com/users';

export const getAllAccounts = async () => {
    try {   
        const url = API_UL;
        const response = await fetch(url);
        const data = await response.json();
        
        return data?.map(item => ({
            id: item.id,
            name: item.name,
            email: item.email,
        }));
    } catch (error) {
        throw new Error('No hay cuentas disponibles.');
    }
}

export const searchAccount = async (search) => {
    if(search === '') return null;  

    try {
        const url = `${API_UL}?q=${search}`;
        const response = await fetch(url);
        const data = await response.json();

        return data;
    } catch (error) {
        throw new Error('No hay cuentas disponibles.');
    }
}