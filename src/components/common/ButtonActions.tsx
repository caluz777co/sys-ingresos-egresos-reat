import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaSave, FaDownload, FaPaperPlane, FaTrash, FaSignOutAlt } from 'react-icons/fa';

function ButtonActions() {
  return (
    <ButtonGroup aria-label="Basic example">
      <Button variant="primary" title="Guardar"><FaSave /></Button>
      <Button variant="secondary" title="Descargar"><FaDownload /></Button>
      <Button variant="success" title="Enviar"><FaPaperPlane /></Button>
      <Button variant="danger" title="Elimminar"><FaTrash /></Button>
      <Button variant="warning" title="Salir"><FaSignOutAlt /></Button>
    </ButtonGroup>
  );
}

export default ButtonActions;