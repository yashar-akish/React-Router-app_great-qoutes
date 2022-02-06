import { Fragment } from 'react';
import { useParams, Route, Link } from 'react-router-dom';

import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const DUMMY_QUOTES = [
  {
    id: 'q1',
    author: 'yashar',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 'q2',
    author: 'akish',
    text: 'Etiam imperdiet leo sed dolor pulvinar consequat. Etiam tempor imperdiet magna.',
  },
];

const QuoteDetail = () => {
  const params = useParams();
  const quote = DUMMY_QUOTES.find((qut) => qut.id === params.quoteId);
  if (!quote) {
    return <p>No quote found</p>
  }
  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteId}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`/quotes/${params.quoteId}/comments`}>Load Comments</Link>
        </div>
      </Route>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
