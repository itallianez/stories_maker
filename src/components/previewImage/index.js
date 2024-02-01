import React from "react";

import defaultImage from '../../assets/images/image 2.png'
import background from "../../assets/images/bg.png";

import styles from './styles.module.css'

export const PreviewImage = ({ title, target, src, group, priceTarget }) => {
	console.log(src);
	const image = !!src ? src : defaultImage;
	console.log({ image });
	return (
		<div className={styles.wrapper}>
			{/* <img
				src={background}
				className={styles.bg_image}
				alt={"благодійний збір"}
			/> */}
			<div
				style={{ backgroundImage: `url(${background})` }}
				className={styles.bg_image}
			/>
			<div className={styles.content}>
				<div className={styles.title}>{title || "Для кого збір"}</div>
				<div className={styles.target}>{target || "Ціль збору"}</div>
				<div className={styles.desc_wrapper}>
					<div className={styles.desc_item_wrapper}>
						<div className={styles.icon}>📌</div>
						<div className={styles.subtitle}>Кому?</div>
						<div className={styles.desc}>{group || "підрозділ"}</div>
					</div>
					<div className={styles.desc_item_wrapper}>
						<div className={styles.icon}>💰</div>
						<div className={styles.subtitle}>Сума збору</div>
						<div className={styles.desc}>{priceTarget || 0} грн</div>
					</div>
				</div>
			</div>
			<img
				className={styles.image}
				src={src || defaultImage}
				alt={"благодійний збір"}
			/>
			<div className={styles.link_wrapper}>
				<div className={styles.target_link}>
					🔗<span>Посилання на банку</span>
				</div>
			</div>
		</div>
	);
};