import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Divider, Form, Input, Select } from 'antd';
import { useForm } from 'antd/es/form/Form';
import React from 'react';

const { Option } = Select;

const InputForm = () => {
  const [form] = useForm();

  return (
    <Form form={form} layout="vertical">
      <Form.List name="items">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <div key={key} className="flex flex-row items-center mb-2">
                <div className="grid grid-cols-6 w-full gap-4">
                  <Divider className="col-span-6">Item N°{key + 1}</Divider>

                  <Form.Item
                    {...restField}
                    name={[name, 'carBrand']}
                    className="col-span-2"
                    rules={[
                      {
                        required: true,
                        message: 'Debe seleccionar una marca de auto',
                      },
                    ]}
                    label="Marca de Auto"
                  >
                    <Select placeholder="Seleccione una marca">
                      <Option value="toyota">Toyota</Option>
                      <Option value="honda">Honda</Option>
                      <Option value="ford">Ford</Option>
                      {/* Agrega más opciones según sea necesario */}
                    </Select>
                  </Form.Item>

                  <Form.Item
                    {...restField}
                    name={[name, 'carType']}
                    className="col-span-2"
                    rules={[
                      {
                        required: true,
                        message: 'Debe seleccionar un tipo de vehículo',
                      },
                    ]}
                    label="Tipo de Vehículo"
                  >
                    <Select placeholder="Seleccione un tipo">
                      <Option value="sedan">Sedán</Option>
                      <Option value="suv">SUV</Option>
                      <Option value="truck">Camión</Option>
                      {/* Agrega más opciones según sea necesario */}
                    </Select>
                  </Form.Item>

                  <Form.Item
                    {...restField}
                    name={[name, 'price']}
                    className="col-span-2"
                    rules={[
                      {
                        required: true,
                        message: 'Debe ingresar el precio',
                      },
                    ]}
                    label="Precio"
                  >
                    <Input placeholder="Precio" type="number" />
                  </Form.Item>
                </div>
                <MinusCircleOutlined
                  className="ml-2 text-lg text-red-600"
                  onClick={() => remove(name)}
                />
              </div>
            ))}
            <Form.Item>
              <Button
                className="rounded-md text-white"
                onClick={() => add()}
                icon={<PlusOutlined />}
                type="primary"
              >
                Añadir Item
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
    </Form>
  );
};

export default InputForm;
