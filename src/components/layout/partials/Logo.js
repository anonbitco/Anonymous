import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Image from '../../elements/Image';

const Logo = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'brand',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <h3 className="m-0">
        <Link to="/">
          <Image
            src={require('./../../../assets/images/logo.png')}
            alt="Open"
            width={200}
            height={100} />
        </Link>
      </h3>
    </div>
  );
}

export default Logo;
