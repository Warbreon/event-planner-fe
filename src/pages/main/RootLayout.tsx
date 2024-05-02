import { Outlet } from 'react-router-dom';
import NavigationSideBar from '../../components/nav-bar/NavigationSideBar';
import PlannerAppBar from '../../components/app-bar/PlannerAppBar';
import PlannerFooter from '../../components/footer/PlannerFooter';
import { useSelector } from 'react-redux';
import { PersistentStoreRootState } from '../../redux/store/PersistentStore';
import styles from './RootLayout.module.css';
import ScrollToTop from '../../components/scroll-to-top/ScrollToTop';


const RootLayout = () => {
	const loggedIn = useSelector((state: PersistentStoreRootState) => state.signedIn);
	return (
		<NavigationSideBar drawerWidth={72}>
			<div className={styles.contentContainer}>
				{loggedIn && <PlannerAppBar />}
				<ScrollToTop selector={`.${styles.mainContent}`} />
				<main className={styles.mainContent}>
					<Outlet />
				</main>
				<footer className={styles.footer}>
					<PlannerFooter />
				</footer>
			</div>
		</NavigationSideBar>
	);
};

export default RootLayout;
