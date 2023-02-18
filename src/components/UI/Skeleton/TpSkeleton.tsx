import { FC } from 'react';
import Skeleton, { SkeletonProps } from 'react-loading-skeleton';

const TpSkeleton: FC<SkeletonProps> = ({ ...props }) => {
	return <Skeleton {...props} />;
};

export default TpSkeleton;
