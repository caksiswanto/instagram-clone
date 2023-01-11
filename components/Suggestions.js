import { array, username, jobTitle } from 'minifaker';
import 'minifaker/locales/en';
import { useEffect, useState } from 'react';

export default function Suggestions() {
	const [suggestions, setSuggestions] = useState([]);

	useEffect(() => {
		const suggestions = array(5, (i) => ({
			username: username({ locale: 'en' }).toLowerCase(),
			jobTitle: jobTitle(),
			id: i,
		}));

		setSuggestions(suggestions);
	}, []);

	return (
		<div className='mt-4 ml-10'>
			<div className='flex items-center justify-between mb-5 text-sm'>
				<h3 className='font-bold text-gray-400'>Suggestions for you</h3>
				<button className='font-semibold text-gray-600'>See all</button>
			</div>

			{suggestions.map((suggestion) => (
				<div key={suggestion.id} className='flex items-center justify-between mt-3'>
					<img
						className='h-10 rounded-full border p-[2px]'
						src={`https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`}
						alt='user-image'
					/>
					<div className='flex-1 ml-4'>
						<h2 className='font-semibold text-sm'>{suggestion.username}</h2>
						<h3 className='text-sm text-gray-400 truncate w-[230px]'>{suggestion.jobTitle}</h3>
					</div>
					<button className='font-semibold text-blue-400 text-sm'>Follow</button>
				</div>
			))}
		</div>
	);
}
