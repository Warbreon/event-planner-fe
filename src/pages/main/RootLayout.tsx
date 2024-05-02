import { Outlet } from 'react-router-dom';
import NavigationSideBar from '../../components/nav-bar/NavigationSideBar';
import PlannerAppBar from '../../components/app-bar/PlannerAppBar';
import PlannerFooter from '../../components/footer/PlannerFooter';
import { useSelector } from 'react-redux';
import { StoreState } from '../../redux/store/Store';
import styles from './RootLayout.module.css';

const RootLayout = () => {
	const loggedIn = useSelector((state: StoreState) => state.user.signedIn);
	return (
		<NavigationSideBar drawerWidth={72}>
			<div className={styles.contentContainer}>
				{loggedIn && <PlannerAppBar />}
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
