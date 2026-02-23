import { createElement } from "react";
import { createRoot } from "react-dom/client";
import { HTMLElements, divWrapperElements, innershadowdefs, Footer, Title, CreateImage } from "./htmlwrappers";
import "./Firstpage.css";
//circle functions
function createCircRect(x, y) {
    let group = [];
    let shape = new HTMLElements("rect", { fill: "var(--fill-0, #D9D9D9)", height: 19, width: 83, x: x, y: y - 10 });
    group.push(shape.toJSX());
    shape = new HTMLElements("ellipse", { cx: x, cy: y, fill: "var(--fill-0, #D9D9D9)", rx: 40, ry: 39.5, });
    group.push(shape.toJSX());
    return new HTMLElements("g", { clipPath: "url(#clip0)", filter: "url(#innerShadow)" }, group).toJSX();
}
function createShapeArray(x, y, count, shapeFunction) {
    const svgs = [];
    let svgElement;
    for (let i = 0; i < count; i++) {
        svgElement =
            new HTMLElements("svg", { width: 127, height: 114, viewBox: "0 0 127 114" }, [innershadowdefs.toJSX(), shapeFunction(x, y)]).toJSX();
        svgs.push(svgElement);
    }
    return svgs;
}
//end circle funtions
//creating circles
const svgArray = createShapeArray(66, 53.5, 6, createCircRect);
let leftCircles = divWrapperElements(svgArray, {
    className: "circle-item left-circle-col"
}, 45);
const rightCircles = divWrapperElements(svgArray, { className: "circle-item right-circle-col" }, 45);
//end creating circles
//images creating
const images = [{ src: "./assets/dashboard.jpg", caption: "The man himself" },
    { src: "assets/engine.jpg", caption: "worked on engine" },
    { src: "assets/speaker.jpg", caption: "speaker installed" },
    { src: "assests/screenjpg.jpg", caption: "screen installed" },
    { src: "assests/car.jpg", caption: "My shitty car" },
    { src: "assests/wires.jpg", caption: "red if the tastiest" }
];
const imageItems = images.map((img) => createElement("div", { className: "image-card" }, CreateImage(img.src, "image-item"), createElement("p", { className: "image-caption" }, img.caption)));
//end images creation
//rendering
const root = createRoot(document.getElementById("root"));
root.render(createElement("div", {
    className: "page",
}, Title("The Chronis Page", '"Jersey 25", sans-serif'), Footer("Dimitri Chronis", "Aspiring Retard", "https://www.instagram.com/worldly_motors/", "https://www.linkedin.com/in/demetrios-chronis-a95212293/"), createElement("div", { className: "image-col" }, createElement("div", { className: "image-grid" }, imageItems))));
