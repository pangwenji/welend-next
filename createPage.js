const fs = require("fs");

function pageIndex(pageName) {
return `import ${pageName} from "../../../app/containers/static/${pageName.toLowerCase()}";

export default ${pageName};
`;
}

function containersIndex(pageName) {
return `import ${pageName} from "./${pageName}";

export default ${pageName};
`;
}

function containersPage(pageName) {
return `import * as React from "react";
import { InjectedTranslateProps, translate } from "react-i18next";
import staticPage, { StaticPageProps } from "../../../hocs/staticPage";

interface State {
}

interface StateProps {
}

interface OwnProps {
}

export interface DispatchProps {
}

type Props = OwnProps & StateProps & DispatchProps & InjectedTranslateProps & StaticPageProps;

class ${pageName} extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  public render(): any {
    return (
      <div>${pageName}</div>
    );
  }
}

export default translate()(
  staticPage(${pageName}),
);
`;
}

function createPage(pageName) {
  if (!fs.existsSync(`./pages/products/${pageName.toLowerCase()}/index.ts`)) {
    fs.mkdirSync(`./pages/products/${pageName.toLowerCase()}`);
    fs.writeFileSync(`./pages/products/${pageName.toLowerCase()}/index.ts`, pageIndex(pageName));
  }
  if (!fs.existsSync(`./app/containers/static/${pageName.toLowerCase()}/index.ts`)) {
    fs.mkdirSync(`./app/containers/static/${pageName.toLowerCase()}`);
    fs.writeFileSync(`./app/containers/static/${pageName.toLowerCase()}/index.ts`, containersIndex(pageName));
  }
  if (!fs.existsSync(`./app/containers/static/${pageName.toLowerCase()}/${pageName}.tsx`)) {
    fs.writeFileSync(`./app/containers/static/${pageName.toLowerCase()}/${pageName}.tsx`, containersPage(pageName));
  }
}

const args = process.argv.slice(2);
const pagesName = args;

pagesName.forEach(function(pageName) {
  createPage(pageName);
});