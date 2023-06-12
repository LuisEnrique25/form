import React from 'react'
import UserCard from './UserCard'

const UsersContainer = ({users,
  deleteUser, 
  changeShowModal, 
  setIsUserToUpdate, 
  setIsLoading}) => {

    console.log(users);

  return (
    <section className='grid gap-8 grid-cols-[repeat(auto-fill,_290px)] sm:grid-cols-[repeat(auto-fill,_350px)] justify-center max-w-[1300px] mx-auto px-2 py-6 transition-all duration-500 ease-in'>
        
        {
           users.length === 0 ? <h3 className='absolute w-fit top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-sm sm:text-lg text-gray-700 -z-10'>Sin Usuarios Registrados</h3> : 
            users.map((user) => <UserCard key={user.id} user={user} deleteUser={deleteUser} changeShowModal={changeShowModal} setIsUserToUpdate={setIsUserToUpdate} setIsLoading={setIsLoading}/>)
        }
        
    </section>
  )
}

export default UsersContainer
