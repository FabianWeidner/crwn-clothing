import React from 'react';
import classes from './Homepage.module.css';

const HomePage = () => {
  return (
    <div className={classes.homepage}>
      <div className={classes.directory_menu}>
        <div className={classes.menu_item}>
          <div className={classes.content}>
            <h1 className={classes.title}>HATS</h1>
            <span className={classes.subtitle}>SHOP NOW</span>
          </div>
        </div>
        <div className={classes.menu_item}>
          <div className={classes.content}>
            <h1 className={classes.title}>JACKETS</h1>
            <span className={classes.subtitle}>SHOP NOW</span>
          </div>
        </div>
        <div className={classes.menu_item}>
          <div className={classes.content}>
            <h1 className={classes.title}>SNEAKERS</h1>
            <span className={classes.subtitle}>SHOP NOW</span>
          </div>
        </div>
        <div className={classes.menu_item}>
          <div className={classes.content}>
            <h1 className={classes.title}>WOMENS</h1>
            <span className={classes.subtitle}>SHOP NOW</span>
          </div>
        </div>
        <div className={classes.menu_item}>
          <div className={classes.content}>
            <h1 className={classes.title}>MENS</h1>
            <span className={classes.subtitle}>SHOP NOW</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
