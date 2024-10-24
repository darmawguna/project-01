fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => {
        console.log(data); // Menampilkan data yang berhasil diambil.
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });


const fetchData = async () => {
    try {
        const response = await fetch('https://api.example.com/data');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data); // Menggunakan data yang berhasil diambil.
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

fetchData();
