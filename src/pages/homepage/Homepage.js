import React from 'react';
import Directory from '../../components/directory/Directory';
import './Homepage.styles.scss';

const HomePage = (props) => {
  return (
    <div className="homepage">
      <Directory title={props.title} />
    </div>
  );
};

export default HomePage;
