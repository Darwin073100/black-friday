import Logo from '../../assets/logos/hausiva.png';

const Footer = () => {
  return (
   <footer className='flex justify-center items-center p-16'>
        <img src={Logo} alt="Logo" className='w-[350px]' />
    </footer>
  )
}

export { Footer };