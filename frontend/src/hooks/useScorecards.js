import axios from 'axios';
import { useQuery } from 'react-query';

const getScorecards = async () => {
	const { data } = await axios.get(
		`${process.env.REACT_APP_API_ROOT}/api/scorecards`
	);
	return data;
};

const useScorecards = () => useQuery('scorecards', getScorecards);

export default useScorecards;
