import m from "mithril";

import { Navbar } from './navbar.js';
import { Body } from './body';

export const Main = {
    view: function(){
        return m('div', [Navbar(), Body()])
    }
}