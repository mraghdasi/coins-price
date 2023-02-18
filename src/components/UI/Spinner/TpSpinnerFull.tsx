import { FC, ReactNode } from 'react';
import { ClipLoader } from 'react-spinners';
import { twMerge } from 'tailwind-merge';

interface ITpSpinnerFull {
	isLoading: boolean;
	children: ReactNode;
	hasHeight?: boolean;
	className?: string;
}

const TpSpinnerFull: FC<ITpSpinnerFull> = ({ isLoading = false, children, hasHeight = true, className }) => {
	return isLoading ? (
		<div className='relative'>
			<div className={twMerge(`flex items-center z-50 absolute bg-[var(--dg-loading-bg)] justify-center w-full ${hasHeight ? 'h-full' : 'h-auto'} ${className}`)}>
				<ClipLoader color='var(--primary-color-main)' />
			</div>
			{children}
		</div>
	) : (
		<>{children}</>
	);
};

export default TpSpinnerFull;
