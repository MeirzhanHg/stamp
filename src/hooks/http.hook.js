export const useHttp = () => {

    const request = async (url, method = 'GET', body = null, headers = {'Content-Type': 'application/json'}) => {
        try {
            const response = await fetch(url, {method, body, headers});

            if (!response.ok) {
                throw new Error(`Could not fetch ${url}, status: ${response.status}`);
            }

            const data = await response.json();
            // console.log(data);
            return data;
        } catch(e) {
            throw e;
        }
    };

    const getElemById = async (id) => {
        try {
            const res = await fetch(`http://localhost:3001/goods/${id}`)

            if (!res.ok) {
                throw new Error(`Could not fetch, status: ${res.status}`);
            }

            const data = await res.json();
            console.log(data);
            return data

        } catch (e) {
            throw e
        }
    }

    return { request, getElemById }
}