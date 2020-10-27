class CreateHTML {
    constructor(data) {
        this.data = data;
    }

    data = this.data;

    generateSearch() {
        function createInput(type, id, inputClass) {
            const input = document.createElement('input')
            createForm.appendChild(input);
            input.type = type;
            input.id = id;
            input.classList = inputClass;
        }

        //Selects the .search-container <div>
        const search = document.querySelector(".search-container");
        
        //creates the form element
        const createForm = document.createElement('form');

        //appends the form element to the .search-container div
        search.appendChild(createForm);

        //adding attributes and values to <form> element
        createForm.action = '#';
        createForm.method = 'get';

        //creating input elements
        createInput('search', 'search-input', 'search-input');
        createInput('submit', 'search-submit', 'search-submit');

        //adding attributes to 
        const searchBox = document.querySelector('#search-input');
        searchBox.placeholder = 'Search...';
        const button = document.querySelector('#search-submit');
        button.value = "\uD83D\uDD0D"; 
    }

    generateUsers(data) {

    }
}