var escena;
var camara;
var render;

function iniciarEscena(){
    //Render
    render = new THREE.WebGLRenderer();

    render.setClearColor(0x000000, 1);

    var canvasWidth = 500;
    var canvasHeight = 500;
    render.setSize(canvasWidth, canvasHeight);

    document.getElementById("canvas").appendChild(render.domElement);

    //Escena
    escena = new THREE.Scene();

    //Camara
    camara = new THREE.PerspectiveCamera(45, canvasWidth / canvasHeight, 0.1, 100);
    camara.position.set(0, 0, 0);
    camara.lookAt(escena.position);
    escena.add(camara);

    //Material
    var material = new THREE.MeshBasicMaterial({
        color:0xFFFFFF,
        side:THREE.DoubleSide
    });

    //TriÃ¡ngulo
    var trianguloGeometria = new THREE.Geometry();
    trianguloGeometria.vertices.push(new THREE.Vector3( 0.0,  1.0, 0.0));
    trianguloGeometria.vertices.push(new THREE.Vector3(-1.0, -1.0, 0.0));
    trianguloGeometria.vertices.push(new THREE.Vector3( 1.0, -1.0, 0.0));
    trianguloGeometria.faces.push(new THREE.Face3(0, 1, 2));

    var triangulo = new THREE.Mesh(trianguloGeometria, material);
    triangulo.position.set(-1.5, 0.0, -7.0);
    escena.add(triangulo);

    //Cuadrado
    var cuadradoGeometria = new THREE.Geometry();
    cuadradoGeometria.vertices.push(new THREE.Vector3(-1.0,  1.0, 0.0));
    cuadradoGeometria.vertices.push(new THREE.Vector3( 1.0,  1.0, 0.0));
    cuadradoGeometria.vertices.push(new THREE.Vector3( 1.0, -1.0, 0.0));
    cuadradoGeometria.vertices.push(new THREE.Vector3(-1.0, -1.0, 0.0));
    cuadradoGeometria.faces.push(new THREE.Face3(0, 1, 2));
    cuadradoGeometria.faces.push(new THREE.Face3(2, 3, 0));

    var cuadrado = new THREE.Mesh(cuadradoGeometria, material);
    cuadrado.position.set(1.5, 0.0, -7.0);
    escena.add(cuadrado);
}
function renderEscena(){
    render.render(escena, camara);
}

function webGLStart() {
    iniciarEscena();
    renderEscena();
}