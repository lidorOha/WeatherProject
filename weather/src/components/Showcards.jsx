import React  from 'react'

export default function Showcards(props) {
    const weekend  = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

    const showDay = ()=>{
       let day = new Date(props.day.Date);
       let tempIndex = day.getDay()
       return weekend[tempIndex]
    }

    const computAvg = () =>{
        let minCelsius = parseInt(props.day.Temperature.Minimum.Value)
        let maxCelsius = parseInt(props.day.Temperature.Maximum.Value)
        let avgCelsius = (minCelsius + maxCelsius) /2

        return  avgCelsius
    }


    return (
        <div style={{backgroundColor:"white",width:"100%",height:"100%",display:"flex",justifyContent:"center"}}>
            <div style={{width:"50%",height:"60%",display:"flex",alignSelf:"center"}}>
                <div style={{borderWidth: "3px",border:"black",borderStyle:"groove",width:"96%",height:"97%"}}>
                    <div style={{width:"100%",height:"50%",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"1.4vw"}}>
                    {showDay()}
                    </div>
                    <div style={{width:"100%",height:"50%",display:"flex",justifyContent:"center",fontSize:"1.4vw"}}>
                    {computAvg()}°c
                    </div>
                </div>
            </div>
        </div>
    )
}
