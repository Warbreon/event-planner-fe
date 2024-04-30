import { createTheme } from '@mui/material';
import typographyOptions from './mui-components/typography/TypographyOptions';
import palleteOptions from './mui-components/pallete/PaletteOptions';
import muiButtonOptions from './mui-components/button/MuiButtonOptions';
import muiTabOptions from './mui-components/tabs/MuiTabOptions';
import muiTabsOptions from './mui-components/tabs/MuiTabsOptions';
import muiOutlinedInputOptions from './mui-components/input/MuiOutlinedInputOptions';
import muiTextFieldOptions from './mui-components/input/MuiTextFieldOptions';
import muiFormControlOptions from './mui-components/form-control/MuiFormControlOptions';
import muiInputBaseOptions from './mui-components/input/MuiInputBaseOptions';
import muiInputLabelOptions from './mui-components/input/MuiInputLabelOptions';
import muiSvgIconOptions from './mui-components/icon/MuiSvgIconOptions';
import muiCardMediaOptions from './mui-components/card/CardMediaOptions';
import muiCardContentOptions from './mui-components/card/MuiCardContentOptions';
import muiCardOptions from './mui-components/card/MuiCardOptions';
import muiSwitchOptions from './mui-components/switch/MuiSwitchOptions';
import muiChipOptions from './mui-components/chip/MuiChipOptions';
import muiSelectOptions from './mui-components/select/MuiSelectOptions';
import muiMenuItemOptions from './mui-components/select/MuiMenuItemOptions';
import muiMenuOptions from './mui-components/select/MuiMenuOptions';
import muiListItemOptions from './mui-components/list-item/MuiListItemOptions';
import muiAvatarOptions from './mui-components/avatar/MuiAvatarOptions';
import muiBreadcrumbsOptions from './mui-components/breadcrumbs/MuiBreadcrumbsOptions';
import MuiOptions from './mui-components/MuiOptions';
import muiToolTipOptions from './mui-components/tool-tip/MuiToolTipOptions';
import chechboxOptions from './mui-components/checkbox/CheckboxOptions';
import listItemTextOptions from './mui-components/list-item/MuiListItemTextOptions';

const projectTheme = createTheme({
	palette: palleteOptions,
	typography: typographyOptions,
	components: {
		MuiButton: muiButtonOptions as MuiOptions,
		MuiTab: muiTabOptions as MuiOptions,
		MuiTabs: muiTabsOptions as MuiOptions,
		MuiOutlinedInput: muiOutlinedInputOptions as MuiOptions,
		MuiTextField: muiTextFieldOptions as MuiOptions,
		MuiFormControl: muiFormControlOptions as MuiOptions,
		MuiInputBase: muiInputBaseOptions as MuiOptions,
		MuiInputLabel: muiInputLabelOptions as MuiOptions,
		MuiSvgIcon: muiSvgIconOptions as MuiOptions,
		MuiCardMedia: muiCardMediaOptions as MuiOptions,
		MuiCardContent: muiCardContentOptions as MuiOptions,
		MuiCard: muiCardOptions as MuiOptions,
		MuiSwitch: muiSwitchOptions as MuiOptions,
		MuiChip: muiChipOptions as MuiOptions,
		MuiBreadcrumbs: muiBreadcrumbsOptions as MuiOptions,
		MuiListItem: muiListItemOptions as MuiOptions,
		MuiAvatar: muiAvatarOptions as MuiOptions,
		MuiSelect: muiSelectOptions as MuiOptions,
		MuiMenuItem: muiMenuItemOptions as MuiOptions,
		MuiMenu: muiMenuOptions as MuiOptions,
		MuiTooltip: muiToolTipOptions as MuiOptions,
		MuiCheckbox: chechboxOptions as MuiOptions,
		MuiListItemText: listItemTextOptions as MuiOptions,
		}
	},
);

export default projectTheme;
