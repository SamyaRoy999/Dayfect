import { IoIosHome } from "react-icons/io";
import { IoMdListBox } from "react-icons/io";
import { IoCheckbox } from "react-icons/io5";
import { LuListTodo } from "react-icons/lu";
const menuItem = [
  {
    id: 1,
    title: "All Tasks",
    icon: IoIosHome,
    link: "/",
  },
  {
    id: 2,
    title: "Important",
    icon: IoMdListBox,
    link: "/important",
  },
  {
    id: 3,
    title: "Completed",
    icon: IoCheckbox,
    link: "/completed",
  },
  {
    id: 4,
    title: "Do It Now",
    icon: LuListTodo,
    link: "/incomplete",
  },
];

export default menuItem;
