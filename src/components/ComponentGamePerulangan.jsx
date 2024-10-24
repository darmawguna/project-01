import { useState, useEffect } from "react";

const RepeatGame = () => {
    const [angkaPerulangan, setAngkaPerulangan] = useState('');
    const [nilaiPerulangan, setNilaiPerulangan] = useState('');
    const [hasil, setHasil] = useState([]);

    // Fungsi untuk mengelola perubahan input angka perulangan
    const handleAngkaPerulanganChange = (event) => {
        setAngkaPerulangan(event.target.value);
    };

    // Fungsi untuk mengelola perubahan input nilai perulangan
    const handleNilaiPerulanganChange = (event) => {
        setNilaiPerulangan(event.target.value);
    };

    // Menggunakan useEffect untuk menghasilkan array hasil berdasarkan input pengguna
    useEffect(() => {
        const newHasil = [];
        for (let i = 1; i <= angkaPerulangan; i++) {
            newHasil.push(i * nilaiPerulangan);
        }
        setHasil(newHasil);
    }, [angkaPerulangan, nilaiPerulangan]);

    return (
        <div>
            <h2>Permainan Perulangan</h2>
            <div>
                <label>
                    Angka Perulangan:
                    <input
                        type="number"
                        value={angkaPerulangan}
                        onChange={handleAngkaPerulanganChange}
                        className="border border-black text-black px-2 rounded-sm ml-2"
                    />
                </label>
            </div>
            <div>
                <label>
                    Nilai Perulangan:
                    <input
                        type="number"
                        value={nilaiPerulangan}
                        onChange={handleNilaiPerulanganChange}
                        className="border border-black text-black px-2 rounded-sm ml-2"
                    />
                </label>
            </div>
            <div>
                <h3>Hasil:</h3>
                <p>{hasil.join(", ")}</p>
            </div>
        </div>
    );
};

export default RepeatGame;
