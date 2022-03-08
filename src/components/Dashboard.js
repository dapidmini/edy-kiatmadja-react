import Button from './Button'
import DashboardMenu from './DashboardMenu'
import { Link, useLocation } from 'react-router-dom'

const Dashboard = () => {
  const location = useLocation()
  // console.log(location);
  // alert(location.pathname)

  return (
    <>
      {location.pathname === "/"
        && <DashboardMenu />
      }
    </>
  )
}

export default Dashboard