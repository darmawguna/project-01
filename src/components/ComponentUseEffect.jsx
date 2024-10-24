import { useEffect, useState } from "react"


const ComponentUseEffect = () => {
  const [title, setTitle] = useState('')
  const [value, setValue] = useState('')

  useEffect(() => {
    document.title = title
  }, [title])

  useEffect(() => {
    document.title = "website trpl"
  }, [])

  const handleButton = () => {
    setValue(title)
    setTitle('')
  }


  return (
    <>
      <p className="text-2xl">Belajar Menggunakan UseEffect</p>
      <div className="mt-4 flex gap-2 flex-col">
        <input placeholder="Masukan Judul Web" className="border border-black text-black  px-4 rounded-sm" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <button onClick={handleButton} className="bg-blue-500 text-white px-4 rounded-sm">Submit</button>
      </div>
    </>
  )
}

export default ComponentUseEffect
