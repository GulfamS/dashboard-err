const CovidItem = props => {
    const {covidData} = props
    const {id, activeToday, deathToday, recoveredToday, acitve, death, recovered, positive, positiveToday, stateName, stateCode, stateAbbr, date} = covidData
    return (
      <div className="item-container">
       <div className="todays">
            <p className="active-today">{activeToday}</p>
            <p className="death-today">{deathToday}</p>
            <p className="recovered-today">{recoveredToday}</p>
       </div>
       <div className="second-container">
            <p>{acitve}</p>
            <p>{death}</p>
            <p>{recovered}</p>
       </div>
       <div className="third-container">
            <p>{positive}</p>
            <p>{positiveToday}</p>
       </div>
       <div className="state-container">
            <p>{stateName}</p>
            <p>{stateCode}</p>
            <p>{stateAbbr}</p>
       </div>
       <div className="date-container">
            <p>{date}</p>
       </div>
      </div>
    )
  }
  
  export default CovidItem
