
// import ComponentForm from "../../components/ComponentForm"
import ComponentFetching from "../../components/ComponentFetching"
// import ComponentUseEffect from "../../components/ComponentUseEffect"
// import Form from "../../components/Form"
// import RepeatGame from "../../components/ComponentGamePerulangan"
// import ComponentUseEffect from "../../components/ComponentUseEffect"
import NavBar from "../../components/NavBar"



function HomePage() {
    return (
        <>
            <NavBar />
            {/* <TodoList /> */}
            <div className='flex flex-col mt-5 items-center h-screen'>
                {/* <ComponentForm /> */}
                {/* <ComponentUseEffect/> */}
                {/* <RepeatGame /> */}
                <ComponentFetching />
                {/* <Form/> */}
            </div>
            {/* Form */}
        </>
    )
}

export default HomePage
