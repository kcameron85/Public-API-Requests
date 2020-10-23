class FetchRQST {
    constructor(url, response, lang) {
        this.url = url;
        this.response = response;
        this.lang = lang;

    }

    getUsers() { 
        fetch(`${this.url}?results=${this.response}&nat=${this.lang}`)
            .then(response => response.json() )
            .then(data => {
                const createUsers = new CreateHTML();
                createUsers.generateUsers(data); 
            });
    }

}
