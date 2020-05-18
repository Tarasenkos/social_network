import React from 'react';
import data from './Users.module.css';
import User from './User/User';

const Users = (props) => {

  let usersList = props.users.map((u) => 
  <User  key={u.id} id={u.id} name={u.name}
    followed={u.followed} status={u.status} 
    userPhoto={u.photos.small}
    followedItems={props.followedItems}
    isAuth={props.isAuth}
    
    unFollow={props.unFollow}
    follow={props.follow}/>)

  let pageCount = Math.ceil(props.totalUsersAmount / 5 / props.pageSize)

  let pages = [];

  for (let i = 1; i <= pageCount; i++) (
    pages.push(i))

  return (
    <div>
      <div className={data.pagination}>
        {pages.map(P => {
          return (
            <span className={P === props.currentPage ? data.selected : data.unselected}
              onClick={() => { props.onPageClick(P) }}>
              {P}
            </span>
          )
        })}

      </div>
      <div className={data.users_container}>

        {usersList}

      </div>
    </div>
  )

}


export default Users;
