import { Link } from 'react-router-dom'
import desktop from '../assets/images/error_page/desktop_404-error.webp'
import tablet from '../assets/images/error_page/tablet_404-error.webp'
import mobile from '../assets/images/error_page/mobile_404-error.webp'

function ErrorPage() {
   return (
      <div className='flex items-center justify-center bg-white w-full h-screen lg:h-auto md:h-auto'>
         <Link to={'/'}>
            <img 
               src={`${desktop}`} 
               srcSet={`${mobile} 300w, ${tablet} 600w,  ${desktop} 1200w`} 
               sizes='(max-width: 600px) 300px, (max-width: 1200px) 600px, 1200px' 
               alt="ERROR PAGE" 
               rel='preload' />
         </Link>
      </div>
   )
}

export default ErrorPage