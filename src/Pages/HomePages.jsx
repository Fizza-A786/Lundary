import BlackPage from '../Components/HomePages/BlackPage'
import FinalTouch from '../Components/HomePages/FinalTouch'
import Garment from '../Components/HomePages/Garment'
import HomePage from '../Components/HomePages/HomePage'
import Perfume from '../Components/HomePages/Perfume'
import Signature from '../Components/HomePages/Signature'
import SigProduct from '../Components/HomePages/SigProduct'
import Working from '../Components/HomePages/Working'

const HomePages = () => {
  return (
    <div>
        <HomePage/>
        <Signature/>
        <SigProduct/>
        <Garment/>
        <Perfume/>
        <FinalTouch/>
        <Working/>
        <BlackPage/>
        {/* <Footer/> */}
    </div>
  )
}

export default HomePages