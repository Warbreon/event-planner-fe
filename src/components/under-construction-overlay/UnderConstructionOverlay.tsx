import {FC, ReactNode} from 'react';
import {useMediaQuery} from "react-responsive";
import Image from "../image/Image";
import {Typography} from "@mui/material";
import styles from './UnderConstructionOverlay.module.css'

interface Props {
    text?: string,
    children: ReactNode,
}
const UnderConstructionOverlay: FC<Props> = ({ text, children }) => {
    const isMobile = useMediaQuery({minWidth: 1272})

    return (
        <>
            {isMobile ?
                (
                    <div>
                        {children}
                    </div>
                )
                : (
                    <div className={styles.container}>
                        <Image
                            imageUrl={'https://i.postimg.cc/3Ndbhzn7/potato.jpg'}
                            styles={'full-size-picture'}
                        />
                        <Typography variant={"h1"} className={'centered-wrap'}>{text}</Typography>
                    </div>
                )}
        </>
    );
}

export default UnderConstructionOverlay