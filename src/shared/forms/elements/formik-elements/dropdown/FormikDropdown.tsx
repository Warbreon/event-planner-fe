import { FC, useEffect } from "react";
import { useField } from "formik";
import Dropdown from "../../../../../components/dropdown/Dropdown";
import { SelectChangeEvent, Typography } from "@mui/material";
import styles from "./FormikDropdown.module.css";
import { Tag } from "../../../../../models/Tag";

interface FormikDropdownProps {
  name: string;
  label?: string;
  options: Array<{ value: string | number; label: string }>;
  menuItemClassName?: string;
  selectClassName?: string;
  multiple?: boolean;
  values?: Tag[]
}

const FormikDropdown: FC<FormikDropdownProps> = ({
  name,
  label,
  options,
  menuItemClassName,
  selectClassName,
  multiple,values
}) => {
  const [field, , helpers] = useField<string | string[]>(name);

  useEffect(() => {
    const selectedIds: string[] = values?.map(tag => tag.id.toString()) || [];
    helpers.setValue(multiple ? selectedIds : selectedIds[0] || '');
  }, [helpers, values, multiple]);

  const handleChange = (event: SelectChangeEvent<string | string[]>) => {
    const value = event.target.value;
    helpers.setValue(multiple? value as string[] : value);
  };

  return (
    <div className={styles.container}>
      <Typography variant="body1" className="gray-font">
        {label}
      </Typography>
      <Dropdown
        multiple={multiple}
        value={field.value}
        onChange={handleChange}
        options={options}
        formControlClassName={styles.formControlClassName}
        selectClassName={!selectClassName ? styles.formControlClassName : selectClassName}
        menuItemClassName={menuItemClassName}
      />
    </div>
  );
};

export default FormikDropdown;
