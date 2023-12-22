import React from 'react'
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import styles from './Homepage.module.css'; // Make sure to import your styles file
import Card from 'react-bootstrap/Card';
import mohan from '../assets/ep-1.jpg';
import nani from '../assets/ep-22.jpg';
import bramhi from '../assets/ep-3.jpg';
import akandha from '../assets/ep-4.jpg';
import rajamouli from '../assets/ep-5.jpg';
import  pushpa from '../assets/ep-6.jpg';
import  ravi from '../assets/ep-7.jpg';
import  rana from '../assets/ep-8.jpg';
import vijay from '../assets/ep-9.jpg';
import mahesh from '../assets/ep-10.jpg';
import cbn from '../assets/ep-21.jpg';
import tillu from '../assets/tillu-222.jpg';
import seshu from '../assets/ep-23.jpg';
import kiran from '../assets/ep-24.jpg';
import allu from '../assets/ep-255.jpg';
import prabha from '../assets/ep-26.jpg';
import rasi from '../assets/ep-27.jpg';
import honey from '../assets/ep-28.jpg';
import puri from '../assets/ep-29.jpg';
import pawan from '../assets/ep-30.webp';
import More from './More';
const Show = () => {
  const arrayOfObjects = [
    {
      poster: mohan,
      episode: '1',
      name: 'Unstoppable 1',
      Guest:'Mohan babu',
      genre: 'Talk show',
      Promo:'https://youtu.be/cVHC5Wglycg?si=6ucfotE4BtBwUEXt'
    },
    {
      poster: nani,
      episode: '2',
      name: 'Unstoppable 1',
      Guest :"Nani",
      genre: 'Talk show',
      Promo:'https://youtu.be/LDEWTylTqlk?si=WyUwp7XnX8xpS_51'
    },
    {
      poster: bramhi,
      episode: '3',
      name: 'Unstoppable 1',
      Guest :'Bramhanadham',
      genre: 'Talk show',
      Promo:'https://youtu.be/y1rAE1qKDio?si=qatgu-IifZMANKav'
    },
    {
     poster: akandha,
      episode: '4',
      name: 'Unstoppable 1',
      Guest:'Boyapati sreenu',
      genre: 'Talk show',
      Promo:'https://youtu.be/oK2NUV36P80?si=hFJIxbcSNRv9dbK4'
    },
    {
     poster: rajamouli,
     episode: '5',
      name: 'Unstoppable 1',
      Guest:'Rajamouli',
      genre: 'Talk show',
      Promo:'https://youtu.be/oWy90Wzdsm0?si=wJWq4S0UmAg55aoB'
    },
    {
     poster: pushpa,
      episode: '6',
      name: 'Unstoppable 1',
      Guest:'Allu arjun, Sukumar, Rashmika',
      genre: 'Talk show',
      Promo:'https://youtu.be/kDDbOm-KuVs?si=h251wFR5Ge8OnSEK'
    },
    {
     poster: ravi,
      episode: '7',
      name: 'Unstoppable 1',
      Guest:'Rva Teja,Gopichand Malineni',
      genre: 'Talk show',
      Promo:'https://youtu.be/MDb4A22JnUc?si=53nfeCvtaLLLXEQj'
    },
    {
      poster: rana,
      episode: '8',
      name: 'Unstoppable 1',
      Guest:'Rana',
      genre: 'Talk show',
      Promo:'https://youtu.be/IT1VCyfUlx8?si=B3_kSqYdtWkBXOkO'
    },
    {
      poster:vijay,
      episode: '9',
      name: 'Unstoppable 1',
      Guest:'Vijay Deverakonda',
      Genre: 'Talk show',
      Promo:'https://youtu.be/j3zrwZyJ8oQ?si=SolSz4nqoJ7EOnql'
    },
    {
     poster: mahesh,
      episode: '10',
      name: 'Unstoppable 1',
      Guest:'Mahesh Babu',
      Genre: 'Talk show',
      Promo:'https://youtu.be/L6CKONLjmRA?si=HBHp0-Ej5Run3oYi'
    },
    {
      poster: cbn,
      episode: '1',
      name: 'Unstoppable 2',
      Guest:'Chandra babu naidu',
      genre: 'Talk show',
      Promo:'https://youtu.be/jGMH_luXetg?si=mblI-Qqy_oiSMlD1'
    },
    {
        poster: tillu,
      episode: '2',
      name: 'Unstoppable 2',
      Guest:'Vishwak Sen, Siddhu Jonnalagadda',
      genre: 'Talk show',
      Promo:'https://youtu.be/ubnNaWRJjwM?si=iXeh3Bb9PwNoWLS1'
    },
    {
        poster: seshu,
        episode: '3',
        name: 'Unstoppable 2',
        Guest:'Sharwanand,Adivi Sesh',
        genre: 'Talk show',
        Promo:'https://youtu.be/B2725SG0m6U?si=-8KHMGhIAkE9gzVL'
    },
    {
      poster: kiran,
        episode: '4',
        name: 'Unstoppable 2',
        Guest:'Kiran Kumar Reddy, Radhika Sarathkumar, K. R. Suresh Reddy',
        genre: 'Talk show',
        Promo:'https://youtu.be/IIshoo2spNs?si=aahPKdlccX8OlTI2'
    },
    {
      poster: allu,
      episode: '5',
      name: 'Unstoppable 2',
      Guest:'D. Suresh Babu, Allu Aravind, K. Raghavendra Rao',
      genre: 'Talk show',
      Promo:'https://youtu.be/95C501gnKtI?si=jJymqDkEHy_7vbwc'
    },
    {
      poster: prabha,
      episode: '6',
      name: 'Unstoppable 2',
      Guest:'Gopichand, Prabhas',
      genre: 'Talk show',
      Promo:'https://youtu.be/wmCOHX1D1gA?si=rPqUm0JJWfhZqcWh'
    },
    {
      poster: rasi,
      episode: '7',
      name: 'Unstoppable 2',
      Guest:'Jayasudha, Jaya Prada, Raashii Khanna',
      genre: 'Talk show',
      Promo:'https://youtu.be/4GvLzSF8UEU?si=9Mvwg7_Q-SNtB9Bk'
    },
    {
      poster: honey,
      episode: '8',
      name: 'Unstoppable 2',
      Guest:'Honey Rose, Duniya Vijay, Gopichand Malineni, Varalaxmi Sarathkumar',
      genre: 'Talk show',
      Promo:'https://youtu.be/bCQ5zMb2Txo?si=gAO4TpsuW8Od8Sk6'
    },
    {
      poster: puri,
      episode: '9',
      name: 'Unstoppable 2',
      Guest:'Vijay Deverakonda,Puri Jagannadh,Charmy Kaur',
      genre: 'Talk show',
      Promo:'https://youtu.be/j3zrwZyJ8oQ?si=yZk7Ciqg1l8F6JRQ'
    },
    {
      poster: pawan,
      episode: '10',
      name: 'Unstoppable 2',
      Guest:'Pawan kalayan, Sai tej',
      genre: 'Talk show',
      Promo:'https://youtu.be/g8lf5PCFLHY?si=s80AEvgKfREFzJ7V'
    }
    // Add more shows as needed
  ];

  return (
    <div style={{backgroundColor:"lightblue"}}>
      <h2 className={styles.movieHubTitle}>ᴬᴴᴬ ᴾᴿᴱˢᴱᴺᵀˢ ᵁᴺˢᵀᴼᴾᴾᴬᴮᴸᴱ</h2>
      <nav style={{ padding: 0 }} className={`navbar navbar-expand-lg navbar-dark ${styles.navbar}`} />
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link style={{ textDecoration: 'none' }} to="/">
                  <a style={{ color: 'white' }} className="nav-link active" aria-current="page">Movies</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link style={{ textDecoration: 'none' }} to="/show">
                  <a style={{ color: 'white' }} className="nav-link">Shows</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link style={{ textDecoration: 'none' }} to="/More">
                  <a style={{ color: 'white' }} className="nav-link disabled" tabIndex="-1" aria-disabled="true">More</a>
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button style={{ color: 'white' }} className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

      <h1></h1>
    

      {arrayOfObjects.map((show) => (
        <Card style={{height:'450px'}} key={{}} className={styles.movieCard}>
          <Card.Img style={{ width: '100%', height: '200px' }} variant="top" src={show.poster} />
        <div style={{ marginLeft: "3px", textAlign: "left",padding:"5px" }} key={show.name}><br></br>
          {/* <img src={show.poster} /> */}
          <p>Episode: {show.episode}</p>
          <p>Name: {show.name}</p>
          <p>Guest:{show.Guest}</p>
          <p>Genre: {show.genre}</p>
          <button className={styles.watchTrailerBtn}
              onClick={() => {
                window.open(show.Promo); 
              }}
            >Promo</button>
        </div>
         </Card>
      ))}
    </div>
  );
};

export default Show;
