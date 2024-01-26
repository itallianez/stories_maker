import React from "react";
import { CloseIcon, ImagePickerIcon } from "../../../icons";

import styles from './imagePicker.module.css'

export const ImagePicker = ({ selectedImage, setSelectedImage }) => {

	const handleImageChange = e => {
		const file = e.target.files[0];

		if (file && file.type.startsWith("image/")) {
			const reader = new FileReader();

			reader.onloadend = () => {
				setSelectedImage(reader.result);
			};

			reader.readAsDataURL(file);
		} else {
			setSelectedImage(null);
			alert("Оберіть зображення!");
		}
	};

	const handleImageRemove = () => {
		setSelectedImage(null);
	};

	return (
		<div className={styles.wrapper}>
			{!selectedImage && (
				<div className={styles.input_wrapper}>
					<input
						type="file"
						accept="image/*"
						onChange={handleImageChange}
						className={styles.input}
					/>
					<ImagePickerIcon />
				</div>
			)}
			{selectedImage && (
				<div className={styles.image_wrapper}>
					<img src={selectedImage} className={styles.image} alt={'благодійний збір'}/>
					<div onClick={handleImageRemove} className={styles.delete_btn}>
						<CloseIcon className={styles.icon} />
					</div>
				</div>
			)}
		</div>
	);
};