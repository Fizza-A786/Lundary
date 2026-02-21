import FinalTouch from '../HomePages/FinalTouch'
import Garment from '../HomePages/Garment'
import HomePage from '../HomePages/HomePage'
import Perfume from '../HomePages/Perfume'
import Signature from '../HomePages/Signature'
import SigProduct from '../HomePages/SigProduct'
import Working from '../HomePages/Working'

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
    </div>
  )
}

export default HomePages