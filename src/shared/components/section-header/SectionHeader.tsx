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
	onButtonClick?: () => void;
}

const SectionHeader: React.FC<Partial<SectionHeaderProps>> = ({ name, variableCount, buttonType, onButtonClick }) => {
	const sectionHeaderClasses = buttonType
		? classNames(style.sectionHeader, style.sectionHeaderWithButton)
		: classNames(style.sectionHeader);

	return (
		<Box className={sectionHeaderClasses}>
			<Typography variant='h2'>
				{name} {variableCount && `(${variableCount})`}
			</Typography>
			{buttonType && onButtonClick && (
				<GenericButton
					type={ButtonTypes.button}
					styles={BUTTON_STYLES.TEXT_ONLY}
					onClick={onButtonClick}
					icon={buttonType}
					iconAtEnd
				/>
			)}
		</Box>
	);
};

export default SectionHeader;
