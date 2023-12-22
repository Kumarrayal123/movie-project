

import React from 'react';
import  { useState } from 'react';

import { Link } from 'react-router-dom'; // Assuming you're using react-router-dom
import { Card } from 'react-bootstrap'; // Assuming you're using react-bootstrap
import styles from './Homepage.module.css'; // Make sure to replace 'YourStyles' with your actual styles file
import csk from '../assets/m-1.jpg';
import rcb from '../assets/m-2.jpg';
import dc from '../assets/m-3.webp';
import srh from '../assets/m-4.png';
import mi from '../assets/m-5.png';
import gt from '../assets/m-6.jpg';
import pbks from '../assets/m-7.jpg';
import kkr from '../assets/m-8.jpg';
import Srh from '../assets/m-9.jpg';
import RR from '../assets/m-10.jpg';

const More = () => {
  const [searchTerm, setSearchTerm] = useState('');

// const More = () => {

  const arrayOfObjects = [
    { Poster:csk ,
      Match :'1',
      Teams:'GT vs CSK',
      Link:'https://youtu.be/dc-IqHjE2v8?si=M1UUNO_4Mn_JiJY8'
    },
    {
      Poster:rcb ,
      Match :'2',
      Teams:'RCB vs LSG',
      Link:'https://youtu.be/rvQVxVXtc40?si=fsMGYTlW4P0KMp4Z'
    },
    {
      Poster:dc,
      Match :'3',
      Teams:'DC vs LSG',
      Link:'https://youtu.be/PAT3LAehm1Y?si=346MV71Oczz1hyPC'
    },
    {
      Poster:srh,
      Match :'4',
      Teams:'SRH vs RR',
      Link:'https://youtu.be/PAT3LAehm1Y?si=zG5gyoEJj-YWF0Ue'
    },
    {
      Poster :mi,
      Match :'5',
      Teams:'RCB vs MI',
      Link:'https://youtu.be/z_XkDwqw4FQ?si=l1sC5aCy0zlq9-2B'
    },
    {
      Poster:gt,
      Match :'6',
      Teams:'GT vs DC' ,
      Link:'https://youtu.be/7LdT7PUQnxY?si=WP9_viP1JYZpaWzW'
    },
    {
     Poster:pbks,
      Match :'7',
      Teams:'RR vs PBKS ',
      Link:'https://youtu.be/oxlB8Piq0_4?si=e7SKFaK2rc__SCLk'
    },
    {
      Poster:kkr,
      Match :'8',
      Teams:'KKR vs RCB ',
      Link:'https://youtu.be/5Wab3s6HedM?si=QDj_Vh9kBPoyk_dD'
    },
    {
       Poster:Srh,
      Match :'9',
      Teams:'LSG vs SRH ',
      Link:'https://youtu.be/Sw5d7-tGH90?si=oxTD25jqex9p6_Gj'
    },
    {
      Poster:RR,
      Match :'10',
      Teams:'RR vs DC ',
      Link:'https://youtu.be/ETK4WgZvorw?si=2R_21QMklb5viege'
    },
    
  ]; // Replace this with your actual data

  return (
    <div style={{ backgroundColor: "lightblue" }}>
      <h2 className={styles.movieHubTitle}>ｃｒｉｃｋｅｔ</h2>
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

      {arrayOfObjects
      .filter((show) => show.Teams.toLowerCase().includes(searchTerm.toLowerCase()))
      .map((show) => (
        <Card style={{height:'400px'}} key={show.id} className={styles.movieCard}>
          <Card.Img style={{ width: '100%', height: '200px' }} variant="top" src={show.Poster} />
          <div style={{ marginLeft: "3px", textAlign: "left", padding: "5px" }} key={More.Match}><br></br>
            <p>Match: {show.Match}</p>
            <p>Teams: {show.Teams}</p>
            
            <button className={styles.watchTrailerBtn}
              onClick={() => {
                window.open(show.Link);
              }}
            >Watch</button>
            <h1></h1>
            
          </div>
        </Card>
      ))}
    
      <div></div>
    </div>
  );

};

 export default More;
