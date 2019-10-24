import m from "mithril";

import { Navbar } from './navbar.js';

export const Submit = {
    view: function(){
        return m('div', [Navbar(), m('a', { href: '#/',}, "Go back")])
    }
}