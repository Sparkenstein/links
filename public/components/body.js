import m from 'mithril';

export function Body() {
    return m('div', { class: 'columns' }, [
        m('div', { class: 'section column is-two-thirds box', style: 'height: 92vh;' }, [
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
        ]),
        m('div', { class: 'column' }, m('div', { class: 'section' }, 'Hello'))
    ]);
}
