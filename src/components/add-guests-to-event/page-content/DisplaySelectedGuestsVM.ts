import { useState } from "react";
import { User } from "../../../models/User";

const useDisplaySelectedGuestsViewModel = (users: User[]) => {
  const [selecterUserList, setSelectedUserList] = useState<User[]>(users);

  const onDeleteClick = (userId: number) => {
    const copy = selecterUserList;
    setSelectedUserList(copy.filter(x => x.id !== userId))
  }

  return {selecterUserList, onDeleteClick};
};

export default useDisplaySelectedGuestsViewModel;
