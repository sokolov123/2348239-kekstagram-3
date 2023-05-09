let counter;
let commentsShow;
let comments =  [];

const COMMENTS = 5;

const SOCIAL = document.querySelector('.big-picture__social');
const COMMENT_LOAD = SOCIAL.querySelector('.comments_render-loader');
const COMMENT_LIST = SOCIAL.querySelector('.social__comments');

const createComElement = (commentData) => {
  const element = document.createElement('li');
  const Img = document.createElement('img');
  const Text = document.createElement('p');
  element.classList.add('social__comment');
  Img.classList.add('social__picture');
  Img.src = commentData.avatar;
  Img.dataset.id = commentData.id;
  Img.alt = commentData.name;
  Img.width = 35;
  Img.height = 35;
  Text.classList.add('social__text');
  Text.innerText = commentData.message;
  element.prepend(Img);
  element.append(Text);
  return element;
};

const showComments = () => {
  const COMMENT_FRAGMENT = document.createDocumentFragment();
  comments
    .slice(commentsShow, commentsShow + COMMENTS)
    .reduce((item, comment) => {
      COMMENT_FRAGMENT.appendChild(createComElement(comment));
      counter++;
    }, counter);
  COMMENT_LIST.appendChild(COMMENT_FRAGMENT);
  SOCIAL.querySelector('.social__comment-count').innerHTML = `${counter} из <span class='comments-count'>${comments.length}</span> комментариев`;
  if(counter >= comments.length){
    COMMENT_LOAD.classList.add('hidden');
  }else{
    COMMENT_LOAD.classList.remove('hidden');
  }
};

const NewComments = (evt) => {
  evt.preventDefault();
  commentsShow += COMMENTS;
  showComments();
};

const evntComment = () => {
  COMMENT_LOAD.removeEventListener('click',NewComments);
};

const renderComment = (picture) => {
  comments = picture.comments;
  commentsShow = counter = 0;
  COMMENT_LIST.innerHTML = '';
  showComments();

  COMMENT_LOAD.addEventListener('click',NewComments);

};

export {renderComment, evntComment};
