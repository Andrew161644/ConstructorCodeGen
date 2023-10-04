import { ComponentModule } from "../coreTypes";

export const parseStringToComponentModule = (json: string) => {
  /// TODO: Убрать as.
  const project = JSON.parse(json) as ComponentModule;
  project.childrenElementList = project.childrenElementList.map(el => {
    return {
      ...el,
      //@ts-ignore
      props: {...el.props.props}
    }
  })
  return project;
};
