import "./style.scss";
import {root} from "./component.module.scss";
import url from "bootstrap/scss/bootstrap.scss?url";

const newUrl = new URL("bootstrap/scss/bootstrap.scss", import.meta.url);

console.log("?url", url);
console.log("new URL()", newUrl.href);
console.log("CSS module", root);
