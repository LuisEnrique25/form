import React from 'react'

const Header = ({changeShowModal}) => {

  const handleClickShowModal = () =>{
    changeShowModal()
  }

  return (
    <section className='flex justify-between items-center p-4 max-w-[900px] m-auto'>
        <h1 className='font-bold text-2xl'>Users</h1>
        <button onClick={handleClickShowModal} className='bg-primary text-white p-2 px-4 text-2xl flex justify-center items-center   min-[480px]:hidden'><i className='bx bxs-user-plus'></i></button>
        <button onClick={handleClickShowModal} className='bg-primary text-white p-2 min-[480px]:flex justify-center items-center hidden '><i className='bx bx-plus'></i>Nuevo Usuario</button>
    </section>
  )
}

export default Header