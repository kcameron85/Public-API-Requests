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

        //adding attributes to <input> Elements
        const searchBox = document.querySelector('#search-input');
        searchBox.placeholder = 'Search...';
        const button = document.querySelector('#search-submit');
        button.value = "\uD83D\uDD0D"; 
    }

    generateUsers(data) {
        const galleryDiv = document.querySelector('#gallery');
        const userData = data.results;

        for(let i = 0; i < userData.length; i++) {

            //creating outer card <div>
            const card = document.createElement('div');
            galleryDiv.appendChild(card);
            card.classList = "card";

            //creating card <img> container
            const imgContainer = document.createElement('div');
            card.appendChild(imgContainer);
            imgContainer.classList = "card-img-container";

            //adding <img> element to card-img-container
            const img = document.createElement('img');
            imgContainer.appendChild(img);
            img.classList = "card-img";
            img.alt = "profile picture";
            img.src = userData[i].picture.large;

            //adding card-info-container <div>
            const info = document.createElement('div');
            card.appendChild(info);
            info.classList = "card-info-container";

            //adding <h3> to card-info-div
            const name = document.createElement('h3');
            info.appendChild(name);
            name.id = "name";
            name.classList = "card-name cap";
            name.innerHTML = `${userData[i].name.first} ${userData[i].name.last}`;

            //creating the <p> elements and appending them to card-info-div
            const email = document.createElement('p');
            info.appendChild(email);
            email.classList = 'card-text';
            email.innerHTML = userData[i].email;

            const cityState = document.createElement('p');
            info.appendChild(cityState);
            cityState.classList = 'card-text cap';
            cityState.innerHTML = `${userData[i].location.city}, ${userData[i].location.state}`;
        }
    }

    generateModal(data) {
        const modalData = data.results;
        console.log(modalData);

        function createP(pClass, content) {
            const p = document.createElement('p')
            modalInfo.appendChild(p);
            p.classList = pClass;
            p.innerHTML = content;
        }

        //inserting modal markup directly after the gallery <div>
        const galleryDiv = document.querySelector('#gallery');
        const modalContainer = document.createElement('div');
        galleryDiv.insertAdjacentElement('afterend', modalContainer);
        modalContainer.classList = 'modal-container';

        //inserting modal outer div markup
        const modal = document.createElement('div');
        modalContainer.appendChild(modal);
        modal.classList = 'modal';

        //inserting close button markup
        const closeButton = document.createElement('button');
        const closeIcon = document.createElement('strong');
        modal.appendChild(closeButton);
        closeButton.appendChild(closeIcon);
        closeButton.type = 'button';
        closeButton.id = 'modal-close-btn';
        closeButton.classList = 'modal-close-btn';
        closeIcon.innerText = 'X';

        //inserting modal content conatiner
        const modalInfo = document.createElement('div');
        closeButton.insertAdjacentElement('afterend', modalInfo);
        modalInfo.classList = 'modal-info-container';

        //inserting img markup into modal content container
        const modalImg = document.createElement('img');
        modalInfo.appendChild(modalImg);
        modalImg.classList = 'modal-img';
        modalImg.src = modalData[0].picture.large;
        modalImg.alt = 'profile picture';

        //inserting <p> elements into modal content container
        createP('modal-text', modalData[0].email);
        createP('modal-text cap', modalData[0].location.city);
        const hr = document.createElement('hr');
        modalInfo.appendChild(hr);
        createP('modal-text cap', modalData[0].phone);
        createP('modal-text', `${modalData[0].location.street.number} ${modalData[0].location.street.name}., ${modalData[0].location.city}, ${modalData[0].location.state} ${modalData[0].location.postcode}`);
        createP('modal-text', `Birthday: ${modalData[0].dob.date}`);

    }
}