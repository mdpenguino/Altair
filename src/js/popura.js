import popura from 'popura';
const client = popura('Username', 'Password')

client.getAnimeList()
  .then(res => console.log(res))
  .catch(err => console.log(err));

client.getUser()
