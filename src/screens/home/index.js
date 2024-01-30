import React, { useRef, useState, useCallback } from "react";
import { toPng } from "html-to-image";
import { ImagePicker, Input, PageLayout, PreviewImage, Submit } from "../../components";

import background from '../../assets/images/bg.png'

import styles from  './styles.module.css'

export const Home = () => {
	const ref = useRef(null);
	const [selectedImage, setSelectedImage] = useState(null);
	const [formData, setFormData] = useState({
		title: "",
		target: "",
		group: "",
		priceTarget: "",
	});

	const onButtonClick = useCallback(() => {
		if (ref.current === null) {
			return;
		}

		toPng(ref.current, { cacheBust: true })
			.then(dataUrl => {
				const link = document.createElement("a");
				
				const currentDate = new Date();
				const dateDime =
					currentDate.getDate() +
					"/" +
					(currentDate.getMonth() + 1) +
					"/" +
					currentDate.getFullYear() +
					"_" +
					currentDate.getHours() +
					"_" +
					currentDate.getMinutes() +
					"_" +
					currentDate.getSeconds();

				link.download = `${dateDime}.png`;
				link.href = dataUrl;
				link.click();
			})
			.catch(err => {
				console.log(err);
			});
	}, [ref]);
	
	const onChange = (e, key) => {
		const value = e.target.value;
		setFormData({ ...formData, [key]: value });
	};

	return (
		<PageLayout>
			<div className={styles.wrapper}>
				<div className={styles.side_wrapper}>
					<div className={styles.form_wrapper}>
						<img
							src={background}
							className={styles.bg_image}
							alt={"благодійний збір"}
						/>
						<Input
							placeholder="Збір для кого?"
							onInput={e => onChange(e, "title")}
						/>
						<Input
							placeholder="Ціль збору"
							textarea='true'
							onInput={e => onChange(e, "target")}
						/>
						<Input
							placeholder="Назва підрозділу"
							onInput={e => onChange(e, "group")}
						/>
						<Input
							placeholder="Сума зробу"
							onInput={e => onChange(e, "priceTarget")}
						/>
						<ImagePicker
							selectedImage={selectedImage}
							setSelectedImage={setSelectedImage}
						/>
						<Submit title={"Опублікувати"} onClick={onButtonClick} />
					</div>
				</div>
				<div className={styles.side_wrapper}>
					<div ref={ref}>
						<PreviewImage {...formData} src={selectedImage} />
					</div>
				</div>
			</div>
		</PageLayout>
	);
}