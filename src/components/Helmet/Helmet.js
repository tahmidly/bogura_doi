import React from 'react'

const Helmet = (props) => {
    document.title ='বগুড়ার স্পেশাল দই -'+props.title
  return <div className='w-100'>{props.children}</div>;
};

export default Helmet
