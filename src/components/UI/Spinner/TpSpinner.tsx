import { FC } from 'react';
import { ClipLoader } from 'react-spinners';

interface ITpSpinner {
	width?: number;
	height?: number;
}

const TpSpinner: FC<ITpSpinner> = () => {
	return (
		<div className='flex justify-center items-center h-full'>
			<ClipLoader color='var(--primary-color-main)' />
		</div>
	);
};

export default TpSpinner;
