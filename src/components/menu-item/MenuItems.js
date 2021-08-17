import React from 'react';
import { withRouter } from 'react-router';
import './MenuItems.styles.scss';

const MenuItems = ({ title, imageUrl, size, history, linkUrl, match }) => {
  const historyPushHandler = () => history.push(`${match.url}${linkUrl}`);
  return (
    <div className={`${size} menu-item`} onClick={historyPushHandler}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};
export default withRouter(MenuItems);
