import React from 'react'
import { Button, Form, Row, Col } from "react-bootstrap"
import useCategorias from '../hooks/useCategorias'


const Formulario = () => {

    const {categorias} = useCategorias()
    return (
        <Form>
            <Row>
                <Col md={6}>
                    <Form.Group className='mb-3'>
                        <Form.Label htmlFor='nombre'>Nombre de la bebida</Form.Label>
                        <Form.Control
                            id='nombre'
                            type='text'
                            placeholder='Ej: Tequila, Vodka, etc'
                            name='nombre'
                        />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group className='mb-3'>
                        <Form.Label htmlFor='categoria'>Categoría de la bebida</Form.Label>
                        <Form.Select 
                            id='categoria'
                            name='categoria'
                        >
                            <option>-- Selecciona una categoría --</option>
                            {categorias.map(c =>(
                                <option key={c.strCategory} value={c.strCategory}>{c.strCategory}</option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>
            <Row  className='justify-content-end'>
                <Col md={3}>
                    <Button
                        variant='danger'
                        className='text-uppercase w-100'
                    >
                        Buscar bebidas
                    </Button>
                </Col>
            </Row>
        </Form>
    )
}

export default Formulario
