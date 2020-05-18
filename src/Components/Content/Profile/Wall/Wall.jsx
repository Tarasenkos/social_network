import React from 'react';
import Post from './Post/Post';
import NewPostContainer from './NewPost/NewPostContainer';
import style from './Wall.module.css';


const Wall = (props) => {
  
  
  let Posts = props.profilePage.PostList.map((P) => <Post text={P.post} key={P.post} />)


  return (
    (!props.isAuth) ||
    (<div className={style.wall_container}>
      

        <NewPostContainer {...props}/>
        
      
      <div className={style.posts_wrap}>
      {Posts}
      </div>
        
      
    </div>)
  );
}

export default Wall;
