import useBebidas from "../hooks/useBebidas"
import  {Row} from "react-bootstrap"
import Bebida from "./Bebida"

const ListadoBebidas = () => {

    const { bebidas } = useBebidas()
    return (
        <Row>
            {bebidas.map(b=>(
                <Bebida
                    key={b.idDrink}
                    bebida = {b}
                />
            ))}
        </Row>
    )
}

export default ListadoBebidas
