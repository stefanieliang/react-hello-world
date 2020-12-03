import React from 'react'

import {
    Form,
    Input,
    Button
} from 'antd'

export default class aIndex extends React.Component {

    render() {
        return (
            <div>antd 的 from
                <Form>
                    <Input></Input>
                </Form>
                <Button>提交</Button>
            </div>
        )
    }

}