import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Footer.module.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { style } from '@mui/material/node_modules/@mui/system';
import CircleIcon from '@mui/icons-material/Circle';

export const Footer = () => {
  return (
    <div>

    <div className={styles.gridWrapper}>
        <div className={styles.grid}>
            <div className={styles.leftgrid}>
                <h5>ROYAL BROTHERS</h5>
                <hr />
                <p>support@royalbrothers.com</p>
                <p>+91923232423/+919565364734</p>
            </div>



            <div className={styles.leftgrid}>
                <h5>COMPANY</h5>
                <hr />

                <Link to="/" className={styles.none}> <p>About Us</p> </Link>
                <Link to="/" className={styles.none}> <p>Blog</p> </Link>
                <Link to="/" className={styles.none}> <p>Careers</p> </Link>
                <Link to="/" className={styles.none}> <p>Contact Us</p> </Link>

            </div>
            <div className={styles.leftgrid}>
                <h5>POLICIES</h5>
                <hr />

            <Link to="/" className={styles.none}> <p>Privacy Policies</p> </Link>
                <Link to="/" className={styles.none}> <p>Terms & Conditions</p> </Link>
            </div>
            <div className={styles.leftgrid}>
            <h5>QUICK LINKS</h5>
            <hr />

            <Link to="/" className={styles.none}> <p>Tariff</p> </Link>
                <Link to="/" className={styles.none}> <p>Own a franchise</p> </Link>
                <Link to="/" className={styles.none}> <p>Earn with us</p> </Link>
                <Link to="/" className={styles.none}> <p>Indian bike routes</p> </Link>
            </div>
            <div className={styles.leftgrid}>
            
                <h5>FOLLOW US</h5>
                <hr />
                
                <div className={styles.follow}>
                <a target="_blank" href= "https://www.instagram.com/royalbrothersrentals/?hl=en"><InstagramIcon/></a>
                <a target="_blank" href= "https://www.facebook.com/RoyalBrothersBikeRentals/"><FacebookIcon/></a>
                <a target="_blank" href= "https://www.linkedin.com/company/royal-brothers/?originalSubdomain=in"><LinkedInIcon/></a>
                <a target="_blank" href= "https://www.youtube.com/channel/UCRGf98BhX09kyw5hKBYhsdw/videos?view=0&sort=dd&shelf_id=0"><YouTubeIcon/></a>
    </div>
            </div>
            <div className={styles.leftgrid}>
                <h5>DOWNLOAD OUR APP</h5>
                <hr />

                <div className={styles.banners}>
                   <a target="_blank"  href="https://apps.apple.com/in/app/royal-brothers-bike-rentals/id1405554590"><img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/app_store-4407bc8ced0d52a50ff042ce51e32d51de3e11717955798ec54c6a28e7926c7c.png" alt="" /></a> 
                   <a target="_blank" href="https://play.google.com/store/apps/details?id=com.royalbrothers&hl=en_IN"><img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/play_store-057f9061b4cd0fd4953a485569c15e63fdf8d89b0bcc025c04cfb34d9e8cd571.png" alt="" /></a> 


                </div>
            </div>

        </div>
    </div>



    <div className={styles.footer2wrapper}>
        <div className={styles.presence}>

        <h1>Our Presence</h1>
        <ul>
        <li>Bikes for rent in Agra </li> 
        <li> Bikes for rent in Amritsar</li>
        <li>Bikes for rent in Andaman Nicobar</li>
          
        <li>Bikes for rent in Bangalore</li>
        <li> Bikes for rent in Bangalore Airport</li>
        <li> Bikes for rent in Bangkok</li>
        <li>  Bikes for rent in Belagavi </li>
        <li>  Bikes for rent in Bhubaneswar</li>
        <li>  Bikes for rent in Ganapati pule</li>

        <li>Bikes for rent in Cochin</li>

        <li>Bikes for rent in Davanagere</li>
        <li>Bikes for rent in Delhi</li>


        <li>Bikes for rent in Guwahati</li>
        <li>Bikes for rent in Hubli-Dharwad</li>
        <li> Bikes for rent in Hyderabad</li>
        <li> Bikes for rent in Indore</li>
        <li> Bikes for rent in Jaipur</li>
        <li>Bikes for rent in Manali</li>

        <li>Bikes for rent in Calicut </li>
        <li>Bikes for rent in Chandigarh </li>
        <li>Bikes for rent in Chennai</li>
        <li>Bikes for rent in Chikmagalur</li>
        <li>Bikes for rent in Coorg - Kushalnagar</li> 
        <li>Bikes for rent in Coorg - Madikeri</li>
        <li>Bikes for rent in Gandhinagar </li>
        <li>Bikes for ret in Goa </li>
        <li>Bikes for rent in Guntur</li>
        <li>Bikes for rent in Jaisalmer</li>
        <li>Bikes for rent in Jodhpur</li>
        <li> Bikes for rent in Kolkata</li>
        <li>Bikes for rent in Konark</li>
        <li> Bikes for rent in Lucknow</li>
        <li>Bikes for rent in Mangalore</li>
        <li>Bikes for rent in Ooty</li>
        <li>Bikes for rent in Pondicherry</li>
        <li> Bikes for rent in Pune</li>
        <li> Bikes for rent in Puri</li>
        <li> Bikes for rent in Ranchi</li>

        <li>Bikes for rent in Sakleshpur </li>
        <li>Bikes for rent in Siliguri</li>
        <li>Bikes for rent in Srinagar</li>
        <li>Bikes for rent in Surat</li>
        <li> Bikes for rent in Tirupati</li>
        <li> Bikes for rent in Trivandrum</li>
        <li>  Bikes for rent in Udaipur</li>
        <li>Bikes for rent in Mohali</li>
        <li>Bikes for rent in Mount Abu </li>
        <li>Bikes for rent in Mumbai</li>
        <li>Bikes for rent in Mysore</li>
        <li>Bikes for rent in Udupi - manipal</li>
        <li>Bikes for rent in Vijayawada </li>
        <li>Bikes for rent in Vizag</li>
        <li>Bikes for rent in Wayanad</li>
  
  </ul>

        </div>
    </div>



    </div>
  )
}
