import Garment from '../HomePages/Garment'
import HomePage from '../HomePages/HomePage'
import Perfume from '../HomePages/Perfume'
import Signature from '../HomePages/Signature'
import SigProduct from '../HomePages/SigProduct'

const HomePages = () => {
  return (
    <div>
        <HomePage/>
        <Signature/>
        <SigProduct/>
        <Garment/>
        <Perfume/>
    </div>
  )
}

export default HomePages