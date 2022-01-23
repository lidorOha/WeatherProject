import React  , { useState, useEffect } from 'react'
import Showcards from './Showcards'
import {FaRegHeart , FaHeart } from 'react-icons/fa';
import SimpleDetails from './SimpleDetails';


export default function Showeather(props) {
    const [dailyWeather, setDailyWeather] = useState(
        {DailyForecasts:[
            {Date:"2022-01-20T07:00:00+02:00",Temperature:{Minimum:{Value:"47",Unit:"F"},Maximum:{Value:"57",Unit:"F"}},Day:{IconPhrase:"Cloudy"}},
            {Date:"2022-01-21T07:00:00+02:00",Temperature:{Minimum:{Value:"44",Unit:"F"},Maximum:{Value:"57",Unit:"F"}},Day:{IconPhrase:"Cloudy"}},
            {Date:"2022-01-22T07:00:00+02:00",Temperature:{Minimum:{Value:"52",Unit:"F"},Maximum:{Value:"57",Unit:"F"}},Day:{IconPhrase:"Cloudy"}},
            {Date:"2022-01-23T07:00:00+02:00",Temperature:{Minimum:{Value:"51",Unit:"F"},Maximum:{Value:"57",Unit:"F"}},Day:{IconPhrase:"Cloudy"}},
            {Date:"2022-01-24T07:00:00+02:00",Temperature:{Minimum:{Value:"51",Unit:"F"},Maximum:{Value:"57",Unit:"F"}},Day:{IconPhrase:"Cloudy"}}
        ]}
    )
   
    useEffect(()=>{
        fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${props.cityYouChoose[0].Key}?apikey=${props.APIKEY}&metric=true`)
        .then((result)=>{ return result.json() })
        .then((data)=>{
        setDailyWeather(data);
    }).catch((err)=>{
        console.log("Fetch 5days " + err);
    })
      },[props.cityYouChoose])

    useEffect(()=>{
          console.log(dailyWeather);
      },[dailyWeather])
    
    const fillHeart = ()=>{
        if(props.isCityInFavorites == true){
          return  <FaHeart/>
        }
        else{return <FaRegHeart/> }
    }

    return (
        <div id="showeathr">
            <div style={{display:"flex",width:"100%",height:"30%",zIndex:"0"}}>
                <div style={{width:"100%",height:"60%",display:"flex",paddingLeft:"2%",paddingTop:"2%"}}>
                    <div style={{width:"16%",height:"100%",border:"black",borderStyle:"solid"}}>
                        <img src="https://i.dlpng.com/static/png/1261715-x-shape-png-high-quality-image-x-png-1600_1600_preview.png" alt="X" style={{width:"90%",height:"90%"}}/>
                    </div>
                    <div style={{width:"20%",fontWeight:"bold",fontSize:"large",paddingTop:"2%",paddingLeft:"2%",textAlign:"left"}}>
                          <SimpleDetails cityYouChoose={props.cityYouChoose} cityTemperatur={props.cityTemperatur}/>
                    </div>
               </div>
                <div style={{width:"100%",height:"60%",paddingTop:"2%",paddingRight:"2%",textAlign:"right",display:"flex",flexDirection:"row",justifyContent:"right"}}>
                    <div style={{width:"10%",height:"100%",fontSize:"xx-large" ,marginRight:"2%"}}>
                        {fillHeart()}
                    </div>
                    <div style={{width:"40%",height:"100%"}}>
                        <button id="myfavoritesbtn"  onClick={()=>{
                            props.addToFavorites(props.cityYouChoose,props.cityTemperatur)
                        }}>{props.favoriteTitle}</button>
                    </div>
                </div>
            </div>
            <div style={{width:"100%", height:"20%",display:"flex",alignItems:"center",justifyContent:"center"}}>
               <h1 style={{fontSize:'50px',fontFamily:"Comic Sans MS"}}>{props.cityTemperatur[0].WeatherText}</h1>
            </div>
            <div  style={{height:"50%",justifyContent:"center",flexDirection:"row",display:"flex",alignItems:"center",fontFamily:"Comic Sans MS"}}>
                 {dailyWeather.DailyForecasts.map((day,i)=>{
                        return <Showcards cityTemperatur={props.cityTemperatur} key={`${i}`} day={day} i={i}/>
                 })}
            </div>
        </div>
    )
}
