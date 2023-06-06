import { useEffect, useState } from "react"
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const MyForm = (props) => {

    const { uyeler, setUyeler, editId } = props;

    const bosData = {
        firstName: "",
        lastName: "",
        email: "",
        position: ""
    }

    const [uye, setUye] = useState(bosData)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUye({ ...uye, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (editId > 0) {
            const eskiUye = uyeler.find(item => item.id == editId)
            eskiUye.firstName = uye.firstName
            eskiUye.lastName = uye.lastName
            eskiUye.email = uye.email
            eskiUye.position = uye.position
            setUyeler([...uyeler])
        }
        else {
            const yeniUye = { ...uye, id: (uyeler.length + 1) }
            setUyeler([...uyeler, yeniUye])
        }

        setUye(bosData)
    }

    useEffect(() => {
        if (editId >= 1) {
            setUye(uyeler[editId - 1])
        }
    }, [editId]);

    return (
        <Form>
            <FormGroup>
                <Label for="firstName">
                    Name
                </Label>
                <Input
                    id="firstName"
                    name="firstName"
                    placeholder="İsim giriniz.."
                    type="text"
                    value={uye.firstName}
                    onChange={handleChange}
                />
            </FormGroup>
            <FormGroup>
                <Label for="lastName">
                    Surname
                </Label>
                <Input
                    id="lastName"
                    name="lastName"
                    placeholder="Soyisim giriniz.."
                    type="text"
                    value={uye.lastName}
                    onChange={handleChange}
                />
            </FormGroup>
            <FormGroup>
                <Label for="email">
                    Email
                </Label>
                <Input
                    id="email"
                    name="email"
                    placeholder="İsim giriniz.."
                    type="email"
                    value={uye.email}
                    onChange={handleChange}
                />
            </FormGroup>
            <FormGroup>
                <Label for="position">
                    Position
                </Label>
                <Input
                    id="position"
                    name="position"
                    placeholder="Pozisyon giriniz.."
                    type="text"
                    value={uye.position}
                    onChange={handleChange}
                />
            </FormGroup>
            <Button onClick={handleSubmit}>
                Gönder
            </Button>
        </Form>
    )
}
export default MyForm;