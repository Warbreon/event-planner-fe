import { Box } from '@mui/material';
import { ReactNode, FC } from 'react';
import styles from './TabPanel.module.css';

interface TabPanelProps {
	children?: ReactNode;
	index: number;
	value: number;
}

const TabPanel: FC<TabPanelProps> = ({ index, value, children }) => {
	return <div>{value === index && <Box className={styles.tabPanel}>{children}</Box>}</div>;
};

export default TabPanel;
