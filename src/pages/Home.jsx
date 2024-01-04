import Advantages from "../components/advantages/Advantages"
import Bid from "../components/bid/Bid"
import Offer from "../components/offer/Offer"
import Partners from "../components/partners/Partners"
import Work from "../components/work/Work"
import Form from "../components/form/Form"

const Homepage = () => {
  return (
    <>
      <Bid />
      <Offer />
      <Advantages />
      <Work />
      <Partners />
      <Form />
    </>
  )
}

export default Homepage
