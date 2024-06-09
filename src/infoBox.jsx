import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './infoBox.css';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}) {
    const image_url="https://images.unsplash.com/photo-1702825501983-59b934795e34?q=80&w=3055&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    const hot_url="https://images.unsplash.com/photo-1541119638723-c51cbe2262aa?q=80&w=2946&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const cold_url="https://images.unsplash.com/photo-1599059021750-82716ae2b661?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const rain_url="https://images.unsplash.com/photo-1623567932970-576132e5d056?q=80&w=3133&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  return (
    <div className="infoBox">
      <h1>Weather Info</h1>
      <div className='cardContainer'>
      <Card style={{ Width: 400 }}>
      <CardMedia
        sx={{ height: 200 }}
        image={info.humidity>80?rain_url:(info.temp>15?hot_url:cold_url)}
        title="weather"
      />
      <CardContent sx={{ width: 400 }}>
        <Typography gutterBottom variant="h5" component="span">
        <span>{info.city} </span> <span >{info.humidity>80?<ThunderstormIcon fontSize="small"/>:(info.temp>15?<WbSunnyIcon fontSize="small"/>:<AcUnitIcon/>)}</span> <span className='detials'>({info.weather}) </span>
        </Typography>
        <Typography variant="body2" color="text.secondary"component="span">
         <div>Temperature:{info.temp}&deg;C </div>
         <div>Humidity:{info.humidity} </div>
         <div>Feels like:{info.feelsLike}&deg;C </div>
         <div>Min Temperature:{info.min_temp}&deg;C </div>
         <div>Max Temperature:{info.max_temp}&deg;C</div>
         <div>Weather:{info.weather} </div>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
    </div>
  );
}
