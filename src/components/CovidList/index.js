import {Component} from "react"
import CovidItem from "../CovidItem"

class CovidList extends Component{
    state = {covidData: []}

    componentDidMount(){
        this.getCovidData()
    }

    getCovidData = async () =>{
        const response = await fetch("https://covid-india2.p.rapidapi.com/states")
        const data = await response.json()
        const updatedData= data.map(eachItem=>({
          id: eachItem.id,
          activeToday: eachItem.active_today,
          deathToday: eachItem.active_today,
          recoveredToday: eachItem.recovered_today,
          active: eachItem.active,
          death: eachItem.death,
          recovered: eachItem.recovered,
          positive: eachItem.positive,
          positiveToday: eachItem.positive_today,
          stateName: eachItem.state_name,
          stateCode: eachItem.state_code,
          stateAbbr: eachItem.state_abbr,
          date: eachItem.date
        }))
        this.setState({covidData: updatedData})
    }

    render(){
      const {covidData} = this.state
        return(
            <div className="covid-container">
                {covidData.map(item =>(
                    <CovidItem covidData={item} key={item.id}/>
                ))}
            </div>
        )
    }
}
export default CovidList