import MediaQuery from 'react-responsive'
// import MobileNav from './mobile_nav.js'
import DesktopNav from './desktop_nav.js'
import MobileNav from './mobile_nav.js'


const ExportNav = () => {
  return (
    <>
        <MediaQuery maxWidth={767}>
            <MobileNav />
        </MediaQuery>
        <MediaQuery minWidth={768}>
            <DesktopNav />
        </MediaQuery>
    </>
  )
}

export default ExportNav