import React from 'react'
import UserCard from './UserCard'

const UsersContainer = ({users,
  deleteUser, 
  changeShowModal, 
  setIsUserToUpdate, 
  setIsLoading}) => {
  return (
    <section className='grid gap-8 grid-cols-[repeat(auto-fill,_290px)] sm:grid-cols-[repeat(auto-fill,_350px)] justify-center max-w-[1300px] mx-auto px-2 py-6 transition-all duration-500 ease-in'>
        
        {
            users.map((user) => <UserCard key={user.id} user={user} deleteUser={deleteUser} changeShowModal={changeShowModal} setIsUserToUpdate={setIsUserToUpdate} setIsLoading={setIsLoading}/>)
        }
        
    </section>
  )
}

export default UsersContainer
