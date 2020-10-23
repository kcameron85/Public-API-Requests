/*
    API URL: https://randomuser.me/api/1.3/
    Language Modifier: results="ADD NUMBER OF USERS HERE - NO PARENTHESIS"
    Nationality Modifier: nat="ADD NATION INDICATOR HERE - NO PARENTHESIS"
*/

const usersURL = ``;
const fetching = new FetchRQST(`https://randomuser.me/api/`, 12, `us`);
fetching.getUsers();
