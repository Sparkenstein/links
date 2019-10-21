'use strict';
export const Navbar = {
    view: function() {
        return m(
            'nav',
            "Hello world"
        );
    }
};

//
// {
//     class: 'navbar has-shadow',
//     role: 'navigation',
//     'aria-label': 'main navigation'
// },
// [
//     // Navbar brand
//     m('div', { class: 'navbar-brand' }, [
//         m(
//             'a',
//             { href: '#', class: 'navbar-item' },
//             m('img', { src: 'logo.png', width: '112', height: 28 })
//         ),
//         m(
//             'a',
//             {
//                 role: 'button',
//                 class: 'navbar-burger burger',
//                 'aria-label': 'menu',
//                 'aria-expanded': 'false',
//                 'data-target': 'navbarBasicExample'
//             },
//             [
//                 m('span', { 'aria-hidden': true }),
//                 m('span', { 'aria-hidden': true }),
//                 m('span', { 'aria-hidden': true })
//             ]
//         )
//     ]),
//     m(
//         'div',
//         { class: 'navbar-menu' },
//         m(
//             'div',
//             { class: 'navbar-end' },
//             m(
//                 'div',
//                 { class: 'navbar-item' },
//                 m(
//                     'div',
//                     { class: 'buttons' },
//                     m(
//                         'a',
//                         {
//                             id: 'submit',
//                             class: 'button is-primary'
//                         },
//                         m('strong', 'Submit')
//                     )
//                 )
//             )
//         )
//     )
// ]