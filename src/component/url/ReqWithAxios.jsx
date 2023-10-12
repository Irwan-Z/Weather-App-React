import React, { useState } from 'react';
import axios from 'axios';

function ReqWithAxios() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')  
  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=fecfe37336e0350f95a5bd1ca3faf439`
  // const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=fecfe37336e0350f95a5bd1ca3faf439`


  const searchLocation = (e) => {
    if(e.key === 'Enter'){
      axios.get(url).then((response)=> {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }

  return (
    <>
      <div className="cover">
        <div className="search">
          <input 
          value={location}
          onChange={e => setLocation(e.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Your Location'
          type="text" />
        </div>
        <div className="container">
          <div className="top">
            <div className="location">
              {/* <p>{data.name}</p> */}
              {data.sys ? <p>{data.name}, {data.sys.country}</p> : null}
            </div>
            <div className="temp">
              {data.main ? <h1>{data.main.temp.toFixed()}&#176;C</h1> : null}
            </div>
            <div className="description">
              {data.weather ? <p>{data.weather[0].main}</p> : null}
            </div>
          </div>
          {data.name != undefined &&
          <div className="bottom">
          <div className="feels">
            {data.main ? <p className="bold">{data.main.feels_like.toFixed()}&#176;C</p> : null}
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            {data.main ? <p className="bold">{data.main.humidity} %</p> : null}
            <p>Humidity</p>
          </div>
          <div className="wind">
            {data.wind ? <p className="bold">{data.wind.speed.toFixed()} MPH</p> : null}
            <p>Wind Speed</p>
          </div>
        </div>
          }
        </div>
        </div>
    </>
  );
}

export default ReqWithAxios;













// function ReqWithAxios() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     axios.get('https://jsonplaceholder.typicode.com/posts')
//       .then(response => {
//         setPosts(response.data);
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   }, []);

//   return (
//     <ul>
//       {posts.map(post => (
//         <li key={post.id}>{post.title}</li>
//       ))}
//     </ul>
//   );
// }

// export default ReqWithAxios;