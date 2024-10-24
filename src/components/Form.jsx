import { useState } from 'react';
import FormData from './FormData';

const Form = () => {
    const [inputValue, setInputValue] = useState('');
    const [submittedValue, setSubmittedValue] = useState('');

    // Fungsi untuk menangani perubahan pada input
    const handleInputChange = (event) => {
        setInputValue(event.target.value); // Mengambil nilai dari input
    };

    // Fungsi untuk menangani pengiriman form
    const handleSubmit = (event) => {
        event.preventDefault(); // Mencegah reload halaman
        setInputValue('')
        setSubmittedValue(inputValue); // Simpan nilai input yang dikirim
    };
    const DeleteInput = () => {
        setSubmittedValue('');
        console.log("reset")
    }
    return (
        <>
            <div className='flex flex-col justify-center items-center h-screen'>
                <div>
                    <h1 className='text-3xl mb-8'>Event Handling di React</h1>
                </div>

                <div>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Masukkan teks:
                            <input className='border border-black text-black  px-4 rounded-sm ml-4'
                                type="text"
                                value={inputValue}
                                placeholder='Masukan Teks..'
                                onChange={handleInputChange}
                            />
                        </label>
                        <button className='bg-blue-500 text-white px-4 rounded-sm ml-4' type="submit">Submit</button>
                    </form>
                    {submittedValue && (
                        <FormData data={submittedValue} />
                    )}
                    {/* <FormData data={submittedValue} /> */}
                    <p> nilai input : { inputValue }</p>
                    <p> nilai submit : { submittedValue }</p>
                    <button className='bg-blue-500 text-white px-4 rounded-sm' onClick={() => DeleteInput()}>Reset</button>
                </div>

            </div>
        </>
    )
}

export default Form
