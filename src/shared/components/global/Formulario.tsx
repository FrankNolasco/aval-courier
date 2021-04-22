import { Button, Card, Input, Switch } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { Toast } from "primereact/toast";
import FormField from "../atom/FormField";
import CascaderForm from "../atom/CascaderForm";
import { useHistory } from "react-router";
const dateFormat = "dd/mm/yy";
export interface IInputPayload {
  name: string;
  type:
    | "input"
    | "dropdown"
    | "calendar"
    | "search"
    | "cascader"
    | "dropdown-prime"
    | "switch";
  optionsDropdown?: any[];
  optionLabel?: string;
  optionValue?: string;
  customProps?: object;
  setOptionsDropdown?: Function;
  value?: any;
  setValue?: Function;
  required?: boolean;
  dropdownDependecyName?: string;
  defaultValue?:any
}
interface FormularioProps {
  inputs: IInputPayload[];
  submitAction: Function;
  submitLabel?: string | JSX.Element;
  title?: string;
  getValue?: Function;
  descripcions?: JSX.Element;
  extra?: JSX.Element;
  elementType?: "row" | "column";
  onCancel? : Function;
  loading? : boolean;
}
interface formControlProps {
  control: IInputPayload;
  setValue: Function;
  getValue?: Function;
}
export const procesarLabel = (label: string, isSwitch: boolean) => {
  const str = label
    .replace("Id", "")
    .replace("_", " ")
    .replace("_", " ")
    .replace("_", " ")
    .replace(/([a-z])([A-Z])/g, "$1 $2");
  return `${isSwitch ? "¿" : ""}${str}${isSwitch ? "?" : ""} :`;
};
const FormControl = ({ control, setValue, getValue }: formControlProps) => {
  const [dropdownValue, setDropdownValue] = useState<any>(control.defaultValue);
  switch (control.type) {
    case "input":
      return (
        <Input
          defaultValue = {control.defaultValue}
          onChange={(e) => {
            setValue(control.name, e.target.value);
          }}
          {...control.customProps}
        />
      );
    case "dropdown":
      return (<div></div>);
    case "dropdown-prime":
      return (
        <Dropdown
          style={{ borderColor: "#d9d9d9", width: "100%" }}
          value={dropdownValue}
          optionValue={control.optionValue}
          options={control.optionsDropdown}
          optionLabel={control.optionLabel}
          onChange={({ target }) => {
            setDropdownValue(target.value);
            setValue(control.name, target.value);
          }}
          {...control.customProps}
        />
      );
    case "calendar":
      return (
        <Calendar
          dateFormat={dateFormat}
          className="calendar-control"
          onChange={(e) => {
            setValue(control.name, e.target.value);
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
          defaultValue={control.defaultValue}
          required={
            typeof control.required === "undefined" ? false : control.required
          }
          {...control.customProps}
        />
      );
    case "cascader":
      return (
        <CascaderForm
          onChange={(e: any) => setValue(control.name, e.value)}
          options={control.optionsDropdown ? control.optionsDropdown : []}
          {...control.customProps}
        />
      );
    case "switch":
      return (
        <div className="w-100">
          <Switch
            defaultChecked={control.defaultValue}          
            checkedChildren="SI"
            unCheckedChildren="NO"
            onChange={(checked) => {
              typeof control.setValue === "function"
                ? control.setValue(checked)
                : setValue(control.name, checked);
              if (control.dropdownDependecyName) {
                setValue(control.dropdownDependecyName, undefined);
              }
            }}
            {...control.customProps}
          />
        </div>
      );
    default:
      return <></>;
  }
};

function Formulario({
  inputs,
  submitAction,
  submitLabel = (
    <span>
      {" "}
      <i className="fa fa-save" style={{ width: 25 }}></i> Guardar
    </span>
  ),
  title,
  getValue,
  descripcions,
  extra,
  elementType = "row",
  onCancel,
  loading = false,
}: FormularioProps) {
  const { register, handleSubmit, setValue } = useForm();
  const t = useRef<any>(null);
  const { goBack } = useHistory()
  const onSubmit = (data: any) => submitAction(data);

  useEffect(() => {
    inputs.forEach((input) => {
      register(input.name, {
        required:
          typeof input.required === "undefined" ? false : input.required,
      });
    });
    return () => {};
  }, [inputs, register]);

  return (
    <Card title={title ? <span className="form-title">{title}</span> : null}>
      {descripcions ? descripcions : <></>}
      <form
        onSubmit={handleSubmit(
          onSubmit,
          () =>
            t &&
            t.current &&
            t.current!.show({
              severity: "warn",
              summary: "Formulario no valido",
              detail: "Por favor, llena todos los campos requeridos",
            })
        )}
      >
        <div className="form-inputs">
          {inputs.map((input, idx) => (
            <FormField
              key={idx}
              direction={elementType}
              required={input.required}
              fieldName={input.name}
              isCheker={input.type === "switch"}
            >
              <FormControl
                control={input}
                setValue={setValue}
                getValue={getValue}
              />
            </FormField>
          ))}
        </div>
        {extra ? extra : <></>}
        <div className="form-footer">
          <Button htmlType="button" type="text" className="form-button" onClick={()=> {
            typeof onCancel === "function" ? onCancel() : goBack()
          }}>
            Cancelar
          </Button>
          <Button htmlType={loading ? "button" : "submit"} type="primary" className="form-button" loading={loading}>
            {submitLabel}
          </Button>
        </div>
      </form>
      <Toast ref={t} />
    </Card>
  );
}

export default Formulario;
