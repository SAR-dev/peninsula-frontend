import { useState } from 'react';
import { App, Page, Navbar, List, ListItem, Checkbox, Block, Button } from 'konsta/react';

export default function MyApp() {
  const [theme, setTheme] = useState<"ios" | "material">('ios');
  return (
    <App theme={theme} dark={true}>
      <Page>
        <Navbar title="My App" />

        <List strongIos outlineIos>
          <ListItem
            label
            media={
              <Checkbox
                checked={theme === 'ios'}
                onChange={() => setTheme('ios')}
              />
            }
            title="iOS Theme"
          />
          <ListItem
            label
            media={
              <Checkbox
                checked={theme === 'material'}
                onChange={() => setTheme('material')}
              />
            }
            title="Material Theme"
          />
        </List>
        <Block strongIos outlineIos>
          <p>Hello, this is my awesome App</p>
        </Block>
        <Block strongIos outlineIos className="flex space-x-4">
          <Button className="k-color-brand-red">Button 1</Button>
          <Button>Button 2</Button>
        </Block>
      </Page>
    </App>
  );
}
