import { PasswordValidationIconState } from '../../pages/password-reset/create-new-password/reset-password-interfaces';
import CheckMarkIcon from './check-mark-icon/CheckMarkIcon';
import './PasswordRules.css';

type Props = {
	iconState: PasswordValidationIconState;
};

const PasswordRules: React.FC<Props> = ({ iconState }) => {
	return (
		<section className='password-rules-group'>
			<p className='password-rules-p'>New password:</p>
			<ul className='password-rules'>
				<li className='password-length-validation'>
					<CheckMarkIcon state={iconState.lengthValidation} /> Is at least 8 characters long
				</li>
				<li className='uppercase-validation'>
					<CheckMarkIcon state={iconState.uppcaseValidation} /> Includes at least 1 uppercase letter
				</li>
				<li className='numbers-validation'>
					<CheckMarkIcon state={iconState.numberValidation} /> Includes at least 1 number
				</li>
				<li className='symbols-validation'>
					<CheckMarkIcon state={iconState.symbolValidation} /> Includes at least one special character, e.g., ! @ # ? ]
				</li>
			</ul>
		</section>
	);
};

export default PasswordRules;
