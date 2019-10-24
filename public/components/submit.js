import m from 'mithril';

import { Navbar } from './navbar.js';

export const Submit = {
    view: function() {
        return m('div', [
            Navbar(),
            m(
                '.container',
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
            )
        ]);
    }
};
