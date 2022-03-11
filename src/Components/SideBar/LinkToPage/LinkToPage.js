import './LinkToPage.scss';
import { AiOutlineDashboard } from "react-icons/ai";
const LinkToPage = ({ logo , name }) => {
    return (
        <div class="current-menu-item" >
            <div class="flex items-center">
                
                <p class="side-menu-name">{ name }</p>
            </div>
        </div>
    );
}

export default LinkToPage;