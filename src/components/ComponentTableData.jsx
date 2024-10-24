const ComponentTableData = ({ posts, onEdit, onDelete }) => {
    return (
        <table className='min-w-full border-collapse'>
            <thead>
                <tr>
                    <th className='border px-4 py-2'>Title</th>
                    <th className='border px-4 py-2'>Content</th>
                    <th className='border px-4 py-2'>Actions</th>
                </tr>
            </thead>
            <tbody>
                {posts.map((post) => (
                    <tr key={post.id}>
                        <td className='border px-4 py-2'>{post.title}</td>
                        <td className='border px-4 py-2'>{post.contents}</td>
                        <td className='border px-4 py-2'>
                            <button
                                className='bg-yellow-500 text-white px-2 py-1 rounded'
                                onClick={() => onEdit(post)}
                            >
                                Edit
                            </button>
                            <button
                                className='bg-red-500 text-white px-2 py-1 rounded ml-2'
                                onClick={() => onDelete(post.id)}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ComponentTableData;
