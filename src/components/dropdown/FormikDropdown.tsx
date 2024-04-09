import { FC, useEffect } from "react";
import { useField } from "formik";
import Dropdown from "./Dropdown";
import { Box, SelectChangeEvent, Typography } from "@mui/material";
import styles from "./FormikDropdown.module.css";

interface FormikDropdownProps {
  name: string;
  label?: string;
  options: Array<{ value: string; label: string }>;
  inputLabelClassName?: string;
  menuItemClassName?: string;
}

const FormikDropdown: FC<FormikDropdownProps> = ({
  name,
  label,
  options,
  inputLabelClassName,
  menuItemClassName,
}) => {
  const [field, , helpers] = useField(name);

  useEffect(() => {
    helpers.setValue(options[0].value);
  }, [options]);

  const handleChange = (event: SelectChangeEvent<string>) => {
    helpers.setValue(event.target.value);
  };

  return (
    <Box>
      <Typography variant="body1" className="gray-font">{label}</Typography>
      <Dropdown
        value={field.value}
        onChange={handleChange}
        options={options}
        formControlClassName={styles.formControlClassName}
        inputLabelClassName={inputLabelClassName}
        selectClassName={styles.formControlClassName}
        menuItemClassName={menuItemClassName}
      />
    </Box>
  );
};

export default FormikDropdown;
