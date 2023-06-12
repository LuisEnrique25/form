import { useEffect, useState } from 'react'
import './App.css'
import DarkMode from './components/DarkMode'
import Header from './components/Header'
import ModalForm from './components/ModalForm'
import axios from 'axios'
import UsersContainer from './components/UsersContainer'
import ModalAdvices from './components/ModalAdvices'
import { set } from 'react-hook-form'
import Loader from './components/Loader'



const BASE_URL = "https://users-crud.academlo.tech"
const DEFAULT_VALUES = {
  first_name: "",
  last_name: "", 
  email: "",
  password: ""
}

function App() {

  const [users, setUsers] = useState([])
  const [isUserToUpdate, setIsUserToUpdate] = useState(null)
  const [isShowModal, setIsShowModal] = useState(false)
  const [ isDone, setIsDone] = useState(false)
  const [isLoading, setIsLoading] = useState(null)

  const changeShowModal = () => setIsShowModal(!isShowModal)

  const getAllUsers = () => {
    const url = BASE_URL + "/users/"
    axios.get(url)
    .then(({data}) => setUsers(data))
    .catch((err) => console.log(err))
  }

  const createUser = (data, reset) =>{
    const url = BASE_URL + "/users/"
    axios.post(url, data)
      .then(() => {
        getAllUsers()
        resetModalForm(reset) 
        setIsLoading(null)
        setIsDone("created") 
      })
      .catch((err) => console.log(err))
  }

  const deleteUser = (id) =>{
    const url = BASE_URL + `/users/${id}/`

    axios.delete(url)
      .then(() => {
        getAllUsers(),
        setIsLoading(null)
        setIsDone("deleted")
      })
      .catch((err) => console.log(err))
  }

  const updateUser = (data, reset) =>{
    const url = BASE_URL + `/users/${isUserToUpdate.id}/`

    axios.patch(url, data)
      .then(() => {
        getAllUsers(), 
        resetModalForm(reset)
        setIsLoading(null)
        setIsUserToUpdate(null)
        setIsDone("updated")
      })
      .catch((err) => console.log(err))
  }

  const resetModalForm = (reset) => {
    setIsShowModal(false)
    reset(DEFAULT_VALUES)
    setIsUserToUpdate(null)
  }

  useEffect(()=>{
    getAllUsers()
  }, [])

  return (
    <main className='min-h-screen w-full font-["Roboto"]'>
      <Header changeShowModal={changeShowModal}/>

      {/**
       * 
      */}
      <ModalForm 
      isShowModal={isShowModal}
      setIsLoading={setIsLoading}
      changeShowModal={changeShowModal} 
      createUser={createUser} 
      isUserToUpdate={isUserToUpdate} 
      setIsUserToUpdate={setIsUserToUpdate} 
      updateUser={updateUser} 
      resetModalForm={resetModalForm}/>

      <UsersContainer 
      users={users} 
      deleteUser={deleteUser} 
      changeShowModal={changeShowModal} 
      setIsUserToUpdate={setIsUserToUpdate}
      setIsLoading={setIsLoading}/>

      <Loader isLoading={isLoading} setIsLoading={setIsLoading}/>
      <ModalAdvices setIsDone={setIsDone} isDone={isDone}/>
      <DarkMode/>
    </main>
  )
}

export default App
