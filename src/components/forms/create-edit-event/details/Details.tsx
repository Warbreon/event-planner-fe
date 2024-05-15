import FormikTextField from '../../../../shared/forms/elements/formik-elements/text-field/FormikTextField';
import FormikDropdown from '../../../../shared/forms/elements/formik-elements/dropdown/FormikDropdown';
import PageHeader from '../../../headers/page-headers/PageHeader';
import styles from './Details.module.css';
import { Tag } from '../../../../models/Tag';
import { FC } from 'react';

interface DetailsProps {
	tags: Tag[];
  selectedTags?: Tag[]
}

interface Option {
	value: string;
	label: string;
}

const Details: FC<DetailsProps> = ({ tags,  selectedTags}) => {
  
	const options: Option[] = tags.map((tag) => ({
		value: tag.id.toString(),
		label: tag.name,
	}));

	return (
		<div className={styles.container}>
			<PageHeader text='Details' className='event-form-section' />
			<div className={styles.textField}>
				<FormikTextField
					name='eventName'
					type='text'
					title='Event Name'
					placeholder='Enter short descriptive event title'
					titleClassName='gray-font-input'
				/>
			</div>
			<div className={styles.dropdown}>
				<FormikDropdown
					name='eventTag'
					label='Event Type'
					multiple={true}
					options={options}
          values={selectedTags}
				/>
			</div>
		</div>
	);
};

export default Details;
