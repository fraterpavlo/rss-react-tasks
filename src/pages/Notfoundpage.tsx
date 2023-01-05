import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <strong className="not-found-page__container" data-testid="not-found-page">
      Page not found. Go <Link to="/">home</Link>
    </strong>
  );
};

export { NotFoundPage };
