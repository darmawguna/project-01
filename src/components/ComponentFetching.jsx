import { useState, useEffect } from 'react';
import ComponentTableData from './ComponentTableData';

const ComponentFetching = () => {
    const [posts, setPosts] = useState([]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [editMode, setEditMode] = useState(false);
    const [editId, setEditId] = useState(null);

    const fetchData = async () => {
        try {
            const response = await fetch('http://192.168.20.183:8000/api/posts');
            const json = await response.json();
            const data = json.data.data;
            setPosts(data);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const method = editMode ? 'PUT' : 'POST';
            // const url = editMode
            //     ? `http://192.168.20.183:8000/api/posts/${ editId }`
            //     : 'http://192.168.20.183:8000/api/posts';
            const url = editMode ? `http://192.168.20.183:8000/api/posts/${ editId }` : `http://192.168.20.183:8000/api/posts`

            const response = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: title,
                    contents: content,
                }),
            });

            if (response.ok) {
                // console.log(`Data berhasil ${ editMode ? 'diupdate' : 'ditambahkan' }`);
                console.log(`Data berhasil ${editMode ? 'diupdate ' : 'ditambahkan'} `)
                setTitle('');
                setContent('');
                setEditMode(false);
                setEditId(null);
                fetchData();
            } else {
                console.error('Gagal mengirim data');
            }
        } catch (error) {
            console.log('Error:', error);
        }
    };

    const handleEdit = (post) => {
        setEditMode(true);
        setEditId(post.id);
        setTitle(post.title);
        setContent(post.contents);
    };

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://192.168.20.183:8000/api/posts/${ id }`, {
                method: 'DELETE',
            });
            if (response.ok) {
                console.log('Data deleted successfully');
                fetchData();
            } else {
                console.error('Failed to delete data');
            }
        } catch (error) {
            console.log('Error:', error);
        }
    };

    return (
        <>
            <div className='flex flex-col gap-4'>
                <h1>{editMode ? 'Form Edit Data' : 'Form Tambah Data'} :</h1>
                <form className='flex flex-col ' onSubmit={handleSubmit}>
                    <label htmlFor="title">Masukan Title:</label>
                    <input
                        className='border border-black text-black rounded-sm'
                        type="text"
                        id='title'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <label htmlFor="content">Masukan Content :</label>
                    <input
                        className='border border-black text-black rounded-sm'
                        type="text"
                        id='content'
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                    <button className='bg-blue-500 text-white px-4 rounded-sm mt-5' type="submit">
                        {editMode ? 'Update' : 'Submit'}
                    </button>
                </form>
            </div>

            <div className='mt-5'>
                {posts.length === 0 && <p>Loading...</p>}
                {
                    posts.length > 0 && (
                        <ComponentTableData
                            posts={posts}
                            onEdit={handleEdit}
                            onDelete={handleDelete}
                        />
                    )
                }
            </div>
        </>
    );
};

export default ComponentFetching;
