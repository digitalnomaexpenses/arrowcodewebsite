import React from 'react'
import {motion, useScroll, useTransform} from "framer-motion"

import Landing_Page_JSON from "../JSONs/landing-page"
import Landing_Page_JSON_Component_Desktop from "../Content-Components/landing-page-desktop-framer-motion"
import Landing_Page_JSON_Component_Mobile from "../Content-Components/landing-page-mobile-framer-motion"

import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r127/build/three.module.js';

export default function LandingPage(props) {
	let Landing_Page_JSON_Content_Desktop = Landing_Page_JSON.map(eachElement => (
			<Landing_Page_JSON_Component_Desktop 
				key={eachElement.id}
				id={eachElement.id}
				title={eachElement.title}
				title_span={eachElement.title_span}
				text={eachElement.text}
				button_text={eachElement.button_text}
			/>))

	let Landing_Page_JSON_Content_Mobile = Landing_Page_JSON.map(eachElement => (
			<Landing_Page_JSON_Component_Mobile 
				key={eachElement.id}
				id={eachElement.id}
				title={eachElement.title}
				title_span = {eachElement.title_span}
				text= {eachElement.text}
				button_text={eachElement.button_text}
			/>
		))


	//Klein Bottle for desktop start
	const LandingPageDesktopRef = React.useRef();
	const visionDesktopRef = React.useRef();
	const kleinBottleDesktopRef = React.useRef();

	let [kleinBottleDesktopHeight, setKleinBottleDesktopHeight] = React.useState();
	let [kleinBottleDesktopWidth, setKleinBottleDesktopWidth] = React.useState();

	React.useEffect(() => {
		if (LandingPageDesktopRef.current && visionDesktopRef && kleinBottleDesktopRef.current) {
			const LandingPageDesktop_height = LandingPageDesktopRef.current.clientHeight;
			const visionDesktop_height = visionDesktopRef.current.clientHeight;

			const kleinBottleDesktop_height = `${visionDesktop_height - 80}px`;
			console.log(LandingPageDesktop_height, visionDesktop_height, kleinBottleDesktop_height, window.innerHeight);
			setKleinBottleDesktopHeight(kleinBottleDesktop_height);

			const kleinBottleDesktop_width = `${visionDesktopRef.current.clientWidth/2}px`;
			setKleinBottleDesktopWidth(kleinBottleDesktop_width);

		    function rotateAboutPoint(obj, point, axis, theta, pointIsWorld) {
		      pointIsWorld = pointIsWorld === undefined ? false : pointIsWorld;

		      if (pointIsWorld) {
		        obj.parent.localToWorld(obj.position);
		      }

		      obj.position.sub(point);
		      obj.position.applyAxisAngle(axis, theta);
		      obj.position.add(point);

		      if (pointIsWorld) {
		        obj.parent.worldToLocal(obj.position);
		      }

		      obj.rotateOnAxis(axis, theta);
		    }


		    const kleinbottledesktopdiv = document.getElementById("kleinbottledesktopdiv");
		    const scene = new THREE.Scene();
		    // Create a camera

		    const kdesktop_width = parseInt(kleinBottleDesktop_width.replace('px', ''), 10)
		    const kdesktop_height = parseInt(kleinBottleDesktop_height.replace('px', ''), 10)
		    const camera = new THREE.PerspectiveCamera(75, kdesktop_width / kdesktop_height, 0.1, 1000);
		    camera.position.z = 0;
		    camera.position.y = 12;
		    

		    // Create a renderer
		    const renderer = new THREE.WebGLRenderer({alpha: true});
		    renderer.setSize(kdesktop_width, kdesktop_height);
		    kleinbottledesktopdiv.appendChild(renderer.domElement);
		    
		    // Create a Klein bottle geometry
		    const kleinGeometry = new THREE.ParametricGeometry(generateKleinBottle, 100, 20);
		    const material = new THREE.MeshBasicMaterial({ color: "#164951", wireframe: true });
		    const kleinBottle = new THREE.Mesh(kleinGeometry, material);

		    // Add the Klein bottle to the scene
		    scene.add(kleinBottle);

		    function generateKleinBottle(u, v, target) {
		        u *= Math.PI;
		        v *= 2 * Math.PI;

		        u = u * 2;
		        let x, y, z;
		        if (u < Math.PI) {
		            x = 3 * Math.cos(u) * (1 + Math.sin(u)) + (2 * (1 - Math.cos(u) / 2)) * Math.cos(u) * Math.cos(v);
		            //z = 4 * Math.sin(u) * (1 + Math.sin(u)) + (2 * (1 - Math.cos(u) / 2)) * Math.sin(u) * Math.cos(v);
		            z = -8 * Math.sin(u) - 2 * (1 - Math.cos(u)/2) * Math.sin(u) * Math.cos(v);
		        } else {
		            x = 3 * Math.cos(u) * (1 + Math.sin(u)) + (2 * (1 - Math.cos(u) / 2)) * Math.cos(v + Math.PI);
		            //z = 4 * Math.sin(u) * (1 + Math.sin(u));
		            z = -8 * Math.sin(u);
		        }

		        y = -2 * (1 - Math.cos(u) / 2) * Math.sin(v);

		        target.set(x, y, z).multiplyScalar(0.75);
		    }

		    var axis = new THREE.Vector3(0, 0, 1);
		    const boundingBox = new THREE.Box3().setFromObject(kleinBottle);
		    const center = new THREE.Vector3();
		    boundingBox.getCenter(center);
		    var point = new THREE.Vector3(center.x, center.y, center.z);
		    camera.lookAt(point);

		    function animate() {
		        requestAnimationFrame(animate);
		        rotateAboutPoint(kleinBottle, point, axis, 0.01, false)
		        renderer.render(scene, camera);
		    }

		    animate();
		}
	}, []);

	const klein_bottle_desktop_styles = {
		height: kleinBottleDesktopHeight,
		width: kleinBottleDesktopWidth,
	}
	//Klein Bottle for desktop end




	//Klein Bottle for mobile start
	const LandingPageRef = React.useRef();
	const visionRef = React.useRef();
	const iconsRef = React.useRef();
	const kleinBottleRef = React.useRef();

	let [kleinBottleHeight, setKleinBottleHeight] = React.useState();
	let [kleinBottleWidth, setKleinBottleWidth] = React.useState();

	React.useEffect(() => {
		if (LandingPageRef.current && visionRef.current && iconsRef.current && kleinBottleRef.current) {
			const LandingPage_height = LandingPageRef.current.clientHeight;
			const vision_height = visionRef.current.clientHeight;
			const icons_height = iconsRef.current.clientHeight;

			const kleinBottle_height = `${LandingPage_height - vision_height - icons_height - 80}px`;
			console.log(LandingPage_height, vision_height, icons_height, kleinBottle_height, window.innerHeight);
			setKleinBottleHeight(kleinBottle_height);

			const kleinBottle_width = `${LandingPageRef.current.clientWidth}px`;
			setKleinBottleWidth(kleinBottle_width);

		    function rotateAboutPoint(obj, point, axis, theta, pointIsWorld) {
		      pointIsWorld = pointIsWorld === undefined ? false : pointIsWorld;

		      if (pointIsWorld) {
		        obj.parent.localToWorld(obj.position);
		      }

		      obj.position.sub(point);
		      obj.position.applyAxisAngle(axis, theta);
		      obj.position.add(point);

		      if (pointIsWorld) {
		        obj.parent.worldToLocal(obj.position);
		      }

		      obj.rotateOnAxis(axis, theta);
		    }
		    const kleinbottlemobilediv = document.getElementById("kleinbottlemobilediv");
		    const scene = new THREE.Scene();
		    // Create a camera

		    const k_width = parseInt(kleinBottle_width.replace('px', ''), 10)
		    const k_height = parseInt(kleinBottle_height.replace('px', ''), 10)
		    const camera = new THREE.PerspectiveCamera(75, k_width / k_height, 0.1, 1000);
		    camera.position.z = 0;
		    camera.position.y = 12;
		    

		    // Create a renderer
		    const renderer = new THREE.WebGLRenderer({alpha: true});
		    renderer.setSize(k_width, k_height);
		    kleinbottlemobilediv.appendChild(renderer.domElement);
		    
		    // Create a Klein bottle geometry
		    const kleinGeometry = new THREE.ParametricGeometry(generateKleinBottle, 100, 20);
		    const material = new THREE.MeshBasicMaterial({ color: "#164951", wireframe: true });
		    const kleinBottle = new THREE.Mesh(kleinGeometry, material);

		    // Add the Klein bottle to the scene
		    scene.add(kleinBottle);

		    function generateKleinBottle(u, v, target) {
		        u *= Math.PI;
		        v *= 2 * Math.PI;

		        u = u * 2;
		        let x, y, z;
		        if (u < Math.PI) {
		            x = 3 * Math.cos(u) * (1 + Math.sin(u)) + (2 * (1 - Math.cos(u) / 2)) * Math.cos(u) * Math.cos(v);
		            //z = 4 * Math.sin(u) * (1 + Math.sin(u)) + (2 * (1 - Math.cos(u) / 2)) * Math.sin(u) * Math.cos(v);
		            z = -8 * Math.sin(u) - 2 * (1 - Math.cos(u)/2) * Math.sin(u) * Math.cos(v);
		        } else {
		            x = 3 * Math.cos(u) * (1 + Math.sin(u)) + (2 * (1 - Math.cos(u) / 2)) * Math.cos(v + Math.PI);
		            //z = 4 * Math.sin(u) * (1 + Math.sin(u));
		            z = -8 * Math.sin(u);
		        }

		        y = -2 * (1 - Math.cos(u) / 2) * Math.sin(v);

		        target.set(x, y, z).multiplyScalar(0.75);
		    }

		    var axis = new THREE.Vector3(0, 0, 1);
		    const boundingBox = new THREE.Box3().setFromObject(kleinBottle);
		    const center = new THREE.Vector3();
		    boundingBox.getCenter(center);
		    var point = new THREE.Vector3(center.x, center.y, center.z);
		    camera.lookAt(point);

		    function animate() {
		        requestAnimationFrame(animate);
		        rotateAboutPoint(kleinBottle, point, axis, 0.01, false)
		        renderer.render(scene, camera);
		    }

		    animate();
		}
	}, []);

	const klein_bottle_styles = {
		height: kleinBottleHeight,
		width: kleinBottleWidth,
	}
	//Klein Bottle for mobile end

	return (
		<section className="container landing-page" id="landing-page" ref={LandingPageDesktopRef}>
			{
				props.windowWidth > 992 && 
				<div className="d-flex flex-column pt-5">
					<div className="d-flex flex-row pb-5 justify-content-around align-items-center"
					ref={visionDesktopRef}>
						<motion.div 
							className="col-6 pt-5 ps-5"
							initial={{x: -200, opacity: 0}}
							animate={{x: 0, opacity: 1,}}
							transition={{duration: 0.5, delay: 0.4}}
							>
							{Landing_Page_JSON_Content_Desktop}
						</motion.div>
						<motion.div 
							className="col-5 pe-5"
							initial={{x:200, opacity: 0}}
							animate={{x: 0, opacity: 1}}
							transition={{delay: 0.8, duration: 0.5}}
							id="kleinbottledesktopdiv"
							ref={kleinBottleDesktopRef}
							style={klein_bottle_desktop_styles}>
						</motion.div>
					</div>
					<motion.div 
						className="d-flex flex-row justify-content-around ps-3 pe-3 mt-4 mb-5"
						initial={{y: 30, opacity: 0}}
						animate={{y: 0, opacity: 1}}
						transition={{type: "spring", delay: 1.2, duration: 0.5}}>
						<img 
							src={props.darkMode ? 
								"../SVGs/Landing_Page/aws-dark-mode.svg" : 
								"../SVGs/Landing_Page/aws-light-mode.svg"} 
							className="img-fluid lp-skill-icon-1"
							alt="AWS icon"/>
						<img 
							src={props.darkMode ? 
								"../SVGs/Landing_Page/postgreSQL-dark-mode.svg" : 
								"../SVGs/Landing_Page/postgreSQL-light-mode.svg"} 
							className="img-fluid lp-skill-icon-2"
							alt="PostgreSQL icon"/>
						<img 
							src={props.darkMode ? 
								"../SVGs/Landing_Page/flask-dark-mode.svg" : 
								"../SVGs/Landing_Page/flask-light-mode.svg"} 
							className="img-fluid lp-skill-icon-3"
							alt="Flask icon"/>
						<img 
							src={props.darkMode ? 
								"../SVGs/Landing_Page/bootstrap-dark-mode.svg" : 
								"../SVGs/Landing_Page/bootstrap-light-mode.svg"} 
							className="img-fluid lp-skill-icon-4"
							alt="Bootstrap icon"/>
						<img 
							src={props.darkMode ? 
								"../SVGs/Landing_Page/react-dark-mode.svg" : 
								"../SVGs/Landing_Page/react-light-mode.svg"} 
							className="img-fluid lp-skill-icon-5"
							alt="React icon"/>
						<img 
							src={props.darkMode ? 
								"../SVGs/Landing_Page/threejs-dark-mode.svg" : 
								"../SVGs/Landing_Page/threejs-light-mode.svg"} 
							className="img-fluid lp-skill-icon-6"
							alt="ThreeJS icon"/>
						<img 
							src={props.darkMode ? 
								"../SVGs/Landing_Page/python-dark-mode.svg" : 
								"../SVGs/Landing_Page/python-light-mode.svg"} 
							className="img-fluid lp-skill-icon-7"
							alt="Python icon"/>
					</motion.div>
				</div>
			}

			{
				props.windowWidth <= 992 && 
				<>
					<div className="d-flex flex-column justify-content-center align-items-center" ref={visionRef}>
						<motion.div 
							className="landing-page-svg-div"
							initial={{y:40, opacity:0}}
							animate={{y:0, opacity:1}}
							transition={{duration:1, delay: 0.6, type:"spring"}}
							id="kleinbottlemobilediv"
							ref={kleinBottleRef}
							style={klein_bottle_styles}>
						</motion.div>
						{Landing_Page_JSON_Content_Mobile}
					</div>
					<motion.div 
						className="d-flex flex-row justify-content-around lp-logos-mobile-light"
						initial={{y:70, opacity:0}}
						animate={{y:0, opacity:1}}
						transition={{duration:1, delay: 1.8, type:"spring"}}
						ref={iconsRef}>
						<img 
							src={props.darkMode ? 
							"../SVGs/Landing_Page/aws-m-dark-mode.svg" : 
							"../SVGs/Landing_Page/aws-m-light-mode.svg"} 
							className="img-fluid"
							alt="AWS icon"/>
						<img 
							src={props.darkMode ? 
							"../SVGs/Landing_Page/postgreSQL-m-dark-mode.svg" : 
							"../SVGs/Landing_Page/postgreSQL-m-light-mode.svg"} 
							className="img-fluid"
							alt="PostgreSQL icon"/>
						<img 
							src={props.darkMode ? 
							"../SVGs/Landing_Page/flask-m-dark-mode.svg" : 
							"../SVGs/Landing_Page/flask-m-light-mode.svg"} 
							className="img-fluid"
							alt="Flask icon"/>
						<img 
							src={props.darkMode ? 
							"../SVGs/Landing_Page/bootstrap-m-dark-mode.svg" : 
							"../SVGs/Landing_Page/bootstrap-m-light-mode.svg"} 
							className="img-fluid"
							alt="Bootstrap icon"/>
						<img 
							src={props.darkMode ? 
							"../SVGs/Landing_Page/react-m-dark-mode.svg" : 
							"../SVGs/Landing_Page/react-m-light-mode.svg"} 
							className="img-fluid"
							alt="React icon"/>
						<img 
							src={props.darkMode ? 
							"../SVGs/Landing_Page/threejs-m-dark-mode.svg" : 
							"../SVGs/Landing_Page/threejs-m-light-mode.svg"} 
							className="img-fluid"
							alt="ThreeJS icon"/>
						<img 
							src={props.darkMode ? 
							"../SVGs/Landing_Page/python-m-dark-mode.svg" : 
							"../SVGs/Landing_Page/python-m-light-mode.svg"} 
							className="img-fluid"
							alt="Python icon"/>
					</motion.div>
				</>

			}


		</section>
	)
}