import React from 'react'

const UserCard = ({user, deleteUser, changeShowModal, setIsUserToUpdate, setIsLoading}) => {

    const handleClickUpdate = () =>{
        changeShowModal()
        setIsUserToUpdate(user)
    }

    const handleClickDelte = () =>{
        setIsLoading("delete")
        deleteUser(user.id)
    }
  return (
    <article className='p-4 border-2 rounded-md '>
        <h4 className='text-center font-bold text-xl pb-2 capitalize tracking-widest'>{user.first_name} {user.last_name}</h4>
        <div className='border-y-[0.5px] border-[#cacaca] pt-2 pb-3'>
            <div className='p-1'>
                <h5 className='text-[#a1a1a1]'>Correo</h5>
                <span>{user.email}</span>
            </div>
            <div className='p-1'>
                <h5 className='text-[#a1a1a1]'>Cumpleaños</h5>
                <span><i className='bx bx-gift'></i>{user.birthday || "No nacido"}</span>
            </div>
        </div>
            <div className='flex justify-end gap-2 pt-2'>
                <button onClick={handleClickDelte} className='border-[1px] border-[#D93F3F] rounded-sm overflow-hidden'><i  className='bx bx-trash bg-[#D85D5D] p-2 hover:bg-red-700 hover:text-white'></i></button>
                <button onClick={handleClickUpdate} className='border-[1px] border-[#BDBDBD] rounded-sm overflow-hidden'><i className='bx bx-pencil bg-[#F6F6F6] p-2 hover:bg-blue-900  hover:text-white'></i></button>
            </div>
    </article>
  )
}
export default UserCard


