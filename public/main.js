import * as m from "mithril";
import 'bulma';
import { Main } from "./components";
import { Submit } from "./components/submit";

var root = document.body;
m.route(root, "/", {
    "/submit": Submit,
    "/": Main
});
