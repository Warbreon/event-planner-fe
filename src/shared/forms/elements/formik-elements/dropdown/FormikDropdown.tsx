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
}

const FormikDropdown: FC<FormikDropdownProps> = ({
  name,
  label,
  options,
  menuItemClassName
}) => {
  const [field, , helpers] = useField<string[]>(name);

  const handleChange = (event: SelectChangeEvent<string[]>) => {
    helpers.setValue(event.target.value as string[]);
  };
  const valueArray = Array.isArray(field.value) ? field.value : [];

  return (
    <div className={styles.container}>
      <Typography variant="body1" className="gray-font">
        {label}
      </Typography>
      <Dropdown
        multiple={true}
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
