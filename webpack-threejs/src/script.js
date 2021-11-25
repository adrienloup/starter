import './style.css';
import * as THREE from 'three';
import * as dat from 'dat.gui';
import fox from '../static/fox.jpg';
// import displacement from '../static/displacement.jpg';
import displacement from '../static/displacement.png';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

export default class Sketch {

    constructor(selector) {
        this.scene = new THREE.Scene();
        this.renderer = new THREE.WebGLRenderer();
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(this.width, this.height);
        this.renderer.setClearColor(0xffffff, 1);
        this.container = document.getElementById(selector);
        this.width = this.container.offsetWidth;
        this.height = this.container.offsetHeight;
        this.container.appendChild(this.renderer.domElement);
        this.camera = new THREE.PerspectiveCamera(
          70,
          window.innerWidth / window.innerHeight,
          0.001,
          1000
        );
        this.camera.position.set(0, 0, 1);
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableZoom = false;
        this.time = 0;
        this.paused = false;

        this.setupResize();
        this.addObjects();
        this.resize();
        this.render();
        this.settings();
    }

    settings() {
        this.settings = {
            progress: 0
        };
        this.gui = new dat.GUI();
        this.gui.add(this.settings, 'progress', 0, 1, 0.01);
    }

    setupResize() {
        window.addEventListener('resize', this.resize.bind(this));
    }

    resize() {
        this.width = this.container.offsetWidth;
        this.height = this.container.offsetHeight;
        this.renderer.setSize(this.width, this.height);
        this.camera.aspect = this.width / this.height;
        this.material.uniforms.resolution.value.x = this.width;
        this.camera.updateProjectionMatrix();
    }

    addObjects() {
        let that = this;
        this.material = new THREE.ShaderMaterial({
            extensions : {
                derivatives: '#extension GL_OES_standard_derivatives : enable'
            },
            side: THREE.DoubleSide,
            uniforms: {
                time: { type: 'f', value: 0 },
                progress: { type: 'f', value: 0 },
                image: { type: 't', value: new THREE.TextureLoader().load(fox) },
                displacement: { type: 't', value: new THREE.TextureLoader().load(displacement) },
                resolution: { type: 'v4', value: new THREE.Vector4() },
                uvRate1: {
                    value: new THREE.Vector2(1, 1)
                }
            },
            vertexShader: this.vertexShader(),
            fragmentShader: this.fragmentShader()
        });

        this.geometry = new THREE.PlaneGeometry(0.7, 1, 1, 1);
        this.plane = new THREE.Mesh(this.geometry, this.material);
        this.scene.add(this.plane);
    }

    render() {
        this.time += 0.05;
        this.material.uniforms.time.value = this.time;
        this.material.uniforms.progress.value = this.settings.progress;
        requestAnimationFrame(this.render.bind(this));
        this.renderer.render(this.scene, this.camera);
    }

    vertexShader() {
        return `
            uniform float time;
            varying vec2 vUv;
            varying vec2 vUv1;
            varying vec4 vPosition;
            uniform sampler2D texture1;
            uniform sampler2D texture2;
            uniform vec2 pixels;
            uniform vec2 uvRate1;
            void main() {
                vUv = uv;
                vec2 _uv =uv - 0.5;
                vUv1 =_uv;
                vUv1 *= uvRate1.xy;
                vUv1 += 0.5;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `;
    }

    fragmentShader() {
        return `
            uniform float time;
            uniform float progress;
            uniform sampler2D image;
            uniform sampler2D displacement;
            uniform vec4 resolution;
            varying vec2 vUv;
            varying vec4 vPosition;
            void main() {
                vec4 displace = texture2D(displacement, vUv.yx);
                vec2 displacedUV = vec2(
                    vUv.x,
                    vUv.y + progress * (displace.r + 0.2)
                );
                displacedUV.y = mix(vUv.y, displace.r - 0.2, progress);
                vec4 color = texture2D(image, displacedUV);
                color.r = texture2D(image, displacedUV + vec2(0., 10. * 0.005) * progress).r;
                color.g = texture2D(image, displacedUV + vec2(0., 10. * 0.01) * progress).g;
                color.b = texture2D(image, displacedUV + vec2(0., 10. * 0.02) * progress).b;
                gl_FragColor = color;
            }
        `;
    }

}

new Sketch('webgl');
