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

            card.addEventListener('click', () => {
                this.generateModal(userData, i);
            });

        }
    }

    generateModal(data, i) {
        const modalData = data;

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
        modalImg.src = modalData[i].picture.large;
        modalImg.alt = 'profile picture';

        //inserting Users Name into Modal
        const usersName = document.createElement('h3');
        modalInfo.appendChild(usersName);
        usersName.innerHTML = `${modalData[i].name.first} ${modalData[i].name.last}`;

        //INSERTING <p> ELEMENTS INTO MODAL INFO CONTAINER
        createP('modal-text', modalData[i].email);
        createP('modal-text cap', modalData[i].location.city);
        const hr = document.createElement('hr');
        modalInfo.appendChild(hr);

        //converting phone number to required format useing string slice() method
        let phone = modalData[i].phone;
        const areaCode = phone.slice(1,4);
        const prefix = phone.slice(6,9);
        const subscriberNumber = phone.slice(10,14);
        phone = `(${areaCode}) ${prefix}-${subscriberNumber}`;
        createP('modal-text cap', phone);

        createP('modal-text', `${modalData[i].location.street.number} ${modalData[i].location.street.name}., ${modalData[i].location.city}, ${modalData[i].location.state} ${modalData[i].location.postcode}`);
        
        //converting date format with string slice() method
        let dateValue = modalData[i].dob.date;
        const year = dateValue.slice(0,4);
        const month = dateValue.slice(5,7);
        const day = dateValue.slice(8,10);
        dateValue = `${month}/${day}/${year}`;
        createP('modal-text', `Birthday: ${dateValue}`);        


        closeButton.addEventListener('click', () => {
            modalContainer.remove();
        });

    }
}