import { FC } from "react";
import { User } from "./api";
import './UserList.css';

interface Props {
  users?: User[];
  selectedIds?: string[];
  onSelect?: (ids: string[]) => {}
}

const UserList: FC<Props> = ({ users = [], selectedIds = [], onSelect}) => {
  return (
    <div className="UserList">
      {/* TODO: render list of users with checkboxes */}
    </div>
  );
};

export default UserList;
