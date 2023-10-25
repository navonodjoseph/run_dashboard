import Nav from './nav/Nav'
import InfoBox from './infobox/InfoBox'
import InfoBoxData from './data/InfoBoxData'
import BarChart from './BarChart'

function Main(){

    return(
        <div className='container'>
        <Nav/>
        <div className="info-box-container">
        <BarChart data={InfoBoxData} />
      </div>
        </div>
    )
}

export default Main