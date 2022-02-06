
import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
  {id: 'q1', author: 'yashar', text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
  {id: 'q2', author: 'akish', text:'Etiam imperdiet leo sed dolor pulvinar consequat. Etiam tempor imperdiet magna.'}
]


const AllQuotes = () => {
  return (
    <QuoteList quotes={DUMMY_QUOTES}/>
  )
};

export default AllQuotes;