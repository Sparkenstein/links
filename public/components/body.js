import m from 'mithril';
import submit from './submit';

export function Body() {
    return m('div', { class: 'columns', style: 'margin-top: 10px;' }, [
        m(
            'div',
            {
                class: 'section column is-two-thirds box',
                style: 'height: 92vh; margin-right: 20px; margin-left: 20px;'
            },
            [
                m(
                    '.container',
                    m('h1.title', { style: { padding: '10px' } }, 'Search...')
                ),
                m(
                    '.container',
                    m(
                        '.field',
                        m(
                            '.control',
                            m('input', {
                                class: 'input is-primary is-rounded',
                                id: 'searchbar',
                                type: 'text',
                                placeholder: 'Enter Search String...'
                            })
                        )
                    )
                )
            ]
        ),
        m(
            'div',
            {
                class: 'section column  is-one-thirds box',
                style: 'height: 92vh;'
            },
            submit()
        )
    ]);
}
