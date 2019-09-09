
const fetchImages = async page => {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos');
    const data = response.json()
    return data;
};

export { fetchImages };
