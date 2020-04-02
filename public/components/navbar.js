import m from 'mithril';
import logo from '../logo.png';

export function Navbar() {
    return m(
        'nav',
        {
            class: 'navbar has-shadow',
            role: 'navigation',
            'aria-label': 'main navigation'
        },
        [
            // Navbar brand
            m('div', { class: 'navbar-brand' }, [
                m(
                    'a',
                    { href: '#/', class: 'navbar-item' },
                    m('img', { src: logo, width: '112', height: 28 })
                ),
                m(
                    'a',
                    {
                        role: 'button',
                        class: 'navbar-burger burger',
                        'aria-label': 'menu',
                        'aria-expanded': 'false',
                        'data-target': 'navbarBasicExample'
                    },
                    [
                        m('span', { 'aria-hidden': true }),
                        m('span', { 'aria-hidden': true }),
                        m('span', { 'aria-hidden': true })
                    ]
                )
            ])
        ]
    );
}