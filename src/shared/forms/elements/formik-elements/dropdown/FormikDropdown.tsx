import { FC } from "react";
import { useField } from "formik";
import Dropdown from "../../../../../components/dropdown/Dropdown";
import { SelectChangeEvent, Typography } from "@mui/material";
import styles from "./FormikDropdown.module.css";

interface FormikDropdownProps {
  name: string;
  label?: string;
  options: Array<{ value: string; label: string }>;
  menuItemClassName?: string;
  multiple?: boolean;
}

const FormikDropdown: FC<FormikDropdownProps> = ({
  name,
  label,
  options,
  menuItemClassName,
  multiple,
}) => {
  const [field, , helpers] = useField<string | string[]>(name);

  const handleChange = (event: SelectChangeEvent<string | string[]>) => {
    const value = event.target.value;
    helpers.setValue(multiple? value as string[] : value);
  };
  const valueArray = multiple && Array.isArray(field.value) ? field.value : [];

  return (
    <div className={styles.container}>
      <Typography variant="body1" className="gray-font">
        {label}
      </Typography>
      <Dropdown
        multiple={multiple}
        value={valueArray}
        onChange={handleChange}
        options={options}
        formControlClassName={styles.formControlClassName}
        selectClassName={styles.formControlClassName}
        menuItemClassName={menuItemClassName}
      />
    </div>
  );
};

export default FormikDropdown;
