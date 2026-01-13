import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ to, children, type = "primary", onClick }) => {
    const className = `btn btn-${type}`;

    if (to) {
        return <Link to={to} className={className}>{children}</Link>;
    }

    return (
        <button onClick={onClick} className={className}>
            {children}
        </button>
    );
};

export default Button;
