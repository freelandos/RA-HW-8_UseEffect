import { FC, useState } from "react";
import { IUser, ListProps } from "../models";
import { Details } from "./Details";

export const List: FC<ListProps> = (props) => {
  const { users } = props;
  const [selectedUser, setSelectedUser] = useState<IUser>();

  return (
    <>
      <ul className="users-list">
        {users.map(user => (
          <li
            key={user.id}
            onClick={() => setSelectedUser(user)}
            className={`user${user.id === selectedUser?.id ? " selected" : ""}`}
          >
            {user.name}
          </li>
        ))}
      </ul>
      { selectedUser
        ? <Details info={selectedUser} />
        : null
      }
    </>
  )
}
