import './driver.css'
import Dashboard from './Dashboard Component/Dashboard' 
import EarningHistory from './Earning History Component/EarningHistory'
import Feedback from './Feedback Component/Feedback'
import Navigation from './Navigation Compnent/Navigation'
import RideRequest from './RideRequestCompnent/RideRequests'
import Settings from './Settings component/Setting'
import RideManagement from "./Ride Management Component/RideMangement"
import Topbar from '../../HomePage/components/TopbarComponent/Topbar'

function Driver() {
  return (
    <>
    <Topbar/>
    <Dashboard/>
    <EarningHistory/>
    <Feedback/>
    <Navigation/>
    <RideManagement/>
    <RideRequest/>
    <Settings/>
    </>
  )
}

export default Driver