import * as fs from "fs";

import { SourceParser } from './sourceParser';

export const createSpec: Function = (sourceFilename: string, specFilename: string): void => {
  const parser: SourceParser = new SourceParser(sourceFilename);

  const className: string = parser.className;

  const importFilename: string =
    sourceFilename.split('/').reverse()[0].replace(/\.ts$/, '');

  const classNameWithSpaces: string =
    className.replace(/[A-Z]/g, ' $&').replace(/^ /, '');

  const underTestVariableName: string =
    `${importFilename.replace(/^.*\./, '').replace(/^.*-/, '')}UnderTest`;

  const nullConstructorArguments: string =
    Array(parser.constructorParameterCount).fill('null').join(', ');

  const output: string =
    `import { ${className} } from './${importFilename}';

      export function main() {
        describe('${classNameWithSpaces}', () => {
          let ${underTestVariableName}: ${className};

          beforeEach(() => {
            ${underTestVariableName} = new ${className}(${nullConstructorArguments});
          });

          it('has no tests!', () => {
            expect(true).toBe(true);
          });
        });
      }
    `.replace(/^      /gm, '');  // Undo the output's 6-space indents.

  fs.writeFileSync(specFilename, output);
}
