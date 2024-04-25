import { CircularProgress } from "@mui/material";
import { FC } from "react";
import styles from "./LoadingIndicator.module.css";

const LoadingIndicator: FC = () => {
  return (
    <div className={styles.loadingIndicator}>
      <CircularProgress />
    </div>
  );
};

export default LoadingIndicator;
