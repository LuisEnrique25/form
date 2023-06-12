const Loader = () => {
    return (
      <section className={`fixed top-0 left-0 right-0 h-screen bg-black/40 grid place-content-center "visible opacity-100" transition-opacity` }>
          <div className='bg-white w-[280px] rounded-md p-4 text-sm sm:text-base sm:w-[300px] relative flex justify-center items-center flex-col'>
              <h3>Guardando Cambios</h3>
              <img src="/tspinner.svg" alt="loader" className='h-[50px]' />
          </div>
  
      </section>
    )
  }
  
  export default Loader