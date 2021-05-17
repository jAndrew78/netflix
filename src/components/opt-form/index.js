import React from 'react';
import { Container, Input, Button, Text } from './styles/opt-form';


export default function OptForm({ children, ...restProps }) {    // get children, then allow any other props to be passed after
    return <Container {...restProps}>{ children }</Container>;
}

OptForm.Input = function OptFormInput({ ...restProps }) {
    return <Input {...restProps} />;
}

OptForm.Button = function OptFormButton({ children, ...restProps }) {
    return <Button {...restProps}>{ children }</Button>;
}

OptForm.Text = function OptFormText({ children, ...restProps }) {
    return <Text {...restProps}>{ children }</Text>;
}

