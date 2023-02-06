import { Form } from "react-router-dom";
import "../Components/Styles/admin.scss"
export default function Admin() {
    
    return (
        <>
            <h1>Wellcome Boss!</h1>
            <ul className="list">
                <li className="item">Hàng hóa</li>
                <li className="item">Nhân Viên</li>
                <li className="item">Phòng/Bàn</li>
                <li className="item">Menu</li>
                <li className="item">Bill</li>
            </ul>

        </>
    );
}
