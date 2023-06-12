import { useEffect, useState } from 'react'
import './App.css'
import DarkMode from './components/DarkMode'
import Header from './components/Header'
import ModalForm from './components/ModalForm'
import axios from 'axios'
import UsersContainer from './components/UsersContainer'
import ModalAdvices from './components/ModalAdvices'



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
      })
      .catch((err) => console.log(err))
  }

  const deleteUser = (id) =>{
    const url = BASE_URL + `/users/${id}/`

    axios.delete(url)
      .then(() => getAllUsers())
      .catch((err) => console.log(err))
  }

  const updateUser = (data, reset) =>{
    const url = BASE_URL + `/users/${isUserToUpdate.id}/`

    axios.patch(url, data)
      .then(() => {
        getAllUsers(), 
        resetModalForm(reset)
        setIsUserToUpdate(null)
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
      <ModalForm 
      isShowModal={isShowModal} 
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
      setIsUserToUpdate={setIsUserToUpdate}/>
       */}


      <ModalAdvices/>
      <DarkMode/>
    </main>
  )
}

export default App
