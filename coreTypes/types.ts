import { BaseTypes } from "./basePropsTypes";
import { ButtonProps } from "./buttonTypes";
import { LayoutElementPropsStyles } from "./layoutTypes";

export type Values<T extends Record<string | number | symbol, unknown>> =
  T[keyof T];
export const isOfType =
  <TargetType>(boundary: readonly TargetType[]) =>
  (toTest: unknown): toTest is TargetType =>
    boundary.some((b) => b === toTest);

// Существует два типа элементов, элементы формы и группирующие панели
// например Layout - пока только один, но если в консте будет что еще группирующие, то будем расширять FormGroupsType
export const ElementTypes = {
  FormGroups: "FormGroups",
  FormElement: "FormElement",
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type ElementTypes = Values<typeof ElementTypes>;

// Виды группирующих панелей
export const FormGroupsTypes = {
  Layout: "Layout",
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type FormGroupsTypes = Values<typeof FormGroupsTypes>;

// Виды обычных элементов формы ввода
export const FormElementTypes = {
  Button: "Button",
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type FormElementTypes = Values<typeof FormElementTypes>;

export interface IGroupElement extends IUnion {
  id: string;
  parentId?: string;
  type: FormGroupsTypes;
  isOuter: boolean;
  props: GroupElementProps;
}

export interface ILayoutElement extends IGroupElement {
  props: LayoutElementPropsStyles;
}

export type IFormElement<T extends FormElementTypes = FormElementTypes> =
  IUnion & {
    id: string;
    parentId?: string;
    type: T;
    props: T extends "Button" ? ButtonProps : {};
  };

export interface IUnion {
  id: string;
  type: FormElementTypes | FormGroupsTypes;
}

// Все Union пропсы для FormElement
export type FormElementProps = ButtonProps;

// Все Union пропсы для GroupElement
export type GroupElementProps = LayoutElementPropsStyles;

// По мере добавление новых группирующих элементов сюда будем добавлять новые объединения
export type GroupElementUnion = ILayoutElement;

/// По мере расширения сюда подем дописывать новые объединения
export type UnionProps = (FormElementProps | GroupElementProps) & {
  filled?: fillType;
};

export type fillType = "default" | "filled";
export interface BaseProps {
  className: string;
  baseProps: BaseTypes;
}

export interface ISelectedElement {
  elementId: string;
  elementType: FormGroupsTypes | FormElementTypes;
}

export interface IPageOfLayout {
  id: string;
  name: string;
}

export interface DictionaryNum<T> {
  [id: number]: T | undefined;
}

export interface Dictionary<T> extends DictionaryNum<T> {
  [id: string]: T | undefined;
}

export interface EntityState<T> {
  ids: (string | number)[];
  entities: Dictionary<T>;
}

export interface IFormConstructor extends IHistory {
  allElements: EntityState<IFormElement | IGroupElement>;
  selectedElement: ISelectedElement | null;
  selectedElementProps: UnionProps | null;
  draggableElement: IFormElement | IGroupElement | null;

  pages: IPageOfLayout[];
  numberOfPages: number;
  selectedPageId: string;
}

//TODO определить ипнтерфейс
interface IHistory {
  history: any;
}

export interface Filled {
  filled?: boolean;
}
