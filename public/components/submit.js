import m from 'mithril';

let url;
let tags = [];
let description;

export default function submit() {
    return m('div', { class: 'container' }, [
        m('h1', { class: 'title' }, 'New Link'),
        m('div', { class: 'container' }, [
            m('div', { class: 'field' }, [
                m('label', { class: 'label' }, 'URL'),
                m(
                    'div',
                    { class: 'control' },
                    m('input', {
                        class: 'input',
                        type: 'url',
                        oninput: onURLChange,
                        placeholder: 'Enter URL'
                    })
                )
            ]),
            m('div', { class: 'columns' }, [
                m('div', { class: 'column field' }, [
                    m('label', { class: 'label' }, 'tags'),
                    m(
                        'div',
                        { class: 'control' },
                        m('input', {
                            class: 'input',
                            type: 'text',
                            oninput: onTagsChange,
                            placeholder: 'Add tags'
                        })
                    )
                ]),
                m('div', { class: 'column field' }, [
                    m('label', { class: 'label' }, 'Description'),
                    m(
                        'div',
                        { class: 'control' },
                        m('input', {
                            class: 'input',
                            type: 'text',
                            oninput: onDescChange,
                            placeholder: 'Enter description'
                        })
                    )
                ])
            ]),
            m(
                'button',
                { class: 'button is-success', onclick: submitLink },
                'Submit'
            )
        ])
    ]);
}

function onURLChange(e) {
    if (e.target.value) {
        url = e.target.value;
    } else {
        url = '';
    }
}

function onTagsChange(e) {
    if (e.target.value) {
        tags = e.target.value.split(' ');
    } else {
        tags = [];
    }
}

function onDescChange(e) {
    if (e.target.value) {
        description = e.target.value;
    } else {
        description = '';
    }
}

async function submitLink() {
    console.log('Submitting', url, tags, description);
    const res = await fetch('/api/post', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url, tags, description })
    })
        .then(d => d.json())
        .catch(console.error);

    console.log('Resp', res);
}
