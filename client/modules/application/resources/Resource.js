/** @flow */
let options = {};

UserStore.listen(state => {
    options.token = state.token
})

export class Resource {
    static get(url: string, params = {}): Promise {
        return fetch(url, {
            query: {...params, token: options.token},
            ...options
        }).then(data => data.json())
    }

    static post(url: string, params = {}): Promise {
        return fetch(url, {
            method: "POST",
            query: {token: options.token},
            body,
            ...options
        }).then(data => data.json())

    }

    static put() {

    }

    static patch() {

    }

    static delete() {

    }
}

Resource.get(`/some-url/${param1}`)


