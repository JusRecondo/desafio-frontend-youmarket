import React from 'react';
import styles from './Loader.module.scss';
import { ThreeDots } from 'react-loader-spinner';

const Loader = () => {
    return (
        <div className={styles.loaderContainer}>
            <ThreeDots
                height="80"
                width="80"
                radius="9"
                color="#01AD87"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />
        </div>
    );
};

export default Loader;
