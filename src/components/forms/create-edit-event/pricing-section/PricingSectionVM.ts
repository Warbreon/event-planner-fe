import { useState } from 'react';
import classNames from 'classnames';
import { TAGS } from '../../../../themes/styles/Tag';
import { EventFormValues } from '../../../../interfaces/EventFormValuesInterface';

interface Props {
	values: EventFormValues;
	setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
}
const PricingSectionVM = ({ values, setFieldValue }: Props) => {
	const defaultSelectedTab = values.price === 0 ? 0 : 1;
	const [selectedTag, setSelectedTag] = useState<number>(defaultSelectedTab);

	const pricingTagOptions = [
		{ id: 1, name: 'Paid' },
		{ id: 0, name: 'Free of charge' },
	];
	const handleTagChange = (id: number) => {
		setSelectedTag(id);
		setFieldValue('price', 0);
	};
	const disableWheelAndArrowKeys = (e: React.FocusEvent<HTMLInputElement>) => {
		e.target.addEventListener(
			'wheel',
			function (e) {
				e.preventDefault();
			}
		);
		e.target.addEventListener('keydown', function (e: KeyboardEvent) {
			if (e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === 'e' || e.key === '+' || e.key === '-') {
				e.preventDefault();
			}
		});
	};

	const currencies = [
		{ value: 'EUR', label: 'EUR' },
		{ value: 'USD', label: 'USD' },
		{ value: 'GBP', label: 'GBP' },
	];

	const pricingOption = selectedTag === 1 ? 'Paid' : 'Free of charge';

	const getChipClassName = (isSelected: boolean) => {
		return classNames([TAGS.SELECT_TAG], { [TAGS.TAG_SELECTED]: isSelected });
	};

	return {
		currencies,
		handleTagChange,
		selectedTag,
		pricingTagOptions,
		pricingOption,
		getChipClassName,
		disableWheelAndArrowKeys,
	};
};

export default PricingSectionVM;
