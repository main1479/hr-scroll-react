import React, { Suspense } from 'react';
import Preloader from '../components/Preloader';
import '../styles/home.scss';

//
// const HomeLazy = Loadable({
//   loader: () => import("../containers/Home"),
//   loading: loader,
// });
const HomeLazy = React.lazy(() => import('../containers/Home'));

const Index = () => {
	return (
		<>
			<Suspense fallback={<Preloader />}>
				<HomeLazy />
			</Suspense>
		</>
	);
};
export default Index;
