import * as THREE from 'three'

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )

const renderer = new THREE.WebGLRenderer()
renderer.setSize( window.innerWidth, window.innerHeight )
renderer.setClearColor(0xffffff)
document.body.appendChild( renderer.domElement )

const geometry = new THREE.BoxGeometry
const material = new THREE.MeshBasicMaterial( { color: '#000000' } );
const cube = new THREE.Mesh( geometry, material )
cube.castShadow = true

const circleGeometry = new THREE.CircleGeometry
const circleMaterial = new THREE.MeshBasicMaterial({color: '#9EED66'})
const circle = new THREE.Mesh(circleGeometry, circleMaterial)
circle.castShadow = true
circle.receiveShadow = true

const light = new THREE.PointLight( 0xff0000, 1, 100 )
light.position.set( 0, 2, 2 )

scene.add( cube, circle, light )

camera.position.z = 5

function animate() {
	requestAnimationFrame( animate )

	cube.position.set(0, 1, 1)
	//cube.position.x += 0.01
    cube.rotation.x += 0.01;
	// cube.rotation.y += 0.01;
	//cube.rotation.z += 0.01;

	circle.position.set(0, 1, 1)
	//circle.position.x -= 0.01
    circle.rotation.x += 0.01;
	// circle.rotation.y += 0.01;
	//circle.rotation.z += 0.01;

	renderer.render( scene, camera )
}
animate()