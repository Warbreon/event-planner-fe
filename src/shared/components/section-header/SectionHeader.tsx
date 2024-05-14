import { Box, Typography } from '@mui/material';
import GenericButton from '../buttons/ButtonComponent';
import { BUTTON_STYLES } from '../../../themes/styles/Button';
import { ButtonTypes, IconButton } from '../buttons/ButtonComponent';
import style from './SectionHeader.module.css';
import classNames from 'classnames';

interface SectionHeaderProps {
	name: string;
	variableCount?: number;
	buttonType?: IconButton;
	buttonTitle?: string;
	onButtonClick?: () => void;
}

const SectionHeader: React.FC<Partial<SectionHeaderProps>> = ({ name, variableCount, buttonType, buttonTitle, onButtonClick }) => {
	const sectionHeaderClasses = onButtonClick
		? classNames(style.sectionHeader, style.sectionHeaderWithButton)
		: classNames(style.sectionHeader);

	return (
		<Box className={sectionHeaderClasses}>
			<Typography variant='h2'>
				{name} {variableCount && `(${variableCount})`}
			</Typography>
			{onButtonClick && (
				<GenericButton
					type={ButtonTypes.button}
					styles={BUTTON_STYLES.TEXT_ONLY}
					onClick={onButtonClick}
					icon={buttonType}
					iconAtEnd
					title={buttonTitle}
				/>
			)}
		</Box>
	);
};

export default SectionHeader;
