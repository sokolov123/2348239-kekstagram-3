const URL = 'https://28.javascript.pages.academy/kekstagram';

const METHOD_GET = 'GET';
const METHOD_POST = 'POST';

const ERROR_GET = 'Данные не загружены. что-то не так';
const ERROR_SEND = 'Форма не отправилась. что-то не так';

const GET_DATA = '/data';
const SEND_DATA = '/';


const input = (Route, Error, Method = METHOD_GET, Body = null) =>
  fetch(`${URL}${Route}`, {Method, Body})
    .then((res) => {
      if (!res.ok) {
        throw new Error();
      }
      return res.json();
    })
    .catch(() => {
      throw new Error(Error);
    });


const getData = () => input(GET_DATA, ERROR_GET);
const sendData = (Body) => input(SEND_DATA, ERROR_SEND, METHOD_POST, Body);

export {getData, sendData};
