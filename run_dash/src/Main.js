import Nav from './nav/Nav'
import InfoBox from './infobox/InfoBox'
import InfoBoxData from './data/InfoBoxData'
function Main(){

    return(
        <div className='container'>
        <Nav/>
        <div className="info-box-container">
        {InfoBoxData.map((info, index) => (
          <InfoBox key={index} title={info.title} data={info.data} />
        ))}
      </div>
        </div>
    )
}

export default Main