class FetchRQST {
    constructor(url, lang, response) {
        this.url = url;
        this.lang = lang;
        this.reponse = response;
    }

    usersURL = `${this.url}?results=${this.response}&nat=${this.lang}`;

    getUsers() { 
        fetch(usersURL)
            .then(response => response.json() );
    }

}
