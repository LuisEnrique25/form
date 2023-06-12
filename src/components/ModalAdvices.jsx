import React from 'react'

const ModalAdvices = ({isCreated, setIsCreated}) => {

    const handleCloceAdvice = () => {
        setIsCreated(null)
    }



  return (
    <section className={`fixed top-0 left-0 right-0 h-screen bg-black/40 grid place-content-center ${isCreated ? "visible opacity-100" : "invisible opacity-0"} transition-opacity` }>
        <div className='bg-white w-[280px] rounded-md p-4 text-sm sm:text-base sm:w-[300px] relative flex justify-center items-center flex-col'>
            <h3>Usuario Creado</h3>   
            <button onClick={handleCloceAdvice} type='button' className='absolute top-2 right-2 text-2xl hover:text-red-700'> <i className='bx bx-x'></i></button>         
        </div>

    </section>
  )
}

export default ModalAdvices