import { Table } from "reactstrap";

const Listele = (props) => {

    const { uyeler, handleEdit } = props;

    return (
        <Table striped>
            <thead>
                <tr>
                    <th>
                        #
                    </th>
                    <th>
                        İsim
                    </th>
                    <th>
                        Soyisim
                    </th>
                    <th>
                        Mail
                    </th>
                    <th>
                        Pozisyon
                    </th>
                    <th>
                        Düzenle
                    </th>
                </tr>
            </thead>
            <tbody>
                {uyeler.map(uye => (
                    <tr>
                        <th scope="row">
                            {uye.id}
                        </th>
                        <td>
                            {uye.firstName}
                        </td>
                        <td>
                            {uye.lastName}
                        </td>
                        <td>
                            {uye.email}
                        </td>
                        <td>
                            {uye.position}
                        </td>
                        <td>
                            <button onClick={() => handleEdit(uye.id)}>
                                Düzelt
                            </button>
                        </td>
                    </tr>
                ))}

            </tbody>
        </Table>
    )
}

export default Listele;