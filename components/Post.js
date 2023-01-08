import { BookmarkIcon, ChatBubbleOvalLeftIcon, HeartIcon } from '@heroicons/react/24/outline';
import { EllipsisHorizontalIcon } from '@heroicons/react/24/solid';

export default function Post({ id, username, userImg, img, caption }) {
	return (
		<div className='bg-white my-7 border rounded-md'>
			{/* Post Header */}
			<div className='flex items-center p-5'>
				<img
					className='h-12 rounded-full object-cover border p-1 mr-3'
					src={userImg}
					alt={username}
				/>
				<p className='font-bold flex-1'>{username}</p>
				<EllipsisHorizontalIcon className='h-5' />
			</div>

			{/* Post Image */}
			<img className='object-cover w-full' src={img} alt={username} />

			{/* Post Buttons */}
			<div className='flex justify-between px-4 pt-4'>
				<div className='flex space-x-4'>
					<HeartIcon className='btn' />
					<ChatBubbleOvalLeftIcon className='btn' />
				</div>

				<BookmarkIcon className='btn' />
			</div>
		</div>
	);
}
