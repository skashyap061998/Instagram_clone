import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { AiFillHome, AiOutlineSearch,AiOutlineHeart } from "react-icons/ai";
import { MdExplore } from "react-icons/md";
import { BsCameraReels } from "react-icons/bs";
import {RiMessengerLine} from "react-icons/ri"
import {FiPlusSquare} from "react-icons/fi";
import {CgProfile} from "react-icons/cg"
import {RxHamburgerMenu} from "react-icons/rx"

const Navbar = () => {
  return (
    <div className={styles.HomeContainer}>
      <img
        src="https://res.cloudinary.com/dz2lqhmsp/image/upload/v1679219328/instagaram_a3kzcb.jpg"
        alt=""
      />
      <div className={styles.HomeLogos}>
        <div className={styles.HomeLogoDiv}>
          <div>
            {" "}
            <AiFillHome className={styles.HomeLogo} />{" "}
          </div>
          <div className={styles.homediv}>
            <Link to="/">Home</Link>
          </div>
        </div>

        <div className={styles.SearchLogoDiv}>
          <div>
            {" "}
            <AiOutlineSearch className={styles.SearchLogo} />{" "}
          </div>
          <div className={styles.Searchdiv}>
            <Link to="/">Search</Link>
          </div>
        </div>
        <div className={styles.ExploreLogoDiv}>
          <div>
            {" "}
            <MdExplore className={styles.ExploreLogo} />{" "}
          </div>
          <div className={styles.Explorediv}>
            <Link to="/">Explore</Link>
          </div>
        </div>
        <div className={styles.ReelsLogoDiv}>
          <div>
            {" "}
            <BsCameraReels className={styles.ReelsLogo} />{" "}
          </div>
          <div className={styles.Reelsdiv}>
            <Link to="/">Reels</Link>
          </div>
        </div>

        <div className={styles.MessagesLogoDiv}>
          <div>
            {" "}
            <RiMessengerLine className={styles.MessagesLogo} />{" "}
          </div>
          <div className={styles.Messagesdiv}>
            <Link to="/">Messages</Link>
          </div>
        </div>


        <div className={styles.NotificationLogoDiv}>
          <div>
            {" "}
            <AiOutlineHeart className={styles.NotificationLogo} />{" "}
          </div>
          <div className={styles.Notificationdiv}>
            <Link to="/">Notification</Link>
          </div>
        </div>
        <div className={styles.ReelsLogoDiv}>
          <div>
            {" "}
            <FiPlusSquare className={styles.ReelsLogo} />{" "}
          </div>
          <div className={styles.Reelsdiv}>
            <Link to="/">Create</Link>
          </div>
        </div>
        <div className={styles.ReelsLogoDiv}>
          <div>
            {" "}
            <CgProfile className={styles.ReelsLogo} />{" "}
          </div>
          <div className={styles.Reelsdiv}>
            <Link to="/login">Profile</Link>
          </div>
        </div>
      </div>
      <div className={styles.MoreLogoDiv}>
          <div>
            {" "}
            <RxHamburgerMenu className={styles.MoreLogo} />{" "}
          </div>
          <div className={styles.Morediv}>
            <Link to="/">More</Link>
          </div>
        </div>
    </div>
  );
};

export default Navbar;
