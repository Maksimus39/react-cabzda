import type {Meta, StoryObj} from '@storybook/react';
import {Accordion} from './Accordion';
import React, {useState} from "react";
import {action} from '@storybook/addon-actions'


export default {
    component: Accordion,
};


const onChangeHandler = action('onChange')

export const CollapsedAccordion = () => {
    return <Accordion
        titleValue={"Collapsed Accordion"}
        collapsed={true}
        onChange={onChangeHandler}/>
}

export const OpenedAccordion = () => {
    return <Accordion
        titleValue={"Opened Accordion"}
        collapsed={false}
        onChange={() => {
        }}/>
}

export const AccordionDemo = () => {
    const [collapsed, setCollapsed] = useState(false)
    return <Accordion
        titleValue={"Accordion"}
        collapsed={collapsed}
        onChange={() => {
            setCollapsed(!collapsed)
        }}/>
}