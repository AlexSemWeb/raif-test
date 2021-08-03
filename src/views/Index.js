import React from 'react';
import {
    Groups,
    Card,
    FormField,
    InputPhone,
    Button
} from "vienna-ui";

function Index() {
    const [value, setValue] = React.useState('');
    const handleChange = React.useCallback((e, data) => {
        setValue(data.value);
    });
    return (
        <div>
            <Card
                title="Введите номер телефона"
                footer={
                    <Groups justifyContent="flex-end">
                        <Button design="accent">
                            Далее
                        </Button>
                    </Groups>
                }
            >
                <Groups design="vertical">
                    <FormField style={{ width: "100%" }}>
                        <FormField.Label>Мобильный телефон</FormField.Label>
                        <FormField.Content>
                            <InputPhone value={value} design={"material"} onChange={handleChange}/>
                            <FormField.Message color='critical'>Предупреждение</FormField.Message>
                        </FormField.Content>
                    </FormField>
                </Groups>
            </Card>
        </div>
    );
}

export default Index;