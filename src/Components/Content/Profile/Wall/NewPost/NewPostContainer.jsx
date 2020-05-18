import React from 'react';
import NewPostReduxForm from './NewPostReduxForm';
import style from './NewPost.module.css'
import { reset } from 'redux-form';



const NewPostContainer = (props) => {

  let AddPost = (values, dispatch) => {

    props.addPost(values.newPostMessage);

    dispatch(reset('NewPostRedux'));

  }

  return (
    <div className={style.newPostContainer}>
      <div>
        <div>
          <NewPostReduxForm onSubmit={AddPost}
          myAvatar={props.myAvatar} />
        </div>
      </div>
    </div>
  )
}

export default NewPostContainer;
