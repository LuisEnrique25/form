import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

const ModalForm = ({isShowModal, changeShowModal, createUser, isUserToUpdate, setIsUserToUpdate, updateUser, resetModalForm, setIsLoading}) => {

    const {register, handleSubmit, reset, formState: {errors}} =  useForm()

    const submit = (data) => {
        
        if(!data.birthday) data.birthday = null
        if(isUserToUpdate){
            setIsLoading("update")
            updateUser(data, reset)
        }else{
            setIsLoading("create")
            createUser(data, reset)

        }

    }

    const handleCloseModal = () => {
        resetModalForm(reset)

    }

    useEffect(() => {
        if(isUserToUpdate){
            reset(isUserToUpdate)
        }
    }, [isUserToUpdate])


  return (
    <section className={`fixed top-0 left-0 right-0 h-screen bg-black/40 grid place-content-center ${isShowModal ? "visible opacity-100" : "invisible opacity-0"} transition-opacity` }>
        <form onSubmit={handleSubmit(submit)} className='bg-white dark:bg-slate-700 w-[280px] p-4 text-sm sm:text-base sm:w-[300px] relative'>
            <h3 className='font-semibold text-xl pb-1'>{isUserToUpdate ? "Editar Usuario" : "Nuevo Usuario"}</h3>
           
            {/**NOMBRE */}
            <div className='grid gap-1 pb-3'>
                <label htmlFor="first_name" className='font-medium text-sm'>Nombre</label>
                <input id='first_name' placeholder='Ingresa tus nombres...' className='bg-gray-100 outline-none p-2 border-[0.5px] rounded-md dark:bg-slate-600 border-none' type="text" {...register("first_name", 
            {required: "Este campo es requerido",
            maxLength: {
              value: 25, 
              message : "Este campo solo admite 25 caracteres"
            }
            })} />
            {errors.first_name && <p className='text-xs bg-orange-300 p-1 rounded-md text-center'>{errors.first_name.message}</p>}
            </div>
           
            {/**Appellidos */}
            <div className='grid gap-1  pb-3'>
                <label htmlFor="last_name" className='font-medium text-sm '>Apellidos</label>
                <input id='last_name' placeholder='Ingresa tus apellidos...' className='bg-gray-100 outline-none p-2 border-[0.5px] rounded-md dark:bg-slate-600 border-none' type="text" {...register("last_name",{
                    required: "Este campo es requerido",
                    maxLength:{
                        value: 25,
                        message: "Este campo solo admite 25 caracteres"
                    }
                })}  />
                {errors.last_name && <p className='text-xs bg-orange-300 p-1 rounded-md text-center'>{errors.last_name.message}</p>}

            </div>
           
            {/**CORREO */}
            <div className='grid gap-1 pb-3'>
                <label htmlFor="email" className='font-medium text-sm'>Correo</label>
                <input id='email' placeholder='Ingresa tu correo...' className='bg-gray-100 outline-none p-2 border-[0.5px] rounded-md dark:bg-slate-600 border-none' type="email" {...register("email", {
                    required: "Debes poner un correo",
                    pattern: {
                        value : /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                        message: "Ingresa un correo valido"
                      }
                })}  />
                {errors.email && <p className='text-xs bg-orange-300 p-1 rounded-md text-center'>{errors.email.message}</p>}
            </div>
           
            {/**CONTRASEÑA */}
            <div className='grid gap-1 pb-3'>
                <label htmlFor="password" className='font-medium text-sm'>Contraseña</label>
                <input id='password' placeholder='Ingresa tu contraseña...' className='bg-gray-100  outline-none p-2 border-[0.5px] rounded-md dark:bg-slate-600 border-none' type="password" {...register("password", {
                    required: "Este campo es reuqerido",
                    minLength : {
                        value: 6,
                        message: "La contraseña debe tener entre 6 y 16 caracteres"
                    },
                    maxLength: {
                        value: 25,
                        message: "La contraseña debe tener entre 6 y 16 caracteres"
                    }})}  />
                    {errors.password && <p className='text-xs bg-orange-300 p-1 rounded-md text-center'>{errors.password.message}</p>}
            </div>
           
            {/**Cumpleaños */}
            <div className='grid gap-1 pb-4'>
                <label htmlFor="birthday" className='font-medium text-sm'>Cumpleaños</label>
                <input id='birthday' className='bg-gray-100 outline-none p-2 border-[0.5px] rounded-md dark:bg-slate-600 border-none ' type="date" {...register("birthday")}  />
            </div>


            <button onClick={handleCloseModal} type='button' className='absolute top-2 right-2 text-2xl hover:text-red-700'> <i className='bx bx-x'></i></button>
            
            <button className='bg-primary text-white p-2  w-full'> <i className='bx bx-plus'></i>{isUserToUpdate ? "Guardar Cambios" :"Agregar nuevo Usuario"}</button>
        </form>
        
    </section>
  )
}

export default ModalForm