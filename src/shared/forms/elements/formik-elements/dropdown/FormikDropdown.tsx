import { FC } from "react";
import { useField } from "formik";
import Dropdown from "../../../../../components/dropdown/Dropdown";
import { Box, SelectChangeEvent, Typography } from "@mui/material";
import styles from "./FormikDropdown.module.css";

interface FormikDropdownProps {
  name: string;
  label?: string;
  options: Array<{ value: string; label: string }>;
  menuItemClassName?: string;
}

const FormikDropdown: FC<FormikDropdownProps> = ({
  name,
  label,
  options,
  menuItemClassName,
}) => {
  const [field, , helpers] = useField(name);

  const handleChange = (event: SelectChangeEvent<string>) => {
    helpers.setValue(event.target.value);
  };

  return (
    <Box>
      <Typography variant="body1" className="gray-font">
        {label}
      </Typography>
      <Dropdown
        value={field.value}
        onChange={handleChange}
        options={options}
        formControlClassName={styles.formControlClassName}
        selectClassName={styles.formControlClassName}
        menuItemClassName={menuItemClassName}
      />
    </Box>
  );
};

export default FormikDropdown;
