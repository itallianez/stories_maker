import React from "react";

import styles from './styles.module.css'

export const Input = (props) => {
	const {textarea} = props
	
	if (!!textarea) {
		return <textarea {...props} className={[styles.input, styles.textarea].join(' ')} />;
	}

	return <input {...props} className={styles.input} />;
}