import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {

const navigate = useNavigate()

const {id} = useParams()

 const [apiData, setApiData] = useState({
   name: "",
   key: "",
   published_at: "",
   typeof:""
 })
 
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDg5NTVmZDVjY2Y1OTQzOGE1MjkyNTQ1ZTc1NzEzYSIsIm5iZiI6MTczMjYyMzgxOS43MDAyMzU4LCJzdWIiOiI2NzQ1YmM2ZDA4MDUyYjk2MGMwNDE5MmEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.vc9eyWeKM9Ke30YVPpd9UuEvlTa57UP45o-n6Uj0Xms'
    }
  };
  useEffect(()=>{
      fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
          .then(res => res.json())
          .then(res => setApiData(res.results[0]))
          .catch(err => console.error(err));
  },[])

  

  return (
    <div className='player'>
      <img src={back_arrow_icon} onClick={()=>{navigate(-2)}} alt="" />
      <iframe src={`https://www.youtube.com/embed/${apiData.key}`}
      width='90%' 
      height='90%'
      title='trailer'
      frameborder="0"
      allowFullScreen></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p className='player-name'>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player
