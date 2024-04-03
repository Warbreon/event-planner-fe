import CheckMarkIcon from './check-mark-icon/CheckMarkIcon';
import './PasswordRules.css';
import PasswordRulesViewModel from './PasswordRulesViewModel';

const PasswordRules = () => {
	const {checkMarkIconState} = PasswordRulesViewModel();
	return (
		<section className='password-rules-group'>
			<p className='password-rules-p'>New password:</p>
			<ul className='password-rules'>
				<li className='password-length-validation'>
					<CheckMarkIcon state={checkMarkIconState.lengthValidation} /> Is at least 8 characters long
				</li>
				<li className='uppercase-validation'>
					<CheckMarkIcon state={checkMarkIconState.uppcaseValidation} /> Includes at least 1 uppercase letter
				</li>
				<li className='numbers-validation'>
					<CheckMarkIcon state={checkMarkIconState.numberValidation} /> Includes at least 1 number
				</li>
				<li className='symbols-validation'>
					<CheckMarkIcon state={checkMarkIconState.symbolValidation} /> Includes at least one special character, e.g., ! @ # ? ]
				</li>
			</ul>
		</section>
	);
};

export default PasswordRules;
