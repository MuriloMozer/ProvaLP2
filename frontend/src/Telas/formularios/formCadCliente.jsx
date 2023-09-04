import {Button, Container, Form, Row, Col, FloatingLabel} from "react-bootstrap";

export default function FormCadCliente(props){
    return(
        <Container>
            <Form>
                <Row>
                    <Col>
                    <Form.Group>
                    <FloatingLabel
                            controlId="floatingInput"
                            label="CPF"
                            className="mb-3"
                        >
                        <Form.Control type="text" placeholder="000.000.000-00" id="cpf" name="cpf" required/>
                        </FloatingLabel>
                        <Form.Control.Feedback type="invalid">Informe o CPF!</Form.Control.Feedback>
                    </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Form.Group>
                    <FloatingLabel
                            controlId="floatingInput"
                            label="Nome Completo"
                            className="mb-3"
                        >
                            <Form.Control type="text" placeholder="informe seu nome completo" id="nome" name="nome" required/>
                        </FloatingLabel>
                        <Form.Control.Feedback type="invalid">Informe o nome!</Form.Control.Feedback>
                        </Form.Group>
                        </Col>
                </Row>
                <Row>
                    <Col md={10}>
                    <Form.Group>
                    <FloatingLabel
                            controlId="floatingInput"
                            label="Endereço"
                            className="mb-3"
                        >
                            <Form.Control type="text" placeholder="AV./Rua/Alameda/Viela" id="endereco" name="endereco" required/>
                        </FloatingLabel>
                        <Form.Control.Feedback type="invalid">Informe o nome!</Form.Control.Feedback>
                    </Form.Group>
                    </Col>
                    <Col md={2}>
                        <Form.Group>
                    <FloatingLabel
                            controlId="floatingInput"
                            label="Número"
                            className="mb-3"
                        >
                            <Form.Control type="text" placeholder="Nº" id="numero" name="numero" required/>
                        </FloatingLabel>
                        <Form.Control.Feedback type="invalid">Informe o numero!</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={5}>
                        <Form.Group>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Bairro"
                            className="mb-3"
                        >
                            <Form.Control type="text" placeholder="Bairro" id="bairro" name="bairro" required/>
                        </FloatingLabel>
                        <Form.Control.Feedback type="invalid">Informe o Bairoo!</Form.Control.Feedback>
                        </Form.Group>
                        </Col>
                    <Col md={5}>
                    <Form.Group>
                    <FloatingLabel
                            controlId="floatingInput"
                            label="Cidade"
                            className="mb-3"
                        >
                            <Form.Control type="text" placeholder="Cidade" id="cidade" name="cidade" required/>
                        </FloatingLabel>
                        <Form.Control.Feedback type="invalid">Informe a Cidade!</Form.Control.Feedback>
                    </Form.Group>
                    </Col>
                    <Col md={2}>
                    <FloatingLabel controlId="floatingSelect" label="UF:">
                        <Form.Select aria-label="Unidades Federativas brasileiras">
                            <option value="AC">Acre</option>
                            <option value="AL">Alagoas</option>
                            <option value="AP">Amapá</option>
                            <option value="AM">Amazonas</option>
                            <option value="BA">Bahia</option>
                            <option value="CE">Ceará</option>
                            <option value="DF">Distrito Federal</option>
                            <option value="ES">Espírito Santo</option>
                            <option value="GO">Goiás</option>
                            <option value="MA">Maranhão</option>
                            <option value="MT">Mato Grosso</option>
                            <option value="MS">Mato Grosso do Sul</option>
                            <option value="MG">Minas Gerais</option>
                            <option value="PA">Pará</option>
                            <option value="PB">Paraíba</option>
                            <option value="PR">Paraná</option>
                            <option value="PE">Pernambuco</option>
                            <option value="PI">Piauí</option>
                            <option value="RJ">Rio de Janeiro</option>
                            <option value="RN">Rio Grande do Norte</option>
                            <option value="RS">Rio Grande do Sul</option>
                            <option value="RO">Rondônia</option>
                            <option value="RR">Roraima</option>
                            <option value="SC">Santa Catarina</option>
                            <option value="SP" selected>São Paulo</option>
                            <option value="SE">Sergipe</option>
                            <option value="TO">Tocantins</option>
                        </Form.Select>
                    </FloatingLabel>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                    <FloatingLabel
                            controlId="floatingInput"
                            label="CEP:"
                            className="mb-3"
                        >
                            <Form.Control type="text" placeholder="Bairro/Vila...." id="cep" name="cep"/>
                        </FloatingLabel>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} offset={5} className="flex justify-content-end">
                        <Button type="submit" variant={"primary"}>Cadastrar</Button>
                    </Col>
                    <Col md={6} offset={5}>
                        <Button type="button" variant={"secondary"} onClick={()=>{
                            props.exibirFormulario(false);
                        }}>Voltar</Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}