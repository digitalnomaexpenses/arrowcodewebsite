import React from "react"
import { useInView } from 'react-intersection-observer'

import JSON_qContent from "../Additional_Components/JSONs/JSON_qContent.js"
import QuestionsMobContentItem from "../Additional_Components/QuestionsMobContentItem.js"

import JSON_qAccordionContent from "../Additional_Components/JSONs/JSON_qAccordionContent.js"
import QuestionsAccordionMobItem from "../Additional_Components/QuestionsAccordionMobItem.js"

export default function QuestionsMobile(props) {

	const { ref: quesMobRef, inView: quesMobVisibility } = useInView();

	let qMobContentElement = JSON_qContent.map(eachElement => (
			<QuestionsMobContentItem
				title={eachElement.title}
				title_span={eachElement.title_span}
				text={eachElement.text}
				button_text={eachElement.button_text}
				isVisible = {quesMobVisibility}

			/>
		))

	let qAccMobElements =  JSON_qAccordionContent.map(eachElement => (
			<QuestionsAccordionMobItem 
				key={eachElement.id}
				id={eachElement.id}
				isVisible={quesMobVisibility}
				qMobAccDarkMode={props.darkMode}
				question={eachElement.question}
				answer={eachElement.answer}
			/>
		))

	return(
		<div 
			className="container pt-5"
			ref={quesMobRef}
		>
			<div className={props.darkMode ? "questionsMobile dark": "questionsMobile light"}>
				<div className="d-flex flex-column pt-5 pb-5 ps-4 pe-4">
					{qMobContentElement}
					<div className="questions-svg-div text-center ps-3 pb-3">
						<svg width="25%" height="25%" viewBox="0 0 151 174" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g id="question_mark_group" className={quesMobVisibility ? "move-up-animation-2" : ""}>
								<path d="M126.805 33.2747C124.235 33.9607 122.444 33.6242 120.176 32.0179C120.119 31.5584 120.087 31.096 120.083 30.633C120.187 27.7242 120.289 24.8155 120.445 21.9089C120.51 20.7367 120.597 19.5407 121.374 18.4358C122.29 18.2383 123.28 18.3381 124.259 18.3424C125.877 18.3522 127.487 18.0993 129.024 17.5936C130.443 17.129 131.331 16.1978 131.883 14.865C132.162 14.2309 132.22 13.5216 132.048 12.8506C131.153 9.65095 128.904 8.16402 125.978 8.60684C123.866 8.92376 121.943 9.8398 120.189 11.0706C118.989 11.9063 118.209 13.1132 117.471 14.3462L116.544 15.8982C114.604 15.1211 112.85 13.9419 111.398 12.4381C111.422 11.5872 111.971 10.9555 112.468 10.3456C114.398 7.97734 116.527 5.80446 119.041 4.03751C119.336 3.80926 119.65 3.60596 119.978 3.42971C123.337 1.84076 126.814 1.23947 130.487 2.14248C132.499 2.63523 134.11 3.75749 135.479 5.25527C136.348 6.21907 137.131 7.27403 137.958 8.29426C138.768 9.31933 139.418 10.461 139.886 11.6806C140.739 13.7948 140.715 15.9655 140.16 18.0928C139.508 20.5783 137.793 22.2649 135.527 23.4067C134.849 23.7183 134.099 23.8434 133.357 23.7692C132.241 23.7019 131.123 23.665 130.003 23.639C129.631 23.6328 129.259 23.6648 128.894 23.7345C128.29 23.843 127.891 24.1686 127.808 24.8198C127.652 25.9269 127.435 27.0274 127.313 28.1388C127.17 29.4413 127.096 30.7437 126.999 32.0461C126.931 32.4651 126.857 32.884 126.805 33.2747Z" fill="#FF5F5F" stoke-width="1.1" stroke="black" id="question-mark-question" className={quesMobVisibility ? "question-mark-animation" : ""}/>
								<path d="M124.038 48.1896C121.075 48.2504 118.969 45.8431 119.399 43.2469C119.659 41.6775 120.61 40.4012 121.913 39.4678C122.273 39.229 122.703 39.1168 123.135 39.1487C125.275 39.3527 127.135 40.0538 128.01 42.2614C128.142 42.5376 128.237 42.8294 128.295 43.1297C128.499 44.8837 127.009 47.2888 125.327 47.8901C124.906 48.0241 124.475 48.1243 124.038 48.1896Z" fill="#FF5F5F" id="question-mark-dot" stoke-width="1.1" stroke="black" className={quesMobVisibility ? 
									"question-mark-dot-appear" : ""}/>
							</g>
							
							<path d="M92.1001 99.5878C92.0992 99.6044 92.0984 99.6167 92.0979 99.6246C92.0826 99.7412 92.0597 99.9374 92.0282 100.208C91.6066 103.821 89.6415 120.66 83.7744 137.216C80.6107 146.144 76.3258 154.949 70.5675 161.546C64.8175 168.133 57.6227 172.494 48.6066 172.621C30.4989 172.874 19.1531 160.786 12.3043 145.168C5.45421 129.547 3.17489 110.527 3.17439 97.2782C3.17439 91.6297 5.93102 87.4734 10.1357 84.388C14.3588 81.2892 20.0227 79.2904 25.7395 78.0103C31.4482 76.732 37.1643 76.1801 41.458 75.9484C43.6036 75.8327 45.3911 75.797 46.6412 75.7903C47.2661 75.7869 47.7566 75.7907 48.0901 75.7954C48.2569 75.7978 48.3844 75.8003 48.4698 75.8023L48.5661 75.8046L48.59 75.8052L48.59 75.8053L48.5939 75.8054C71.4888 76.8212 82.3268 82.9006 87.4536 88.6003C90.0188 91.4522 91.1759 94.2315 91.6944 96.2857C91.9539 97.314 92.0537 98.1622 92.0891 98.7482C92.1067 99.0412 92.1083 99.2684 92.1057 99.4196C92.1043 99.4951 92.102 99.5517 92.1001 99.5878Z" fill="white" stroke="black" strokeWidth="1.1" id="robot-body-outline-1" className={quesMobVisibility ? "robot-body-outline-appear" : ""}/>
							<path d="M91.5404 93.628C91.5454 93.6356 91.4814 93.6836 91.3514 93.7699C91.1944 93.8715 91.0034 93.9942 90.7684 94.1457C90.2564 94.4775 89.4784 94.931 88.4594 95.4881C86.4174 96.5917 83.3604 98.0453 79.3894 99.3598C75.4244 100.68 70.5484 101.844 65.0464 102.554C59.5464 103.279 53.4384 103.55 47.0444 103.507C40.6514 103.429 34.5514 103.295 29.0344 102.636C23.5214 101.996 18.6334 100.724 14.8004 99.0569C10.9524 97.4077 8.17938 95.443 6.43838 93.9386C5.57138 93.1773 4.94036 92.5454 4.53436 92.0996C4.35236 91.8925 4.20336 91.7237 4.08136 91.5847C3.98136 91.4668 3.93337 91.4044 3.94037 91.3987C3.94737 91.3929 4.00837 91.4447 4.12137 91.5511C4.25337 91.6806 4.41436 91.8378 4.61136 92.0306C5.04036 92.4524 5.69135 93.0594 6.57235 93.7919C8.34235 95.2407 11.1204 97.1402 14.9494 98.7328C18.7654 100.343 23.6114 101.566 29.0934 102.179C34.5734 102.809 40.6684 102.93 47.0484 103.007C53.4274 103.05 59.5084 102.793 64.9834 102.097C70.4604 101.417 75.3134 100.296 79.2714 99.0252C83.2354 97.7605 86.2984 96.3635 88.3634 95.3174C89.3934 94.7882 90.1864 94.3634 90.7144 94.0604C90.9594 93.9262 91.1594 93.8168 91.3234 93.7277C91.4614 93.6548 91.5354 93.6203 91.5404 93.628Z" fill="transparent" stroke="black" strokeWidth="1.1" id="robot-body-outline-2" className={quesMobVisibility ? "robot-body-outline-appear-2" : ""}/>
							<path d="M63.7444 102.482C63.7624 102.481 63.7844 102.707 63.8094 103.14C63.8374 103.571 63.8564 104.209 63.8534 105.03C63.8364 106.67 63.7564 109.068 63.0904 111.954C62.7594 113.394 62.2594 114.95 61.5214 116.539C60.7854 118.124 59.8274 119.769 58.4924 121.264C57.1824 122.773 55.5194 124.129 53.5824 125.197C52.6064 125.718 51.5574 126.152 50.4554 126.489C49.3464 126.805 48.1814 126.997 46.9914 127.049C44.6064 127.125 42.2764 126.536 40.3204 125.493C38.3544 124.458 36.7244 123.05 35.4394 121.524C32.8304 118.454 31.7234 114.953 31.1864 112.074C30.6704 109.161 30.6784 106.766 30.7284 105.126C30.7544 104.305 30.8014 103.669 30.8404 103.238C30.8814 102.808 30.9114 102.583 30.9294 102.583C30.9474 102.584 30.9524 102.812 30.9454 103.243C30.9414 103.724 30.9374 104.351 30.9314 105.129C30.9434 106.762 30.9944 109.143 31.5494 112.011C32.1264 114.849 33.2514 118.263 35.8124 121.234C37.0744 122.712 38.6644 124.071 40.5654 125.063C42.4574 126.064 44.6874 126.622 46.9744 126.55C48.1154 126.501 49.2354 126.317 50.3064 126.013C51.3704 125.69 52.3854 125.272 53.3334 124.77C55.2144 123.74 56.8414 122.428 58.1274 120.966C59.4364 119.52 60.3874 117.922 61.1284 116.37C61.8694 114.815 62.3824 113.292 62.7324 111.875C63.4354 109.035 63.5724 106.658 63.6514 105.027C63.6734 104.249 63.6914 103.623 63.7044 103.141C63.7134 102.71 63.7264 102.483 63.7444 102.482Z" fill="transparent" stroke="black" strokeWidth="1.1" id="robot-body-outline-3" className={quesMobVisibility ? "robot-body-outline-appear-2" : ""}/>
							<path d="M74.6854 156.643C74.6274 156.663 74.3284 155.7 73.5444 154.061C72.7644 152.425 71.4384 150.124 69.2924 147.649C67.1314 145.205 64.1004 142.603 60.1444 140.687C56.2144 138.75 51.3384 137.657 46.2354 137.826C41.1324 138.027 36.3554 139.47 32.5884 141.687C28.7944 143.884 25.9764 146.699 24.0154 149.294C22.0704 151.916 20.9294 154.308 20.2814 155.995C19.6284 157.686 19.4064 158.667 19.3474 158.652C19.3304 158.648 19.3814 158.403 19.4944 157.938C19.5944 157.469 19.7994 156.794 20.0904 155.93C20.6854 154.211 21.7844 151.772 23.7154 149.09C25.6624 146.437 28.4934 143.551 32.3404 141.294C36.1604 139.015 41.0234 137.53 46.2164 137.328C51.4094 137.154 56.3744 138.282 60.3624 140.278C64.3754 142.249 67.4254 144.921 69.5764 147.424C71.7134 149.958 73.0024 152.31 73.7304 153.983C74.0894 154.823 74.3464 155.482 74.4834 155.942C74.6324 156.398 74.7034 156.639 74.6854 156.643Z" fill="transparent" stroke="black" strokeWidth="1.1" id="robot-body-outline-4" className={quesMobVisibility ? "robot-body-outline-appear-2" : ""}/>
							<path d="M85.1947 132.865L68.2268 132.777L70.0874 124.756H87.534C86.9211 127.178 86.1079 129.935 85.1947 132.865Z" fill="#FF5F5F" stroke="black" strokeWidth="1.1" id="robot-body-rectangle-right" className={quesMobVisibility ? "question-mark-dot-appear" : ""}/>
							<path d="M5.97359 124.756H23.4273L25.288 132.777L7.95158 132.865C7.29549 130.705 6.84141 128.649 6.41682 126.727C6.26793 126.053 6.12267 125.396 5.97359 124.756Z" fill="#FF5F5F" stroke="black" strokeWidth="1.1" id="robot-body-rectangle-left" className={quesMobVisibility ? "question-mark-dot-appear" : ""}/>
							<path opacity="0.4" d="M48.593 75.8054L48.5939 75.8054C73.3879 76.9055 84.9849 84.6318 89.4915 91.2917C89.4719 91.307 89.4514 91.3229 89.4301 91.3394C89.1336 91.5677 88.6656 91.9016 87.9949 92.3089C86.6537 93.1236 84.5007 94.2325 81.2863 95.3781C74.8569 97.6696 64.1814 100.107 47.2664 100.628C30.8933 101.132 20.202 98.4493 13.7176 95.5072C10.4735 94.0353 8.28849 92.5014 6.97012 91.2749C6.30884 90.6596 5.8781 90.1333 5.63869 89.7426C5.51802 89.5456 5.45768 89.402 5.43367 89.3124C5.43157 89.3046 5.42985 89.2976 5.42844 89.2914C5.77873 88.6973 6.48515 87.8558 7.14796 87.1232C7.48552 86.7501 7.80075 86.4171 8.03167 86.1773C8.14705 86.0575 8.24115 85.9612 8.30621 85.8951L8.38097 85.8194L8.39718 85.803C14.3374 80.4158 24.3288 77.8951 32.9442 76.7388C37.2364 76.1627 41.1528 75.9293 43.9965 75.84C45.418 75.7954 46.5704 75.7869 47.3664 75.7894C47.7644 75.7907 48.0733 75.7948 48.2821 75.7985C48.3865 75.8003 48.4659 75.8021 48.5189 75.8034L48.5784 75.805L48.593 75.8054ZM5.42233 89.2517C5.42245 89.2517 5.42263 89.2537 5.42251 89.2574C5.42215 89.2534 5.42221 89.2516 5.42233 89.2517Z" fill="white" stroke="black" strokeWidth="1.1" id="robot-body-outline-5" className={quesMobVisibility ? "robot-body-outline-appear-2" : ""}/>
							<mask id="path-12-inside-1_238_2104" fill="white">
							<path d="M1.82739 49.8065C0.195393 46.3067 -0.592611 42.296 0.516389 38.6131C1.62439 34.9302 4.92841 31.722 8.91141 31.3844" id="robot-body-outline-6" className={quesMobVisibility ? "robot-body-outline-appear-2" : ""}/>
							</mask>
							<g id="robot_head_group" className={quesMobVisibility ? "move-up-animation-1" : ""}>
								<path d="M1.82739 49.8065C0.195393 46.3067 -0.592611 42.296 0.516389 38.6131C1.62439 34.9302 4.92841 31.722 8.91141 31.3844" fill="#FF5F5F" id="robot-ear-left"
									className={quesMobVisibility ? "question-mark-dot-appear" : ""}/>
								<path d="M0.516389 38.6131L1.56967 38.9302L1.56975 38.93L0.516389 38.6131ZM2.82433 49.3416C1.25957 45.9861 0.56558 42.2647 1.56967 38.9302L-0.536894 38.2959C-1.7508 42.3272 -0.868783 46.6274 0.83046 50.2714L2.82433 49.3416ZM1.56975 38.93C2.57251 35.5969 5.55095 32.7731 9.00429 32.4805L8.81853 30.2884C4.30587 30.6708 0.676266 34.2635 -0.536973 38.2962L1.56975 38.93Z" fill="black" mask="url(#path-12-inside-1_238_2104)" stroke="black" strokeWidth="0.01" id="robot-ear-left-2" className={quesMobVisibility ? "question-mark-dot-appear" : ""}/>
								<mask id="path-14-inside-2_238_2104" fill="white">
								<path d="M7.58536 31.6077C7.63336 31.6719 6.91638 32.1955 5.96338 33.2377C5.01638 34.2742 3.78438 35.8122 2.86038 37.7126C1.97938 39.6494 1.32438 41.475 0.924379 42.8078C0.522379 44.1435 0.340361 44.9911 0.262361 44.9796C0.198361 44.9709 0.252384 44.0984 0.567384 42.7206C0.882384 41.3418 1.48638 39.4835 2.38638 37.5045C3.34838 35.5284 4.65637 33.9952 5.69537 32.9951C6.74137 31.9912 7.55436 31.5578 7.58536 31.6077Z" />
								</mask>
								<mask id="path-16-inside-3_238_2104" fill="white">
								<path d="M93.7725 49.8065C95.4045 46.3067 96.1925 42.296 95.0835 38.6131C93.9755 34.9302 90.6715 31.722 86.6885 31.3844"/>
								</mask>
								<path d="M93.7725 49.8065C95.4045 46.3067 96.1925 42.296 95.0835 38.6131C93.9755 34.9302 90.6715 31.722 86.6885 31.3844" fill="#FF5F5F" id="robot-ear-right" className={quesMobVisibility ? "question-mark-dot-appear" : ""}/>
								<path d="M95.0835 38.6131L94.0301 38.93L94.0302 38.9302L95.0835 38.6131ZM94.7694 50.2714C96.4686 46.6274 97.3507 42.3272 96.1367 38.2959L94.0302 38.9302C95.0343 42.2647 94.3403 45.9861 92.7755 49.3416L94.7694 50.2714ZM96.1368 38.2962C94.9236 34.2635 91.294 30.6708 86.7814 30.2884L86.5956 32.4805C90.0489 32.7731 93.0273 35.5969 94.0301 38.93L96.1368 38.2962Z" fill="black" mask="url(#path-16-inside-3_238_2104)" stroke="black" strokeWidth="0.01" id="robot-ear-right-2" className={quesMobVisibility ? "question-mark-dot-appear" : ""}/>
								<mask id="path-18-inside-4_238_2104" fill="white">
								</mask>
								<path d="M0.918054 50.6042L0.918062 50.6042C2.23203 44.2388 5.29906 35.3595 12.445 28.1363C19.5759 20.9284 30.8218 15.3153 48.6069 15.5576L48.6144 15.0076L48.607 15.5576C67.2688 15.8113 78.2702 22.1228 84.7667 29.7872C91.2808 37.4722 93.3265 46.5892 93.9282 52.5417C94.4149 57.3581 92.903 62.1664 89.6803 65.8956C84.2017 72.2354 72.4875 80.5326 48.6146 80.524C24.9499 80.5145 12.3043 72.9856 5.89271 66.787L5.51043 67.1824L5.8927 66.787C1.51258 62.5528 -0.290528 56.457 0.918054 50.6042ZM0.379437 50.493L0.379456 50.493L0.379437 50.493Z" fill="white" stroke="black" strokeWidth="1.1" id="robot-face-outline" className={quesMobVisibility ? "robot-body-outline-appear-2" : ""}/>
								<path d="M32.0039 18.0002C32.0209 17.9944 32.0929 18.143 32.2139 18.4307C32.3539 18.773 32.5239 19.1901 32.7289 19.6925C33.1779 20.7856 33.8059 22.3801 34.7899 24.2489C35.7819 26.1013 37.1459 28.2683 39.2809 30.1092C41.3749 31.932 44.3379 33.4585 47.6459 33.3376C50.9419 33.2389 53.8929 31.7757 56.0649 30.0268C58.2509 28.2462 59.7339 26.1531 60.8099 24.3438C61.8859 22.523 62.5799 20.9543 63.0629 19.8756C63.5399 18.7931 63.7949 18.1891 63.8319 18.2015C63.8489 18.2073 63.8069 18.3655 63.7109 18.6627C63.6159 18.9599 63.4629 19.3933 63.2519 19.9466C62.8259 21.0512 62.1809 22.6495 61.1329 24.5145C60.0839 26.3679 58.6119 28.5214 56.3769 30.3768C54.1589 32.1947 51.1189 33.7298 47.6619 33.8362C45.9459 33.8928 44.2689 33.5294 42.7999 32.8995C41.3209 32.2791 40.0479 31.397 38.9599 30.4496C36.7789 28.5329 35.4219 26.2979 34.4619 24.4052C33.5089 22.4942 32.9319 20.8747 32.5399 19.7587C32.3469 19.1997 32.2059 18.7615 32.1169 18.4633C32.0259 18.1651 31.9869 18.0059 32.0039 18.0002Z" fill="transparent" stroke="black" strokeWidth="1.1" id="robot-face-outline-2" className={quesMobVisibility ? "robot-body-outline-appear-2" : ""}/>
								<path d="M72.2439 65.1924L72.2439 65.1924C54.8778 69.2647 37.9411 69.4151 21.4544 65.3721C15.4622 63.9027 11.3234 58.6786 11.3234 52.7769V52.5449C11.3234 45.3741 17.3932 39.5217 24.9294 39.5217H68.9754C76.5117 39.5217 82.5814 45.3741 82.5814 52.5449C82.5824 58.5196 78.332 63.7653 72.2439 65.1924Z" fill="#FF5F5F" stroke="black" strokeWidth="1.1" id="robot-face-outline-3" className={quesMobVisibility ? "question-mark-animation" : ""}/>
								<path d="M33.9313 55.1558C33.6503 56.8347 32.0043 57.9776 30.2533 57.7082C28.5023 57.4388 27.3103 55.8605 27.5913 54.1816C27.8723 52.5027 29.5183 51.3598 31.2693 51.6292C33.0203 51.8977 34.2123 53.4769 33.9313 55.1558Z" fill="black" stroke="black" strokeWidth="1.1" id="robot-eye-left" className={quesMobVisibility ? "question-mark-animation" : ""}/>
								<path d="M70.7123 53.3724C70.4313 55.0513 68.7853 56.1942 67.0343 55.9248C65.2833 55.6553 64.0913 54.0771 64.3723 52.3982C64.6533 50.7193 66.2993 49.5764 68.0503 49.8458C69.8003 50.1152 70.9923 51.6935 70.7123 53.3724Z" fill="black" stroke="black" strokeWidth="1.1" id="robot-eye-right" className={quesMobVisibility ? "question-mark-animation" : ""}/>
								<path d="M56.5914 53.7655C56.6484 53.7473 56.8344 54.8509 56.1144 56.4368C55.7504 57.2115 55.1474 58.0831 54.2294 58.7926C53.3184 59.5089 52.0844 59.9979 50.7564 60.0957C49.4274 60.1868 48.1454 59.8771 47.1564 59.296C46.1604 58.7227 45.4584 57.9441 45.0044 57.2278C44.1004 55.758 44.1524 54.6371 44.2114 54.6476C44.3244 54.6169 44.4424 55.6736 45.3794 56.9747C45.8494 57.6114 46.5314 58.2941 47.4484 58.7859C48.3574 59.2845 49.5134 59.5453 50.7194 59.4638C51.9234 59.3737 53.0384 58.9509 53.8794 58.3286C54.7294 57.7101 55.3234 56.9373 55.7134 56.2393C56.4854 54.8154 56.4754 53.7511 56.5914 53.7655Z" fill="white" stroke="black" strokeWidth="1.1" id="robot-smile" className={quesMobVisibility ? "robot-body-outline-appear-2" : ""}/>
							</g>
						</svg>
					</div>
					<div className="accordion accordion-flush" id="accordionFlushExample">

						<div 
							className=	{
								`accordion-item 
								${props.darkMode ? "dark-accordion" : ""} 
								${quesMobVisibility ? "ques-ai-m-1-animation" : ""}`
							} 
							style={{background: props.darkMode ? "#303030" : "rgba(255, 255, 255, 1)"}}>
							<h2 className="accordion-header">
							  <button className={props.darkMode ? "accordion-button accordion-button-mobile dark-accordion collapsed" : "accordion-button accordion-button-mobile collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#accordion-item-1" aria-expanded="false" aria-controls="accordion-item-1">
							    What is the payment model for your services?
							  </button>
							</h2>
							<div id="accordion-item-1" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
							  <div className="accordion-body accordion-body-mobile text-justify">
							  	This depends on the project. Before we start a project, 
							  	we will share a quote of the complete requirements with you.
							  </div>
							</div>
						</div>

						<div 
							className=	{
								`accordion-item 
								${props.darkMode ? "dark-accordion" : ""} 
								${quesMobVisibility ? "ques-ai-m-2-animation" : ""}`
							} 
							style={{background: props.darkMode ? "#303030" : "rgba(255, 255, 255, 1)"}}>
							<h2 className="accordion-header">
							  <button className={props.darkMode ? "accordion-button accordion-button-mobile dark-accordion collapsed" : "accordion-button accordion-button-mobile collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#accordion-item-2" aria-expanded="false" aria-controls="accordion-item-2">
							    How do I keep track of the project progress?
							  </button>
							</h2>
							<div id="accordion-item-2" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
							  <div className="accordion-body accordion-body-mobile">
							  	<div className="d-flex flex-column">
							  		<div className="pb-2  text-justify">
							  			We typically follow a tiered payment model for our services based
							  			on delivery milestones. A typical payment model may look like this:
							  		</div>
							  		<div className="pb-1  text-justify">
							  			Payment 1 - 50% - Advance Payment for Mobilization.
									</div>
									<div className="pb-1  text-justify">
							  			Payment 2 - 25% - On Delivery of a pre-defined milestone (Roughly 75% of the project).
									</div>
									<div className="pb-1  text-justify">
							  			Payment 3 - 25% - On completion, but before delivery of the complete project.
									</div>

									<div className="pb-1  text-justify">
							  			Please Note: They payment structure may vary based on project requirements.
									</div>

									<div className="pt-2  text-justify">
							  			Alternatively, payment can be based on man-hours, or the amount of data to be scraped.
							  		</div>
							  	</div>
							  </div>
							</div>
						</div>

						<div 
							className=	{
								`accordion-item 
								${props.darkMode ? "dark-accordion" : ""} 
								${quesMobVisibility ? "ques-ai-m-3-animation" : ""}`
							} 
							style={{background: props.darkMode ? "#303030" : "rgba(255, 255, 255, 1)"}}>
							<h2 className="accordion-header">
							  <button className={props.darkMode ? "accordion-button accordion-button-mobile dark-accordion collapsed" : "accordion-button accordion-button-mobile collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#accordion-item-3" aria-expanded="false" aria-controls="accordion-item-3">
							    Do I own the code written for my project?
							  </button>
							</h2>
							<div id="accordion-item-3" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
							  <div className="accordion-body accordion-body-mobile text-justify">Lorem ipsum dolor sit amet. Qui tenetur rerum in aperiam internos sed possimus error est quibusdam temporibus aut labore voluptate. Et dolor incidunt eum quas fugit eos maiores similique id dolorum reiciendis quo expedita velit ex harum voluptates est sunt vero.</div>
							</div>
						</div>

						<div 
							className=	{
								`accordion-item 
								${props.darkMode ? "dark-accordion" : ""} 
								${quesMobVisibility ? "ques-ai-m-4-animation" : ""}`
							} 
							style={{background: props.darkMode ? "#303030" : "rgba(255, 255, 255, 1)"}}>
							<h2 className="accordion-header">
							  <button className={props.darkMode ? "accordion-button accordion-button-mobile dark-accordion collapsed" : "accordion-button accordion-button-mobile collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#accordion-item-4" aria-expanded="false" aria-controls="accordion-item-4">
							    Do you provide UI / UX design services too?
							  </button>
							</h2>
							<div id="accordion-item-4" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
							  <div className="accordion-body accordion-body-mobile text-justify">
							  	We prefer when our clients provide their own design, since design
							  	is subjective and can require several iterations to get right. 
							  	However, we have a third-party designer. You can connect with them directly 
							  	and finalize your designs.
							  </div>
							</div>
						</div>

						<div 
							className=	{
								`accordion-item 
								${props.darkMode ? "dark-accordion" : ""} 
								${quesMobVisibility ? "ques-ai-m-5-animation" : ""}`
							} 
							style={{background: props.darkMode ? "#303030" : "rgba(255, 255, 255, 1)"}}>
							<h2 className="accordion-header">
							  <button className={props.darkMode ? "accordion-button accordion-button-mobile dark-accordion collapsed" : "accordion-button accordion-button-mobile collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#accordion-item-5" aria-expanded="false" aria-controls="accordion-item-5">
							   Do you charge for meetings/phone calls/video calls?
							  </button>
							</h2>
							<div id="accordion-item-5" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
							  <div className="accordion-body accordion-body-mobile text-justify">
							  	Before start of a project, we provide 2 hours of free meeting time to understand your requirements and 
							  	and reach a reasonable quotation. This can be a combination of video calls,phone calls, meetings, etc.
							  	Post start of a project, we provide 4 hours of meeting time per month free to any of our clients.
							  	After that, we charge $35 per hour of meeting time.
							  </div>
							</div>
						</div>

						<div 
							className=	{
								`accordion-item 
								${props.darkMode ? "dark-accordion" : ""} 
								${quesMobVisibility ? "ques-ai-m-6-animation" : ""}`
							} 
							style={{background: props.darkMode ? "#303030" : "rgba(255, 255, 255, 1)"}}>
							<h2 className="accordion-header">
							  <button className={props.darkMode ? "accordion-button accordion-button-mobile dark-accordion collapsed" : "accordion-button accordion-button-mobile collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#accordion-item-6" aria-expanded="false" aria-controls="accordion-item-6">
							    Is there a enterprise plan?
							  </button>
							</h2>
							<div id="accordion-item-6" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
							  <div className="accordion-body accordion-body-mobile text-justify">Lorem ipsum dolor sit amet. Qui tenetur rerum in aperiam internos sed possimus error est quibusdam temporibus aut labore voluptate. Et dolor incidunt eum quas fugit eos maiores similique id dolorum reiciendis quo expedita velit ex harum voluptates est sunt vero.</div>
							</div>
						</div>

						<div 
							className=	{
								`accordion-item 
								${props.darkMode ? "dark-accordion" : ""} 
								${quesMobVisibility ? "ques-ai-m-7-animation" : ""}`
							} 
							style={{background: props.darkMode ? "#303030" : "rgba(255, 255, 255, 1)"}}>
							<h2 className="accordion-header">
							  <button className={props.darkMode ? "accordion-button accordion-button-mobile dark-accordion collapsed" : "accordion-button accordion-button-mobile collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#accordion-item-7" aria-expanded="false" aria-controls="accordion-item-7">
							    Do you provide product management services?
							  </button>
							</h2>
							<div id="accordion-item-7" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
							  <div className="accordion-body accordion-body-mobile text-justify">Lorem ipsum dolor sit amet. Qui tenetur rerum in aperiam internos sed possimus error est quibusdam temporibus aut labore voluptate. Et dolor incidunt eum quas fugit eos maiores similique id dolorum reiciendis quo expedita velit ex harum voluptates est sunt vero.</div>
							</div>
						</div>

						<div 
							className=	{
								`accordion-item 
								${props.darkMode ? "dark-accordion" : ""} 
								${quesMobVisibility ? "ques-ai-m-8-animation" : ""}`
							} 
							style={{background: props.darkMode ? "#303030" : "rgba(255, 255, 255, 1)"}}>
							<h2 className="accordion-header">
							  <button className={props.darkMode ? "accordion-button accordion-button-mobile dark-accordion collapsed" : "accordion-button accordion-button-mobile collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#accordion-item-8" aria-expanded="false" aria-controls="accordion-item-8">
							    Who pays for cost like the cloud, domain name, etc?
							  </button>
							</h2>
							<div id="accordion-item-8" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
							  <div className="accordion-body accordion-body-mobile text-justify">Lorem ipsum dolor sit amet. Qui tenetur rerum in aperiam internos sed possimus error est quibusdam temporibus aut labore voluptate. Et dolor incidunt eum quas fugit eos maiores similique id dolorum reiciendis quo expedita velit ex harum voluptates est sunt vero.</div>
							</div>
						</div>

						<div 
							className=	{
								`accordion-item 
								${props.darkMode ? "dark-accordion" : ""} 
								${quesMobVisibility ? "ques-ai-m-9-animation" : ""}`
							} 
							style={{background: props.darkMode ? "#303030" : "rgba(255, 255, 255, 1)"}}>
							<h2 className="accordion-header">
							  <button className={props.darkMode ? "accordion-button accordion-button-mobile dark-accordion collapsed" : "accordion-button accordion-button-mobile collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#accordion-item-9" aria-expanded="false" aria-controls="accordion-item-9">
							    What other industry have you worked in?
							  </button>
							</h2>
							<div id="accordion-item-9" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
							  <div className="accordion-body accordion-body-mobile text-justify">Lorem ipsum dolor sit amet. Qui tenetur rerum in aperiam internos sed possimus error est quibusdam temporibus aut labore voluptate. Et dolor incidunt eum quas fugit eos maiores similique id dolorum reiciendis quo expedita velit ex harum voluptates est sunt vero.</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}