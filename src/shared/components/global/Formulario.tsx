import { Button, Card, Cascader, DatePicker, Input, Select } from "antd";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import moment from "moment";
interface IInputPayload {
  name: string;
  type: "input" | "dropdown" | "calendar" | "search" | "cascader";
  optionsDropdown?: any[];
  optionLabel?: string;
  optionValue?: string;
  customProps?: object;
}

interface FormularioProps {
  inputs: IInputPayload[];
  submitAction: Function;
  submitLabel?: string | JSX.Element;
  title: string;
}
const dateFormat = "YYYY/MM/DD";

interface formControlProps {
  control: IInputPayload;
  setValue: Function;
}

const FormControl = ({ control, setValue }: formControlProps) => {
  const { Option } = Select;

  switch (control.type) {
    case "input":
      return (
        <Input
          onChange={(e) => {
            setValue(control.name, e.target.value);
          }}
          {...control.customProps}
        />
      );
    case "dropdown":
      return (
        <Select
          className="select-options"
          onChange={(value) => setValue(control.name, value)}
          {...control.customProps}
        >
          {control.optionsDropdown?.map((option) => (
            <Option value={option[control.optionValue!]}>
              {option[control.optionLabel!]}
            </Option>
          ))}
        </Select>
      );
    case "calendar":
      return (
        <DatePicker
          defaultValue={moment(new Date(), dateFormat)}
          format={dateFormat}
          onChange={(date, dateString) => {
            setValue(control.name, { date, dateString });
          }}
          {...control.customProps}
        />
      );
    case "search":
      return (
        <Input.Search
          onChange={(e) => {
            setValue(control.name, e.target.value);
          }}
          {...control.customProps}
        />
      );
      case "cascader":
        return (
          <Cascader
            options = {control.optionsDropdown ? control.optionsDropdown: []}
            changeOnSelect
            bordered
            {...control.customProps}
          />
        );
    default:
      return <></>;
  }
};

function Formulario({
  inputs,
  submitAction,
  submitLabel = "GUARDAR",
  title,
}: FormularioProps) {
  const { register, handleSubmit, setValue } = useForm();
  const onSubmit = (data: any) => submitAction(data);

  useEffect(() => {
    inputs.forEach((input) => {
      register(input.name);
    });
    return () => {};
  }, [inputs, register]);

  return (
    <Card title={<span className="form-title">{title}</span>}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-inputs">
          {inputs.map((input, idx) => (
            <div className="form-input-group" key={idx}>
              <label>{input.name.replace("_", " ").replace("id", "")} : </label>
              <FormControl key={idx} control={input} setValue={setValue} />
            </div>
          ))}
        </div>
        <Button htmlType="submit">{submitLabel}</Button>
      </form>
    </Card>
  );
}

export default Formulario;
