import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import {muiTheme} from 'storybook-addon-material-ui';
import { Welcome } from "@storybook/react/demo";
import Checkbox from "../components/Checkbox";
import { Input } from "../components/Input";
import { Avatar } from "../components/Avatar";
import { Button } from "../components/ButtonWithKnobs";
import {
  withKnobs,
  text,
  boolean,
  number,
  select
} from "@storybook/addon-knobs/react";
import {InputLabel, InputOptions, InputDefaultValue, PlaceHolderInput, AvatarOptions } from "./consts.js";
import {ButtonSizeLabel, ButtonSizeOptions, ButtonSizeDefault, ButtonTypeOptions, ButtonTypeDefault, ButtobTypeLabel } from "./consts.js";
import { withReadme } from 'storybook-readme';
// import ButtonREADME from '../components/ButtonWithKnobs/Button.md';
const ButtonREADME = 'some text about a **button**'

// const newTheme = {
//     themeName: 'Grey Theme',
//     palette: {
//         primary1Color: '#00bcd4',
//         alternateTextColor: '#4a4a4a',
//         canvasColor: '#616161',
//         textColor: '#bdbdbd',
//         secondaryTextColor: 'rgba(255, 255, 255, 0.54)',
//         disabledColor: '#757575',
//         accent1Color: '#607d8b',
//     },
// };

// const new2Theme = {
//   themeName: 'Orange Theme',
//   palette: {
//       primary1Color: '#00bcd4',
//       alternateTextColor: '#4a4a4a',
//       canvasColor: 'orange',
//       textColor: '#bdbdbd',
//       secondaryTextColor: 'rgba(255, 255, 255, 0.54)',
//       disabledColor: '#757575',
//       accent1Color: '#607d8b',
//   },
// };
const log = console.log;

// BtnStory.addDecorator(muiTheme([newTheme, new2Theme]));
// BtnStory.add('Default', withReadme([ButtonREADME], () => {
//   return <Button onClick={action('clicked')} label="Hello Button"/>;
// }));
const BtnStory = storiesOf("Button with knobs", module);
BtnStory.addDecorator(withKnobs);
BtnStory.add("Button", () => (
  <Button
    isActive={boolean("isActive", true)}
    size={select(ButtonSizeLabel, ButtonSizeOptions, ButtonSizeDefault)}
    hover={boolean("hover", true)}
    type = {select(ButtobTypeLabel, ButtonTypeOptions, ButtonTypeDefault)}
    text={text("text", "Button text")}
  />
));




const InputStoryBook = storiesOf("Input", module);
InputStoryBook.addDecorator(withKnobs);
InputStoryBook.add("Input", () => (
  <Input
    text={text("your place holder", PlaceHolderInput)}
    size={select(InputLabel, InputOptions, InputDefaultValue)}
    hover={boolean("hover", true)}
  />
));

AvatarOptions.forEach(size => {
  storiesOf("Avatar", module).add(size, () => <Avatar size={size} />);
});

storiesOf("checkbox", module).add("with", () => (
  <Checkbox checked={true}>Default</Checkbox>
));
