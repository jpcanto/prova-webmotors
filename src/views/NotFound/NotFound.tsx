import React from 'react';

import { NotFoundContainer } from './NotFound.styled';
import notFound from '../../assets/img/404.png';



const NotFound: React.FC = () => {
    return <NotFoundContainer image={notFound} />;
}

export default NotFound;
