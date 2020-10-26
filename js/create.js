class CreateHTML {
    constructor(data) {
        this.data = data;
    }

    data = this.data;

    generateSearch() {
        function createLi(type, id, inputClass) {
            const input = document.createElement('input')
            createForm.appendChild(input);
            input.type = type;
            input.id = id;
            input.classList = inputClass;
            input.value = value; 
        }

        const search = document.querySelector(".search-container");
        const createForm = document.createElement('form');
        search.appendChild(createForm);
        createForm.action = '#';
        createForm.method = 'get';
        createLi('search', 'search-input', 'search-input');
        createLi('submit', 'search-submit', 'search-submit');
        const searchBox = document.querySelector('#search-input');
        searchBox.placeholder = 'Search...';
        const button = document.querySelector('#search-submit');
        button.value = "&#x1F50D;"; 
    }

    generateUsers(data) {

    }
}