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
import Options from './mui-components/Options';

const projectTheme = createTheme({
	palette: palleteOptions,
	typography: typographyOptions,
	components: {
		MuiButton: muiButtonOptions as Options,
		MuiTab: muiTabOptions as Options,
		MuiTabs: muiTabsOptions as Options,
		MuiOutlinedInput: muiOutlinedInputOptions as Options,
		MuiTextField: muiTextFieldOptions as Options,
		MuiFormControl: muiFormControlOptions as Options,
		MuiInputBase: muiInputBaseOptions as Options,
		MuiInputLabel: muiInputLabelOptions as Options,
		MuiSvgIcon: muiSvgIconOptions as Options,
		MuiCardMedia: muiCardMediaOptions as Options,
		MuiCardContent: muiCardContentOptions as Options,
		MuiCard: muiCardOptions as Options,
		MuiSwitch: muiSwitchOptions as Options,
		MuiChip: muiChipOptions as Options,
		MuiBreadcrumbs: muiBreadcrumbsOptions as Options,
		MuiListItem: muiListItemOptions as Options,
		MuiAvatar: muiAvatarOptions as Options,
		MuiSelect: muiSelectOptions as Options,
		MuiMenuItem: muiMenuItemOptions as Options,
		MuiMenu: muiMenuOptions as Options,
	},
});

export default projectTheme;
