import m from 'mithril';
import logo from '../logo.png';

let isShowing = false;

export function Navbar() {
    return m(
        'nav',
        {
            class: 'navbar has-shadow',
            role: 'navigation',
            'aria-label': 'main navigation'
        },
        [
            //modal
            m('div', { class: `modal ${isShowing && 'is-active'}` }, [
                m('.modal-background'),
                m(
                    '.modal-content',
                    m('.box', [
                        m('.columns', [
                            m(
                                '.column',
                                m('.field', [
                                    m('label.label', 'URL'),
                                    m(
                                        '.control',
                                        m('input', {
                                            class: 'input is-primary'
                                        })
                                    )
                                ])
                            ),
                            m(
                                '.column',
                                m('.field', [
                                    m('label.label', 'Tags'),
                                    m(
                                        '.control',
                                        m('input', {
                                            class: 'input is-primary'
                                        })
                                    )
                                ])
                            )
                        ]),
                        m('.columns', [
                            m(
                                '.column',
                                m('.field', [
                                    m('label.label', 'Description'),
                                    m(
                                        '.control',
                                        m('input', {
                                            class: 'input is-primary'
                                        })
                                    )
                                ])
                            ),
                            m(
                                '.column',
                                m('.field', [
                                    m('label.label', 'Category'),
                                    m(
                                        '.control',
                                        m('input', {
                                            class: 'input is-primary'
                                        })
                                    )
                                ])
                            )
                        ])
                    ])
                ),
                m('button', {
                    class: 'modal-close is-large',
                    onclick: () => {
                        isShowing = false;
                    },
                    'aria-label': 'close'
                })
            ]),
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
            ]),
            m(
                'div',
                { class: 'navbar-menu' },
                m(
                    'div',
                    { class: 'navbar-end' },
                    m(
                        'div',
                        { class: 'navbar-item' },
                        m(
                            'div',
                            {
                                class: 'button is-primary',
                                onclick: openModal
                            },
                            m('strong', 'Submit')
                        )
                    )
                )
            )
        ]
    );
}

function openModal() {
    isShowing = true;
}
