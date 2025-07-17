import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Container } from 'react-bootstrap';
import { useState } from 'react';

type Props = {
    onDodaj: (nazwa: string, wpis: string) => void;
};

function Wpis({ onDodaj }: Props) {
    const [nazwa, setNazwa] = useState('');
    const [wpis, setWpis] = useState('');
    const [nazwaError, setNazwaError] = useState('');
    const [wpisError, setWpisError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        let valid = true;

        if (nazwa.trim() === '') {
            setNazwaError('Podaj nazwę użytkownika');
            valid = false;
        } else {
            setNazwaError('');
        }

        if (wpis.trim() === '') {
            setWpisError('Wpis nie może być pusty');
            valid = false;
        } else {
            setWpisError('');
        }

        if (valid) {
            onDodaj(nazwa.trim(), wpis.trim());
            setNazwa('');
            setWpis('');
        }

    };

    return (
        <Container className='Wpis-custom shadow-sm m-5 position-relative'>
            <div className="tlo-custom position-absolute"></div>

            <div className="position-relative d-flex flex-column p-3" style={{ maxWidth: '600px' }}>

                <h2 className="text-center mb-3">Przyłącz się do dyskusji...</h2>

                <div className="d-flex flex-column">
                    <FloatingLabel controlId="floatingInput" label="Nazwa użytkownika" className="mb-3">
                        <Form.Control
                            type="text"
                            placeholder="Nickname"
                            value={nazwa}
                            isInvalid={!!nazwaError}
                            onChange={(e) => setNazwa(e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">
                            {nazwaError}
                        </Form.Control.Feedback>
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingTextarea2" label="Napisz coś">
                        <Form.Control
                            as="textarea"
                            placeholder="Post"
                            style={{ height: '100px' }}
                            value={wpis}
                            isInvalid={!!wpisError}
                            onChange={(e) => setWpis(e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">
                            {wpisError}
                        </Form.Control.Feedback>
                    </FloatingLabel>
                </div>

                <Button
                    type="submit"
                    className="button-custom mt-3"
                    onClick={handleSubmit}
                >
                    Wyślij
                </Button>
            </div>
        </Container>
    )
}
export default Wpis;